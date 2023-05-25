import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import CourseDetailsCard from './components/CourseDetailsCard'
import { useParams } from 'react-router-dom'
import { courses } from '@Data/Courses'
import HighlightsCourses from './Highlights'
import Error from '@Components/Error'

const Details = () => {
  const { id } = useParams()

  const courseDetails = courses.find((course) => course.id === id)

  return (
    <>
      <Helmet title={courseDetails?.title} content={courseDetails?.desc} />
      <Section id="course-details">
        {courseDetails ? (
          <>
            <CourseDetailsCard details={courseDetails} />
            <HighlightsCourses title="You may also like" courses={courses} />
          </>
        ) : (
          <Error />
        )}
      </Section>
    </>
  )
}

export default Details
