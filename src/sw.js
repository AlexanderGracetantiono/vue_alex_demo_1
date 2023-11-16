import { precacheAndRoute } from "workbox-precaching";
precacheAndRoute(self.__WB_MANIFEST)
self.addEventListener('install',(event)=>{
    console.log('installl:')
})
self.addEventListener('activate',(event)=>{
    console.log('activate:')
})
self.addEventListener('fetch',(event)=>{
    console.log('fetch:')
})
self.addEventListener('push',(event)=>{
    console.log('push:')
})