const map = L.map('map', { scrollWheelZoom: true, zoomControl: true });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const overviewBounds = L.latLngBounds(POIS.map(p => [p.lat, p.lng]));
map.fitBounds(overviewBounds, { padding: [60, 60] });

function makeMarkerHTML(p) {
  const fill = p.cat === 'office' ? 'var(--office)' : p.cat === 'hotel' ? 'var(--hotel)' : 'var(--location)';
  const iconId = p.cat === 'office' ? '#ic-briefcase' : p.cat === 'hotel' ? '#ic-bed' : '#ic-clapper';
  const glyphHTML = p.logoText
    ? `<span class="marker-logo-text">${p.logoText}</span>`
    : p.logo
      ? `<img class="marker-logo" src="${p.logo}" alt="${p.name}" />`
      : `<svg viewBox="0 0 24 24"><use href="${iconId}"></use></svg>`;
  return `
    <div class="pin">
      <svg class="marker-svg" width="36" height="44" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 43.2 C18 43.2 4 27 4 17 A14 14 0 1 1 32 17 C32 27 18 43.2 18 43.2 Z"
              fill="${fill}" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <div class="glyph">${glyphHTML}</div>
      <div class="badge">${p._num}</div>
    </div>`;
}

function makePopupHTML(p) {
  let metaHTML = '';
  if (p.cat === 'hotel' || p.cat === 'location') {
    const kmC = kmTo(p, OFFICE_CONTERA);
    const kmR = kmTo(p, OFFICE_RACIANSKA);
    metaHTML = `
      <div class="pop-meta">
        <span>${kmC} km · 🚗 ${p.carContera} → Contera</span>
      </div>
      <div class="pop-meta">
        <span>${kmR} km · 🚗 ${p.carRacianska} → Račianska</span>
      </div>`;
  }
  return `
    <div class="pop-cat ${p.cat}">${p.catLabel}</div>
    <p class="pop-name">${p.name}</p>
    <p class="pop-addr">${p.addr}</p>
    ${metaHTML}
    <a class="pop-link" href="${dirHref(p)}" target="_blank" rel="noopener">Get directions →</a>
  `;
}

const markers = {};

POIS.forEach(p => {
  const icon = L.divIcon({
    className: 'wd-marker',
    html: makeMarkerHTML(p),
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -40]
  });
  const m = L.marker([p.lat, p.lng], { icon }).addTo(map);
  m.bindPopup(makePopupHTML(p));
  m.on('click', () => focusPOI(p.id, false));
  markers[p.id] = m;
});

setTimeout(() => map.fitBounds(overviewBounds, { padding: [60, 60] }), 400);
