import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Error404 from '@Components/Error';
import ProtectedRoute from './ProtectedRoute';

// Lazy load components
const Auth = lazy(() => import('@Features/user/Auth'));
const Dashboard = lazy(() => import('@Features/user/Dashboard'));

const auth = localStorage.getItem('auth') || '';
const isAuth = auth && JSON.parse(auth);

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path='/'
				element={!isAuth ? <Auth /> : <Navigate to={'/dashboard'} replace />}
			/>

			{/* protected routes for user */}
			<Route element={<ProtectedRoute auth={isAuth.isAuth} />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>

			{/* protected routes for admin */}
			{/* <Route element={<ProtectedRoute auth={isAuth.isAuth} isAdmin={true} />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route> */}
		</>
	)
);

export default router;
