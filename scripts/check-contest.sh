#!/usr/bin/env bash
# Verifica che il contest sia identico fra main e public/ di astro-setup.
# Sola lettura: non tocca né i file né i rami. Esce con 1 se qualcosa diverge.
#
# Perché serve: il contest è online su main, con iscrizioni vere che passano
# da api/iscrizione.js e da Brevo. Si modifica SOLO su main; astro-setup lo
# riceve per copia, mai per merge (sono due architetture diverse dello stesso
# sito). Questo controllo va passato prima di ogni deploy di astro-setup.
#
#   git show main:contest-la-trota-e-il-verdicchio-2026/index.html \
#     > public/contest-la-trota-e-il-verdicchio-2026/index.html
#
set -u
ko=0

# Risorse del contest servite dalla radice su main e da public/ su astro-setup
for f in $(git ls-tree -r --name-only main \
           | grep -E '^(contest-la-trota|conferma-iscrizione|invio-materiale|materiale-ricevuto|cookie-policy|assets/contest|contest-assets/)'); do
  a=$(git rev-parse "main:$f" 2>/dev/null)
  b=$(git rev-parse "astro-setup:public/$f" 2>/dev/null || echo ASSENTE)
  [ "$a" = "$b" ] || { echo "DIVERGE  $f  (astro-setup: ${b:0:7})"; ko=1; }
done

# Le funzioni serverless stanno allo stesso percorso sui due rami
for f in api/iscrizione.js api/materiale.js; do
  [ "$(git rev-parse "main:$f" 2>/dev/null)" = "$(git rev-parse "astro-setup:$f" 2>/dev/null)" ] \
    || { echo "DIVERGE  $f"; ko=1; }
done

[ $ko -eq 0 ] && echo "contest allineato." || echo "contest NON allineato — vedi sopra."
exit $ko
