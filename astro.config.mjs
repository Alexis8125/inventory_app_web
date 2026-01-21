import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // IMPORTANTE: Cambia esto a tu dominio o repo de GitHub Pages
  site: 'http://amstech.site/',
  base: '/', // Si usas dominio personalizado, deja '/'
  
  integrations: [tailwind()],
  output: 'static', // GitHub Pages requiere static output
});