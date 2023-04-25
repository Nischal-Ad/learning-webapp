import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from './ProtectedRoute';

// Lazy load components
const Landing = lazy(() => import('@Features/landing'));
const Auth = lazy(() => import('@Features/user/Auth'));
const Dashboard = lazy(() => import('@Features/user/Dashboard'));

const auth = localStorage.getItem('auth') || '';
const isAuth = auth && JSON.parse(auth);

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* test routes */}
			<Route path='/landing' element={<Landing />} />
			{/* end of test routes */}

			{/* normal routes */}
			<Route
				path='/'
				element={!isAuth ? <Landing /> : <Navigate to={'/dashboard'} replace />}
			/>
			{/* end of normal routes */}

			{/* protected routes for user */}
			<Route element={<ProtectedRoute auth={isAuth.isAuth} />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
			{/* end of protected routes for user */}

			{/* protected routes for admin */}
			{/* <Route element={<ProtectedRoute auth={isAuth.isAuth} isAdmin={true} />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route> */}
			{/* end of protected routes for admin */}
		</>
	)
);

export default router;
