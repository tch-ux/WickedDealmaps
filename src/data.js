const OFFICE_REF = { lat: 48.21748, lng: 17.17567 };

const POIS = [
  {
    id: 'office-contera', cat: 'office', catLabel: 'Production Office',
    name: 'Contera Park Bratislava',
    addr: 'Na Pántoch 9777, 831 06 Bratislava-Rača',
    lat: 48.2096, lng: 17.1724
  },
  {
    id: 'office-racianska', cat: 'office', catLabel: 'Production Office',
    name: 'Production Office Račianska',
    addr: 'Račianska 77A, Bratislava',
    lat: 48.1792, lng: 17.1277
  },
  {
    id: 'hotel-aurora', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Aurora Apartments',
    addr: 'Vajnorská 32A, 831 03 Nové Mesto, Bratislava',
    lat: 48.1633, lng: 17.1352, car: '~12 min', transit: '~25 min'
  },
  {
    id: 'hotel-ambiente', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Ambiente Apartments',
    addr: 'Ulica 29. augusta 36/C, 811 09 Staré Mesto, Bratislava',
    lat: 48.1467, lng: 17.1220, car: '~18 min', transit: '~35 min'
  },
  {
    id: 'hotel-sheraton', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Sheraton Bratislava Hotel',
    addr: 'Pribinova 12, 811 09 Bratislava',
    lat: 48.13942, lng: 17.12424, car: '~20 min', transit: '~40 min'
  },
  {
    id: 'hotel-roset', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Roset Hotel & Residence',
    addr: 'Štúrova 10/A, 811 02 Staré Mesto, Bratislava',
    lat: 48.1428, lng: 17.1145, car: '~20 min', transit: '~40 min'
  },
  {
    id: 'hotel-riverpark', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Grand Hotel River Park, a Luxury Collection Hotel',
    addr: 'Dvořákovo nábrežie 6, 811 02 Staré Mesto, Bratislava',
    lat: 48.1414, lng: 17.0912, car: '~22 min', transit: '~45 min'
  }
];

function kmTo(a, b) {
  const R = 6371, r = d => d * Math.PI / 180;
  const dLat = r(b.lat - a.lat), dLng = r(b.lng - a.lng);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLng / 2) ** 2;
  return (2 * R * Math.asin(Math.sqrt(x))).toFixed(1);
}

function gmapsHref(p) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ', ' + p.addr)}`;
}
function dirHref(p) {
  return `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;
}
function dirToOfficeHref(p) {
  return `https://www.google.com/maps/dir/?api=1&origin=${p.lat},${p.lng}&destination=${OFFICE_REF.lat},${OFFICE_REF.lng}`;
}
