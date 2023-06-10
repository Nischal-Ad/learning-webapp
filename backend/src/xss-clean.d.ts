declare module 'xss-clean' {
  import { RequestHandler } from 'express'

  function xssClean(options?: XssCleanOptions): RequestHandler

  export default xssClean
}
