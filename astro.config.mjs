import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://anigami.it',
  output: 'static',
  build: {
    format: 'directory',
  },
});
