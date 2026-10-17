"""One DataForSEO Google Ads search-volume call (India, English) for candidates.json. ~$0.09."""
import json, os, pathlib, requests

D = pathlib.Path(__file__).parent
cfg = json.load(open(os.path.expanduser("~/.claude.json")))["mcpServers"]["dataforseo"]["env"]
auth = (cfg["DATAFORSEO_USERNAME"], cfg["DATAFORSEO_PASSWORD"])
kws = [k for k, _ in json.loads((D / "candidates.json").read_text())]
r = requests.post("https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live", auth=auth,
                  json=[{"keywords": kws, "location_code": 2356, "language_code": "en", "search_partners": False}],
                  timeout=300).json()
(D / "volumes-raw.json").write_text(json.dumps(r))
t = r["tasks"][0]
print("status", t["status_code"], t["status_message"], "cost", t.get("cost"), "rows", len(t.get("result") or []))
