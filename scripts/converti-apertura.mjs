// Il visual generico 2026 di Simona Pagano, da PDF di stampa a fascia web.
//
// Due tagli, non uno. L'originale e' 2:1 e a quella proporzione va servito
// da tablet in su: la quinta scura degli alberi ai lati e' composizione, non
// cornice, e ritagliarla toglie il senso di stare guardando da dentro un
// bosco. Su telefono pero' 2:1 vuol dire 187px di altezza, e il viandante
// diventa un puntino: li' serve un taglio 3:2 stretto attorno alla figura.
//
// La pagina a monte e' renderizzata una volta sola alla taglia piu' grande
// che serve, poi si rimpicciolisce da quella: rifare il rasterizzatore a
// ogni misura costerebbe venti secondi a giro e darebbe lo stesso risultato.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const MASTER = process.argv[2]; // il PNG reso dal PDF, lato lungo >= 3200
const DST = String.raw`C:\Progetti\anigami-site\public\gt\2026`;

// il centro della scena non e' il centro dell'immagine: viandante e Martino
// stanno appena a destra della meta'
const FUOCO = 0.545;
const LARGHE = [1200, 1800, 2400]; // 2:1, da tablet in su
const STRETTE = [560, 840, 1120]; // 3:2, telefono

await mkdir(join(DST), { recursive: true });

const meta = await sharp(MASTER).metadata();
console.log('sorgente', meta.width + '\u00d7' + meta.height);

const righe = [];

async function scrivi(nome, pipeline, w) {
  const out = {};
  for (const [fmt, opt] of [['avif', { quality: 62 }], ['webp', { quality: 78 }]]) {
    const info = await pipeline()
      .resize({ width: w })
      .toFormat(fmt, opt)
      .toFile(join(DST, `${nome}-${w}.${fmt}`));
    out[fmt] = Math.round(info.size / 1024);
  }
  righe.push({ file: `${nome}-${w}`, ...out });
}

// ── il taglio largo: l'immagine intera ──
for (const w of LARGHE) await scrivi('apertura', () => sharp(MASTER), w);

// ── il taglio stretto: 3:2 attorno al fuoco ──
const altezza = meta.height;
const largCrop = Math.round(altezza * 1.5);
// il ritaglio si incolla ai bordi se il fuoco e' troppo laterale, cosi' non
// si chiede mai a sharp una finestra che esce dall'immagine
const sinistra = Math.max(0, Math.min(meta.width - largCrop, Math.round(meta.width * FUOCO - largCrop / 2)));
console.log('taglio stretto', largCrop + '\u00d7' + altezza, 'da x=' + sinistra);
for (const w of STRETTE) {
  await scrivi('apertura-stretta', () => sharp(MASTER).extract({ left: sinistra, top: 0, width: largCrop, height: altezza }), w);
}

console.log();
console.log('file'.padEnd(26), 'AVIF'.padStart(7), 'WebP'.padStart(7));
for (const r of righe) console.log(r.file.padEnd(26), (r.avif + ' KB').padStart(7), (r.webp + ' KB').padStart(7));
