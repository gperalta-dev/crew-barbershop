# Crew Barber Shop: preview site (Local Studio)

Live: https://gperalta-dev.github.io/crew-barbershop/

One-page starter site. Preview only; facts are public-listing facts and gaps are shown as "to be confirmed", never invented.

## Swap in real facts / re-skin for another business
1. Edit `site.json` (name, address, phone, hours, services + prices, bookingUrl, accent colour).
2. `node build.mjs` (no dependencies) -> regenerates `index.html`.
3. `git add -A && git commit -m "update" && git push`. GitHub Pages redeploys in about a minute.
Layout and styles live in `template.html`. A blank field renders a neutral "to be confirmed" line. A phone number turns the call/text buttons on, a bookingUrl turns on the booking link.

## Sources used (public, checked 2026-10-27)
- Yellow Pages listing "Crew Barber Shop": 210-2331 66 St NW, Edmonton, AB T6K 4B4; phone 780-705-9167. https://www.yellowpages.ca/bus/Alberta/Edmonton/Crew-Barber-Shop/101827249.html
- Yelp listing (search result snippet; page itself blocked us): same suite and address. https://www.yelp.ca/biz/crew-barber-shop-edmonton
- Category "Barbers" (Yellow Pages). "Haircut" and "Beard trim" service names are [UNVERIFIED]: they come from a generic directory blurb (shopping-canada.com), not from Crew.

## Warnings
- **crewbarbershop.ca is NOT Crew's working site.** On 2026-10-27 it serves an unrelated crypto-casino page. Do not link it. Worth telling the owner (their old domain looks lapsed/taken over). Good talking point for the pitch.
- crew-barbers.nearcut.com is a different shop in Torquay, UK. Ignored.
- shopping-canada.com hours and phone are the mall's, not Crew's. Ignored.

## [ASK OWNER] list
- [ASK OWNER] Phone/text number. Candidates: 780-705-9167 (Yellow Pages/Yelp), 780-935-2002 (old site, per search snippet). Conflicting, so the page shows "number coming soon".
- [ASK OWNER] Opening hours, all 7 days. Sources conflict (Yelp 9:30-9:00 Mon-Fri vs old site 9:30-7:00), so none are shown.
- [ASK OWNER] Services and prices (haircut, beard trim, kids, shave, etc.). None found; the page shows "Price to be confirmed".
- [ASK OWNER] Confirm correct postal code (T6K 4B4 on Yellow Pages vs 4B5 on a mall directory) and entrance landmark (old snippet mentioned a Scotiabank entrance, [UNVERIFIED]).
- [ASK OWNER] Booking: do they use an app (Square, Booksy, Fresha, none)? Booking section is a placeholder.
- [ASK OWNER] Real photos of the shop/work, with permission to use them. None used.
- [ASK OWNER] Instagram / Facebook handles ("crewbarberyeg" seen in a snippet, [UNVERIFIED]). Not shown.
- [ASK OWNER] Does the owner want their own domain? Not bought: needs Gabriel's approval and spend.
- No testimonials or reviews used. Add only real ones with permission.

## Evidence
Screenshots in `evidence/` (mobile 390px, desktop 1280px).
