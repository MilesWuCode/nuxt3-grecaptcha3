declare module 'nuxt/schema' {
  interface RuntimeConfig {
    recaptchaSiteKey: string
    recaptchaSecretKey: string
  }
  interface PublicRuntimeConfig {
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
