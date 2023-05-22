import { createSlice } from '@reduxjs/toolkit';
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { ILogin, ILoginState } from '@Features/user/Auth/data/auth.model';

const initialState: ILoginState = {
	status: 'idle',
	data: {} as ILogin,
	error: '',
};

const setLoading: CaseReducer<ILoginState> = (state) => ({
	...state,
	status: 'loading',
	error: '',
});

const setData: CaseReducer<ILoginState, PayloadAction<ILogin>> = (
	state,
	action
) => ({
	status: 'success',
	data: action.payload,
	error: '',
});

const setError: CaseReducer<ILoginState, PayloadAction<any>> = (
	state,
	action
) => ({
	...state,
	status: 'error',
	error: action.payload,
});

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setLoading,
		setData,
		setError,
	},
});

export default authSlice;
