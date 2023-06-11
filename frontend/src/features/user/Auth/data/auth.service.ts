import localAxios from '@Utils/localAxios'
import {
  IForgetPassword,
  ILogin,
  IRegister,
  TLogin,
  TRegister,
} from './auth.model'

export const onRegister = (payload: TRegister): Promise<IRegister> =>
  localAxios.post(`/register/user`, payload)

export const onLogin = (payload: TLogin): Promise<ILogin> =>
  localAxios.post(`/login`, payload)

export const onProfile = (): Promise<IAuth> => localAxios.get(`/profile`)

export const onForgetPassword = (payload: IForgetPassword): Promise<IStatus> =>
  localAxios.post(`/forgotpassword`, payload)

export const onLogout = (): Promise<IStatus> => localAxios.get(`/logout`)
