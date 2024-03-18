<script lang="ts" setup>
const { recaptchaSiteKey } = useRuntimeConfig().public

useHead({
  script: [
    {
      src: `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`,
    },
  ],
})

declare global {
  interface Window {
    grecaptcha: any
  }
}

const onLogin = () => {
  const grecaptcha = window.grecaptcha

  grecaptcha.ready(function () {
    grecaptcha
      .execute(recaptchaSiteKey, {
        action: 'submit',
      })
      .then(async function (token: string) {
        try {
          const data = await $fetch('api/recaptcha-siteverify', {
            method: 'POST',
            body: {
              token,
            },
          })

          console.log({ data })
        } catch (error: any) {
          console.log({ error })
        }
      })
  })
}
</script>

<template>
  <div>
    Page: login
    <button @click="onLogin">Login</button>
  </div>
</template>

<style global>
/* 隱藏徽章 */
/* .grecaptcha-badge {
  visibility: hidden;
} */
</style>
