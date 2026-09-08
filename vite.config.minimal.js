import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Minimal configuration for memory-constrained environments
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Minimal build settings to reduce memory usage
    minify: false,            // Disable minification to save memory
    sourcemap: false,         // No sourcemaps
    cssCodeSplit: false,      // Single CSS file
    rollupOptions: {
      output: {
        // Single chunk to reduce memory usage
        manualChunks: undefined,
        // Simple file names
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
    },
    chunkSizeWarningLimit: 5000,  // Increase limit
    target: 'es2015',            // Older target for compatibility
    assetsInlineLimit: 0,        // Don't inline assets to save memory
  },
  esbuild: {
    // Reduce esbuild memory usage
    logLevel: 'error',
    target: 'es2015'
  }
});