import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// PWS Standard: Configuração de Alias para escalar templates
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensina o Vite que "@/qualquer-coisa" significa "src/qualquer-coisa"
      "@": path.resolve(__dirname, "./src"),
    },
  },
})