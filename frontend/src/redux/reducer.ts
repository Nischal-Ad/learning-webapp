import commentSlice from '@Slices/comment.slice'
import courseSlice from '@Slices/course.slice'
import userSlice from '@Slices/user.slice'
import { combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  user: userSlice.reducer,
  course: courseSlice.reducer,
  comment: commentSlice.reducer,
})

export default reducer
