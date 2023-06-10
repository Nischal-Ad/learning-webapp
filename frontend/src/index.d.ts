interface IState {
  status: 'idle' | 'loading' | 'success' | 'error'
  error: unknown
}

interface IStatus {
  message: string
  success: boolean
}

interface IUser {
  _id: string
  email: string
  password: string
  name: string
  cpassword: string
  role: 'student' | 'teacher'
}

interface IAuth extends IStatus {
  user?: Partial<IUser>
}
