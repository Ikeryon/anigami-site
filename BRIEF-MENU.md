# BRIEF-MENU — la pellicola: il menù dei progetti

Consegna Cowork → Code, 07/08/2026. Stesso patto degli altri file: Cowork non
tocca il codice, Code trascrive da qui in commit puliti (`feat:`).

Sostituisce `src/components/BrandRail.astro` (v1 del 06/08) e riassorbe i due
rimandi a Imagina oggi duplicati in pagina. Asset già depositato da Cowork:
`public/logos/menu/brand-marks.svg` (7,5 KB, cinque `<symbol>`).

---

## 1. L'idea in una riga

**Il menù è la home, ripiegata.** Gli stessi cinque elementi che sulla home
stanno grandi su un palcoscenico — Imagina e i quattro progetti — su ogni altra
pagina si raccolgono in una capsula piccola, sempre nello stesso punto. La home
è il menù esploso; il menù è la home richiusa.

Da qui il nome interno: **la pellicola**. Cinque fotogrammi in fila su una
striscia. È l'unica cosa che attraversa tutto il sito, e può permetterselo
perché non parla la lingua di nessuno dei quattro marchi: parla quella della
casa. Le fabule restano intrasferibili — i quadri di Tipicità, l'itinerario del
Grand Tour, la strumentazione del TIB — e la pellicola ci scorre sopra senza
entrarci.

## 2. La regola cromatica (è la risposta alla tua domanda)

Le icone che hai messo in cartella sono cinque piastrelle a colore pieno. Cinque
quadrati accesi, fermi in alto a destra su ogni pagina, sarebbero esattamente
quello che temevi: dirompenti. Nessuna cromia di pagina reggerebbe il confronto
con quattro tessere sature che urlano insieme.

La soluzione non è spegnerle con l'opacità — è **togliere la piastrella e
lasciare il segno**. A riposo di ogni marchio resta solo l'inchiostro: la *t*,
la *G*, il faro, il segno di EVO, disegnati nel colore del testo della pagina.
Sono quattro lettere, non quattro bottoni. Il quadrato colorato ricompare solo
in due casi: quando passi sopra un marchio (**al passaggio**) e sul marchio
della pagina in cui ti trovi (**sei qui**).

Così il colore smette di essere decorazione e diventa informazione: si accende
per rispondere. È al tempo stesso la cosa più discreta e la più utile.

Tecnicamente questo si fa perché gli SVG sono ridisegnati con i riempimenti
guidati da variabili CSS invece che da colori fissi — vedi §4. **Non serve che
tu ritocchi i file**: la tonalità di bianco, l'inchiostro e il colore acceso li
decide la pagina, non il file. I cinque SVG originali restano l'unica fonte.

### Chiaro e scuro

Su fondo chiaro (Tipicità #fcfcfa, Grand Tour #fbf4ec, home #faf9f6) la
piastrella accesa usa **il colore ufficiale del marchio**. Su fondo scuro
(Tipicità in Blu #0a1a2b, EVO #190712) il colore ufficiale sparisce nel fondo —
il navy #112f49 su #0a1a2b è invisibile — quindi entra **la variante accesa**,
che è l'accento già dichiarato da quella pagina.

| marchio | piastrella ufficiale | variante accesa |
|---|---|---|
| Tipicità Festival | `#035f6a` | `#05606a` |
| Grand Tour delle Marche | `#ee726c` | `#d1544c` |
| Tipicità in Blu | `#112f49` | `#209fb6` |
| EVO | `#7f1144` | `#b8497a` |

L'inchiostro dentro la piastrella accesa è sempre la carta della pagina
(`--bg-void`), mai `#fff` fisso: così il segno resta pulito anche su crema.

## 3. Anatomia

Da sinistra a destra: **monogramma Imagina** (30 px, in `currentColor`, opacità
0.68) → **filetto verticale** 1 px → **quattro piastrelle** da 30 px con 7 px di
gola.

### Perché il monogramma e non il logotipo (aggiornamento 07/08)

La prima versione usava il logotipo esteso a 80 px e si vedeva male. Non è una
questione di gusto: il logotipo è disegnato a filo di penna, il tratto misura
1,74 unità dentro un disegno largo 250. A 80 px di resa il tratto vale **0,56
pixel** — sotto il pixel. L'antialiasing lo trasforma in grigio, e con l'opacità
sopra sparisce del tutto. Lo stesso difetto è già in pagina oggi: il
`.back-link` di `BrandHeader` lo usa a 78 px.

Portarlo a leggibilità richiede 118 px più un ingrossamento
(`vector-effect: non-scaling-stroke`), e a quel punto la capsula arriva a 360 px
e il rapporto si ribalta: non è più una striscia di cinque segni, è il logo
Imagina con quattro cosine accanto.

La soluzione è il **monogramma** — la M dentro il disco, estratta da
`Logo_Imagina.svg`. È solida, legge benissimo a 30 px su chiaro e su scuro, e
regala una gerarchia che il logotipo non aveva: quattro quadrati con gli angoli
morbidi più **un cerchio**. La casa non è una stanza, e ora si vede dalla forma.

Ed è l'unico elemento che ha diritto a una sfumatura: da spento la M è
inchiostro come gli altri, al passaggio il disco si accende col gradiente
Imagina `#e9464e → #e6007e`, lo stesso su cui chiude il video dell'hero. Un solo
gesto e la casa si distingue senza dire una parola.

Il logotipo esteso resta dov'è a suo agio, cioè dove c'è spazio: la home, il
piede pagina, l'overlay del profilo. Nello sprite è comunque disponibile come
`mk-imagina` accanto a `mk-imagina-mono`.

Tutto vive dentro una **capsula** a raggio pieno con bordo hairline e vetro
smerigliato (`backdrop-filter: blur(12px) saturate(1.2)`). La capsula è la parte
che rende il menù leggibile ovunque: **si porta dietro la propria carta e il
proprio inchiostro**, indipendenti dalla sezione che le scorre sotto. Sul campo
petrolio pieno dell'hero di Tipicità è una tessera bianca con inchiostro
petrolio; su una fotografia del Grand Tour è un vetro crema; su TIB è un vetro
scuro con hairline chiara. Niente `mix-blend-mode: difference` (che oggi regge
il `.back-link` ma esplode appena sotto passa un colore di marchio).

### Didascalia

Sotto la capsula, allineata a destra, una riga sola in maiuscoletto 0.63 rem che
compare al passaggio o al focus e dice il nome per esteso: «Tipicità Festival»,
«Grand Tour delle Marche», «Tipicità in Blu», «EVO», «Imagina — la casa». È uno
slot unico condiviso: la capsula non cambia mai dimensione. Senza questa riga il
menù è bello ma non è utile — quattro segni muti non si indovinano.

## 4. Lo sprite

`public/logos/menu/brand-marks.svg` è già in cartella (11 KB). Contiene sei
`<symbol>` — `mk-tipicita`, `mk-grand-tour`, `mk-tipicita-in-blu`, `mk-evo`,
`mk-imagina-mono` (quello che va in barra) e `mk-imagina` (il logotipo esteso,
per gli altri usi) — più il `<linearGradient id="imagina-grad">`. Sono generati
dai file originali di Paolo — `T.svg`, `GT2.svg`, `TIB.svg`, `EVO.svg`,
`Imagina.svg` e il monogramma ritagliato da `Logo_Imagina.svg` — con due sole
sostituzioni:

- ogni riempimento che era `#fff` → `fill="var(--mk-ink, #fff)"`
- ogni riempimento che era il colore del marchio → `fill="var(--mk-tile, «hex ufficiale»)"`

I fallback sono gli hex veri, quindi anche senza CSS lo sprite rende identico
agli originali. Il `clipPath` del Grand Tour è stato rinominato
`mk-grand-tour-clippath` per non collidere.

Importante: **`GT2.svg` e non `GT.svg`**. Il primo è il quadrato 78,96×78,96
allineato agli altri tre; il secondo è la versione larga 346×138 con la
piastrella incassata, che nella striscia risulterebbe fuori scala.

Va inlinato **una volta sola** nel `BaseLayout` (nascosto, `aria-hidden`), non
caricato via `<img>` — con `<img>` i colori non sono raggiungibili dal CSS ed è
esattamente il limite della v1. Le custom property attraversano il confine
d'ombra di `<use>`, quindi `--mk-tile` e `--mk-ink` impostate sul link arrivano
dentro il simbolo.

```astro
---
// in BaseLayout.astro, prima dello slot
import brandMarks from '../../public/logos/menu/brand-marks.svg?raw';
---
<Fragment set:html={brandMarks} />
```

## 5. Il componente

`src/components/Pellicola.astro` — nome nuovo, `BrandRail.astro` va rimosso.

```astro
---
interface Props {
  lang?: 'it' | 'en';
  current?: 'home' | 'tipicita' | 'grand-tour' | 'tipicita-in-blu' | 'evo';
  /** 'light' | 'dark': decide se la piastrella accesa usa il colore
      ufficiale o la variante accesa. Lo dichiara la pagina. */
  mode?: 'light' | 'dark';
}
---
```

Struttura: un `<nav aria-label="Progetti Imagina">` con dentro il link Imagina,
il filetto (`aria-hidden`), una `<ul>` di quattro `<li><a>` — ognuno con
`<svg viewBox="0 0 78.96 78.96"><use href="#mk-…"/></svg>` e uno
`<span class="sr">` col nome per esteso. Il link della pagina corrente porta
`aria-current="page"`. `enReady` resta come nella v1: finché l'inglese non
esiste si rimanda all'italiano con `hreflang="it"`, senza 404.

Stati, in CSS:

```css
.mark {
  --mk-tile: transparent;
  --mk-ink: currentColor;
  opacity: .70;
  transition: opacity .22s ease, transform .22s ease;
}
.mark:hover, .mark:focus-visible {
  opacity: 1; transform: translateY(-2px);
  --mk-tile: var(--acceso); --mk-ink: var(--bg-void);
}
.mark[aria-current="page"] {
  opacity: 1;
  --mk-tile: var(--acceso); --mk-ink: var(--bg-void);
}
/* --acceso = --brand su pagina chiara, --brand-lit su pagina scura */

/* la casa: unico elemento tondo, unico con la sfumatura */
.casa { --mk-tile: transparent; --mk-ink: currentColor; opacity: .68; }
.casa:hover, .casa:focus-visible {
  opacity: 1;
  --mk-tile: url(#imagina-grad); --mk-ink: var(--bg-void);
}
```

Il `translateY(-2px)` è l'unico movimento: il fotogramma si solleva di un
capello. Sotto `prefers-reduced-motion: reduce` resta solo la dissolvenza del
colore.

## 6. Dove sta, pagina per pagina

Posizione unica e non negoziabile su desktop e tablet: **fissa in alto a
destra**, `top: 1.2rem; right: 1.4rem; z-index: 30`. È l'unico elemento del sito
che non si sposta mai. Sopra i 1200 px la capsula misura circa 250×42 px.

Questo comporta tre pulizie, tutte nella stessa direzione — **la parola/il segno
Imagina deve comparire una volta sola per pagina**, e quella volta è dentro la
pellicola:

1. `BrandHeader.astro`: il `.back-link` col logotipo va tolto (il componente
   resta vuoto o sparisce del tutto).
2. `BrandLayout.astro`: nella `.chapter-bar` va tolto `.bar-home`, e la barra
   prende `padding-right` sufficiente a non finire sotto la capsula
   (≈ 270 px sopra i 900 px di viewport).
3. `TipicitaPage.astro`: `.to-home` (fixed top 1.4rem right 1.6rem) va tolto; il
   selettore lingua `.to-lang` si sposta **sotto** la capsula anziché alla sua
   sinistra — `top: 4.4rem; right: 1.6rem` — così i due non si contendono
   l'angolo. I puntini (`.dots`, right 1.1rem, metà altezza) e la freccia
   `.next` (in basso a destra) non danno fastidio: sono su quote verticali
   diverse.

Sul **Grand Tour** la barra sticky `.strada` occupa tutta la larghezza: stesso
trattamento della `.chapter-bar`, `padding-right` per liberare l'angolo. I
waypoints scorrono e non arrivano al bordo.

Sulla **home** la pellicola **non c'è**. La home è già il menù, a grandezza
naturale: rimetterlo in miniatura in alto a destra sarebbe dire due volte la
stessa cosa nella stessa schermata. Se vuoi un legame visibile fra le due, il
gesto giusto è in uscita: lasciando la home i quattro nomi collassano verso
l'angolo in alto a destra e diventano la capsula (200 ms, solo dissolvenza +
scala; da fare solo se non costa complessità, non è necessario).

## 7. Sul telefono

Sotto i 760 px la capsula lascia l'angolo e scende **al centro in basso**, nella
zona del pollice, con `bottom: max(0.8rem, env(safe-area-inset-bottom))`,
piastrelle da 26 px e logotipo da 62 px.

Il tocco non ha il passaggio del mouse, quindi la didascalia non serve a niente:
al suo posto la capsula si apre. Toccare il logotipo Imagina apre, sopra la
capsula, un piccolo foglio con cinque righe — segno + nome per esteso — e
`aria-expanded` sul bottone. Toccare direttamente una piastrella naviga senza
passare dal foglio, per chi già sa dove sta andando. Le quattro piastrelle
restano sempre visibili anche a foglio chiuso: sono l'indicatore di «dove sono»,
oltre che la scorciatoia.

## 8. Accessibilità e resa

Ogni segno è un link vero con nome accessibile («Tipicità Festival», non «t»);
la piastrella della pagina corrente porta `aria-current="page"`. L'area toccabile
va portata a 44×44 px con il padding, senza cambiare la dimensione del segno —
il segno resta 30, il bersaglio no. Anello di focus visibile su tutti e cinque,
`outline: 2px solid var(--brand-accent); outline-offset: 3px`.

Il contrasto: a riposo l'inchiostro sta a 0.70 di opacità sul colore del testo,
che su tutte e cinque le cromie tiene il 3:1 richiesto per gli elementi grafici —
va verificato a schermo, non a occhio, come è già stato fatto per il `--text-faint`
del TIB. Da acceso il segno interno è la carta della pagina sul colore del
marchio: verificare in particolare il Grand Tour acceso su crema.

`backdrop-filter` ha un fallback: dove manca, la capsula resta piena all'88 %
invece che al 76 % — nessuna regressione, solo un po' meno vetro.

## 9. Cosa serve da te

Niente. Non c'è bisogno di riesportare le icone nella tonalità di bianco del
video: la tonalità la decide la pagina via CSS, e i file che hai messo in
cartella bastano così come sono — il monogramma è stato ritagliato da un asset
che avevi già. Restano aperte due scelte: **la pellicola sulla home, assente
(raccomandato) o presente**, e **il monogramma al posto del logotipo esteso**
(§3, raccomandato).

Vale la pena sapere che se scegliamo il monogramma anche il `.back-link` di
oggi, che soffre dello stesso problema di leggibilità a 78 px, si risolve da
sé — perché quel rimando sparisce, assorbito dalla pellicola.

---

## 10. Checklist per Code

Inlinare lo sprite in `BaseLayout`. Creare `Pellicola.astro` come sopra.
Rimuovere `BrandRail.astro` e i tre rimandi Imagina duplicati (§6). Montarla su
Tipicità (IT ed EN), Grand Tour, Tipicità in Blu, EVO — non sulla home.
Dichiarare `mode="dark"` su TIB ed EVO, `mode="light"` sugli altri. Verificare a
390 / 768 / 1440 con screenshot e autocritica, tastiera inclusa (tab fino alla
quinta voce, focus visibile, `aria-current` letto).
