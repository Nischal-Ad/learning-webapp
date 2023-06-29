import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import { Pagination, Stack } from '@mui/material'
import CourseCard from '@Components/Courses/Index'
import { useCourse } from './hooks/useCourse'
import { useAppSelector } from '@Store'
import Loading from '@Components/Loader'
import { useEffect } from 'react'

const Index = () => {
  const { ongetAllCourses } = useCourse()
  const { status, data } = useAppSelector((store) => store.course)

  useEffect(() => {
    ongetAllCourses()
  }, [])
  return (
    <>
      <Helmet
        title="Courses"
        content="choose your favourate course and start building your carrier"
      />
      {status === 'loading' && <Loading />}
      <Section id="courses">
        <Stack spacing={1} direction={'column'}>
          {Array.isArray(data?.data) &&
            data.data &&
            data?.data?.map((course, i) => {
              if (course) {
                return <CourseCard course={course} key={i} />
              }
            })}
        </Stack>
        <Pagination count={10} sx={{ display: 'flex', justifyContent: 'end' }} />
      </Section>
    </>
  )
}

export default Index
