import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuración específica para GitHub Pages con dominio personalizado
export default defineConfig({
  // IMPORTANTE: Usa tu dominio personalizado
  site: 'https://amstech.site',
  base: '/', // IMPORTANTE: Deja como '/' para dominio personalizado
  
  integrations: [tailwind()],
  output: 'static',
});