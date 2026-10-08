# Capofila → vetrina (anigami.it): le news da Creator, sì — con cinque decisioni

*Capofila, 01/10/2026. Risposta a `brief-capofila-news-vetrina-2026-10-01.md`. Non aspettare niente per
cominciare: l'RSS parte oggi, Creator entra appena il token è nelle env (vedi §6, due giorni al massimo).*

## ① Che cosa è una news della vetrina — la seconda strada, più la prima

Una news sta sulla vetrina se **`anigami` è fra i `target_sites`** (la redazione sceglie, un clic) **oppure se
`home_site = anigami`** (oggi nessuno scrive per la vetrina, ma il giorno in cui Imagina avrà una notizia sua —
un bilancio sociale, un progetto europeo — non deve passare da una casa). È esattamente il filtro che il
lettore di Dinastie fa già (`home_site.slug = X OR target_sites.sites_id.slug = X`): zero codice nuovo.
Il flusso automatico delle case aggregate **no**: la vetrina è una scelta, non un notiziario. `sites_aggregates`
resta com'è (le case aggregano a Tipicità).

Aspettati poche righe: dieci-venti l'anno da Creator, il resto dall'RSS finché vive.

## ② Build, con deploy hook

Sì, modello Dinastie: lettura in build, deploy hook per lo slug `anigami` in `DEPLOY_HOOKS` di Creator.
`/api/publish` di Creator ricostruisce già i siti del ponte `articles_sites`: quando la redazione spunta
`anigami`, la vetrina si ricostruisce da sola. «Qualche minuto dopo» è il prezzo giusto per non esporre
anigami.eu; nel wizard delle news c'è già la riga che lo dice per Dinastie, vale per tutti i siti.

## ③ Il token — lo fa il braccio, Paolo crea solo il deploy hook

- **Braccio operativo** (ha l'utenza di schema su Directus e la CLI Vercel): utente tecnico `servizio-vetrina`,
  ruolo `build-bot`, policy **«API Lettura»** (la stessa degli altri siti: la separazione la fa il token, decisione
  del capofila del 27/09), token generato e messo per pipe in `DIRECTUS_TOKEN` del progetto Vercel della vetrina
  (`anigami-site`), con `DIRECTUS_URL` e `DIRECTUS_SITE_SLUG=anigami`; Redeploy. Mai in chat.
- **Paolo** (3′): Vercel → progetto `anigami-site` → Settings → Git → **Deploy Hooks** → «creator-anigami», ramo
  main → crea → l'URL in `C:\fatturazione\_chiavi\vercel-hook-anigami.txt`. Il braccio lo aggiunge a
  `DEPLOY_HOOKS` di Creator con la chiave `anigami` e Redeploy.
- Tempi: entro due giorni dal «vai» di Paolo. Finché non c'è, la vetrina legge solo l'RSS: non ti blocca.

## ④ Tassonomia — d'accordo, e chiudo l'occhiello

Fase uno **senza filtri per tema**, solo cronologia: giusto. Decisione sull'occhiello aperta dal 29/09: **gli
occhielli NON diventano categorie**; restano testo libero sull'articolo. La tassonomia vera è filiera + linea
narrativa, quando sarà scritta; i filtri della vetrina si costruiranno su quella.

## ⑤ La parola bandita — tutte e due, ma come funzione della libreria, non come eccezione

Né l'avviso solo in Creator né il filtro solo in build: **entrambi**, e scritti una volta per tutti i siti.
- **Schema**: campo `parole_vietate` (json, elenco di parole o espressioni regolari) su `sites`; per la riga
  `anigami` vale `["anigami"]`. Un sito può averne altre domani (un marchio ritirato, un nome di sponsor).
- **Creator** (sessione Creator, piccola): nel wizard delle news e degli eventi, quando fra i siti di
  destinazione ce n'è uno con `parole_vietate`, il controllo gira su titolo, occhiello, sommario, testo e slug
  **prima** di «Pubblica» / «Aggiorna il sito», e **blocca** con il messaggio «“anigami” non può comparire sulla
  vetrina: correggi o togli anigami dai siti». Niente avviso ignorabile: un blocco.
- **Vetrina** (tu): in build, la stessa lista letta da `sites.parole_vietate`; una scheda che la viola **non
  esce** e finisce in una riga del log di build (`vetrina: scheda <id> esclusa per parola vietata`). Vale anche
  per le schede RSS. È la rete: lavora quando nessuno guarda.
Lo script 80 del braccio aggiunge il campo; finché non c'è, la vetrina usa l'elenco fisso `["anigami"]`.

## Il dato in più: la casa di provenienza — sì

Da Creator `home_site.slug` (già nel lettore); dall'RSS la mappa `idCategoria → casa` (32 tipicita, 38 blu,
41 grand-tour, 42 evo, 0 tipicita). La cromia non la scrivi nel codice della vetrina: la leggi da `sites`
(c'è un campo colore? se no, chiedilo nello script 80 come `colore_marchio`; intanto una mappa locale con i
quattro esadecimali che hai già, commentata «provvisoria fino a sites.colore_marchio»). Così quando nascerà
Perla o Dinastie sulla vetrina, è una riga di dati.

## Vincoli confermati

anigami.eu invisibile: immagini lette in build col token e impacchettate, nessun URL di `api.` o `creator.`
nell'HTML. RSS lato server con cache 15′ e fallback silenzioso. Formato interno unico con due adattatori: giusto,
e il giorno in cui l'RSS muore si toglie un file.

## Chi fa che cosa, in ordine

1. **Vetrina**: parte oggi con l'RSS e l'adattatore Creator pronto; filtro parole vietate in build con elenco
   fisso; mappa casa → colore provvisoria.
2. **Paolo**: deploy hook (3′) quando il braccio glielo chiede in `paolo/prove.md`.
3. **Braccio**: `servizio-vetrina` + token in env + `DEPLOY_HOOKS` (chiave `anigami`) + nello script 80
   `sites.parole_vietate` (e `colore_marchio` se manca). Riga in STATO-UNIVERSO, area Creator/siti.
4. **Creator**: il blocco «parole vietate» nei wizard, quando il campo esiste. Brief in `_scambio\creator\`.
