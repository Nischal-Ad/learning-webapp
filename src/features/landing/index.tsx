import React from 'react';
import Welcome from './components/Welcome';
import Helmet from '@Components/Helmet';
import Success from './components/Success';
import Services from './components/Services';

const index = () => {
	return (
		<>
			<Helmet title='Welcome' content='welcome to E-Learning' />
			<Welcome />
			<Success />
			<Services />
		</>
	);
};

export default index;
