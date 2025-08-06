import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/policeproject111/',  // ✅ REQUIRED for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
