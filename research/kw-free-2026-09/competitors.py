"""Read competitor sitemaps and list their URL slugs (topics they target). Free."""
import json, re, pathlib, requests
from urllib.parse import urlparse

OUT = pathlib.Path(__file__).parent
SITES = ["dm4re.com", "insomniacs.in", "aajneeti.social", "rankbydigital.com", "gtftechnologies.com",
         "scaleacres.com", "digiestate.in", "leadbuddy.in", "pitchpinemedia.com", "iiidigimedia.com",
         "modifyed.in", "bloomagency.in"]
H = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130 Safari/537.36"}


def get(url):
    try:
        r = requests.get(url, headers=H, timeout=15)
        return r.text if r.status_code == 200 else ""
    except Exception:
        return ""


def locs(xml):
    return re.findall(r"<loc>\s*(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?\s*</loc>", xml)


result = {}
for site in SITES:
    urls, seen = [], set()
    queue = []
    robots = get(f"https://{site}/robots.txt")
    queue += re.findall(r"(?im)^sitemap:\s*(\S+)", robots)
    queue += [f"https://{site}/sitemap_index.xml", f"https://{site}/sitemap.xml", f"https://www.{site}/sitemap.xml"]
    while queue and len(seen) < 40:
        sm = queue.pop(0)
        if sm in seen:
            continue
        seen.add(sm)
        xml = get(sm)
        for loc in locs(xml):
            if loc.endswith(".xml") or "sitemap" in loc.split("/")[-1]:
                if not re.search(r"(image|video|author|tag|category|attachment)", loc):
                    queue.append(loc)
            else:
                urls.append(loc)
    slugs = sorted({urlparse(u).path.strip("/") for u in urls})
    result[site] = slugs
    print(site, len(slugs))
(OUT / "competitors.json").write_text(json.dumps(result, indent=1))
