const OFFICE_CONTERA   = { lat: 48.21218, lng: 17.17298, short: 'Contera' };
const OFFICE_RACIANSKA = { lat: 48.17186, lng: 17.12647, short: 'Račianska' };
const OFFICE_REF = OFFICE_CONTERA;

const POIS = [
  {
    id: 'office-contera', cat: 'office', catLabel: 'Production Office',
    name: 'Contera Park Bratislava',
    addr: 'Na Pántoch 9777, 831 06 Bratislava',
    lat: 48.21218, lng: 17.17298
  },
  {
    id: 'office-racianska', cat: 'office', catLabel: 'Production Office',
    name: 'Production Office Račianska',
    addr: 'Račianska 12481/77A, Bratislava',
    lat: 48.17186, lng: 17.12647,
    mapsQuery: 'Račianska 12481/77A, 831 02 Bratislava'
  },
  {
    id: 'hotel-aurora', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Aurora Apartments',
    addr: 'Vajnorská 32A, 831 03 Bratislava',
    lat: 48.16193, lng: 17.13238,
    carContera: '~12 min', carRacianska: '~5 min',
    logoText: 'A'
  },
  {
    id: 'hotel-ambiente', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Ambiente Apartments',
    addr: 'Janáčkova 2171/1, 811 08 Bratislava',
    lat: 48.14799, lng: 17.11940,
    carContera: '~18 min', carRacianska: '~10 min',
    logo: 'assets/hotels/ambiente.png',
    mapsQuery: 'Smart & Green Living by Ambiente'
  },
  {
    id: 'hotel-sheraton', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Sheraton Bratislava Hotel',
    addr: 'Pribinova 12, 811 09 Bratislava',
    lat: 48.14040, lng: 17.12232,
    carContera: '~20 min', carRacianska: '~12 min',
    logo: 'assets/hotels/sheraton.svg'
  },
  {
    id: 'hotel-roset', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Roset Hotel & Residence',
    addr: 'Štúrova 10, 811 02 Bratislava',
    lat: 48.14260, lng: 17.11404,
    carContera: '~20 min', carRacianska: '~12 min',
    logo: 'assets/hotels/roset.svg'
  },
  {
    id: 'hotel-riverpark', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Grand Hotel River Park, a Luxury Collection Hotel',
    addr: 'Dvořákovo nábrežie 6, 811 02 Bratislava',
    lat: 48.14142, lng: 17.09031,
    carContera: '~22 min', carRacianska: '~18 min',
    logo: 'assets/hotels/riverpark.svg', logoLight: true
  }
];

// Pre-compute category indices so map.js and app.js both have _num
(function () {
  let oi = 0, hi = 0;
  POIS.forEach(p => { p._num = p.cat === 'office' ? ++oi : ++hi; });
})();

function kmTo(a, b) {
  const R = 6371, r = d => d * Math.PI / 180;
  const dLat = r(b.lat - a.lat), dLng = r(b.lng - a.lng);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLng / 2) ** 2;
  return (2 * R * Math.asin(Math.sqrt(x))).toFixed(1);
}

function gmapsHref(p) {
  const q = p.mapsQuery || (p.name + ', ' + p.addr);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
function dirHref(p) {
  return `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;
}
function dirToOfficeHref(p, office) {
  const dest = office || OFFICE_REF;
  return `https://www.google.com/maps/dir/?api=1&origin=${p.lat},${p.lng}&destination=${dest.lat},${dest.lng}`;
}
