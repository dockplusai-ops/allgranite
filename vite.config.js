import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const enableSourceMap = mode === 'analyze'

  return {
    plugins: [react()],
    build: {
      sourcemap: enableSourceMap,
      cssCodeSplit: true,
      minify: 'esbuild',
      target: 'es2015',
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Split vendor chunks more granularly for better caching
            if (id.includes('node_modules')) {
              // Large animation library - separate chunk
              if (id.includes('framer-motion')) return 'vendor-framer-motion'
              
              // Carousel library - separate chunk
              if (id.includes('swiper')) return 'vendor-swiper'
              
              // Photo viewer - separate chunk
              if (id.includes('react-photo-view')) return 'vendor-photo-view'
              
              // Icon library - separate chunk
              if (id.includes('lucide-react')) return 'vendor-icons'
              
              // Form libraries - separate chunk
              if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
                return 'vendor-forms'
              }
              
              // Router - separate chunk
              if (id.includes('react-router')) return 'vendor-router'
              
              // React core - separate chunk
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react'
              }
              
              // Everything else
              return 'vendor'
            }
          },
          // Optimize chunk size limits
          chunkSizeWarningLimit: 1000,
        },
        // Tree-shaking optimizations
        treeshake: {
          moduleSideEffects: false,
          preset: 'recommended',
        },
      },
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  }
})

