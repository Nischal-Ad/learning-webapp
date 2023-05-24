import localAxios from '@Utils/localAxios';

export const onTest = (): Promise<any> => localAxios.get(`/api/v1/test`);
