import localAxios from '@Utils/localAxios'

export const onCreateCart = (payload: [string]): Promise<ICourseStates> =>
  localAxios.post(`/user/addcart`, payload)

export const onAllCart = (): Promise<ICourseStates> => localAxios.get(`/user/allcart`)

export const onDeleteCart = (payload: string): Promise<IStatus> =>
  localAxios.delete(`/user/cart/delete/${payload}`)
