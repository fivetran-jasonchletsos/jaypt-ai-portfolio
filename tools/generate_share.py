import json, html, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://fivetran-jasonchletsos.github.io/jaypt-ai-portfolio/"
txt = (ROOT / "data.js").read_text(encoding="utf-8")
start = txt.index("[", txt.index("const WORKS"))
works, _ = json.JSONDecoder().raw_decode(txt[start:])
out = ROOT / "share"
for old in out.glob("*.html"):
    old.unlink()
out.mkdir(exist_ok=True)
TPL = """<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t} - jaypt.ai</title>
<meta name="description" content="{d}">
<link rel="canonical" href="{u}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="jaypt.ai">
<meta property="og:url" content="{u}">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:image" content="{i}">
<meta property="og:image:width" content="{w}">
<meta property="og:image:height" content="{h}">
<meta property="og:image:alt" content="{t}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{t}">
<meta name="twitter:description" content="{d}">
<meta name="twitter:image" content="{i}">
<meta http-equiv="refresh" content="0; url={r}">
<script>location.replace("{r}")</script>
</head><body style="background:#0b0b0e;color:#f3f1ee;font-family:sans-serif;padding:2rem">
<p>Opening <a href="{r}" style="color:#ff7ad9">{t}</a>.</p>
</body></html>
"""
urls = [BASE]
for w in works:
    kind = "video" if w["type"] == "video" else "artwork"
    t = html.escape(w["title"], quote=True)
    d = html.escape((w.get("desc") or f'{w["title"]}, {kind} from the {w["collection"]} collection') + " By jaypt.ai.", quote=True)
    u = f'{BASE}share/{w["id"]}.html'
    (out / f'{w["id"]}.html').write_text(TPL.format(t=t, d=d, u=u, i=BASE + w["thumb"], w=w["w"], h=w["h"], r=f'{BASE}#{w["id"]}'), encoding="utf-8")
    urls.append(u)
sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
sm += [f"<url><loc>{x}</loc></url>" for x in urls]
sm.append("</urlset>")
(ROOT / "sitemap.xml").write_text("\n".join(sm) + "\n", encoding="utf-8")
print(len(works), "share pages written")
