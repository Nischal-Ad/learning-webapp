import authSlice from '@Slices/auth.slice';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
	auth: authSlice.reducer,
});

export default reducer;
