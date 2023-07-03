import localAxios from '@Utils/localAxios'

export const onAllCourses = (payload: string): Promise<ICourseStates> =>
  localAxios.get(`/course/getall?${payload}`)

export const onOneCourses = (payload?: string): Promise<ICourseStates> =>
  localAxios.get(`/course/getone/${payload}`)
