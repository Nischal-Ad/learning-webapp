/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from '@Store'
import { onAllCart, onCreateCart, onDeleteCart } from '../data/cart.service'
import { notifyError, notifySuccess } from '@Utils/alerts'
import cartSlice from '@Slices/cart.slice'

export const useCart = () => {
  const dispatch = useAppDispatch()

  const onGetAllCart = async () => {
    try {
      dispatch(cartSlice.actions.setLoading())

      const res = await onAllCart()
      dispatch(cartSlice.actions.setData(res))
    } catch (error: any) {
      dispatch(cartSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onUserDeleteCart = async (payload: string) => {
    try {
      dispatch(cartSlice.actions.setLoading())

      const res = await onDeleteCart(payload)
      dispatch(cartSlice.actions.setData(res))
      notifySuccess('Cart deleted successfully')
    } catch (error: any) {
      dispatch(cartSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const onAddCart = async (payload: [string]) => {
    try {
      dispatch(cartSlice.actions.setLoading())

      const res = await onCreateCart(payload)
      dispatch(cartSlice.actions.setData(res))
      notifySuccess(res.message)
    } catch (error: any) {
      dispatch(cartSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  return {
    onGetAllCart,
    onUserDeleteCart,
    onAddCart,
  }
}
