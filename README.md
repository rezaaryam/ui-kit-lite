# ui-kit-lite

Komponen UI dasar dengan CSS dan JavaScript murni. Tanpa framework, tanpa proses build.

## Isi

- **Tombol**: primer, sekunder, ghost, dengan ukuran kecil dan besar.
- **Badge**: lima varian warna.
- **Kartu**: judul dan isi dengan batas tipis.
- **Alert**: empat tipe (info, success, warning, danger), dengan judul opsional.
- **Mode gelap** otomatis mengikuti sistem, atau bisa dipaksa lewat `data-theme="dark"`.

## Pemakaian

Tambahkan CSS dan JavaScript ke halaman:

```html
<link rel="stylesheet" href="src/ui-kit.css">
<script src="src/ui-kit.js"></script>
<button class="uk-btn uk-btn--primary">Simpan</button>
<script>
  document.body.insertAdjacentHTML(
    "beforeend",
    UIKit.renderAlert({ type: "success", message: "Berhasil disimpan." })
  );
</script>
```

Fungsi yang tersedia: `UIKit.renderAlert(options)`, `UIKit.renderBadge(text, variant)`, dan `UIKit.escapeHtml(value)`. Semua teks dari pengguna otomatis di-escape.

## Menjalankan pengujian

Butuh Node.js 18 atau lebih baru.

```bash
npm test
```

## Demo

Buka `docs/index.html` di browser, atau lihat versi daring jika GitHub Pages sudah diaktifkan.

## Lisensi

MIT. Lihat berkas [LICENSE](LICENSE).
