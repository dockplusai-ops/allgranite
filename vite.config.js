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
              // React e ReactDOM DEVEM estar juntos no mesmo chunk para evitar erros de internals
              // Verificar exatamente os pacotes react e react-dom (não outros que contêm "react")
              if (id.includes('node_modules/react-dom') || 
                  (id.includes('node_modules/react/') && !id.includes('react-dom') && 
                   !id.includes('react-router') && !id.includes('react-hook') && 
                   !id.includes('react-photo'))) {
                return 'vendor-react'
              }
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

