import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  fonts: {
    families: [
      { name: 'Erica One', provider: 'google', weights: [300, 400, 500, 700] },
    ]
  },

  modules: ['@nuxt/fonts', '@nuxt/image']
});