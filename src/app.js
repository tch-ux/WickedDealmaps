// ── Card rendering ──────────────────────────────────────────
POIS.forEach(p => {
  const card = document.createElement('div');
  card.className = 'poi-card';
  card.dataset.cat = p.cat;
  card.dataset.id = p.id;

  const iconId = p.cat === 'office' ? '#ic-briefcase' : '#ic-bed';
  const pictHTML = p.logoText
    ? `<span class="logo-text">${p.logoText}</span>`
    : p.logo
      ? `<img class="poi-logo${p.logoLight ? ' logo-light' : ''}" src="${p.logo}" alt="${p.name} logo" />`
      : `<svg><use href="${iconId}"></use></svg>`;

  let metaHTML = '';
  if (p.cat === 'hotel') {
    const kmC = kmTo(p, OFFICE_CONTERA);
    const kmR = kmTo(p, OFFICE_RACIANSKA);
    metaHTML = `
      <div class="meta">
        <span><svg><use href="#ic-route"></use></svg>${kmC} km</span>
        <span><svg><use href="#ic-car"></use></svg>${p.carContera}</span>
        <span class="meta-office">→ Contera</span>
      </div>
      <div class="meta">
        <span><svg><use href="#ic-route"></use></svg>${kmR} km</span>
        <span><svg><use href="#ic-car"></use></svg>${p.carRacianska}</span>
        <span class="meta-office">→ Račianska</span>
      </div>`;
  }

  const toOfficeLink = p.cat === 'hotel'
    ? `<a href="${dirToOfficeHref(p)}" target="_blank" rel="noopener">→ Office</a>` : '';

  card.innerHTML = `
    <div class="head-row">
      <span class="pict">${pictHTML}</span>
      <div class="name">${p.name}</div>
      <span class="num">${p._num}</span>
    </div>
    <div class="addr">${p.addr}</div>
    ${metaHTML}
    <div class="actions">
      <a href="${gmapsHref(p)}" target="_blank" rel="noopener">Open in Maps</a>
      <a href="${dirHref(p)}" target="_blank" rel="noopener">Directions</a>
      ${toOfficeLink}
    </div>
  `;

  card.addEventListener('click', e => {
    if (e.target.tagName === 'A') return;
    focusPOI(p.id);
  });

  const grid = document.getElementById(p.cat === 'office' ? 'grid-office' : 'grid-hotel');
  grid.appendChild(card);
});

// ── Focus POI ───────────────────────────────────────────────
let activeId = null;

function focusPOI(id, flyAndDelayPopup = true) {
  const p = POIS.find(x => x.id === id);
  if (!p) return;
  activeId = id;

  document.querySelectorAll('.poi-card').forEach(c => {
    c.classList.toggle('active', c.dataset.id === id);
  });

  Object.entries(markers).forEach(([mid, m]) => {
    const el = m.getElement();
    if (el) el.classList.toggle('is-active', mid === id);
  });

  map.flyTo([p.lat, p.lng], 16, { duration: 0.8 });

  if (flyAndDelayPopup) {
    setTimeout(() => markers[id].openPopup(), 850);
  } else {
    markers[id].openPopup();
  }
}

// ── Filter ──────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));

    const visible = [];
    POIS.forEach(p => {
      const show = f === 'all' || p.cat === f;
      if (show) { markers[p.id].addTo(map); visible.push([p.lat, p.lng]); }
      else { map.removeLayer(markers[p.id]); }
    });

    document.getElementById('section-office').style.display = f === 'hotel' ? 'none' : '';
    document.getElementById('section-hotel').style.display  = f === 'office' ? 'none' : '';

    if (visible.length > 1) {
      map.fitBounds(L.latLngBounds(visible), { padding: [60, 60] });
    } else if (visible.length === 1) {
      map.flyTo(visible[0], 15, { duration: 0.6 });
    }
  });
});

// ── Reset ────────────────────────────────────────────────────
document.getElementById('resetView').addEventListener('click', () => {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
  });
  document.getElementById('section-office').style.display = '';
  document.getElementById('section-hotel').style.display  = '';
  POIS.forEach(p => markers[p.id].addTo(map));
  document.querySelectorAll('.poi-card').forEach(c => c.classList.remove('active'));
  Object.values(markers).forEach(m => {
    const el = m.getElement();
    if (el) el.classList.remove('is-active');
    m.closePopup();
  });
  activeId = null;
  map.flyToBounds(overviewBounds, { padding: [60, 60], duration: 0.7 });
});

// ── Print ────────────────────────────────────────────────────
function resetState() {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
  });
  document.getElementById('section-office').style.display = '';
  document.getElementById('section-hotel').style.display  = '';
  POIS.forEach(p => markers[p.id].addTo(map));
  document.querySelectorAll('.poi-card').forEach(c => c.classList.remove('active'));
  Object.values(markers).forEach(m => {
    const el = m.getElement();
    if (el) el.classList.remove('is-active');
    m.closePopup();
  });
  activeId = null;
}

const mapEl = document.getElementById('map');

const PRINT_MAP_H = '360px';

window.addEventListener('afterprint', () => {
  mapEl.style.height = '';
  map.invalidateSize({ animate: false });
  map.fitBounds(overviewBounds, { padding: [60, 60], animate: false });
});

document.getElementById('printBtn').addEventListener('click', () => {
  resetState();
  mapEl.style.height = PRINT_MAP_H;
  map.invalidateSize({ animate: false });
  // fitBounds adapts to actual (print) container width — guarantees all POIs visible
  map.fitBounds(overviewBounds, { padding: [30, 30], animate: false });
  // Wait for tiles at the new zoom to render before opening print dialog
  setTimeout(() => window.print(), 2500);
});
