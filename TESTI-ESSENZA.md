# TESTI-ESSENZA — consegna Cowork → Code (06/08/2026)

> Stesso patto di TESTI-TRACCE.md: Cowork non edita `index.astro`;
> Code trascrive da qui in commit puliti.

## Nuova card-manifesto nel capitolo Essenza (decisione di Paolo, 06/08)

Frase manifesto di Paolo, approvata così (con "a uno", senza d eufonica):

> **Tipicità è una risposta culturale a uno stimolo ambientale.**

- Posizione: **seconda card**, subito dopo la lead card ("La tipicità non è
  un'etichetta"). Logica: definizione negativa → definizione positiva →
  le prove (ciauscolo, software house…).
- Stile: **key-card** esistente (fondo petrolio, Cormorant, em in acqua).
- Le card successive scalano di numero: le attuali 02–11 diventano 03–12
  (aggiornare gli `<span class="idx">`).

Markup da inserire dopo la lead card:

```astro
<article class="card key-card"><span class="idx">02</span>
  <p>Tipicità è <em>una risposta culturale</em> a uno stimolo ambientale.</p>
</article>
```

Verificato da Cowork in build locale: la card rende correttamente nello
scorrimento orizzontale, frecce e progress invariati (ora 12 card).

## 2. RIMOZIONE delle due card "la rotta" (decisione Paolo, 06/08 sera)

La storia del festival è funzione del capitolo Tracce (la moviola): in
Essenza stona. Eliminare le DUE card con kicker "la rotta":

1. quella che inizia con "Nel 1993, quando tutto comincia…"
2. quella che inizia con "Da lì il racconto si allarga…"

La sequenza finale di Essenza diventa (10 card): 01 lead ("La tipicità
non è un'etichetta") · 02 manifesto ("risposta culturale…") · 03–04 la
traccia · 05 foto · 06 l'attraversamento · 07 key ("Il locale non
sopravvive isolandosi…") · 08–09 la tensione · 10 key finale ("Oggi
Tipicità sta diventando qualcos'altro ancora…"). Aggiornare gli
`<span class="idx">` di conseguenza (la key finale passa a 10).

Verificato da Cowork in build locale: scorrimento, frecce e progress ok
con 10 card.
