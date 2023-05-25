import Section from '@Components/SectionWrapper'
import { Grid } from '@mui/material'
import { courses } from '@Data/Courses'
import Helmet from '@Components/Helmet'
import CourseCard from '@Components/Courses/Index'

const Index = () => {
  return (
    <>
      <Helmet title="My-Learnings" content="my courses" />
      <Section id="my-learnings">
        <Grid container spacing={2}>
          {courses.map((course, i) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <CourseCard courses={course} key={i} list={false} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Section>
    </>
  )
}

export default Index
