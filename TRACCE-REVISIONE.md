# TRACCE — revisione del 10/08/2026

Consegna Cowork → Code. Raccoglie in un colpo solo tutte le correzioni che
Paolo ha passato in rassegna sulla moviola di Tipicità, più i media nuovi che
sono già stati preparati e installati in `public/tipicita/tracce/`.

File toccati: `src/components/TipicitaPage.astro` (interfaccia) e
`src/i18n/tipicita.js` (testi e media). Nient'altro.

---

## 1. Interfaccia — via le diciture MON

Le etichette «MON 01 · MAPPA» eccetera non sono testo nel markup: le genera la
regola `.mon::before { content: attr(data-mon) }`. Vanno tolte perché ridondanti
— i quattro riquadri si spiegano da soli — ma **non vanno semplicemente
cancellate**: servivano anche a chi naviga con lo screen reader.

Quindi: eliminare la regola `.mon::before`; sostituire l'attributo `data-mon`
con `aria-label` sui quattro `<div class="mon">`; e accorciare le stringhe
nell'oggetto `mon` di `tipicita.js`, che come nomi accessibili devono essere
parole, non sigle:

```js
mon: { map: 'Mappa', title: 'Titolo', desc: 'Sintesi', photo: 'Archivio' }
mon: { map: 'Map',   title: 'Title',  desc: 'Brief',   photo: 'Archive' }
```

**Riequilibrio del monitor 02.** Paolo segnala che l'etichetta stava troppo
attaccata all'anno: era a `top: 0.55rem` con l'anno subito sotto. Tolta
l'etichetta, `.mon-title` ha 1,4 rem di padding superiore che ora è di troppo.
Il blocco anno-titolo-luogo è in `justify-content: center` e deve risultare
**otticamente centrato** nel riquadro: ridurre il padding e verificare a schermo,
anche nella variante per laptop bassi (`max-height: 860px`), dove i valori sono
1,1 rem.

## 2. Interfaccia — via le scritte [BOZZA]

Le marcature `[BOZZA]` e `[DRAFT]` stanno dentro le `caption`, che è ciò che il
monitor 04 stampa in basso. Vanno tolte da tutte le didascalie, italiane e
inglesi. La didascalia in sé resta: è contenuto.

Erano il nostro promemoria di cosa Paolo non aveva ancora validato; l'elenco di
quel che resta formalmente da confermare è al §6.

---

## 3. Testi — le correzioni, tappa per tappa

Tutte in `src/i18n/tipicita.js`, in entrambe le lingue.

### 1998–2006 · il nome spagnolo

Il titolo diceva «Castiglia e León», forma ibrida, mentre il corpo del testo
usava già «Castilla y León»: la scheda si contraddiceva. Il titolo italiano
diventa **`Castilla y León`**. L'inglese è già corretto.

### 2011 · Made in Marche Festival — testo nuovo

Il testo raccontava una vetrina in più; è invece il punto in cui il festival
cambia natura. Riscritto su indicazione di Paolo.

**IT** `d:`
> Il tipico smette di essere soltanto cibo. Con la Made in Marche Gallery
> entrano la manualità — dall'artigianato tradizionale al design contemporaneo —
> e i territori con i loro progetti e i loro eventi: tutti gli attrattori in una
> sola esperienza, per un racconto a tre dimensioni.

**EN** `d:`
> Typicity stops being only food. With the Made in Marche Gallery come craft —
> from traditional workshops to contemporary design — and territories with their
> projects and events: every attractor in one experience, for a
> three-dimensional account.

### 2022 · Semplicemente "Festival" — testo nuovo

Mancava la ragione del nome accorciato: è il post-Covid che allarga il perimetro
dal made in Marche alla tipicità italiana.

**IT** `d:`
> Dopo il Covid il racconto si allarga: non più soltanto le esperienze del made
> in Marche, ma una rassegna di tutto ciò che oggi rappresenta la tipicità
> italiana. Il nome si accorcia di conseguenza — Tipicità diventa semplicemente
> "Festival", ecosistema delle micro-Italie autentiche.

**EN** `d:`
> After Covid the story widens: no longer only made-in-Marche experiences, but a
> survey of everything that stands for Italian typicity today. The name shortens
> accordingly — Tipicità becomes simply "Festival", an ecosystem of Italy's most
> authentic micro-communities.

⚠️ Sopra questa voce c'è un commento nel codice che dichiara le tre frasi del
2022 «la frase approvata spezzata in tre, nessuna riscrittura». È superato:
va rimosso, altrimenti la prossima volta qualcuno lo prende sul serio.

### 2022 · EXPO2020 Dubai — testo nuovo

Sparisce la metafora della foglia, che chiedeva al lettore di conoscere già il
marchio, e sparisce «phygital».

**IT** `d:`
> Tipicità dà forma all'immateriale: l'esperienza di viaggio si traduce in un
> cofanetto di profumi, sapori e suggestioni digitali, per raccontare un
> territorio in evoluzione.

**EN** `d:`
> Tipicità gives shape to the intangible: the travel experience becomes a case
> of scents, flavours and digital cues, telling the story of a territory in
> transformation.

### 2024 · Giappone — testo nuovo

Precisa che l'accordo è fra atenei e in ambito food science, e nomina il locale:
**Osteria La Cicerchia**, aperta da Kumiko Muraji a Osaka nel 2013 (quartiere
Kyōmachibori, citata anche dalla guida Michelin — nome verificato).

**IT** `d:`
> Una master class sul brodetto per gli chef giapponesi, l'accordo fra gli atenei
> di Ritsumeikan e Camerino sulla food science e, a Osaka, l'esperienza di Kumiko
> Muraji all'Osteria La Cicerchia.

**EN** `d:`
> A masterclass on brodetto for Japanese chefs, the agreement between the
> universities of Ritsumeikan and Camerino on food science and, in Osaka, Kumiko
> Muraji's Osteria La Cicerchia.

Cade la chiusa «le rotte migliori hanno già qualcuno che le percorre al
contrario»: non era nella versione di Paolo.

### 2025 · Giappone — **correzione fattuale, non solo di stile**

La scheda aveva lo stesso titolo di quella argentina, «X Settimana della Cucina
Italiana nel Mondo». È sbagliato: quella è la missione di novembre in Argentina.
Il Giappone 2025 è giugno, ed è la settimana marchigiana al Padiglione Italia
dell'Expo universale, con Kyoto e poi Tokyo.

**IT**
`t:` `Taste Marche Experience a EXPO2025`
`p:` `Osaka, Kyoto, Tokyo`
`caption:` `EXPO2025 Osaka, Padiglione Italia — dalla missione giapponese.`
`d:`
> Una settimana marchigiana al Padiglione Italia dell'Expo universale, poi Kyoto
> e Tokyo: le tre F — moda, cibo, arredo — e una masterclass alla Ritsumeikan su
> oliva ascolana e maccheroncini di Campofilone. L'incontro di Osaka si intitola
> «Diplomazia culturale».

**EN**
`t:` `Taste Marche Experience at EXPO2025`
`p:` `Osaka, Kyoto, Tokyo`
`caption:` `EXPO2025 Osaka, Italy Pavilion — from the Japanese mission.`
`d:`
> A Marche week at the Italy Pavilion of the World Expo, then Kyoto and Tokyo:
> the three Fs — fashion, food, furniture — and a masterclass at Ritsumeikan on
> Ascoli olives and Campofilone maccheroncini. The Osaka panel is titled
> "Cultural Diplomacy".

⚠️ Anche qui c'è un commento `⚠️` sopra la voce che segnala il testo giapponese
come bozza: va rimosso.

### 2025 · Argentina

Già fatto: la frase finale «E l'anno dopo l'Argentina sale sui banchi di Fermo»
e il «— e ritorno a Fermo» della didascalia risultano tolti. Nessuna azione.

---

## 4. Media nuovi — già preparati e installati

Tutti i file sono **già in `public/tipicita/tracce/`**: Code deve solo
agganciarli in `sharedStages`. Nessun ritocco grafico da fare.

### I due video d'archivio

Sostituiscono gli slideshow di foto delle rispettive tappe. Sono montaggi muti di
quattro spezzoni da sei secondi, 24 secondi in tutto.

| tappa | file | peso | poster |
|---|---|---|---|
| 1993 | `1993.mp4` | 2,1 MB | `1993-poster.jpg` |
| 2011 | `2011.mp4` | 2,0 MB | `2011-poster.jpg` |

Nota tecnica: i master sono PAL 4:3 (720×576). **Non li ho tagliati a 16:9** —
su un filmato d'archivio sarebbe vandalismo. Sono incorniciati con bande laterali
del colore del monitor (`#06272c`) e consegnati già in 854×480, cioè 16:9 pieno:
il CSS non va toccato, `object-fit: cover` continua a funzionare e le bande si
fondono col fondo del riquadro. L'effetto è quello del nastro d'epoca dentro il
monitor, che è esattamente quello che serve.

In `sharedStages`, la voce 1993 perde l'array `photos` (nove file) e la voce 2011
perde il suo (cinque file); entrambe prendono `video`. I file vecchi restano in
cartella e possono essere cancellati con calma.

### Le quattro tappe che erano senza immagini

| tappa | file |
|---|---|
| 2022 · AE — Dubai | `2022ae-1.jpg` … `2022ae-4.jpg` |
| 2022 · TZ — Tanzania | `2022tz-1.jpg` … `2022tz-4.jpg` |
| 2023 · FR — Parigi | `2023fr-1.jpg` … `2023fr-3.jpg` |
| 2023 · UK — Londra | `2023uk-1.jpg` … `2023uk-4.jpg` |

Tutte 1600×900, ritagliate al centro, sotto i 400 KB. La selezione è mia: per
Londra ho scelto lo chef con i coni di fritto, il gruppo con la brigata, la sala
piena e il bancone, scartando gli scatti con microfono e fascia tricolore che
sono i più deboli; per Parigi restano scatti istituzionali perché la tappa è
quella, la presentazione della candidatura Unesco; per Dubai e Tanzania ho preso
i quattro più leggibili in un riquadro piccolo. Se Paolo vuole sostituirne
qualcuna, il materiale integrale resta in `tracce/Da implementare/`.

### Didascalie per i media nuovi

**IT** — 1993: `Fermo, 1993 — dall'archivio video della prima edizione.` · 2011:
`Fermo, 2011 — dal video del Made in Marche Festival.` · 2022 AE:
`EXPO2020 Dubai — dalla missione negli Emirati.` · 2022 TZ:
`Dar es Salaam e Zanzibar — dalla missione in Tanzania.` · 2023 FR:
`Parigi — la presentazione della candidatura Unesco.` · 2023 UK:
`Hampstead, Londra — da Rossodisera.`

**EN** — 1993: `Fermo, 1993 — from the first edition's film archive.` · 2011:
`Fermo, 2011 — from the Made in Marche Festival footage.` · 2022 AE:
`EXPO2020 Dubai — from the Emirates mission.` · 2022 TZ:
`Dar es Salaam and Zanzibar — from the Tanzania mission.` · 2023 FR:
`Paris — presenting the UNESCO candidacy.` · 2023 UK:
`Hampstead, London — at Rossodisera.`

---

## 5. Verifica

Il capitolo .Tracce a 390 / 768 / 1440 e su un laptop basso (altezza 800): la
moviola deve continuare a stare tutta dentro il quadro, barra degli anni
compresa. Controllare che i due video partano, restino muti e vadano in pausa
quando le Tracce escono dal campo (l'IntersectionObserver c'è già), e che il
poster compaia prima del primo fotogramma. Giro di tastiera sulla barra degli
anni. E una verifica con screen reader o ispettore che i quattro riquadri
abbiano ancora un nome accessibile dopo la rimozione delle etichette.

Commit suggerito: `contenuti: Tracce — revisione testi, archivio video 1993 e
2011, media per quattro missioni`.

## 6. Cosa resta da validare

Le didascalie che portavano `[BOZZA]` e che Paolo non ha ancora rivisto sono
quelle di **Lofoten**, **New York** e **Tirana**, più il testo e la didascalia
della tappa **2025 · Argentina**. Tolta la marcatura dallo schermo, il promemoria
resta solo qui: quando c'è tempo si passano in rassegna anche quelle.
