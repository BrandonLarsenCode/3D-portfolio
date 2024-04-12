
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/3D-portfolio",
  build: {
    minify: 'terser',
    terserOptions: {
      warnings: false,
    },
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      external: ['react-dom/client'],
    },
  },
});
