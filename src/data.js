const OFFICE_CONTERA = { lat: 48.21218, lng: 17.17298, short: 'Contera' };
const OFFICE_REF = OFFICE_CONTERA;

const POIS = [
  {
    id: 'office-contera', cat: 'office', catLabel: 'Production Office',
    name: 'Contera Park Bratislava',
    addr: 'Na Pántoch 9777, 831 06 Bratislava',
    lat: 48.21218, lng: 17.17298
  },
  {
    id: 'hotel-aurora', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Aurora Apartments',
    addr: 'Vajnorská 32A, 831 03 Bratislava',
    lat: 48.16193, lng: 17.13238,
    carContera: '~12 min',
    logoText: 'A'
  },
  {
    id: 'hotel-ambiente', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Ambiente Apartments',
    addr: 'Janáčkova 2171/1, 811 08 Bratislava',
    lat: 48.14799, lng: 17.11940,
    carContera: '~18 min',
    logo: 'assets/hotels/ambiente.png',
    mapsQuery: 'Smart & Green Living by Ambiente'
  },
  {
    id: 'hotel-sheraton', cat: 'hotel', catLabel: 'Accommodation',
    name: 'Sheraton Bratislava Hotel',
    addr: 'Pribinova 12, 811 09 Bratislava',
    lat: 48.14040, lng: 17.12232,
    carContera: '~20 min',
    logo: 'assets/hotels/sheraton.svg'
  },
  { id: 'loc-sokolovna', cat: 'location', catLabel: 'Filming Location',
    name: 'Sokolovna BALLET ACADEMY',
    addr: 'Sokolská 1, 811 04 Bratislava',
    lat: 48.15647, lng: 17.10319,
    carContera: '~19 min',
    mapsLink: 'https://maps.app.goo.gl/MsCakAbhWZY6VMvn6' },
  { id: 'loc-vsmu', cat: 'location', catLabel: 'Filming Location',
    name: 'VSMU BALLET ACADEMY',
    addr: 'Zochova 1, 811 03 Bratislava',
    lat: 48.14546, lng: 17.10327,
    carContera: '~19 min',
    mapsLink: 'https://maps.app.goo.gl/PVMVwVACcqpR6n6q6' },
  { id: 'loc-mansion-ivanka', cat: 'location', catLabel: 'Filming Location',
    name: 'Mansion Ivanka TRAINING ROOM',
    addr: 'Námestie padlých hrdinov, 900 28 Ivanka pri Dunaji',
    lat: 48.18964, lng: 17.25975,
    carContera: '~13 min',
    mapsLink: 'https://maps.app.goo.gl/jJHvkUsdTeuDKQUu6' },
  { id: 'loc-theatre-mostova', cat: 'location', catLabel: 'Filming Location',
    name: 'Theatre Mostova BALLET ACADEMY',
    addr: 'Mostová 8, 811 02 Bratislava',
    lat: 48.14072, lng: 17.10939,
    carContera: '~20 min',
    mapsLink: 'https://maps.app.goo.gl/HPaZDWqerKqk7acH9' },
  { id: 'loc-ymca', cat: 'location', catLabel: 'Filming Location',
    name: 'YMCA DANCE CLUB EXT',
    addr: 'Karpatská 2, 811 05 Bratislava',
    lat: 48.15683, lng: 17.11359,
    carContera: '~16 min',
    mapsLink: 'https://maps.app.goo.gl/ZK8sbPMXKkTC5hvg6' },
  { id: 'loc-theatre-brno', cat: 'location', catLabel: 'Filming Location',
    name: 'Theatre Brno OPERA',
    addr: 'Malinovského náměstí 1, 657 70 Brno, Czech Republic',
    lat: 49.19620, lng: 16.61347,
    carContera: '~1h 40 min',
    mapsLink: 'https://maps.app.goo.gl/1JomXppX6xmv5uVM6' },
  { id: 'loc-lednice', cat: 'location', catLabel: 'Filming Location',
    name: 'Lednice ACADEMY',
    addr: 'Zámek 1, 691 44 Lednice na Moravě, Czech Republic',
    lat: 48.80160, lng: 16.80537,
    carContera: '~1h 18 min',
    mapsLink: 'https://maps.app.goo.gl/23STo2eUCABysa6h7' },
  { id: 'loc-castle-chachtice', cat: 'location', catLabel: 'Filming Location',
    name: 'Castle Čachtice HIGHLANDS',
    addr: 'Višňové 1229, 916 16 Višňové',
    lat: 48.72504, lng: 17.75307,
    carContera: '~1h 16 min',
    mapsLink: 'https://maps.app.goo.gl/Y5mgg23FLCEK4L1Z6' },
  { id: 'loc-marchegg', cat: 'location', catLabel: 'Filming Location',
    name: 'Marchegg CATHERINE APARTMENT INT',
    addr: 'Rupprechtgasse 7, 2294 Marchegg, Austria',
    lat: 48.25099, lng: 16.92045,
    carContera: '~46 min',
    mapsLink: 'https://maps.app.goo.gl/7J7T1wo9Jm2KzAi16' },
  { id: 'loc-galandova', cat: 'location', catLabel: 'Filming Location',
    name: 'Galandova CATHERINE APARTMENT EXT',
    addr: 'Galandova 3, 811 06 Bratislava',
    lat: 48.14908, lng: 17.09957,
    carContera: '~20 min',
    mapsLink: 'https://maps.app.goo.gl/yPEHEY2CtPh5WJa3A' },
  { id: 'loc-the-club', cat: 'location', catLabel: 'Filming Location',
    name: 'The Club TRENDY CLUB INT',
    addr: 'Rybné námestie 1, 811 02 Bratislava',
    lat: 48.14048, lng: 17.10608,
    carContera: '~19 min',
    mapsLink: 'https://maps.app.goo.gl/Dbp4f7KLtP8mfbVZ8' },
  { id: 'loc-mlynica', cat: 'location', catLabel: 'Filming Location',
    name: 'Mlynica FACTORY BUILDING',
    addr: 'Turbínová 13, 831 04 Nové Mesto',
    lat: 48.17452, lng: 17.15456,
    carContera: '~18 min',
    mapsLink: 'https://maps.app.goo.gl/4HcsnsYfRzTdM9CP7' }
];

// Pre-compute category indices so map.js and app.js both have _num
(function () {
  let oi = 0, hi = 0, li = 0;
  POIS.forEach(p => {
    p._num = p.cat === 'office' ? ++oi : p.cat === 'hotel' ? ++hi : ++li;
  });
})();

function kmTo(a, b) {
  const R = 6371, r = d => d * Math.PI / 180;
  const dLat = r(b.lat - a.lat), dLng = r(b.lng - a.lng);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLng / 2) ** 2;
  return (2 * R * Math.asin(Math.sqrt(x))).toFixed(1);
}

function gmapsHref(p) {
  if (p.mapsLink) return p.mapsLink;
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
