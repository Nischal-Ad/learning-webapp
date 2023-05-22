import Welcome from './components/Welcome';
import Helmet from '@Components/Helmet';
import Success from './components/Success';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Goals from './components/Goals';
import Testomonial from './components/Testomonial';
import Courses from './components/Courses';

const index = () => {
	return (
		<>
			<Helmet title='Welcome' content='welcome to E-Learning' />
			<Welcome />
			<Success />
			<Services />
			<Courses />
			<AboutUs />
			<Goals />
			<Testomonial />
		</>
	);
};

export default index;
