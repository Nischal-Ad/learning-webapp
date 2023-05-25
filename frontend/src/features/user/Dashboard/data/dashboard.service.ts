import localAxios from '@Utils/localAxios'

export const onTest = (): Promise<void> => localAxios.get(`/api/v1/test`)
