/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from '@Store'
import { notifyError } from '@Utils/alerts'
import courseSlice from '@Slices/course.slice'
import { onAllCourses, onOneCourses } from '../data/course.service'

export const useCourse = () => {
  const dispatch = useAppDispatch()

  const ongetAllCourses = async (payload: string) => {
    try {
      dispatch(courseSlice.actions.setLoading())

      const res = await onAllCourses(payload)
      dispatch(courseSlice.actions.setData(res))
    } catch (error: any) {
      dispatch(courseSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  const ongetOneCourses = async (payload?: string) => {
    try {
      dispatch(courseSlice.actions.setLoading())

      const res = await onOneCourses(payload)
      dispatch(courseSlice.actions.setData(res))
    } catch (error: any) {
      dispatch(courseSlice.actions.setError(error.response.data.message))
      notifyError(error.response.data.message)
    }
  }

  return { ongetAllCourses, ongetOneCourses }
}
