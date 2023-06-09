/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from '@Store'
import {
  onChangePassword,
  onForgetPassword,
  onLogin,
  onLogout,
  onProfile,
  onRegister,
  onResetPassword,
} from '../data/auth.service'
import {
  IForgetPassword,
  TChangePassword,
  TLogin,
  TRegister,
  TResetPassword,
} from '../data/auth.model'
import { notifyError, notifySuccess } from '@Utils/alerts'
import userSlice from '@Slices/user.slice'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const onLoginUser = async (payload: TLogin) => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onLogin(payload)
      dispatch(userSlice.actions.setData({ ...res, isAuth: true }))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onRegisterUser = async (payload: TRegister) => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onRegister(payload)
      dispatch(userSlice.actions.setData(res))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onUserProfile = async () => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onProfile()
      dispatch(userSlice.actions.setData({ ...res, isAuth: true }))
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
    }
  }

  const onUserForgetPassword = async (payload: IForgetPassword) => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onForgetPassword(payload)
      dispatch(userSlice.actions.setData(res))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onUserResetPassword = async (
    payload: TResetPassword,
    token: string
  ) => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onResetPassword(payload, token)
      dispatch(userSlice.actions.setData(res))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onUserChangePassword = async (payload: TChangePassword) => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onChangePassword(payload)
      dispatch(userSlice.actions.setData({ ...res, isAuth: false }))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onUserLogout = async () => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onLogout()
      dispatch(userSlice.actions.setData({ ...res, isAuth: false }))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  return {
    onLoginUser,
    onRegisterUser,
    onUserProfile,
    onUserLogout,
    onUserForgetPassword,
    onUserResetPassword,
    onUserChangePassword,
  }
}
