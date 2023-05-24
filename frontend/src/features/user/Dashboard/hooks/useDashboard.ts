import userSlice from '@Slices/user.slice';
import { useAppDispatch } from '@Store';
import { onTest } from '../data/dashboard.service';
import { notifyError, notifySuccess } from '@Utils/alerts';

export const useDashboard = () => {
	const dispatch = useAppDispatch();

	const onTestUser = async () => {
		try {
			dispatch(userSlice.actions.setLoading());

			const res = await onTest();
			dispatch(userSlice.actions.setData(res));
			notifySuccess('you are now logged in');
		} catch (error: any) {
			dispatch(userSlice.actions.setError(error.message));
			notifyError(error.message);
		}
	};

	return { onTestUser };
};
