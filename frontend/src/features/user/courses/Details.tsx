import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import CourseDetailsCard from './components/CourseDetailsCard'
import { useParams } from 'react-router-dom'
import { courses } from '@Data/Courses'
import HighlightsCourses from './Highlights'
import Error from '@Components/Error'
import { useCourse } from './hooks/useCourse'
import { useAppSelector } from '@Store'
import { useEffect } from 'react'
import Loading from '@Components/Loader'

const Details = () => {
  const { id } = useParams()
  const { ongetOneCourses } = useCourse()
  const { status, data } = useAppSelector((store) => store.course)

  useEffect(() => {
    ongetOneCourses(id)
  }, [id])

  return (
    <>
      <Helmet title={data.data?.title} content={data.data?.title} />
      {status === 'loading' && <Loading />}
      <Section id="course-details">
        {data?.data && (
          <>
            <CourseDetailsCard details={data.data} />
            <HighlightsCourses title="You may also like" courses={courses} />
          </>
        )}
        {status === 'error' && <Error />}
      </Section>
    </>
  )
}

export default Details
