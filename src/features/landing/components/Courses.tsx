import CoursesList from '@Components/courses';
import { courses } from '@Data/Courses';
import SectionWrapper from '@Components/SectionWrapper';
import Heading from '@Components/Heading/LandingHeading';

const Courses = () => {
	return (
		<SectionWrapper id='courses'>
			<Heading heading='Our' title='Courses' desc='lets see our best courses' />
			<CoursesList courses={courses} />
		</SectionWrapper>
	);
};

export default Courses;
