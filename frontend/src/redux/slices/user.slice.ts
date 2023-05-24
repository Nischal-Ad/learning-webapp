import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  data: {} as any,
  error: '',
}

const setLoading: CaseReducer<any> = (state) => ({
  ...state,
  status: 'loading',
  error: '',
})

const setData: CaseReducer<any, PayloadAction<any>> = (state, action) => ({
  status: 'success',
  data: action.payload,
  error: '',
})

const setError: CaseReducer<any, PayloadAction<any>> = (state, action) => ({
  ...state,
  status: 'error',
  error: action.payload,
})

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoading,
    setData,
    setError,
  },
})

export default userSlice
