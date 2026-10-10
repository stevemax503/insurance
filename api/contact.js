import { sendContactEmail } from '../server/sendContactEmail.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await sendContactEmail(req.body || {})
    return res.status(200).json({ ok: true })
  } catch (error) {
    const message = error?.message || 'Failed to send your enquiry.'
    const status = message === 'Email is not configured.' ? 500 : 400
    return res.status(status).json({ error: message })
  }
}
