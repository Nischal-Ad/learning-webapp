import userSlice from '@Slices/user.slice'
import { combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  user: userSlice.reducer,
})

export default reducer
