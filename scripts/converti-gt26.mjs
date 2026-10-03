// Conversione per il web del materiale Grand Tour 2026.
// Scene: AVIF + ripiego WebP a 800 e 1600 px. Oggetti: AVIF alla taglia
// nativa, perche' sotto i 500 px un ingrandimento li sfarina.
import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const SRC = String.raw`C:\Users\User\OneDrive\Job\GT\Grand Tour Marche 2026`;
const DST = String.raw`C:\Progetti\anigami-site\public\gt\2026`;

// comune -> [file della scena senza insegna, file dell'oggetto magico]
const TAPPE = [
  ['agugliano', 'Agugliano orizzontale.jpg', 'Agugliano.png'],
  ['ancona', 'Ancona Orizzontale.jpg', 'Ancona.png'],
  ['appignano', 'Appignano.jpg', 'Appignano.png'],
  ['ascoli-piceno', 'Ascoli Piceno.jpg', 'Ascoli Piceno.png'],
  ['cagli', 'Cagli.jpg', 'Cagli.png'],
  ['camerino', 'Camerino.jpg', 'Camerino.png'],
  ['castelraimondo', 'Castelraimondo orizzontale.jpg', 'Castelraimondo.png'],
  ['castignano', 'Castignano.jpg', 'Castignano.png'],
  ['civitanova', 'Civitanova orizzontale.jpg', 'Civitanova.png'],
  ['macerata', 'Macerata_Evo.jpg', 'Macerata.png'],
  ['montecassiano', 'Montecassiano.jpg', 'Montecassiano.png'],
  ['montedinove', 'Montedinove.jpg', 'Montedinove.png'],
  ['porto-recanati', 'Porto recanati orizzontale.jpg', 'Porto Recanati.png'],
  ['potenza-picena', 'Potenza Picena.jpg', 'potenza Picena.png'],
  ['sarnano', 'Sarnano.jpg', 'Sarnano.png'],
  ['sefro', 'Sefro.jpg', 'Sefro.png'],
  ['senigallia', 'Senigallia.jpg', 'Senigallia.png'],
  ['serra-de-conti', 'Serra de Conti.jpg', 'Serra de conti.png'],
  ['serrapetrona', 'Serrapetrona.jpg', 'Serrapetrona.png'],
  ['visso', 'Visso.jpg', 'Visso 1.png'],
];

await mkdir(join(DST, 'tappe'), { recursive: true });
await mkdir(join(DST, 'oggetti'), { recursive: true });

let pesoScene = 0, pesoOggetti = 0;
const righe = [];

for (const [slug, scena, oggetto] of TAPPE) {
  const src = join(SRC, 'Tappe', scena);
  const meta = await sharp(src).metadata();
  const out = {};
  for (const w of [800, 1600]) {
    for (const [fmt, opt] of [['avif', { quality: 50 }], ['webp', { quality: 72 }]]) {
      const f = join(DST, 'tappe', `${slug}-${w}.${fmt}`);
      const info = await sharp(src).resize({ width: w }).toFormat(fmt, opt).toFile(f);
      out[`${fmt}${w}`] = Math.round(info.size / 1024);
      if (fmt === 'avif') pesoScene += info.size;
    }
  }

  // oggetto magico: taglia nativa, niente ingrandimento
  const so = join(SRC, 'Oggetti Magici', oggetto);
  let og = { w: 0, kb: 0 };
  try {
    const mo = await sharp(so).metadata();
    const fo = join(DST, 'oggetti', `${slug}.avif`);
    const io = await sharp(so).toFormat('avif', { quality: 60 }).toFile(fo);
    og = { w: Math.max(mo.width, mo.height), kb: Math.round(io.size / 1024) };
    pesoOggetti += io.size;
  } catch (e) {
    og = { w: 0, kb: 0, err: e.message.slice(0, 40) };
  }

  righe.push({ slug, scena: `${meta.width}\u00d7${meta.height}`, ...out, oggetto: og.w, ogKb: og.kb, err: og.err || '' });
}

console.log('slug'.padEnd(16), 'sorgente'.padEnd(12), 'avif800 webp800 avif1600 webp1600  oggetto');
for (const r of righe) {
  console.log(
    r.slug.padEnd(16), r.scena.padEnd(12),
    String(r.avif800).padStart(6), String(r.webp800).padStart(7),
    String(r.avif1600).padStart(8), String(r.webp1600).padStart(9),
    '  ' + (r.err ? 'ERRORE ' + r.err : `${r.oggetto}px ${r.ogKb}KB`)
  );
}
console.log();
console.log('scene AVIF (800+1600):', Math.round(pesoScene / 1024), 'KB in totale');
console.log('oggetti AVIF:', Math.round(pesoOggetti / 1024), 'KB in totale per', righe.length);
