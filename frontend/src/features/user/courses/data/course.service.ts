import localAxios from '@Utils/localAxios'

export const onAllCourses = (): Promise<ICourseStates> => localAxios.get('/course/getall')

export const onOneCourses = (payload?: string): Promise<ICourseStates> =>
  localAxios.get(`/course/getone/${payload}`)
