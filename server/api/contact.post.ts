const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactBody {
  name?: unknown
  email?: unknown
  message?: unknown
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<ContactBody>(event)

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  // Mail.cs の DataAnnotations 相当のバリデーション
  if (!name || name.length > 10) {
    throw createError({ statusCode: 400, statusMessage: 'お名前が不正です。' })
  }
  if (!email || !EMAIL_PATTERN.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'メールアドレスが不正です。'
    })
  }
  if (!message || message.length > 500) {
    throw createError({
      statusCode: 400,
      statusMessage: 'メッセージが不正です。'
    })
  }

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'ResendのAPIキーが設定されていません。'
    })
  }

  const from = config.mailSupportName
    ? `${config.mailSupportName} <${config.mailSupport}>`
    : config.mailSupport
  const text = `${name}\n${email}\n${message}`

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [config.mailAdmin],
      subject: '[プロフィールサイト]お問い合わせがありました。',
      text,
      html: text.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>')
    })
  })

  if (!response.ok) {
    const error = await response.text()
    console.error(
      `Resendのメール送信に失敗しました。status: ${response.status}, body: ${error}`
    )
    throw createError({
      statusCode: 502,
      statusMessage: 'メールの送信に失敗しました。'
    })
  }

  return { ok: true }
})
