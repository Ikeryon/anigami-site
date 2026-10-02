import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anigami.it',
  output: 'static',
  build: {
    format: 'directory',
  },

  // LA SITEMAP, generata in build. Conta più di prima perché il sito è
  // bilingue: con gli hreflang si dice a un motore che /tipicita/ e
  // /en/tipicita/ sono la stessa pagina in due lingue, e senza quelli le
  // due versioni si fanno concorrenza da sole.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        // la chiave è il segmento nell'indirizzo, il valore il codice che
        // finisce nell'hreflang. L'italiano non ha prefisso: sta alla
        // radice, ed è per questo che è il predefinito.
        locales: { it: 'it-IT', en: 'en-GB' },
      },
      // Fuori la 404 — che non è una pagina da indicizzare — e la cookie
      // policy, che porta già `noindex` nel suo markup: dichiararla qui
      // sarebbe dire due cose opposte allo stesso motore.
      filter: (pagina) =>
        !pagina.includes('/404') && !pagina.includes('/cookie-policy'),
    }),
  ],
  // Bilinguismo IT/EN (i18n nativo Astro, nessuna dipendenza extra).
  // Italiano default alla radice (/tipicita/); inglese sotto /en/ (/en/tipicita/).
  // Nessun URL italiano esistente cambia: prefixDefaultLocale=false.
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
