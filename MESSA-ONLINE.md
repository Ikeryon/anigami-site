# La messa online di anigami.it

Consegna Cowork → Code, 2 ottobre 2026. Tutto quello che va fatto prima di
staccare il dominio dal sito piatto, in ordine. **Il contest è scaduto e va
offline** (decisione di Paolo, 02/10), con il codice conservato per l'anno prossimo,
quando le pagine verranno aggiornate e spostate su tipicita.it.

---

## 1. Il contest si archivia prima di toccarlo

Il codice non va «salvato» copiandolo da qualche parte: è già in git, su tutti e due
i rami, e ci resta per sempre. Quello che serve è **un nome con cui ritrovarlo fra
un anno**, quando nessuno si ricorderà in quale commit stava.

Quindi, **prima di qualunque altra cosa**, un'etichetta immutabile sulla testa di
`main`:

```
git tag -a contest-trota-verdicchio-2026 -m "La trota e il verdicchio 2026: pagine, assets e funzioni Brevo, com'erano online"
git push origin contest-trota-verdicchio-2026
```

Da lì in poi il recupero è una riga, e va scritto nel documento perché fra un anno
sarà l'unica cosa che conta:

```
git show contest-trota-verdicchio-2026:contest-la-trota-e-il-verdicchio-2026/index.html
```

**`main` non si cancella.** Resta dov'è come ramo storico: costa niente e un giorno
qualcuno vorrà vedere com'era il sito prima.

## 2. I vecchi indirizzi non devono morire

Il contest è stato promosso: ci sono link nelle inserzioni, nelle condivisioni, nei
messaggi. **Un 404 su un indirizzo pubblicizzato è peggio di una pagina scaduta**,
perché dice che il sito è rotto invece che dire che il bando è chiuso.

Quattro reindirizzamenti permanenti in `vercel.json`, verso la landing del Grand
Tour — che è la casa giusta, visto che il contest portava il suo marchio:

```json
"redirects": [
  { "source": "/contest-la-trota-e-il-verdicchio-2026", "destination": "/grand-tour-delle-marche/", "permanent": true },
  { "source": "/invio-materiale-contest-la-trota-e-il-verdicchio-2026", "destination": "/grand-tour-delle-marche/", "permanent": true },
  { "source": "/conferma-iscrizione-contest", "destination": "/grand-tour-delle-marche/", "permanent": true },
  { "source": "/materiale-ricevuto", "destination": "/grand-tour-delle-marche/", "permanent": true }
]
```

Attenzione a `trailingSlash: true`, che è già impostato: verificate che il
reindirizzamento scatti sia con la barra finale sia senza. È il genere di cosa che
funziona in locale e no in produzione.

## 3. Le due funzioni verso Brevo si spengono, e non è pulizia

`api/iscrizione.js` e `api/materiale.js` restano raggiungibili anche quando le pagine
non ci sono più, e **continuano a scrivere contatti su Brevo** con la chiave che
hanno nelle variabili d'ambiente. Un endpoint vivo per un contest chiuso è una porta
aperta su un sistema che contiene dati di persone vere.

Vanno rimossi dal ramo `astro-setup` (restano nell'etichetta del §1, che è il punto).
E quando sono rimossi, **le variabili d'ambiente di Brevo su Vercel non servono più**:
segnalatelo a Paolo, che le toglie lui dal pannello — una chiave che resta configurata
per codice che non esiste è il modo classico di perderla di vista.

## 4. Le pagine del contest escono da `public/`

`contest-la-trota-e-il-verdicchio-2026/`, `invio-materiale-contest-…/`,
`conferma-iscrizione-contest/`, `materiale-ricevuto/`, `assets/contest.css` e
`contest-assets/` vanno via da `public/`: con i reindirizzamenti del §2 quegli
indirizzi non devono più servire un file.

**`cookie-policy/` invece resta.** Vale la pena dire perché, perché la tentazione di
toglierla c'è: con il contest spento il sito nuovo **non ha più né moduli né
tracciamento**, il che è una posizione ottima — nessun banner da mostrare — ma la
pagina serve comunque come riferimento, ed è linkata da fuori.

## 5. La 404

Non esiste, e senza di lei chiunque sbagli un indirizzo — o segua un vecchio link del
sito piatto — finisce sulla pagina bianca di Vercel. Su un sito costruito così si
vede in un secondo.

Serve `src/pages/404.astro`, **con la cromia e la tipografia della casa**, non un
avviso di sistema: campo scuro, il monogramma, una riga in Cormorant che dice che la
pagina non c'è, e due vie d'uscita — la home e i quattro progetti. Nessuna
illustrazione buffa, nessun «ops»: il registro è quello del resto del sito.
Bilingue secondo la stessa regola delle altre pagine.

## 6. Le tre cartelle di servizio

`public/_sh` (dieci miei provini), `public/_chk` e `public/_incoming` (doppioni degli
asset del Grand Tour) finirebbero pubblicate a indirizzi raggiungibili. Dentro non
c'è niente di riservato — l'ho verificato — ma è un mega e mezzo servito a nessuno
scopo. Via, e nel `.gitignore` perché non tornino.

## 7. `robots.txt` e `sitemap.xml`

Mancano tutti e due, e adesso contano più di prima perché il sito è bilingue: una
sitemap con gli `hreflang` è il modo in cui si dice a un motore di ricerca che
`/tipicita/` e `/en/tipicita/` sono la stessa pagina in due lingue, e senza quella
rischiano di farsi concorrenza.

Astro ha `@astrojs/sitemap` e la genera in build; `robots.txt` è un file di tre
righe che la dichiara. Mezz'ora in tutto, e si fa una volta.

---

## 8. L'ordine della serata, e chi fa cosa

**Code, prima:** l'etichetta (§1), i reindirizzamenti (§2), la rimozione delle due
funzioni e delle pagine (§3-4), la 404 (§5), la pulizia (§6), robots e sitemap (§7).
Poi `npm run build` e un giro sulla preview Vercel.

**Cowork:** le immagini di anteprima social, che oggi non ha nessuna pagina — arrivano
da me, tipografiche, una per pagina.

**Paolo, ed è il gesto che accende tutto:** su Vercel, progetto `anigami-site` →
Settings → Git → **Production Branch**, da `main` a `astro-setup`, poi Redeploy.
⚠️ **Verificate prima che anigami.it sia attaccato a questo progetto e quale sia oggi
il ramo di produzione:** è l'unica cosa che non ho potuto controllare da qui, ed è
quella da cui dipende tutto il resto. Di sera, come tutte le cose che cambiano un
dominio.

Dopo, senza fretta: l'inglese delle altre quattro pagine, il documento della
relazione di impatto, e le misure di Lighthouse sulla preview.

Commit suggeriti, separati:
`contest: archiviato in contest-trota-verdicchio-2026, pagine e funzioni fuori da astro-setup`
`feat: pagina 404 nella cromia della casa`
`tech: robots.txt, sitemap con hreflang, via le cartelle di servizio`
