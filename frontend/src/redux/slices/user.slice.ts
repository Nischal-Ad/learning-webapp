import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

interface IAuthState extends IState {
  data: Partial<IAuth>
}

const initialState: IAuthState = {
  status: 'idle',
  data: {},
  error: '',
}

const setLoading: CaseReducer<IAuthState> = (state) => ({
  ...state,
  status: 'loading',
})

const setData: CaseReducer<IAuthState, PayloadAction<IAuth>> = (
  state,
  action
) => ({
  status: 'success',
  data: action.payload,
  error: '',
})

const setError: CaseReducer<IAuthState, PayloadAction<Error>> = (
  state,
  action
) => ({
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
