import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  integrations: [tailwind(), preact(), robotsTxt()],
  site: 'https://seeyouincanada.github.io/',
  build: {
    rollupOptions: {
      external: ['preact', 'preact/hooks'],
    },
  },
});
