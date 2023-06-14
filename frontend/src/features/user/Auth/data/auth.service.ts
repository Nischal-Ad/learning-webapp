import localAxios from '@Utils/localAxios'
import {
  IForgetPassword,
  ILogin,
  IRegister,
  TChangePassword,
  TLogin,
  TRegister,
  TResetPassword,
} from './auth.model'

export const onRegister = (payload: TRegister): Promise<IRegister> =>
  localAxios.post(`/register/user`, payload)

export const onLogin = (payload: TLogin): Promise<ILogin> =>
  localAxios.post(`/login`, payload)

export const onProfile = (): Promise<IAuth> => localAxios.get(`/profile`)

export const onForgetPassword = (payload: IForgetPassword): Promise<IStatus> =>
  localAxios.post(`/forgotpassword`, payload)

export const onResetPassword = (
  payload: TResetPassword,
  token: string
): Promise<IStatus> => localAxios.put(`/resetpassword/${token}`, payload)

export const onChangePassword = (payload: TChangePassword): Promise<IStatus> =>
  localAxios.put(`/changepassword`, payload)

export const onLogout = (): Promise<IStatus> => localAxios.get(`/logout`)
