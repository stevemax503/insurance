import nodemailer from 'nodemailer'

const products = new Set(['Motor', 'Life', 'Health', 'General', 'Others'])

function clean(value, max = 200) {
  return String(value || '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, max)
}

export async function sendContactEmail(fields = {}) {
  const name = clean(fields.name, 120)
  const email = clean(fields.email, 160)
  const phone = clean(fields.phone, 20)
  const nationalId = clean(fields.national_id, 40)
  const product = clean(fields.product, 40)
  const message = String(fields.message || '')
    .trim()
    .slice(0, 2000)

  if (!name || !email || !phone || !nationalId || !product || !message) {
    throw new Error('Please complete all required fields.')
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Please enter a valid email address.')
  }
  if (!products.has(product)) {
    throw new Error('Please select a product.')
  }

  const user = process.env.SMTP_USER || 'orient@orientinsurancegroup.com'
  const pass = process.env.SMTP_PASS || process.env.email_password
  const to = process.env.CONTACT_TO || user
  const host = process.env.SMTP_HOST || 'mail.privateemail.com'
  const port = Number(process.env.SMTP_PORT || 587)

  if (!pass) {
    throw new Error('Email is not configured.')
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  await transporter.sendMail({
    from: `"Orient Insurance website" <${user}>`,
    to,
    replyTo: email,
    subject: `Website enquiry: ${product} — ${name}`,
    text: [
      'New enquiry from the Contact Us form',
      '',
      `Full Name: ${name}`,
      `Email Address: ${email}`,
      `Phone Number: ${phone}`,
      `National ID/Iqama: ${nationalId}`,
      `Product: ${product}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  })
}
