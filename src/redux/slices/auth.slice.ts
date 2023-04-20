import { createSlice } from '@reduxjs/toolkit';
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { authLogin, authState } from '@Features/user/Auth/data/auth.model';

const initialState: authState = {
	status: 'idle',
	data: {} as authLogin,
	error: '',
};

const setLoading: CaseReducer<authState> = (state) => ({
	...state,
	status: 'loading',
	error: '',
});

const setData: CaseReducer<authState, PayloadAction<authLogin>> = (
	state,
	action
) => ({
	status: 'success',
	data: action.payload,
	error: '',
});

const setError: CaseReducer<authState, PayloadAction<any>> = (
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
