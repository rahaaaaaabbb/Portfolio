import { createContext, useContext, useEffect, useRef, useState, type ChangeEvent, type MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };

/* ====== EDIT DATA ANDA DI SINI (semua isi di bawah hanya contoh) ====== */
export const P = {
  first: "Rifa", fullName: "Rifa Rabah Falhaq", role: "Freelance", email: "rifarbhflhq@gmail.com",
  tagline: "Halo, saya Rifa Rabah Falhaq, Lulusan D3 Manajemen Informatika STMIK DCI Tasikmalaya & Full-Stack Developer. Saya terbiasa merancang dan membangun aplikasi web interaktif serta aplikasi mobile lintas platform dari tahap konsep hingga siap pakai.",
  intro: ["Halo, saya Rifa Rabah Falhaq, seorang Full-Stack Developer dan lulusan D3 Manajemen Informatika STMIK DCI Tasikmalaya yang memiliki kebiasaan kuat dalam mengubah ide konseptual menjadi produk digital yang fungsional, interaktif, dan berpusat pada pengalaman pengguna.",
          "Saya terbiasa merancang dan mengembangkan aplikasi web modern maupun konvensional, serta membangun aplikasi mobile lintas platform menggunakan Flutter. Berbekal pemahaman teknis yang kuat, saya terbiasa menangani pengembangan dari sisi frontend, backend, hingga pengelolaan basis data."],
  stats: [{ n: 11, s: "+", l: "Project" }, { n: 11, s: "+", l: "Approve" }, { n: 1, s: "th+", l: "Pengalaman" }],
  brands: ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"],
  skills: [["JavaScript & TypeScript", 85], ["PHP", 87], ["Dart", 83], ["Three.js / React Three Fiber, GSAP & Framer Motion.", 76], ["Flutter (Cross-Platform)", 75], ["MySQL, Prisma ORM, Git, GitHub, Vercel, Laragon, XAMPP, VS Code", 86]] as [string, number][],
  tools: ["Node.Js", "React.Js", "Next.Js", "Express.Js","Database"],
  /* Tiap project: kartu di tumpukan + halaman detail dengan beberapa screenshot (shots = nama tiap gambar) */
  work: [
    { title: "CosyCouch App", year: "2025", role: "Mobile App", tools: ["Flutter", "Dart", "MySQL", "Node.Js","Express.Js", ""],
      desc: "Manajemen Produk & Inventaris: Antarmuka untuk melihat daftar barang, menambah produk baru, serta memantau status stok barang masuk dan keluar.",
      points: ["Manajemen Produk", "Monitoring Stok Real Time", "Laporan Owner Real Time"],
      shots: ["Login", "Kasir", "Transaksi Pengeluaran/Pemasukan", "Dashboard Statistik", "Report"] },
    { title: "Rental Jaya App", year: "2025", role: "Mobile App", tools: ["Flutter", "Dart", "Rest API", "PHP","MySQL",],
      desc: "Rental Jaya Abadi (Rental Mobil App)Deskripsi AplikasiRental Mobil App adalah sistem aplikasi berbasis mobile yang dirancang untuk mengelola siklus penyewaan kendaraan dari awal hingga akhir. Aplikasi ini memfasilitasi interaksi antara pelanggan dan pengelola rental melalui antarmuka yang modern, responsif, dan mudah digunakan.",
      points: ["Sistem Booking", "Manajemen Pembayaran", "Pelacakan Riwayat"],
      shots: ["Booking", "Payment", "List Item", "Owner Report", "Admin Monitoring"] },
    { title: "Salero Minang Web App", year: "2025", role: "Web Aplikasi F&B", tools: ["Node.Js", "React","Tailwind CSS","Recharts","jsPDF","Native PHP","API JSON","MySQL"],
      desc: "Aplikasi Pemesanan Menu Padang berbasib Web dengan Metode QR-Ordering atau self-service memudahkan pelanggan memesan tanpa ikut campur orang lain atau pihak Rumah makan.",
      points: ["Qr-Ordering", "Manajemen Menu", "Diagram Analytic & Report Owner"],
      shots: ["Dashboard Analytics", "Report", "Self-Service Order", "Kasir Transaksi", "Order Progres"] },
    { title: "Laundry Sistem", year: "2026", role: "Web Aplikasi", tools: ["PHP Native", "MySQL","Midtrans Snap API","HTML5 & CSS3","Javascript & GSAP","Lenis Scroll","Flickity"],
      desc: "Aplikasi ini adalah Sistem Manajemen Laundry Modern berbasis Web yang dirancang untuk mendigitalisasi operasional bisnis laundry. Sistem ini menjembatani tiga peran utama (Multi-role).",
      points: ["Integrasi Pembayaran Digital (Midtrans Snap): Pelanggan dapat langsung membayar tagihan secara online menggunakan virtual account, dompet digital, atau QRIS melalui pop-up Midtrans", "Mengelola data pelanggan, mencatat transaksi masuk, mengatur antrean tahapan cucian, melihat rekam jejak omset, serta mencetak laporan keuangan  ", "Mempermudah pengguna untuk melihat katalog layanan, melacak status pesanan secara real-time, melakukan pembayaran secara digital menggunakan Payment Gateway (Midtrans), serta mengunduh E-Nota transaksi."],
      shots: ["Pelanggan Menu", "Admin Dashboard", "List Order", "Login", "Payment by Midtrans"] },
    { title: "PlayZone", year: "2025", role: "Web Aplikasi", tools: ["Prisma ORM", "Node.Js","Express.Js", "React","Tailwind CSS","MySQL"],
      desc: "Ringkasan Alur Kerja Aplikasi (Arsitektur): Ketika pelanggan atau kasir menekan tombol Buat Reservasi di layar (Frontend ), permintaan tersebut dikirim ke server (Backend). Server kemudian menyuruh Prisma ORM untuk mencatat pesanan tersebut. Prisma akan menerjemahkan perintah itu ke dalam bahasa SQL dan menyimpannya secara permanen ke dalam Database (MySQL).",
      points: ["Manajemen Pengguna (User Management)", "Manajemen Unit PS", "Sistem Reservasi (Booking)","Pencatatan Transaksi."],
      shots: ["Struktur kampanye", "Materi iklan", "Dashboard", "Hasil A/B test", "Ringkasan biaya"] },
  ],
  edu: [
    { year: "2023 – 2026", title: "D3 Manajemen Informatika", place: "STMIK DCI", note: "Memperkuat fondasi analitis dalam perancangan sistem informasi, manajemen basis data, serta logika pengembangan perangkat lunak terstruktur." },
    { year: "2019 – 2022", title: "Rekayasa Perangkat Lunak", place: "SMKN 1 BANJAR", note: "Membangun dasar pemrograman, pemahaman algoritma, serta praktik pengembangan aplikasi secara fundamental." },
  ],
  comp: [
    ["Komunikasi", "Menyampaikan ide dengan jelas kepada tim, klien, dan audiens."],
    ["Kreativitas", "Menemukan sudut pandang segar agar konten tidak terasa seperti yang lain."],
    ["Analitis", "Membaca data performa lalu mengubahnya menjadi keputusan konten."],
    ["Adaptif", "Cepat menyesuaikan diri dengan tren, platform, dan kebutuhan brand."],
  ],
  marquee: ["WEB DEVELOPMENT", "FULL STACK DEV", "FE DEV", "BE DEV", "Data Analytics", "Strategy"],
};
/* ======================================================================= */

/* ====== FOTO BAWAAN ======
   1. Taruh file foto di folder  public/photos/
   2. Tulis nama file-nya di sini (kosong = tampil placeholder).
   Contoh:  hero: "hero.png",  who: "rifa.jpg"
   Foto yang diunggah lewat tombol "Edit foto" (hanya di browser Anda) menimpa foto bawaan. */
export const PHOTOS: Record<string, string> = {
  who: "who01.png",
  work0:"Work01.png", work1: "Work02.png", work2: "Work03.png", work3: "Work04.png", work4: "Work05.png",
  /* screenshot detail project: id "work0-s0", "work0-s1", ... mis. "work0-s0": "ugc-1.png" */
  edu0: "edu1.png", edu1: "edu2.jpg",
};

/* Animasi selalu berjalan, termasuk di perangkat yang mematikan animasi.
   Ubah ke true jika ingin menghormati pengaturan "reduced motion" pengunjung. */
export const RESPECT_REDUCED_MOTION = false;
export const SHOW_EDITOR = import.meta.env.DEV || location.search.includes("edit");

export const Edit = createContext(false);
export const reduced = () => RESPECT_REDUCED_MOTION && matchMedia("(prefers-reduced-motion: reduce)").matches;
export const letters = (s: string) => s.split("").map((c, i) => <span key={i}>{c === " " ? "\u00A0" : c}</span>);

/* ---- Penyimpanan foto: IndexedDB (kuota jauh lebih besar dari localStorage) ---- */
let dbp: Promise<IDBDatabase> | null = null;
const openDb = () => {
  if (!dbp) dbp = new Promise((res, rej) => {
    const r = indexedDB.open("portfolio-photos", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("slots");
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbp;
};
async function idb<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T | undefined> {
  try {
    const d = await openDb();
    return await new Promise<T>((res, rej) => {
      const tx = d.transaction("slots", mode);
      const rq = fn(tx.objectStore("slots"));
      tx.oncomplete = () => res(rq.result);
      tx.onerror = tx.onabort = () => rej(tx.error);
    });
  } catch { return undefined; }
}
const idbGet = async (id: string) => { const b = await idb<Blob>("readonly", (s) => s.get(id)); return b instanceof Blob ? b : undefined; };
const idbPut = async (id: string, blob: Blob) => {
  navigator.storage?.persist?.(); /* minta browser agar tidak menghapus foto otomatis */
  try { const d = await openDb(); await new Promise<void>((res, rej) => { const tx = d.transaction("slots", "readwrite"); tx.objectStore("slots").put(blob, id); tx.oncomplete = () => res(); tx.onerror = tx.onabort = () => rej(tx.error); }); return true; }
  catch { return false; }
};
const idbDel = (id: string) => idb("readwrite", (s) => s.delete(id));
const urls = new Map<string, string>(); /* cache di memori: foto langsung tampil saat berpindah halaman */

async function shrink(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const k = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  const toBlob = (type: string) => new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("toBlob"))), type, 0.86));
  const w = await toBlob("image/webp");
  return w.type === "image/webp" ? w : toBlob("image/jpeg");
}

export function Slot({ id, label = "Foto", className = "" }: { id: string; label?: string; className?: string }) {
  const editing = useContext(Edit);
  const [src, setSrc] = useState(() => urls.get(id) || "");
  const [warn, setWarn] = useState(false);
  const def = PHOTOS[id] ? `${import.meta.env.BASE_URL}photos/${PHOTOS[id]}` : "";
  const [bad, setBad] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (urls.has(id)) { setSrc(urls.get(id)!); return; }
    let alive = true;
    (async () => {
      const b = await idbGet(id);
      if (b) { const u = URL.createObjectURL(b); urls.set(id, u); if (alive) setSrc(u); return; }
      const old = localStorage.getItem(`slot:${id}`); /* migrasi dari versi lama (localStorage) */
      if (old) {
        urls.set(id, old); if (alive) setSrc(old);
        try { const blob = await (await fetch(old)).blob(); if (await idbPut(id, blob)) localStorage.removeItem(`slot:${id}`); } catch { /* biarkan */ }
      }
    })();
    return () => { alive = false; };
  }, [id]);

  const pick = async (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f?.type.startsWith("image/")) return;
    try {
      const blob = await shrink(f);
      const prev = urls.get(id);
      const u = URL.createObjectURL(blob);
      urls.set(id, u); setSrc(u);
      if (prev?.startsWith("blob:")) URL.revokeObjectURL(prev);
      setWarn(!(await idbPut(id, blob)));
    } catch { setWarn(true); }
  };
  const clear = async () => {
    const prev = urls.get(id);
    if (prev?.startsWith("blob:")) URL.revokeObjectURL(prev);
    urls.delete(id); setSrc(""); setWarn(false);
    localStorage.removeItem(`slot:${id}`);
    await idbDel(id);
  };
  const shown = src || (bad ? "" : def);
  return (
    <div className={`slot ${className} ${editing ? "editing" : ""}`}>
      {shown ? <img src={shown} alt={label} onError={() => !src && setBad(true)} /> : <span className="ph"><b>+</b>{label}</span>}
      {editing && (
        <div className="slot-ui">
          {warn && <span className="slot-warn">Gagal menyimpan permanen</span>}
          <button onClick={() => ref.current?.click()}>{shown ? "Ganti" : "Unggah"}</button>
          {src && <button onClick={clear} aria-label="Hapus foto">×</button>}
        </div>
      )}
      <input ref={ref} type="file" accept="image/*" hidden onChange={pick} />
    </div>
  );
}

export const AppCtx = createContext<{ go: (to: string) => void; lenis: MutableRefObject<Lenis | null> }>({ go: () => {}, lenis: { current: null } });

export function countUp(scope: HTMLElement) {
  scope.querySelectorAll<HTMLElement>(".num").forEach((el) => {
    const o = { v: 0 };
    gsap.to(o, { v: +el.dataset.n!, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 94%", once: true },
      onUpdate: () => { el.textContent = Math.round(o.v) + el.dataset.s!; } });
  });
}

export function Next({ to, label }: { to: string; label: string }) {
  const { go } = useContext(AppCtx);
  return (
    <button className="next" onClick={() => go(to)}>
      <small>Halaman berikutnya</small><span>{label}</span><i aria-hidden></i>
    </button>
  );
}
