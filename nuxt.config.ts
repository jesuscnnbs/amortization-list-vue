// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxt/ui'],
})
