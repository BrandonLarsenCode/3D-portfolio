import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/3D-portfolio", // Specify the correct base path for Firebase
  build: {
    minify: 'terser',
    terserOptions: {
      warnings: false,
    },
    chunkSizeWarningLimit: 2000,
    // Remove or adjust the rollupOptions section
  },
});
