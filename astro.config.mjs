import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://anigami.it',
  output: 'static',
  build: {
    format: 'directory',
  },
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
