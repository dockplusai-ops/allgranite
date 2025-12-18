import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const enableSourceMap = mode === 'analyze'

  return {
    plugins: [react()],
    base: '/',
    build: {
      target: 'es2018', // ES2018 suportado por iOS 10.3+, Android 5+ - reduz transpilação e tamanho do bundle
      cssCodeSplit: true,
      sourcemap: enableSourceMap,
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // React e todas as dependências relacionadas DEVEM estar no mesmo chunk
              // para garantir que React seja carregado antes de qualquer código que o use
              if (id.includes('node_modules/react/') || 
                  id.includes('node_modules/react-dom/') ||
                  id.includes('node_modules/react-router') ||
                  id.includes('node_modules/react-hook-form') ||
                  id.includes('node_modules/react-photo-view')) {
                return 'vendor-react'
              }
              // Separar bibliotecas grandes em chunks próprios
              if (id.includes('framer-motion')) return 'vendor-framer-motion'
              if (id.includes('swiper')) return 'vendor-swiper'
              if (id.includes('lucide-react')) return 'vendor-icons'
              // Agrupar outras dependências menores
              return 'vendor'
            }
          },
        },
      },
    },
  }
})

