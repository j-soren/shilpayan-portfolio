import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // THIS MUST MATCH YOUR GITHUB REPOSITORY NAME EXACTLY!
  // Example: If your repo is github.com/username/shilpayan-portfolio
  // Then the base should be '/shilpayan-portfolio/'
  base: '/', 
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  }
})