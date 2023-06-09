import localAxios from '@Utils/localAxios'
import { IAuth, ILogin, TLogin, TRegister } from './auth.model'

export const onRegister = (payload: TRegister): Promise<IAuth> =>
  localAxios.post(`/register/user`, payload)

export const onLogin = (payload: TLogin): Promise<ILogin> =>
  localAxios.post(`/login`, payload)

export const onProfile = (): Promise<IAuth> => localAxios.get(`/profile`)
