import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const enableSourceMap = mode === 'analyze'

  return {
    plugins: [react()],
    build: {
      target: 'es2015',
      cssCodeSplit: true,
      sourcemap: enableSourceMap,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Separar React e React DOM em chunks separados para melhor cache
              if (id.includes('react-dom')) return 'vendor-react-dom'
              if (id.includes('react')) return 'vendor-react'
              // Separar bibliotecas grandes em chunks próprios
              if (id.includes('framer-motion')) return 'vendor-framer-motion'
              if (id.includes('swiper')) return 'vendor-swiper'
              if (id.includes('react-photo-view')) return 'vendor-photo-view'
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

