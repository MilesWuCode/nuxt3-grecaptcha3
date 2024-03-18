export default defineEventHandler(async (event) => {
  const { recaptchaSecretKey } = useRuntimeConfig(event)

  const body = await readBody(event)

  try {
    const data: any = await $fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'GET',
        params: {
          secret: recaptchaSecretKey,
          response: body.token,
        },
      },
    )

    console.log({ data })

    if (data.success && data.score < 1.0) {
      return createError({
        statusCode: 400,
        statusMessage: 'verification failed',
      })
    } else {
      return {
        status: true,
      }
    }
  } catch (error) {
    // 有可能Google服務不通，但還是要讓使用者能登入
    return {
      status: true,
    }
  }
})
