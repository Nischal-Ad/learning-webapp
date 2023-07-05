import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

interface ICommentState extends IState {
  data: Partial<ICommentStates>
}

const initialState: ICommentState = {
  status: 'idle',
  data: {},
  error: '',
}

const setLoading: CaseReducer<ICommentState> = (state) => ({
  ...state,
  status: 'loading',
})

const setData: CaseReducer<ICommentState, PayloadAction<ICommentStates>> = (state, action) => ({
  status: 'success',
  data: action.payload,
  error: '',
})

const setError: CaseReducer<ICommentState, PayloadAction<Error>> = (state, action) => ({
  ...state,
  status: 'error',
  error: action.payload,
})

const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {
    setLoading,
    setData,
    setError,
  },
})

export default commentSlice
