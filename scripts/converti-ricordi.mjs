// "Ricordi di viaggio": le cartoline del Grand Tour, più d'una per edizione,
// perché la striscia ne pesca una a caso a ogni caricamento.
//
// ⚠️ COSA ENTRA E COSA NO. Solo i pezzi del Grand Tour: le cartoline e le
// locandine con cui il Grand Tour annuncia una tappa. NON entrano i
// materiali degli eventi ospitati (la locandina del Brodetto Show, il
// depliant di GustaPorto, il manifesto del Comune), che portano un altro
// marchio e raccontano un'altra cosa; e non entrano i depliant e i
// segnalibri del Grand Tour stesso, che sono stampati di servizio. Regola
// di Paolo, 3/10/2026.
//
// Conseguenza da sapere: 2014, 2015, 2022 e 2025 restano fuori, perché di
// quelle edizioni in archivio ci sono solo pieghevoli, segnalibri e foto di
// una scatola. Il titolo non promette un numero, quindi il buco non mente.
//
// Si converte per ALTEZZA, non per larghezza: i pezzi hanno proporzioni
// diverse per nascita e nella striscia stanno allineati per il lato alto.
// 300 px è l'altezza della striscia, 600 per gli schermi a densità doppia,
// 1400 per l'ingrandimento. `withoutEnlargement` lascia alla loro taglia i
// pezzi che in archivio esistono solo piccoli: meglio una riproduzione
// piccola e onesta che una grande e sfocata.
import sharp from 'sharp';
import { mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const SEL = String.raw`C:\Users\User\OneDrive\Job\GT\00`;
const ARC = String.raw`C:\Users\User\OneDrive\Imagina Srl\Archivio Grafico GT`;
const DST = String.raw`C:\Progetti\anigami-site\public\gt\ricordi`;

const ALTEZZE = [300, 600, 1400];

// anno -> [chiave, percorso, didascalia, alt]
const POZZI = {
  2016: [
    ['ascoliva', join(ARC, '2016', 'Cartoline', 'Tipicita_Cartolina_Ascoliva.jpg'),
      'Ascoliva, Festival mondiale dell’oliva ripiena — Ascoli Piceno',
      'Cartolina su fondo color carta da pacchi: un’oliva incoronata, disegnata a tratto come un’incisione antica.'],
    ['pollenza', join(ARC, '2016', 'Tipicita_Cartolina9.jpg'),
      'Antiquariato, restauro e artigianato artistico — Pollenza',
      'Cartolina su fondo color carta da pacchi: un baule antico aperto, disegnato a tratto.'],
  ],
  2017: [
    ['sefro', join(SEL, '2017', 'Cartolina_SEFRO1.jpg'),
      'La trota e il Verdicchio — Sefro',
      'Cartolina su fondo rosa pallido: una trota azzurra disegnata piatta, con il titolo della festa in giallo.'],
    ['castelraimondo', join(SEL, '2017', 'Cartolina_CASTELRAIMONDO1.jpg'),
      'Infiorata del Corpus Domini — Castelraimondo',
      'Cartolina su fondo rosa pallido: due mani aperte che reggono un fiore bianco e azzurro.'],
    ['montappone', join(SEL, '2017', 'Cartolina-Montappone_Fronte.jpg'),
      'Il Cappello di Paglia — Montappone',
      'Cartolina su fondo rosa pallido: il volto stilizzato di una donna sotto un grande cappello rosso.'],
    ['visso', join(ARC, '2017', 'Cartoline', 'Visoo.jpg'),
      'Gusto — Visso',
      'Cartolina orizzontale su fondo rosa pallido: una forma di pane tonda e sorridente disegnata piatta.'],
  ],
  2018: [
    ['sant-angelo', join(SEL, '2018', 'Cartolina_SANT ANGELO VADO.jpg'),
      'Domus Romana — Sant’Angelo in Vado',
      'Cartolina: due profili affiancati dentro un medaglione circolare, uno chiaro e uno scuro, come un mosaico romano.'],
  ],
  2019: [
    ['montappone', join(SEL, '2019', 'Cartolina MONTAPPONE_2019.jpg'),
      'Paje, più di un grano — Montappone',
      'Cartolina su fondo grigio chiaro: il volto di una donna sotto un cappello di paglia rosso.'],
    ['cantiano', join(SEL, '2019', 'Cartolina_CANTIANO_2019.jpg'),
      'La piazza del gusto — Cantiano',
      'Cartolina su fondo grigio chiaro: una visciola e un frutto giallo uniti da un filo che disegna un cuore.'],
    ['sant-angelo', join(SEL, '2019', 'Fronte cartolina.jpeg'),
      'Domus Romana — Sant’Angelo in Vado',
      'Cartolina su fondo grigio chiaro: due profili affiancati dentro un medaglione dorato.'],
    ['monte-rinaldo', join(SEL, '2019', 'cartolina 1.jpg'),
      'Tipicità & Archeologia — Monte Rinaldo',
      'Cartolina su fondo grigio chiaro: un capitello ionico giallo con forchetta e coltello ai lati.'],
  ],
  2020: [
    ['apecchio', join(SEL, '2020', 'ApecchioTB_1400x1400.jpg'),
      'Tartufo & Birra — Apecchio',
      'Post quadrato: la sagoma delle Marche riempita di fotografie, con una donna che annusa un tartufo.'],
    ['porto-recanati', join(SEL, '2020', 'Brodetto1400x1400.jpg'),
      'A tutto Brodetto — Porto Recanati',
      'Post quadrato: la sagoma delle Marche riempita di fotografie, con un piatto di brodetto e una donna in riva al mare.'],
    ['montedinove', join(SEL, '2020', 'MD9_1400x1400.jpg'),
      'Sibillini in Rosa — Montedinove',
      'Post quadrato: la sagoma delle Marche riempita di fotografie, con una donna che tiene in mano delle mele rosa.'],
    ['cagli', join(SEL, '2020', 'Pipa_1400x1400.jpg'),
      'Festa della Pipa — Cagli',
      'Post quadrato: la sagoma delle Marche riempita di fotografie, con una rocca, una pipa e due ritratti.'],
  ],
  2021: [
    ['monte-rinaldo', join(SEL, '2021', '1400x1400_Archeologia21.jpg'),
      'Tipicità e Archeologia — Monte Rinaldo',
      'Post quadrato su fondo bianco: un’anfora bruna dentro un cerchio, sopra righe orizzontali sottili.'],
    ['porto-recanati', join(SEL, '2021', '1400x1400_GT21_Brodetto21.jpg'),
      'Un mare di Brodetto — Porto Recanati',
      'Post quadrato su fondo bianco: un pesce bianco dentro un cerchio verde petrolio.'],
    ['civitanova', join(SEL, '2021', '1400x1400_GT21_Gustaporto21.jpg'),
      'GustaPorto — Civitanova Marche',
      'Post quadrato su fondo bianco: una barca a vela dentro un cerchio blu, sopra un profilo di onde.'],
    ['castelraimondo', join(SEL, '2021', '1400x1400_GT21_Infiorata.jpg'),
      'Infiorata del Corpus Domini — Castelraimondo',
      'Post quadrato su fondo bianco: un fiore stilizzato dentro un cerchio magenta.'],
  ],
  // ⚠️ nella cartella del 2022 ogni cartolina esiste anche in copie
  // «-LAPTOP-85O87RDM», che sono i doppioni di conflitto di OneDrive: si
  // prende sempre il nome pulito
  2022: [
    ['acqualagna', join(SEL, '2022', 'Cartoline_ESITOUR_Acqualagna22.jpg'),
      'Fiera Nazionale del Tartufo Bianco — Acqualagna',
      'Cartolina arancione: il profilo bianco del borgo e tre strisce diagonali di fotografie, con tartufi e un calice.'],
    ['frontone', join(SEL, '2022', 'Cartoline_ESITOUR_Frontone.jpg'),
      'Mercatini di Natale e la Crescia De.Co. — Frontone',
      'Cartolina arancione: il profilo bianco del castello e tre strisce diagonali di fotografie invernali.'],
    ['civitanova', join(SEL, '2022', 'Cartoline_ESITOUR_Gustaporto22.jpg'),
      'GustaPorto — Civitanova Marche',
      'Cartolina arancione: il profilo bianco del porto e tre strisce diagonali di fotografie, con un piatto di pesce.'],
    ['montedinove', join(SEL, '2022', 'Cartoline_ESITOUR_Montedinove22.jpg'),
      'Sibillini in Rosa — Montedinove',
      'Cartolina arancione: il profilo bianco del borgo e tre strisce diagonali di fotografie, con mele rosa.'],
  ],
  2023: [
    ['montedinove', join(ARC, '2023', 'Montedinove FRONTE.jpg'),
      'Sibillini in Rosa — Montedinove',
      'Cartolina orizzontale su fondo di carta geografica: un nastro arancione col titolo e due mele rosa disegnate.'],
    ['ottobre', join(ARC, '2023', 'Fronte OTTOBRE.jpg'),
      'Le tappe di ottobre',
      'Cartolina orizzontale su fondo di carta geografica: una giostra illustrata e il nastro «Oltre la destinazione».'],
    ['cingoli', join(ARC, '2023', 'GTDM 23 trittico instagram DIC CINGOLI_Tavola disegno 1 copia 15.jpg'),
      'Dicembre: oltre la destinazione',
      'Post quadrato su fondo di carta geografica: una giostra illustrata sopra un grande nastro arancione.'],
    ['pieve-torina', join(ARC, '2023', 'Pieve Torina cartolina TDT23_Tavola disegno 1.jpg'),
      'Le Terre del Tartufo — Pieve Torina',
      'Cartolina orizzontale su fondo di carta geografica: un nastro rosso scuro col titolo e una tavola imbandita.'],
  ],
  2024: [
    ['montedinove', join(ARC, '2024', 'Tappe', 'Cartolina A.jpg'),
      'Sibillini in Rosa — Montedinove',
      'Cartolina orizzontale su fondo di assi di legno bianche: un nastro arancione col titolo e una mela rosa.'],
    ['potenza-picena', join(ARC, '2024', 'Tappe', 'Cartolina GTdM24 Grappolodoro_Tavola disegno 1.jpg'),
      'Grappolo d’Oro — Potenza Picena',
      'Cartolina orizzontale su fondo di assi di legno bianche: un nastro arancione col titolo e un grappolo d’uva.'],
    ['senigallia', join(ARC, '2024', 'Tappe', 'Cartolina GTdM24 SenigalliaGourmet_Tavola disegno 1.jpg'),
      'Senigallia Città Gourmet',
      'Cartolina orizzontale su fondo di assi di legno bianche: un nastro arancione col titolo e una conchiglia.'],
    ['civitanova', join(ARC, '2024', 'Tappe', 'Gustaporto cartolina B.jpg'),
      'GustaPorto — Civitanova Marche',
      'Cartolina orizzontale su fondo di assi di legno bianche: un nastro arancione col titolo e un polpo disegnato.'],
  ],
};

await rm(DST, { recursive: true, force: true });
await mkdir(DST, { recursive: true });

const righe = [];
for (const [anno, pezzi] of Object.entries(POZZI)) {
  for (const [chiave, src, t, alt] of pezzi) {
    const nome = `${anno}-${chiave}`;
    const meta = await sharp(src).metadata();
    const out = { anno, chiave, nome, t, alt };
    for (const h of ALTEZZE) {
      for (const [fmt, opt] of [['avif', { quality: 58 }], ['webp', { quality: 76 }]]) {
        const info = await sharp(src)
          .resize({ height: h, withoutEnlargement: true })
          .toFormat(fmt, opt)
          .toFile(join(DST, `${nome}-${h}.${fmt}`));
        if (h === 1400 && fmt === 'avif') { out.gw = info.width; out.gh = info.height; }
        out[`${fmt}${h}`] = Math.round(info.size / 1024);
      }
    }
    out.w = Math.round(300 * meta.width / meta.height);
    righe.push(out);
  }
}

console.log('nome                      largh@300  avif300 avif600 avif1400   grande');
for (const r of righe) {
  console.log(
    r.nome.padEnd(24), String(r.w).padStart(6), '   ',
    String(r.avif300).padStart(5), String(r.avif600).padStart(7), String(r.avif1400).padStart(8),
    '   ' + r.gw + '\u00d7' + r.gh
  );
}
console.log();
console.log('pezzi:', righe.length, '| annate:', Object.keys(POZZI).length);
console.log('AVIF 300:', righe.reduce((s, r) => s + r.avif300, 0), 'KB  |  AVIF 600:',
  righe.reduce((s, r) => s + r.avif600, 0), 'KB  |  AVIF 1400:', righe.reduce((s, r) => s + r.avif1400, 0), 'KB');
console.log();
console.log('da incollare in src/i18n/grand-tour.js:');
for (const anno of Object.keys(POZZI)) {
  console.log(`        { a: '${anno}', pezzi: [`);
  for (const r of righe.filter((x) => x.anno === anno)) {
    console.log(`          { f: '${r.nome}', w: ${r.w}, gw: ${r.gw}, gh: ${r.gh},`);
    console.log(`            t: '${r.t.replace(/'/g, "\\'")}',`);
    console.log(`            alt: '${r.alt.replace(/'/g, "\\'")}' },`);
  }
  console.log('        ] },');
}
