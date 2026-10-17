"""Autocomplete harvest (gl=in) for the 60-day content plan. Free, no key."""
import json, time, string, requests, pathlib
OUT = pathlib.Path(__file__).parent
URL = "https://suggestqueries.google.com/complete/search"
SEEDS = [
 "real estate marketing plan","real estate marketing strategy","real estate social media","instagram for real estate",
 "real estate reels","real estate content ideas","real estate video marketing","youtube for real estate",
 "real estate brochure","real estate whatsapp message","real estate follow up","real estate sales script",
 "real estate cold calling","site visit real estate","real estate lead management","real estate lead qualification",
 "pre launch real estate","project launch marketing","real estate branding","real estate tagline",
 "real estate slogans","property photography","virtual tour real estate","99acres vs magicbricks",
 "property portal","real estate seo","real estate email marketing","real estate retargeting",
 "real estate marketing budget","cost per lead real estate","rera registration for agents","rera advertisement",
 "rera number","real estate agent license","how to become real estate agent in india","real estate broker commission",
 "real estate sales tips","how to close real estate deals","real estate negotiation","real estate cp",
 "real estate google my business","google business profile real estate","real estate website features","real estate website cost",
 "real estate conversion rate","real estate lead nurturing","whatsapp business api real estate","real estate chatbot whatsapp",
 "ai tools for real estate","chatgpt for real estate","real estate crm free","real estate lead tracking",
 "plot marketing","villa marketing","commercial real estate marketing","luxury real estate marketing",
 "real estate influencer","real estate performance marketing","real estate facebook page","real estate hoarding",
 "real estate newspaper ad","real estate sms marketing","nri real estate marketing","real estate referral",
]
def suggest(q):
    for a in range(3):
        try:
            r = requests.get(URL, params={"client":"firefox","hl":"en","gl":"in","q":q}, timeout=10, headers={"User-Agent":"Mozilla/5.0"})
            if r.status_code == 200: return r.json()[1]
        except Exception: pass
        time.sleep(2+a*3)
    return []
from concurrent.futures import ThreadPoolExecutor
def seed_all(s):
    qs=[s]+[f"{s} {c}" for c in string.ascii_lowercase]+[f"{p} {s}" for p in ("how to","what is","best")]
    out=set()
    for q in qs: out.update(suggest(q))
    return s, sorted(out)
res = dict(ThreadPoolExecutor(12).map(seed_all, SEEDS))
(OUT/"autocomplete.json").write_text(json.dumps(res, indent=1))
for s in []:
    out = set(suggest(s))
    for c in string.ascii_lowercase:
        out.update(suggest(f"{s} {c}")); time.sleep(0.3)
    for p in ("how to","what is","best"):
        out.update(suggest(f"{p} {s}")); time.sleep(0.3)
    res[s] = sorted(out)
    (OUT/"autocomplete.json").write_text(json.dumps(res, indent=1))
allk = sorted({k for v in res.values() for k in v})
(OUT/"autocomplete-all.txt").write_text("\n".join(allk))
print("seeds", len(res), "unique", len(allk))
