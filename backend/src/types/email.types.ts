export interface IMailOptions {
  from?: string
  to: string
  subject: string
  text?: string
  html?: string
  cc?: string | string[]
  bcc?: string | string[]
  attachments?: {
    filename: string
    content: string | Buffer
  }[]
}
