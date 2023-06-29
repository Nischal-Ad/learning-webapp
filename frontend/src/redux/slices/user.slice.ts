import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

interface IAuthState extends IState {
  data: Partial<IAuth>
  isAuth?: boolean
}

const initialState: IAuthState = {
  status: 'idle',
  data: {},
  error: '',
  isAuth: false,
}

const setLoading: CaseReducer<IAuthState> = (state) => ({
  ...state,
  status: 'loading',
})

const setData: CaseReducer<IAuthState, PayloadAction<IAuth>> = (state, action) => ({
  isAuth: action.payload.isAuth,
  status: 'success',
  data: action.payload,
  error: '',
})

const setError: CaseReducer<IAuthState, PayloadAction<Error>> = (state, action) => ({
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
