import React from 'react';
import Welcome from './components/Welcome';
import Helmet from '@Components/Helmet';
import Success from './components/Success';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Goals from './components/Goals';
import Testomonial from './components/Testomonial';

const index = () => {
	return (
		<>
			<Helmet title='Welcome' content='welcome to E-Learning' />
			<Welcome />
			<Success />
			<Services />
			<AboutUs />
			<Goals />
			<Testomonial />
		</>
	);
};

export default index;
