import { object, string, ref, InferType, boolean } from 'yup'

export interface IDialog {
  open: boolean
  showAuth: (val: boolean) => void
}

export const LoginSchema = object().shape({
  email: string().email('enter valid email').required('please enter email'),
  password: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  remember: boolean(),
})

export const RegisterSchema = object().shape({
  name: string()
    .max(20, 'username must be less than or equal to 8')
    .min(4, 'username must be more than or equal to 3')
    .required('please enter username'),
  email: string().email('enter valid email').required('please enter email'),
  password: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  cpassword: string()
    .oneOf([ref('password')], 'password doesnot match')
    .required('please enter confirm password'),
  role: string()
    .oneOf(['student', 'teacher'], 'Invalid role')
    .required('Please select a role'),
})

export const forgetPassowrdSchema = object().shape({
  email: string().email('enter valid email').required('please enter email'),
})

export const ResetPasswordSchema = object().shape({
  newPassword: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  cNewPassword: string()
    .oneOf([ref('newPassword')], 'password doesnot match')
    .required('please enter confirm password'),
})

export const ChangePasswordSchema = object().shape({
  oldPassword: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  newPassword: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  cNewPassword: string()
    .oneOf([ref('newPassword')], 'password doesnot match')
    .required('please enter confirm password'),
})

export type TRegister = InferType<typeof RegisterSchema>
export type TChangePassword = InferType<typeof ChangePasswordSchema>
export type TLogin = InferType<typeof LoginSchema>
export type TForgetPassword = InferType<typeof forgetPassowrdSchema>
export type TResetPassword = InferType<typeof ResetPasswordSchema>

export interface IRegister extends IStatus {
  user: TRegister
}

export interface IForgetPassword {
  email: string
}

export interface ILogin extends IStatus {
  user: TLogin
}
