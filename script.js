/* ============================================================
   Shakeel Traders — site script
   IMPORTANT: change WHATSAPP_NUMBER below to the real number
   (country code, no + or spaces, e.g. "923001234567")
   ============================================================ */
const WHATSAPP_NUMBER = "923224700511";

const IMG = {
  dell:     "https://images.unsplash.com/photo-1571674310424-30795921b2ad?auto=format&fit=crop&w=700&q=80",
  hp:       "https://images.unsplash.com/photo-1709721821603-8f0f11ce3e0d?auto=format&fit=crop&w=700&q=80",
  lenovo:   "https://images.unsplash.com/photo-1736576660096-744a1dae8e03?auto=format&fit=crop&w=700&q=80",
  macbook:  "https://images.unsplash.com/photo-1496917690447-4b239a568092?auto=format&fit=crop&w=700&q=80",
  macbook2: "https://images.unsplash.com/photo-1619462728907-1963dbb0fc87?auto=format&fit=crop&w=700&q=80",
  msi:      "https://images.unsplash.com/photo-1595896424050-f70867364590?auto=format&fit=crop&w=700&q=80",
  asus:     "https://images.unsplash.com/photo-1619462728907-1963dbb0fc87?auto=format&fit=crop&w=700&q=80",
  charger:  "https://images.unsplash.com/photo-1619459072761-496c0812331b?auto=format&fit=crop&w=700&q=80",
  mouse:    "https://images.unsplash.com/photo-1740268120608-513ea101f6bd?auto=format&fit=crop&w=700&q=80",
  bag:      "https://images.unsplash.com/photo-1721800419598-67f296c67b79?auto=format&fit=crop&w=700&q=80",
  cover:    "https://images.unsplash.com/photo-1544441892-4284006e19ca?auto=format&fit=crop&w=700&q=80",
  monitor:  "https://images.unsplash.com/photo-1661226829497-54e210957b46?auto=format&fit=crop&w=700&q=80",
  monitor2: "https://images.unsplash.com/photo-1646771032500-27b440b2d947?auto=format&fit=crop&w=700&q=80",
  store:    "https://images.unsplash.com/photo-1553413583-8bd1d3842f9b?auto=format&fit=crop&w=800&q=80"
};

function waLink(text){ return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`; }

/* ---------- Data (shop owner: edit these arrays to update the catalogue) ---------- */
const categories = [
  { img:IMG.lenovo, name:"Laptops", desc:"Dell, HP, Lenovo, MSI & ASUS laptops", cta:"View Laptops →" },
  { img:IMG.macbook, name:"MacBooks", desc:"MacBook Air & MacBook Pro", cta:"View MacBooks →" },
  { img:IMG.charger, name:"Chargers", desc:"Laptop & mobile chargers", cta:"View Chargers →" },
  { img:IMG.mouse, name:"Computer Accessories", desc:"Mouse, keyboards, USB devices, bags", cta:"View Accessories →" },
  { img:IMG.cover, name:"Mobile Covers", desc:"Stylish smartphone covers", cta:"View Covers →" },
  { img:IMG.monitor, name:"LCD / Monitors", desc:"Modern displays & computer monitors", cta:"View Monitors →" }
];

const laptops = [
  { id:"p1", img:IMG.dell, brand:"Dell", name:"Dell Latitude", specs:["Intel Core i5","8GB RAM","256GB SSD"], price:"Contact for Price" },
  { id:"p2", img:IMG.hp, brand:"HP", name:"HP EliteBook", specs:["Intel Core i5","8GB RAM","256GB SSD"], price:"Contact for Price" },
  { id:"p3", img:IMG.lenovo, brand:"Lenovo", name:"Lenovo ThinkPad", specs:["Intel Core i5","8GB RAM","256GB SSD"], price:"Contact for Price" },
  { id:"p4", img:IMG.macbook, brand:"Apple", name:"MacBook Air", specs:["Apple M2","8GB RAM","256GB SSD"], price:"Contact for Price" },
  { id:"p5", img:IMG.msi, brand:"MSI", name:"MSI Gaming Laptop", specs:["Intel Core i7","RTX Graphics","16GB RAM"], price:"Contact for Price" },
  { id:"p6", img:IMG.asus, brand:"ASUS", name:"ASUS Laptop", specs:["Intel Core i5","8GB RAM","512GB SSD"], price:"Contact for Price" }
];

const accessories = [
  { id:"a1", img:IMG.charger, brand:"Universal", name:"Laptop Charger", specs:["Compatible with major brands"], price:"Rs. 2,500" },
  { id:"a2", img:IMG.charger, brand:"Universal", name:"Mobile Charger", specs:["Fast charging, USB-C"], price:"Rs. 1,200" },
  { id:"a3", img:IMG.mouse, brand:"Various", name:"Wireless Mouse", specs:["2.4GHz, ergonomic design"], price:"Rs. 1,800" },
  { id:"a4", img:IMG.mouse, brand:"Various", name:"Keyboard", specs:["Full-size, spill-resistant"], price:"Rs. 2,200" },
  { id:"a5", img:IMG.bag, brand:"Various", name:"Laptop Bag", specs:["Padded, fits up to 15.6\""], price:"Rs. 2,800" },
  { id:"a6", img:IMG.monitor2, brand:"Various", name:"Cooling Pad", specs:["Dual fan, adjustable height"], price:"Rs. 1,500" },
  { id:"a7", img:IMG.charger, brand:"Various", name:"USB Hub", specs:["4-port, USB 3.0"], price:"Rs. 1,000" },
  { id:"a8", img:IMG.cover, brand:"Various", name:"Mobile Cover", specs:["Shockproof, multiple models"], price:"Rs. 500" }
];

const whyItems = [
  { h:"Quality Products", p:"Quality technology products from trusted brands." },
  { h:"Competitive Prices", p:"Affordable retail and wholesale pricing." },
  { h:"Wide Selection", p:"Laptops, MacBooks, chargers and accessories under one roof." },
  { h:"Customer Support", p:"Helpful assistance for choosing the right product." }
];

const reviews = [
  { t:"Good quality laptop and very reasonable price. Highly recommended.", n:"Ahmed R." },
  { t:"I purchased a laptop charger and accessories. Excellent service.", n:"Sana K." },
  { t:"Professional dealing and good variety of laptops.", n:"Bilal M." }
];

const galleryImages = [
  { img:IMG.lenovo, alt:"Laptop display at the store" },
  { img:IMG.mouse, alt:"Computer accessories on a shelf" },
  { img:IMG.hp, alt:"Laptops arranged on shelves" },
  { img:IMG.macbook2, alt:"MacBook on display" },
  { img:IMG.charger, alt:"Chargers and cables" },
  { img:IMG.cover, alt:"Mobile covers collection" },
  { img:IMG.monitor, alt:"Computer monitor on desk" },
  { img:IMG.store, alt:"Store interior" }
];

/* ---------- Render: brands ---------- */
document.getElementById("brand-row").innerHTML = ["Dell","HP","Lenovo","Apple","MSI","ASUS"]
  .map(b => `<div class="brand-card reveal">${b}</div>`).join("");

/* ---------- Render: categories ---------- */
document.getElementById("cat-grid").innerHTML = categories.map(c => `
  <div class="cat-card reveal">
    <div class="cat-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
    <div class="cat-body">
      <h3>${c.name}</h3><p>${c.desc}</p>
      <a href="#featured" class="cat-link">${c.cta}</a>
    </div>
  </div>`).join("");

/* ---------- Render: featured laptops (with search + brand filter) ---------- */
function productCard(p){
  return `
  <div class="prod-card reveal" data-brand="${p.brand}" data-name="${p.name.toLowerCase()}">
    <div class="prod-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="prod-body">
      <span class="prod-brand">${p.brand}</span>
      <div class="prod-name" data-id="${p.id}">${p.name}</div>
      <div class="prod-spec">${p.specs.join(", ")}</div>
      <div class="prod-price">${p.price}</div>
      <div class="prod-actions">
        <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink('Assalam o Alaikum, I am interested in the '+p.name+'. Please share details and price.')}">WhatsApp</a>
        <button class="btn btn-outline view-details" data-id="${p.id}">View Details</button>
      </div>
    </div>
  </div>`;
}
const prodGrid = document.getElementById("prod-grid");
prodGrid.innerHTML = laptops.map(productCard).join("");
document.getElementById("acc-grid").innerHTML = accessories.map(productCard).join("");

/* ---------- Filter buttons ---------- */
const brands = ["All", ...new Set(laptops.map(p => p.brand))];
document.getElementById("filter-row").innerHTML = brands.map((b,i) =>
  `<button class="filter-btn ${i===0?'active':''}" data-brand="${b}">${b}</button>`).join("");

let activeBrand = "All";
let searchTerm = "";
function applyFilters(){
  const cards = prodGrid.querySelectorAll(".prod-card");
  let visible = 0;
  cards.forEach(card => {
    const matchesBrand = activeBrand === "All" || card.dataset.brand === activeBrand;
    const matchesSearch = card.dataset.name.includes(searchTerm) || card.dataset.brand.toLowerCase().includes(searchTerm);
    const show = matchesBrand && matchesSearch;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });
  document.getElementById("no-results").hidden = visible !== 0;
}
document.getElementById("filter-row").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeBrand = btn.dataset.brand;
  applyFilters();
});
document.getElementById("search-input").addEventListener("input", e => {
  searchTerm = e.target.value.trim().toLowerCase();
  applyFilters();
});

/* ---------- Why choose us ---------- */
document.getElementById("why-grid").innerHTML = whyItems.map(w => `
  <div class="why-card reveal">
    <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg></div>
    <h3>${w.h}</h3><p>${w.p}</p>
  </div>`).join("");

/* ---------- Testimonials ---------- */
document.getElementById("rev-grid").innerHTML = reviews.map(r => `
  <div class="rev-card reveal"><div class="stars">★★★★★</div><p>"${r.t}"</p><div class="rev-name">— ${r.n}</div></div>`).join("");

/* ---------- Gallery + lightbox ---------- */
document.getElementById("gallery-grid").innerHTML = galleryImages.map((g,i) => `
  <button class="reveal" data-idx="${i}"><img src="${g.img}" alt="${g.alt}" loading="lazy"></button>`).join("");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.getElementById("gallery-grid").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const g = galleryImages[btn.dataset.idx];
  lightboxImg.src = g.img.replace("w=700","w=1400").replace("w=800","w=1400");
  lightboxImg.alt = g.alt;
  lightbox.hidden = false;
});
document.getElementById("lightbox-close").addEventListener("click", () => lightbox.hidden = true);
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.hidden = true; });

/* ---------- Product details modal ---------- */
const productModal = document.getElementById("product-modal");
const modalBody = document.getElementById("modal-body");
function openProductModal(id){
  const p = [...laptops, ...accessories].find(x => x.id === id);
  if (!p) return;
  modalBody.innerHTML = `
    <img class="modal-body-img" src="${p.img}" alt="${p.name}">
    <span class="prod-brand">${p.brand}</span>
    <h3>${p.name}</h3>
    <ul>${p.specs.map(s => `<li>${s}</li>`).join("")}</ul>
    <p class="prod-price" style="margin-top:8px;">${p.price}</p>
    <a class="btn btn-wa" style="width:100%;justify-content:center;" target="_blank" rel="noopener"
       href="${waLink('Assalam o Alaikum, I am interested in the '+p.name+'. Please share details and price.')}">Ask on WhatsApp</a>`;
  productModal.hidden = false;
}
document.body.addEventListener("click", e => {
  const el = e.target.closest(".view-details, .prod-name");
  if (el) openProductModal(el.dataset.id);
});
document.getElementById("modal-close").addEventListener("click", () => productModal.hidden = true);
productModal.addEventListener("click", e => { if (e.target === productModal) productModal.hidden = true; });

/* ---------- Mobile menu ---------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

/* ---------- Sticky navbar shadow on scroll + back-to-top ---------- */
const backTop = document.getElementById("back-top");
window.addEventListener("scroll", () => {
  backTop.hidden = window.scrollY < 500;
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- Scroll reveal animation ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Contact form validation ---------- */
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById("f-name");
  const phone = document.getElementById("f-phone");
  document.querySelectorAll(".err").forEach(el => el.textContent = "");

  if (!name.value.trim()) {
    document.querySelector('.err[data-for="f-name"]').textContent = "Please enter your name.";
    name.classList.add("invalid"); valid = false;
  } else name.classList.remove("invalid");

  const phoneDigits = phone.value.replace(/\D/g, "");
  if (phoneDigits.length < 7) {
    document.querySelector('.err[data-for="f-phone"]').textContent = "Please enter a valid phone number.";
    phone.classList.add("invalid"); valid = false;
  } else phone.classList.remove("invalid");

  if (!valid) return;
  document.getElementById("form-msg").style.display = "block";
  form.reset();
});