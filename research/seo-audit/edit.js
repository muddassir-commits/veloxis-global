// Small find/replace helper used during the SEO overhaul.
// Normalises CRLF and trailing spaces so replacements match regardless of line endings.
const fs = require('fs');
const norm = (x) => x.replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n');

module.exports = function edit(file, pairs) {
  let s = norm(fs.readFileSync(file, 'utf8'));
  for (const [from, to] of pairs) {
    const a = norm(from);
    if (!s.includes(a)) throw new Error(`${file} — not found:\n${a.slice(0, 120)}`);
    s = s.split(a).join(to);
  }
  fs.writeFileSync(file, s);
  console.log('edited', file);
};
