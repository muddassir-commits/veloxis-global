"""Pull Search Console queries/pages and GA4 landing pages via the service account."""
import json, pathlib, datetime as dt
from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession

OUT = pathlib.Path(__file__).parent
KEY = r"C:\Users\mudda\.gsc\service_account.json"
creds = service_account.Credentials.from_service_account_file(KEY, scopes=[
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/analytics.readonly",
])
s = AuthorizedSession(creds)
end = dt.date.today()
start = end - dt.timedelta(days=90)

site = "sc-domain%3Aveloxisglobal.com"
gsc = {}
for dims in (["query"], ["page"], ["query", "page"], ["date"]):
    r = s.post(f"https://www.googleapis.com/webmasters/v3/sites/{site}/searchAnalytics/query",
               json={"startDate": str(start), "endDate": str(end), "dimensions": dims, "rowLimit": 5000})
    gsc["+".join(dims)] = r.json()
(OUT / "gsc.json").write_text(json.dumps(gsc, indent=1))

ga = s.post("https://analyticsdata.googleapis.com/v1beta/properties/538243832:runReport", json={
    "dateRanges": [{"startDate": str(start), "endDate": str(end)}],
    "dimensions": [{"name": "landingPage"}, {"name": "sessionDefaultChannelGroup"}],
    "metrics": [{"name": "sessions"}, {"name": "keyEvents"}],
    "limit": 500,
}).json()
(OUT / "ga4.json").write_text(json.dumps(ga, indent=1))

for k, v in gsc.items():
    print(k, "rows:", len(v.get("rows", [])), v.get("error", {}).get("message", ""))
print("ga4 rows:", len(ga.get("rows", [])), ga.get("error", {}).get("message", ""))
