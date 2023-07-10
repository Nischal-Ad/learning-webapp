interface IState {
  status: 'idle' | 'loading' | 'success' | 'error'
  error: unknown
}

interface IStatus {
  message: string
  success: boolean
}

interface IUser {
  _id: string
  email: string
  password: string
  name: string
  cpassword: string
  role: 'admin' | 'user'
}

interface IComment {
  _id: string
  rating: number
  comment: string
  duration: string
  user: Pick<IUser, 'name'>
}

interface ICourse {
  _id: string
  img: string
  title: string
  description: string
  contents: string[]
  requirements: string[]
  category: string
  price: number
  Dprice: number
  ratings: number
  ratings_qty: number
  comments: IComment[]
}

interface IAuth extends IStatus {
  user?: Partial<IUser>
  isAuth?: boolean
}

interface ICourseStates extends IStatus {
  total: number
  totalPages: number
  page: number
  data: ICourse
}

interface ICommentStates extends IStatus {
  data: IComment[]
  total: number
  totalPages: number
  page: number
}
