import Helmet from '@Components/Helmet'
import Slider from './components/Slider'
import Section from '@Components/SectionWrapper'
import { Slides, Category } from '@Data/UserHome'
import AppsCategory from './components/Category'
import CourseList from '@Features/user/courses/Highlights'
import { courses } from '@Data/Courses'

const Index = () => {
  return (
    <>
      <Helmet
        title="Dashboard"
        content="choose your favourate course and start building your carrier"
      />
      <Section id="dashboard">
        <Slider slides={Slides} />
        <AppsCategory category={Category} />
        <CourseList title="What is Next?" courses={courses} />
        <CourseList title="Recommended for you" courses={courses} />
        <CourseList title="you may also like" courses={courses} />
      </Section>
    </>
  )
}

export default Index
