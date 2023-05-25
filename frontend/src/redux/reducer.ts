import authSlice from '@Slices/auth.slice'
import userSlice from '@Slices/user.slice'
import { combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
})

export default reducer
