import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const retiredHost = ["mission-critical", "minerals.beehiiv.com"].join("-");
const banned = [retiredHost, "Wednesday mornings"];

async function files(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "tests") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await files(full, acc);
    else if (/\.(html|css|js|xml|txt|json|md)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

test("public files do not point at the retired domain or held drafts", async () => {
  const found = await files(root);
  assert.ok(found.length > 3);
  for (const file of found) {
    const text = await readFile(file, "utf8");
    for (const phrase of banned) {
      assert.equal(text.toLowerCase().includes(phrase.toLowerCase()), false, `${path.relative(root, file)} contains ${phrase}`);
    }
  }
});

test("home, read, and about carry the canonical destinations", async () => {
  const home = await readFile(path.join(root, "index.html"), "utf8");
  const read = await readFile(path.join(root, "read/index.html"), "utf8");
  const about = await readFile(path.join(root, "about/index.html"), "utf8");
  const article = "https://itsmissioncritical.beehiiv.com/p/copper-s-got-a-plumbing-problem";
  const subscribe = "https://itsmissioncritical.beehiiv.com/subscribe";
  for (const html of [home, read, about]) {
    assert.match(html, new RegExp(article.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, new RegExp(subscribe.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(home, /What the AI <span class="compound">build-out<\/span>/);
  assert.match(home, /is made of/);
  assert.match(home, /On 28 October 2026, Shanghai Metals Market put the average Yangshan warrant premium/);
  assert.match(home, /id="motion-control"/);
  assert.match(home, /Yangshan warrant premium/);
  assert.match(home, /Not the outright London copper price/);
  assert.match(home, /Not a live quote/);
  assert.match(home, /US\$190 to US\$220/);
  assert.match(home, /class="menu-btn"/);
  assert.match(home, /Who controls the next step\?/);
  assert.match(read, /Read Mission Critical/);
  assert.match(read, /class="menu-btn"/);
  assert.match(about, /Show the source/);
  assert.match(about, /class="menu-btn"/);
  assert.match(about, /Shanghai Metals Market/);
  assert.match(about, /28 October 2026/);
  assert.doesNotMatch(home, /195 yuan/);
  assert.doesNotMatch(home, /type="email"/);
  assert.doesNotMatch(home, /weekly/i);
});
