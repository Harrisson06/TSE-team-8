// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 25/04/2026

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'TSE Team 8 Open day Learning APP',
        shortname: 'TSE Learning App',
        description: 'Scan QR codes at locations to complete a lesson on a simple Computer science topic.',
        theme_color: '#0f0f0f',
        background_color: '#0f0f0f',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        // Cache all app files for offline use
        globPatterns: ['**/*.{js,css,html,ico,pgn,svg,json}']
      }
    })
  ],
  optimizeDeps: {
    exclude: ['html5-qrcode']
  }
})