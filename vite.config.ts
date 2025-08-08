import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Required base path for GitHub Pages project site (repo name must match)
  base: '/Portafolio_Daniel_Jimenez/',
  build: {
    // Output to docs folder for GitHub Pages support
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
