import localAxios from '@Utils/localAxios';
import { authLogin } from './auth.model';
import { json } from 'stream/consumers';

// only for stater  auth test
export const onLogin = (payload: authLogin) => {
	localStorage.setItem('auth', JSON.stringify(payload));
};
//end of stater auth test

//main code
// export const onLogin = (payload: authLogin): Promise<authLogin> =>
// localAxios.post(`/yourLoginAPI`, payload);
