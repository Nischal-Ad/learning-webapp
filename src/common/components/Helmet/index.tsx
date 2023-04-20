import React from 'react';
import { Helmet } from 'react-helmet';

interface helmetProps {
	title: string;
	name?: string;
	content?: string;
}

const index: React.FC<helmetProps> = ({ title, name, content }) => {
	return (
		<Helmet>
			<title>{title} - E-Learning</title>
			<meta name={name} content={content} />
		</Helmet>
	);
};

export default index;
