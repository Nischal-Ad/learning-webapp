import localAxios from '@Utils/localAxios'

export const onAllCourses = (payload: string): Promise<ICourseStates> =>
  localAxios.get(`/course/getall?${payload}`)

export const onOneCourses = (payload?: string): Promise<ICourseStates> =>
  localAxios.get(`/course/getone/${payload}`)

export const onAllComments = (payload?: string): Promise<ICommentStates> =>
  localAxios.get(`/comment/getall?${payload}`)
