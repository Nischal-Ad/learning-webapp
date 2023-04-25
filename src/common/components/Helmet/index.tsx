import React from 'react';
import { Helmet } from 'react-helmet';

interface THelmet {
	title: string;
	content?: string;
}

const index: React.FC<THelmet> = ({ title, content }) => {
	return (
		<Helmet>
			<title>{title} - E-Learning</title>
			<meta name={title} content={content} />
		</Helmet>
	);
};

export default index;
