"""Merge keyword ideas from all free sources into one filtered candidate list (<=1000)."""
import json, re, pathlib

D = pathlib.Path(__file__).parent
ideas = {}  # keyword -> set(sources)


def add(k, src):
    k = re.sub(r"\s+", " ", k.lower().strip(" ?.")).strip()
    if k:
        ideas.setdefault(k, set()).add(src)


ac = json.loads((D / "autocomplete.json").read_text())
for v in ac["google"].values():
    for k in v:
        add(k, "autocomplete")
for v in ac["youtube"].values():
    for k in v:
        add(k, "youtube")

txt = (D / "serp-trends-forums.md").read_text(encoding="utf-8")
rel = txt.split("## Related searches")[1].split("Noise to ignore")[0].split("\n", 1)[1]
for k in rel.split("·"):
    add(k, "google-related")
paa = txt.split("## People also ask")[1].split("## Related")[0]
for line in paa.splitlines():
    for q in line.lstrip("- ").split(" / "):
        if q.strip().endswith("?"):
            add(q, "people-also-ask")

# competitor topic phrases (shared by 3+ competitor sites)
for k in ["real estate digital marketing agency", "real estate lead generation services", "real estate seo",
          "real estate seo services", "real estate social media marketing", "real estate ppc", "real estate branding",
          "real estate website development", "real estate remarketing", "real estate marketing company",
          "digital marketing for real estate", "real estate lead generation company", "real estate ppc agency",
          "whatsapp marketing for real estate", "ai in real estate marketing", "real estate video marketing",
          "real estate marketing strategies", "local seo for real estate", "real estate lead generation company in india",
          "facebook ads vs google ads for real estate", "google ads for real estate in india", "verified real estate leads",
          "quality real estate leads", "real estate lead funnel", "real estate influencer marketing",
          "real estate email marketing", "real estate crm services", "virtual tour real estate",
          "real estate digital marketing agency in noida", "real estate digital marketing agency in delhi",
          "real estate digital marketing agency in gurgaon", "real estate lead generation company in lucknow",
          "real estate digital marketing agency in lucknow", "real estate marketing agency in kanpur"]:
    add(k, "competitors")

# pain language from Reddit/Quora, turned into searchable phrases
for k in ["fake real estate leads", "junk leads real estate", "real estate leads quality", "leads but no sales real estate",
          "meta ads real estate leads quality", "facebook lead ads poor quality", "how to increase site visits real estate",
          "site visits real estate", "real estate lead follow up", "whatsapp lead follow up", "real estate leads whatsapp",
          "channel partner google ads", "how to sell unsold flats", "unsold inventory real estate",
          "eoi vs pre launch", "pre launch marketing real estate", "project launch marketing real estate",
          "meta ads for real estate", "meta ads for real estate india", "meta ads for builders", "google ads for builders",
          "real estate ads targeting india", "facebook ads targeting for real estate india", "cost per lead real estate india",
          "real estate cpl", "real estate lead cost india", "whatsapp chatbot for real estate", "ai chatbot for real estate",
          "whatsapp automation for real estate", "real estate whatsapp api", "ai for real estate marketing",
          "ai real estate marketing india", "marketing for builders in india", "builder marketing agency",
          "real estate marketing for developers", "property developer marketing", "marketing agency for builders"]:
    add(k, "forums")

RELEVANT = re.compile(r"real ?estate|property|properties|builder|developer|flat|plot|broker|channel partner|realty|"
                      r"housing|apartment|villa|project launch|rera|eoi|site visit|leads?\b|lead generation|"
                      r"meta ads|facebook ads|google ads|whatsapp|chatbot")
NOISE = re.compile(r"\bpdf\b|download|figma|themeforest|pinterest|course|\bjobs?\b|salary|internship|resume|"
                   r"\bppt\b|github|template free|login|\bnews\b|zillow|realtor|wholesal|\bmls\b|\bidx\b|"
                   r"investors?\b|\busa\b|\buk\b|dubai|canada|australia|texas|florida|california|"
                   r"astrology|scribd|\b202[0-5]\b|meaning in hindi|in hindi|\bquotes?\b|\blogo\b|clipart|png|"
                   r"mumbai|pune|bangalore|bengaluru|hyderabad|chennai|kolkata|ahmedabad|jaipur|indore|surat|"
                   r"builders? market\b|warehouse|south africa|zimbabwe|zambia|nigeria|kenya|philippines|singapore|\bnz\b|london|\bllc\b|\binc\b|near me|contact number|trading hours|specials|\bjob\b|salesforce|hubspot|zoho|"
                   r"patna|bihar|chandigarh|kerala|goa|nagpur|bhopal|thane|vizag|coimbatore|kochi|mohali|dehradun")
MUST_OUR_ANGLE = re.compile(r"market|lead|ads?\b|advertis|promot|sell|buyer|client|landing|website|microsite|"
                            r"chatbot|whatsapp|automation|crm|\bai\b|channel partner|campaign|agency|digital|"
                            r"seo|social media|instagram|facebook|meta|google|eoi|launch|site visit|brochure")

cands = []
for k, src in ideas.items():
    if len(k) > 80 or len(k.split()) > 10 or re.search(r"[^a-z0-9 &'\-/.,]", k):
        continue
    if not RELEVANT.search(k) or NOISE.search(k) or not MUST_OUR_ANGLE.search(k):
        continue
    cands.append((k, sorted(src)))

cands.sort(key=lambda x: (-len(x[1]), x[0]))
cands = cands[:1000]
(D / "candidates.json").write_text(json.dumps(cands, indent=0))
print("ideas", len(ideas), "candidates", len(cands))
