import localAxios from '@Utils/localAxios';
import { ILogin } from './auth.model';

// only for stater  auth test
export const onLogin = (payload: ILogin) => {
	localStorage.setItem('auth', JSON.stringify(payload));
};
//end of stater auth test

//main code
// export const onLogin = (payload: authLogin): Promise<authLogin> =>
// localAxios.post(`/yourLoginAPI`, payload);
