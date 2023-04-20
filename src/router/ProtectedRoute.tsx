import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@Components/Loader';

interface ProtectedRouteProps {
	auth: boolean;
	isAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	auth,
	isAdmin = false,
}) => {
	if (!auth) {
		return <Navigate to={'/'} replace />;
	}

	// if (!isAdmin) {
	// 	return <Navigate to={'/'} replace />;
	// }

	return (
		<Suspense fallback={<Loading />}>
			<Outlet />
		</Suspense>
	);
};

export default ProtectedRoute;
