import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import { Divider, Pagination, Stack } from '@mui/material'
import CourseCard from '@Components/Courses/Index'
import { courses } from '@Data/Courses'

const Index = () => {
  return (
    <>
      <Helmet
        title="Courses"
        content="choose your favourate course and start building your carrier"
      />
      <Section id="courses">
        <Stack spacing={1} direction={'column'}>
          {courses.map((course, i) => {
            return (
              <>
                <CourseCard courses={course} key={i} />
                <Divider />
              </>
            )
          })}
        </Stack>
        <Pagination
          count={10}
          sx={{ display: 'flex', justifyContent: 'end' }}
        />
      </Section>
    </>
  )
}

export default Index
