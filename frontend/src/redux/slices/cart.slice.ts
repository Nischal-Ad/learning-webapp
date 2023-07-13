import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

interface ICartState extends IState {
  data: Partial<ICartStates>
}

const initialState: ICartState = {
  status: 'idle',
  data: {},
  error: '',
}

const setLoading: CaseReducer<ICartState> = (state) => ({
  ...state,
  status: 'loading',
})

const setData: CaseReducer<ICartState, PayloadAction<ICartStates>> = (state, action) => ({
  status: 'success',
  data: action.payload,
  error: '',
})

const setError: CaseReducer<ICartState, PayloadAction<Error>> = (state, action) => ({
  ...state,
  status: 'error',
  error: action.payload,
})

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setLoading,
    setData,
    setError,
  },
})

export default cartSlice
