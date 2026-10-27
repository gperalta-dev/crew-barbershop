// node build.mjs  ->  renders template.html + site.json into index.html. No dependencies.
import { readFileSync, writeFileSync } from "node:fs";
const s = JSON.parse(readFileSync("site.json", "utf8"));
const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tbc = (label) => `<span class="tbc">${label}</span>`;
const row = (a, b) => `<li><span>${esc(a)}</span><span>${b}</span></li>`;

const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.mapQuery);
const tel = s.phone.replace(/[^\d+]/g, "");
const vars = {
  name: esc(s.name), tagline: esc(s.tagline), intro: esc(s.intro), address: esc(s.address),
  landmark: s.landmark ? ` (${esc(s.landmark)})` : "", accent: esc(s.accent), mapUrl,
  callButton: tel
    ? `<a class="btn" href="tel:${tel}">Call ${esc(s.phoneDisplay || s.phone)}</a><a class="btn" href="sms:${tel}">Text us</a>`
    : `<span class="btn off" aria-disabled="true">Call / text: number coming soon</span>`,
  bookButton: s.bookingUrl ? `<a class="btn alt" href="${esc(s.bookingUrl)}">Book online</a>` : "",
  services: s.services.map((x) => row(x.name, x.price ? esc(x.price) : tbc("Price to be confirmed"))).join(""),
  hours: s.hours.map((x) => row(x.day, x.time ? esc(x.time) : tbc("To be confirmed"))).join(""),
  bookingText: s.bookingUrl
    ? `<a href="${esc(s.bookingUrl)}">Book your appointment online</a>.`
    : tbc("Online booking coming soon.") + (tel ? ` Call or text ${esc(s.phoneDisplay || s.phone)} to book.` : ""),
};
const out = readFileSync("template.html", "utf8").replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] ?? "");
writeFileSync("index.html", out);
console.log("built index.html");
