// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/eslint-module'],

  eslint: {
    // 啟動時檢查代碼,建議開
    lintOnStart: true,
  },

  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.NUXT_RECAPTCHA_SITE_KEY,
    },
    recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,
  },

  css: ['@/assets/css/main.css'],
})
