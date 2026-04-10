import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/Users/salac/.gemini/antigravity',
        'C:/Users/salac/.gemini/antigravity/scratch/ap-local-restaurants'
      ]
    }
  }
})
