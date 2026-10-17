import json, datetime as dt
from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession
creds = service_account.Credentials.from_service_account_file(r"C:\Users\mudda\.gsc\service_account.json", scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
s = AuthorizedSession(creds)
site = "sc-domain%3Aveloxisglobal.com"
end = dt.date.today(); start = end - dt.timedelta(days=28)
def q(dims, start):
    r = s.post(f"https://www.googleapis.com/webmasters/v3/sites/{site}/searchAnalytics/query",
        json={"startDate": str(start), "endDate": str(end), "dimensions": dims, "rowLimit": 25000}).json()
    return r.get("rows", [])
rows = q(["query","page"], start)
json.dump(rows, open("gsc-query-page-28d.json","w"), indent=0)
pages = q(["page"], start)
print("== pages (28d) clicks/impr/pos")
for r in sorted(pages, key=lambda r:-r["impressions"]):
    p=r["keys"][0].replace("https://www.veloxisglobal.com","") or "/"
    if "digital-marketing-agency" in p or "/industries/" in p and "real-estate" not in p: continue
    print(f'{r["clicks"]:>4} {r["impressions"]:>6} {r["position"]:>5.1f}  {p}')
print("\n== striking distance: pos 3-25, impr>=5, current URLs only")
old=("digital-marketing-agency","/industries/saas","/industries/ecommerce","/industries/coaching","/services/seo","free-seo-audit","case-studies","testimonials","/pricing")
for r in sorted(rows, key=lambda r:-r["impressions"]):
    qy,p=r["keys"]; p=p.replace("https://www.veloxisglobal.com","") or "/"
    if any(o in p for o in old): continue
    if 3<=r["position"]<=25 and r["impressions"]>=5:
        print(f'{r["impressions"]:>5} imp {r["clicks"]:>3} cl pos {r["position"]:>5.1f}  {qy[:55]:<55} {p}')
