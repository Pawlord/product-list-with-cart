// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { resolve } from 'path'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@src': resolve('./src'),
        '@components': resolve('./src/components'), // Алиас для src/components
        '@layouts': resolve('./src/layouts'),     // Алиас для src/layouts
        '@styles': resolve('./src/styles'),       // Алиас для src/styles
        '@public': resolve('./public'),         // Алиас для public
      },
    },
  },
});