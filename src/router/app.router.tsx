import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ProtectedRoute from './ProtectedRoute';
import Loading from '@Components/Loader';

// Lazy load components
const Navbar = lazy(() => import('@Shared/navbar/landing'));
const Footer = lazy(() => import('@Shared/footer/landing'));
const Landing = lazy(() => import('@Features/landing'));
const Dashboard = lazy(() => import('@Features/user/Dashboard'));
const Courses = lazy(() => import('@Features/user/courses'));
const CoursesDetails = lazy(() => import('@Features/user/courses/Details'));

const auth = localStorage.getItem('auth') || '';
const isAuth = auth && JSON.parse(auth);

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* test routes */}
			<Route
				path='/landing'
				element={
					<>
						<Navbar />
						<Suspense fallback={<Loading />}>
							<Landing />
						</Suspense>
						<Footer />
					</>
				}
			/>
			{/* end of test routes */}

			{/* normal routes */}
			<Route
				path='/'
				element={
					!isAuth ? (
						<Suspense fallback={<Loading />}>
							<Navbar />
							<Landing />
							<Footer />
						</Suspense>
					) : (
						<Navigate to={'/dashboard'} replace />
					)
				}
			/>
			{/* end of normal routes */}

			{/* protected routes for user */}
			<Route
				element={
					<ProtectedRoute
						auth={isAuth.isAuth}
						Navbar={<Navbar />}
						Footer={<Footer />}
					/>
				}
			>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:id' element={<CoursesDetails />} />
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
