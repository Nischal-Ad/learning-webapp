import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

interface ICourseState extends IState {
  data: Partial<ICourseStates>
}

const initialState: ICourseState = {
  status: 'idle',
  data: {},
  error: '',
}

const setLoading: CaseReducer<ICourseState> = (state) => ({
  ...state,
  status: 'loading',
})

const setData: CaseReducer<ICourseState, PayloadAction<ICourseStates>> = (state, action) => ({
  status: 'success',
  data: action.payload,
  error: '',
})

const setError: CaseReducer<ICourseState, PayloadAction<Error>> = (state, action) => ({
  ...state,
  status: 'error',
  error: action.payload,
})

const courseSlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {
    setLoading,
    setData,
    setError,
  },
})

export default courseSlice
