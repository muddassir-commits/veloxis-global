"""Harvest Google (and YouTube) autocomplete suggestions for India. Free, no key.
Output: autocomplete.json  {seed: [suggestions]}  and autocomplete-all.txt (unique list)."""
import json, time, string, requests, pathlib

OUT = pathlib.Path(__file__).parent
URL = "https://suggestqueries.google.com/complete/search"

SEEDS = [
    # agency / service
    "real estate marketing", "real estate digital marketing", "property marketing",
    "real estate marketing agency", "marketing for builders", "builder marketing",
    "real estate developer marketing", "real estate advertising",
    # leads / ads
    "real estate leads", "real estate lead generation", "property leads",
    "leads for builders", "real estate ads", "facebook ads for real estate",
    "meta ads for real estate", "google ads for real estate", "instagram ads for real estate",
    "real estate ad", "property ads",
    # landing pages / websites
    "real estate landing page", "real estate website", "property website",
    "real estate microsite", "builder website",
    # automation
    "real estate chatbot", "whatsapp for real estate", "whatsapp marketing real estate",
    "real estate crm", "real estate automation", "ai for real estate",
    # channel partners / brokers
    "channel partner real estate", "real estate broker marketing", "how to get clients in real estate",
    "how to sell flats", "how to sell plots", "how to get buyers for",
    # cities
    "real estate marketing noida", "real estate marketing lucknow", "real estate marketing kanpur",
    "digital marketing agency kanpur", "digital marketing agency lucknow",
]
QUESTION_PREFIXES = ["how to", "what is", "best", "why", "cost of"]


def suggest(q, ds=None):
    params = {"client": "firefox", "hl": "en", "gl": "in", "q": q}
    if ds:
        params["ds"] = ds
    for attempt in range(3):
        try:
            r = requests.get(URL, params=params, timeout=10,
                             headers={"User-Agent": "Mozilla/5.0"})
            if r.status_code == 200:
                return r.json()[1]
        except Exception:
            pass
        time.sleep(2 + attempt * 3)
    return []


def main():
    results = {}
    queries = []
    for s in SEEDS:
        queries.append(s)
        queries += [f"{s} {c}" for c in string.ascii_lowercase]
    for s in ["real estate marketing", "real estate leads", "real estate ads", "property marketing"]:
        queries += [f"{p} {s}" for p in QUESTION_PREFIXES]
    for i, q in enumerate(queries):
        results[q] = suggest(q)
        time.sleep(0.35)
        if i % 100 == 0:
            print(i, "/", len(queries), flush=True)
    # YouTube autocomplete for the core seeds
    yt = {s: suggest(s, ds="yt") for s in SEEDS}
    (OUT / "autocomplete.json").write_text(json.dumps({"google": results, "youtube": yt}, indent=1))
    uniq = sorted({k for v in results.values() for k in v} | {k for v in yt.values() for k in v})
    (OUT / "autocomplete-all.txt").write_text("\n".join(uniq), encoding="utf-8")
    empty = sum(1 for v in results.values() if not v)
    print("queries", len(queries), "empty", empty, "unique", len(uniq))


if __name__ == "__main__":
    main()
