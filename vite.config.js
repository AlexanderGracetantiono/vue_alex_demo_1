import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // pada dasarnya tanpa VitePWA, aplikasi VUE bisa berjalan, Vite PWA sendiri membawa perubahan yaitu webapp dapat didownload pada android dan IOS
  VitePWA({
    //  service worker butuh strategies, scrDir, dan fileName
    strategies:'injectManifest',
    srcDir:'src',
    filename:'sw.js',
    
    registerType:'autoUpdate',
    devOptions:{
      enabled:true
    },
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      // name dan short name harusnya berefek apabila aplikasi di download di android/ios
      name: '10 Hal Kenapa Daniel Ganteng Banget',
      short_name: 'MyApp',
      description: 'My Awesome App description',
      theme_color: '#ffffff',
      icons: [ // icon ini diusahakan ada berbagai macam size, untuk mengakomodasi kebutuhan perikonan
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'  
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
      display:'minimal-ui'
      // display itu efek terhadap tampilan yang akan ditampilkan, apakah full screen, minimal dll, value display:browser itu default
    }
  })],
})
