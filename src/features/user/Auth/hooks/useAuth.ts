import authSlice from '@Slices/auth.slice';
import { useAppDispatch } from '@Store';
import { onLogin } from '../data/auth.service';
import { authLogin } from '../data/auth.model';
import Toast from '@Utils/Toast';

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
		} catch (error: any) {
			dispatch(authSlice.actions.setError(error.message));
		}
	};

	return { onLoginUser };
};
