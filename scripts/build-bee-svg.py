"""Replace the BEE Health Studio mark with a vector of the supplied wordmark."""
from pathlib import Path

import vtracer
from PIL import Image

SRC = Path(
    r"C:\Users\ITS524\.cursor\projects\d-Logesh-Softwares-levyntech\assets"
    r"\c__Users_ITS524_AppData_Roaming_Cursor_User_workspaceStorage_9ba385ebe358a19aa763c320ec0ff437_images_image-667f0bc7-c1e5-454a-ad1f-db6c1a94c9f5.png"
)
OUT = Path(r"D:\Logesh\Softwares\levyntech\public\clients\bee.svg")
PREP = Path(r"D:\Logesh\Softwares\levyntech\public\clients\bee-src.png")

im = Image.open(SRC).convert("RGBA")
px = im.load()
w, h = im.size
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a < 20 or (r > 245 and g > 245 and b > 245):
            px[x, y] = (255, 255, 255, 0)

im = im.crop(im.getbbox())
im = im.resize((im.width * 4, im.height * 4), Image.Resampling.LANCZOS)
im.save(PREP)

vtracer.convert_image_to_svg_py(
    str(PREP),
    str(OUT),
    colormode="color",
    hierarchical="stacked",
    mode="spline",
    filter_speckle=2,
    color_precision=7,
    layer_difference=8,
    corner_threshold=40,
    length_threshold=2.5,
    max_iterations=12,
    splice_threshold=35,
    path_precision=2,
)
text = OUT.read_text(encoding="utf-8")
text = text.replace(
    "<svg ",
    '<svg role="img" aria-label="BEE Health Studio" ',
    1,
)
OUT.write_text(text, encoding="utf-8")
print(OUT.stat().st_size)
