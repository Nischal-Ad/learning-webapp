import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Suspense, lazy } from 'react'

//normal components
import Loading from '@Components/Loader'
import ProtectedRoute from './ProtectedRoute'
import NavbarLanding from '@Shared/navbar/landing'
import NavbarUser from '@Shared/navbar/user'
import Footer from '@Shared/footer'
import Error from '@Components/Error'
import ForgetPassword from '@Features/user/Auth/components/ForgetPassword'
import ResetPassword from '@Features/user/Auth/components/ResetPassword'

// Lazy load components
const Landing = lazy(() => import('@Features/landing'))
const Dashboard = lazy(() => import('@Features/user/Dashboard'))
const Courses = lazy(() => import('@Features/user/courses'))
const CoursesDetails = lazy(() => import('@Features/user/courses/Details'))
const Cart = lazy(() => import('@Features/user/cart/Index'))
const ChangePassword = lazy(() => import('@Features/changePassword'))
const MyLearnings = lazy(() => import('@Features/user/myLearnings/Index'))

const Router = ({ isAuth }: { isAuth: boolean }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* test routes */}
        <Route
          path="/landing"
          element={
            <>
              <NavbarLanding />
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
          path="/"
          element={
            !isAuth ? (
              <Suspense fallback={<Loading />}>
                <NavbarLanding />
                <Landing />
                <Footer />
              </Suspense>
            ) : (
              <Navigate to={'/dashboard'} replace={true} />
            )
          }
        />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="*" element={<Error />} />
        {/* end of normal routes */}

        {/* protected routes for user */}
        <Route
          element={
            <ProtectedRoute
              auth={isAuth}
              Navbar={<NavbarUser />}
              Footer={<Footer />}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CoursesDetails />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-learnings" element={<MyLearnings />} />
        </Route>
        {/* end of protected routes for user */}

        {/* protected routes for admin */}
        {/* <Route element={<ProtectedRoute auth={isAuth.isAuth} isAdmin={true} />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route> */}
        {/* end of protected routes for admin */}
      </>
    )
  )

  return <RouterProvider router={router} />
}
export default Router
