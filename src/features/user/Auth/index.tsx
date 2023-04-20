import React from 'react';
import { useAuth } from './hooks/useAuth';

const index: React.FC = () => {
	const { onLoginUser } = useAuth();

	const handelLogin = () => {
		const payload = {
			email: 'nis@gmail.com',
			password: '11111',
			isAuth: true,
		};

		onLoginUser(payload);
	};
	return (
		<div>
			you are not logged in
			<br />
			click to login in
			<br />
			<button onClick={handelLogin}>login</button>
		</div>
	);
};

export default index;
