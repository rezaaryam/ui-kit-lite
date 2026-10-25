const test = require("node:test");
const assert = require("node:assert/strict");
const UIKit = require("../src/ui-kit.js");

test("escapeHtml mengubah karakter berbahaya", () => {
  assert.equal(UIKit.escapeHtml('<script>"&\'</script>'),
    "&lt;script&gt;&quot;&amp;&#39;&lt;/script&gt;");
});

test("renderAlert memakai tipe yang valid", () => {
  const html = UIKit.renderAlert({ type: "success", message: "Berhasil" });
  assert.match(html, /uk-alert--success/);
  assert.match(html, /Berhasil/);
});

test("renderAlert jatuh ke info jika tipe tidak dikenal", () => {
  const html = UIKit.renderAlert({ type: "neraka", message: "x" });
  assert.match(html, /uk-alert--info/);
  assert.doesNotMatch(html, /neraka/);
});

test("renderAlert menampilkan judul hanya jika diberikan", () => {
  assert.doesNotMatch(UIKit.renderAlert({ message: "x" }), /uk-alert__title/);
  assert.match(UIKit.renderAlert({ title: "Perhatian", message: "x" }), /uk-alert__title/);
});

test("renderAlert meng-escape pesan dari pengguna", () => {
  const html = UIKit.renderAlert({ message: "<img src=x onerror=alert(1)>" });
  assert.doesNotMatch(html, /<img/);
});

test("renderBadge memakai varian default untuk nilai tidak valid", () => {
  assert.match(UIKit.renderBadge("Baru", "aneh"), /uk-badge--neutral/);
  assert.match(UIKit.renderBadge("Baru", "accent"), /uk-badge--accent/);
});
