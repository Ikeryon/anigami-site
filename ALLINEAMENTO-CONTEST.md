# Contest — allineare `main` e `astro-setup` senza toccare quello che è online

Consegna Cowork → Code, 19/08/2026.
Richiesta di Paolo: *«la versione che ora è online del contest non va assolutamente
toccata; d'ora in poi main e astro-setup devono avere lo stesso identico contenuto
per quanto riguarda il contest»*.

Tutto quello che segue è stato verificato in sola lettura sul repository. Nessuna
operazione git è stata eseguita da Cowork: le esegue Code.

---

## 1. La notizia buona: sono già allineati quasi del tutto

Ho confrontato uno per uno tutti i file del contest fra `main` (produzione) e
`public/` su `astro-setup`. Il risultato:

| risorsa | esito |
|---|---|
| `conferma-iscrizione-contest/index.html` | identico |
| `invio-materiale-contest-…/index.html` | identico |
| `materiale-ricevuto/index.html` | identico |
| `assets/contest.css` | identico |
| `cookie-policy/index.html` | identico |
| `contest-assets/` — tutti e 14 i file | identici |
| `api/iscrizione.js`, `api/materiale.js` | identici (stesso percorso sui due rami) |
| `logo-imagina.svg`, `site.webmanifest`, favicon | identici |
| **`contest-la-trota-e-il-verdicchio-2026/index.html`** | **diverso: 21 righe** |

Identici significa identici byte per byte, stesso hash git. Non «simili».

E non c'è nessun file del contest presente su un ramo e assente sull'altro, in
nessuna delle due direzioni — con l'unica eccezione al §5.

## 2. L'unica divergenza vera

Sono le 21 righe del commit `9637254` di stamattina, *tracking: evento "inizio
compilazione" del form*: lo script che spara `IscrizioneStart` a Meta e
`iscrizione_start` a GA4 al primo focus o alla prima digitazione nel modulo.
Sta su `main`, non è mai arrivato su `astro-setup`.

È l'unico pezzo, perché l'allineamento precedente l'ha già fatto Paolo a mano nel
commit `5ee939a`, e da lì in poi su `main` è entrato solo questo.

Il blocco va inserito subito dopo lo `</script>` del consenso CookieYes e subito
prima del `<style>` che apre la barra annuncio — cioè esattamente dov'è su `main`.

## 3. Come si allinea, senza rischi

**Non si fa un merge di rami.** `main` e `astro-setup` sono due architetture
diverse dello stesso sito — sito piatto servito dalla radice contro progetto Astro
che compila — e un merge intero rovescerebbe una seconda copia del sito nella
radice del progetto. Il contest si trasferisce per copia, in una direzione sola.

**La direzione è `main` → `astro-setup`.** Quello che è online è la verità; il ramo
di anteprima si adegua. `main` non si tocca in nessun punto di questa procedura.

Il modo esatto — e il motivo per cui è a prova di refuso — è prendere il file da
`main` così com'è, invece di riscrivere a mano le 21 righe:

```bash
git checkout astro-setup
git show main:contest-la-trota-e-il-verdicchio-2026/index.html \
  > public/contest-la-trota-e-il-verdicchio-2026/index.html
```

E la prova che ha funzionato, che deve stampare **niente**:

```bash
git diff main:contest-la-trota-e-il-verdicchio-2026/index.html \
         astro-setup:public/contest-la-trota-e-il-verdicchio-2026/index.html
```

Gli URL coincidono senza toccare nulla: Astro copia `public/` tal quale nella
radice del sito compilato, quindi `public/contest-…/index.html` esce a
`/contest-la-trota-e-il-verdicchio-2026/`, che è lo stesso indirizzo che ha oggi
su `main`. Ho verificato anche che nessuna rotta in `src/pages/` occupi quegli
indirizzi: il contest non passa da Astro, passa da `public/`.

Commit: `contest: allinea la pagina a main (evento inizio compilazione)`.

## 4. La causa vera del fastidio: `dist/` è versionato

`dist/` è tracciato da git — 203 file — e non è in `.gitignore`. È da lì che
nasceva il conflitto della finestra di merge: il file in rosso era
`dist/contest-…/index.html`, cioè **un file generato**, che non ha senso risolvere
a mano perché la prima compilazione lo riscrive da capo.

Prima di toglierlo di mezzo ho verificato che non ci sia niente che viva solo lì:

- 181 dei 203 file di `dist/` sono copie **identiche** (hash uguale) dei
  corrispondenti in `public/`;
- gli altri 22 sono esattamente l'output di Astro — una `index.html` per ognuna
  delle nove rotte in `src/pages/`, più i sette CSS e i sei JS con hash in
  `_astro/`;
- niente altro. **Zero file esclusivi di `dist/`.**

E `vercel.json` su `astro-setup` dichiara `"buildCommand": "npm run build"` con
`"outputDirectory": "dist"`: la produzione se lo ricompila da sé. Tenerlo nel
repository non serve a niente e genera decine di modifiche fantasma a ogni build.

Quindi, **prima** del passo §3, così il file appena copiato non trascina dietro un
`dist/` da riallineare:

```bash
printf '\n# Output di build: lo rigenera Vercel a ogni deploy (vercel.json →\n# outputDirectory: dist). Era versionato per errore: 203 file che a ogni\n# compilazione producevano conflitti su file che nessuno ha scritto a mano.\ndist/\n' >> .gitignore
git rm -r --cached dist/
```

`git rm --cached` toglie dall'indice ma **lascia i file sul disco**: il sito locale
continua a funzionare.

Commit: `tech: dist/ non va versionato — lo ricompila Vercel a ogni deploy`.

## 5. Una cosa da decidere, non da eseguire

Su `main`, alla radice, ci sono `email-1-iscrizione.html` e
`email-2-materiale-ricevuto.html`. Su `astro-setup` non esistono. Sono i modelli
delle mail di Brevo, non pagine del sito — ma stando alla radice di `main` sono
comunque raggiungibili pubblicamente su anigami.it.

Non li ho toccati e non li trasferirei per inerzia. La scelta è di Paolo: se sono
modelli di lavoro, il posto giusto non è `public/`; se invece a Brevo servono
raggiungibili via URL, allora vanno copiati in `public/` come tutto il resto,
altrimenti il giorno in cui `astro-setup` va in produzione smettono di rispondere.
**Questa seconda ipotesi va verificata prima di andare online.**

## 6. La regola permanente

Perché i due rami non divergano più:

1. **Il contest si modifica su `main`.** È quello che è online, con iscrizioni vere
   che passano da `api/iscrizione.js` e da Brevo. Nessuna modifica al contest
   parte da `astro-setup`.
2. **`astro-setup` riceve per copia**, con il comando del §3, mai per merge.
3. **Si ricopia dopo ogni commit di `main` che tocchi il contest**, non alla fine.
   Le 21 righe di oggi sono lì perché fra `5ee939a` e adesso è passata una
   settimana.
4. **Prima di ogni deploy di `astro-setup`** si passa il controllo del §7.

## 7. Il controllo, in un comando

Da tenere nel repository come `scripts/check-contest.sh`, eseguibile in due secondi
e senza effetti collaterali: confronta ogni risorsa del contest fra i due rami e
stampa solo quello che non torna.

```bash
#!/usr/bin/env bash
# Verifica che il contest sia identico fra main e public/ di astro-setup.
# Sola lettura. Esce con 1 se qualcosa diverge.
set -u; ko=0
for f in $(git ls-tree -r --name-only main \
           | grep -E '^(contest-la-trota|conferma-iscrizione|invio-materiale|materiale-ricevuto|cookie-policy|assets/contest|contest-assets/)'); do
  a=$(git rev-parse "main:$f" 2>/dev/null)
  b=$(git rev-parse "astro-setup:public/$f" 2>/dev/null || echo ASSENTE)
  [ "$a" = "$b" ] || { echo "DIVERGE  $f  (astro-setup: ${b:0:7})"; ko=1; }
done
for f in api/iscrizione.js api/materiale.js; do
  [ "$(git rev-parse main:$f)" = "$(git rev-parse astro-setup:$f)" ] \
    || { echo "DIVERGE  $f"; ko=1; }
done
[ $ko -eq 0 ] && echo "contest allineato." || echo "contest NON allineato — vedi sopra."
exit $ko
```

## 8. L'ordine, e un avvertimento

Nell'ordine: `.gitignore` e `git rm --cached dist/` → commit; copia della pagina
contest → commit; script di controllo → commit. Tre commit separati, così se uno
va storto si torna indietro da solo.

**Prima di tutto:** al momento nell'albero di lavoro ci sono modifiche non
committate. Vanno committate o messe da parte prima di cambiare ramo, altrimenti
un `git checkout` andato storto se le porta via. E se git si lamenta di
`.git/index.lock`, quel file va cancellato a mano: è un residuo del ponte, non un
danno.

Verifica finale, dopo tutto: `npm run build`, aprire
`/contest-la-trota-e-il-verdicchio-2026/` dall'anteprima locale, controllare che il
banner CookieYes compaia, che accettando gli analitici parta GA4, e che al primo
clic dentro il modulo scatti `iscrizione_start`. Su `main` non si tocca niente e
niente va ridistribuito: quello che è online resta esattamente com'è.
