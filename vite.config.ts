import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Required base path for GitHub Pages project site
  // If you rename the repo, update this to match the repo name
  base: '/Portafolio_Daniel_Jimenez/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
