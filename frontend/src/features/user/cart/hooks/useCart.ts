/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from '@Store'
import { onAllCart, onCreateCart, onDeleteCart } from '../data/cart.service'
import { notifyError, notifySuccess } from '@Utils/alerts'
import userSlice from '@Slices/user.slice'

export const useCart = () => {
  const dispatch = useAppDispatch()

  const onGetAllCart = async () => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onAllCart()
      dispatch(userSlice.actions.setData(res))
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onUserDeleteCart = async (payload: string) => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onDeleteCart(payload)
      dispatch(userSlice.actions.setData(res))
      notifySuccess('Cart deleted successfully')
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onAddCart = async (payload: [string]) => {
    try {
      dispatch(userSlice.actions.setLoading())

      const res = await onCreateCart(payload)
      dispatch(userSlice.actions.setData(res))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(userSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  return {
    onGetAllCart,
    onUserDeleteCart,
    onAddCart,
  }
}
