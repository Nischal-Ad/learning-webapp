import { IMailOptions } from '@Types/email.types'
import nodemailer, { Transporter } from 'nodemailer'

class Email {
  email: string
  subject: string
  message: string

  private transporter: Transporter
  private mailOptions: IMailOptions

  constructor(email: string, subject: string, message: string) {
    this.email = email
    this.subject = subject
    this.message = message

    if (!process.env.EMAIL_PORT || !process.env.EMAIL_HOST)
      throw new Error('email host and port is not defined')

    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    })

    this.mailOptions = {
      from: `${process.env.EMAIL_ADMIN_NAME} <${process.env.EMAIL}>`,
      to: this.email,
      subject: this.subject,
      text: this.message,
    }
  }

  async send() {
    await this.transporter.sendMail(this.mailOptions)
  }
}

export default Email
