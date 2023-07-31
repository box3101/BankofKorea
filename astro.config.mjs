import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
    assets: '_custom',
    renderers: ['@astrojs/renderer-react']
  },
  integrations: [react()]
});