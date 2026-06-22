/**
 * Parse NEXT_PUBLIC_FORMSPREE_FORM_ID — accepts a plain ID or full Formspree URL.
 * Returns null when unset or the value is not a recognizable Formspree form ID.
 */
export function parseFormspreeFormId(raw: string | undefined): string | null {
  const trimmed = raw?.trim();
  if (!trimmed) return null;

  const fromUrl = trimmed.match(/formspree\.io\/f\/([a-zA-Z0-9_-]+)/i);
  if (fromUrl) return fromUrl[1];

  if (/^[a-zA-Z0-9_-]+$/.test(trimmed)) return trimmed;

  return null;
}

export function getFormspreeEndpoint(formId: string): string {
  return `https://formspree.io/f/${formId}`;
}

export type FormspreePayload = Record<string, string>;

export function buildFormspreePayload(form: HTMLFormElement): FormspreePayload {
  const data = Object.fromEntries(
    [...new FormData(form).entries()].map(([key, value]) => [key, String(value)]),
  );

  if (data.email && !data._replyto) {
    data._replyto = data.email;
  }

  return data;
}

export async function parseFormspreeError(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as {
      error?: string;
      errors?: Array<{ message?: string; field?: string }>;
    };

    if (body.errors?.length) {
      return body.errors.map((e) => e.message ?? "Validation error").join("; ");
    }

    if (body.error) return body.error;
  } catch {
    // Response body was not JSON — fall through to status text.
  }

  return response.statusText || `HTTP ${response.status}`;
}
