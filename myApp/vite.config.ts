import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",
        changeOrigin: true,
      }
    }, 
    cors: {
      origin: "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard", 
      credentials: true, 
      methods: "GET"
    }
  }
})