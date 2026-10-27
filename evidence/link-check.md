# Link and button check, 2026-10-27, live https://gperalta-dev.github.io/crew-barbershop/
Live HTML == local index.html (commit e23999c). Every href on the page:
| Element | Target | Result |
|---|---|---|
| "Call (780) 935-2002" button (hero) | tel:+17809352002 | OK, tap-to-call. Number from Google Maps listing (primary phone) + Crew's Instagram/Facebook |
| "Get directions" button | google.com/maps/search/?api=1&query=Crew Barber Shop, 2331 66 Street NW, Edmonton | HTTP 200 |
| "Open in Google Maps" link | same URL | HTTP 200 |
| "(780) 935-2002" link (Call or walk in) | tel:+17809352002 | OK |
No other links, forms or buttons exist (no sms:, no booking link, no scripts).
Metadata: title "Crew Barber Shop | Mill Woods Town Centre, Edmonton"; description "...Call or walk in." No og: tags. No beard-trim / haircut-price / booking claims anywhere.
mobile-390.png: two 390 px-wide frames of the live page (top to bottom). Headless Edge crops directly-captured --mobile shots, so the page was captured inside 390 px iframes.
