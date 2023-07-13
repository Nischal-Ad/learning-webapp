import localAxios from '@Utils/localAxios'

export const onCreateCart = (payload: string[]): Promise<ICartStates> =>
  localAxios.post(`/user/addcart`, { cartItems: payload })

export const onAllCart = (): Promise<ICartStates> => localAxios.get(`/user/allcart`)

export const onDeleteCart = (payload: string): Promise<ICartStates> =>
  localAxios.delete(`/user/cart/delete/${payload}`)
