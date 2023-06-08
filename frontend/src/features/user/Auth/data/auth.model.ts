import { object, string, ref } from 'yup'

export interface IDialog {
  open: boolean
  showAuth: (val: boolean) => void
}

export interface ILogin {
  email: string
  password: string
  isAuth: boolean
}

export interface ILoginState {
  status: 'idle' | 'loading' | 'success' | 'error'
  data: ILogin
  error: Error
}

export interface IAuth {
  reset: boolean
}

export const LoginSchema = object().shape({
  email: string().email().required('please enter email'),
  password: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
})

export const RegisterSchema = object().shape({
  name: string()
    .max(20, 'username must be less than or equal to 8')
    .min(4, 'username must be more than or equal to 3')
    .required('please enter username'),
  email: string().email().required('please enter email'),
  password: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  cPassword: string()
    .oneOf([ref('password')], 'password doesnot match')
    .required('please enter confirm password'),
  role: string()
    .oneOf(['student', 'teacher'], 'Invalid role')
    .required('Please select a role'),
})

export const forgetPassowrdSchema = object().shape({
  email: string().email('enter valid email').required('please enter email'),
})
