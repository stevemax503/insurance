import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmail } from './server/sendContactEmail.js'

function contactApiPlugin() {
  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        const chunks = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json')
          try {
            const raw = Buffer.concat(chunks).toString('utf8')
            const fields = raw ? JSON.parse(raw) : {}
            await sendContactEmail(fields)
            res.statusCode = 200
            res.end(JSON.stringify({ ok: true }))
          } catch (error) {
            const message = error?.message || 'Failed to send your enquiry.'
            res.statusCode = message === 'Email is not configured.' ? 500 : 400
            res.end(JSON.stringify({ error: message }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.SMTP_HOST ||= env.SMTP_HOST || 'mail.privateemail.com'
  process.env.SMTP_PORT ||= env.SMTP_PORT || '587'
  process.env.SMTP_USER ||= env.SMTP_USER || 'orient@orientinsurancegroup.com'
  process.env.SMTP_PASS ||= env.SMTP_PASS || env.email_password
  process.env.CONTACT_TO ||= env.CONTACT_TO || 'orient@orientinsurancegroup.com'

  return {
    plugins: [react(), contactApiPlugin()],
  }
})
