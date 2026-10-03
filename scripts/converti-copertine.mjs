// "Dodici anni di viaggi": un pezzo per edizione, dal 2014 al 2025.
//
// Non si ritaglia niente. I materiali hanno proporzioni diverse per natura —
// il pieghevole del 2014 e' un A5 verticale, il post del 2020 e' un quadrato,
// la cartolina del 2024 e' orizzontale — e infilarli tutti in una stessa
// finestra vorrebbe dire tagliare teste e titoli. Stanno invece allineati
// per ALTEZZA, come cartoline appese a un filo: ognuno largo quanto e'.
//
// Di conseguenza si converte per altezza, non per larghezza: 300 px, che e'
// l'altezza della striscia, 600 per gli schermi a densita' doppia, e 1400
// per l'ingrandimento nel sipario. `withoutEnlargement` fa sì che i pezzi
// piu' poveri — le cartoline 2018 e 2019, che in archivio esistono solo a
// 397x567 — restino alla loro taglia invece di essere gonfiati: meglio una
// riproduzione piccola e onesta che una grande e sfocata.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SEL = String.raw`C:\Users\User\OneDrive\Job\GT\00`;
const ARC = String.raw`C:\Users\User\OneDrive\Imagina Srl\Archivio Grafico GT`;
const RES = String.raw`C:\Users\User\AppData\Local\Temp\claude\C--Progetti-perla-sibillini\834e32f1-93bb-4f6e-bb55-7ff7a5879064\scratchpad\gt14`;
const DST = String.raw`C:\Progetti\anigami-site\public\gt\copertine`;

const ALTEZZE = [300, 600, 1400];

// anno -> file sorgente
const SCELTE = [
  ['2014', join(RES, '2014_Flyer-p2.png')],
  ['2015', join(ARC, '2015', 'Tipicita__Flyer_1.jpg')],
  ['2016', join(ARC, '2016', 'Cartoline', 'Tipicita_Cartolina_Ascoliva.jpg')],
  ['2017', join(SEL, '2017', 'Cartolina_SEFRO1.jpg')],
  ['2018', join(SEL, '2018', 'Cartolina_SANT ANGELO VADO.jpg')],
  ['2019', join(SEL, '2019', 'Cartolina_CANTIANO_2019.jpg')],
  ['2020', join(SEL, '2020', 'MD9_1400x1400.jpg')],
  ['2021', join(SEL, '2021', '1400x1400_GT21_Brodetto21.jpg')],
  ['2022', join(ARC, '2022', 'Box GT', 'Box1.jpg')],
  ['2023', join(ARC, '2023', 'GTDM 23 trittico instagram DIC CINGOLI_Tavola disegno 1 copia 15.jpg')],
  ['2024', join(ARC, '2024', 'Tappe', 'Cartolina GTdM24 SenigalliaGourmet_Tavola disegno 1.jpg')],
  ['2025', join(ARC, '2025', 'Tappe', 'Post_IGFB_Contenuti_Tavola disegno 1.jpg')],
];

await mkdir(DST, { recursive: true });

const righe = [];
for (const [anno, src] of SCELTE) {
  const meta = await sharp(src).metadata();
  const out = { anno, sorgente: `${meta.width}\u00d7${meta.height}` };
  for (const h of ALTEZZE) {
    for (const [fmt, opt] of [['avif', { quality: 58 }], ['webp', { quality: 76 }]]) {
      const info = await sharp(src)
        .resize({ height: h, withoutEnlargement: true })
        .toFormat(fmt, opt)
        .toFile(join(DST, `${anno}-${h}.${fmt}`));
      if (h === 1400 && fmt === 'avif') { out.grandeW = info.width; out.grandeH = info.height; }
      out[`${fmt}${h}`] = Math.round(info.size / 1024);
    }
  }
  // la larghezza al naturale serve al markup: senza, la pagina non sa quanto
  // spazio riservare e la striscia salta mentre carica
  out.rapporto = +(meta.width / meta.height).toFixed(4);
  out.larghezzaA300 = Math.round(300 * meta.width / meta.height);
  righe.push(out);
}

console.log('anno  sorgente      largh@300  avif300 avif600 avif1400   grande');
for (const r of righe) {
  console.log(
    r.anno, ' ', r.sorgente.padEnd(13),
    String(r.larghezzaA300).padStart(6), '   ',
    String(r.avif300).padStart(5), String(r.avif600).padStart(7), String(r.avif1400).padStart(8),
    '   ' + r.grandeW + '×' + r.grandeH
  );
}
console.log();
console.log('AVIF 300:', righe.reduce((s, r) => s + r.avif300, 0), 'KB  |  AVIF 600:', righe.reduce((s, r) => s + r.avif600, 0), 'KB');
console.log();
console.log('da incollare in src/i18n/grand-tour.js:');
for (const r of righe) console.log(`        { a: '${r.anno}', w: ${r.larghezzaA300}, gw: ${r.grandeW}, gh: ${r.grandeH} },`);
