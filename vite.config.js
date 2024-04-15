import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/", 
  build: {
    minify: 'terser',
    terserOptions: {
      warnings: false,
    },
    chunkSizeWarningLimit: 2000,
    // Remove or adjust the rollupOptions section
  },
});
