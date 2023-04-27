import authSlice from '@Slices/auth.slice';
import { useAppDispatch } from '@Store';
import { onLogin } from '../data/auth.service';
import { authLogin } from '../data/auth.model';
import { notifyError, notifySuccess } from '@Utils/alerts';

export const useAuth = () => {
	const dispatch = useAppDispatch();

	const onLoginUser = async (payload: authLogin) => {
		try {
			dispatch(authSlice.actions.setLoading());

			// only for stater  auth test.
			await onLogin(payload);
			const data = JSON.parse(localStorage.getItem('auth') || '');
			dispatch(authSlice.actions.setData(data));
			// end of stater  auth test

			//main code
			// const res = await onLogin(payload);
			// dispatch(authSlice.actions.setData(res));
			// notifySuccess('you are now logged in')
		} catch (error: any) {
			dispatch(authSlice.actions.setError(error.message));
			notifyError(error.message);
		}
	};

	return { onLoginUser };
};
