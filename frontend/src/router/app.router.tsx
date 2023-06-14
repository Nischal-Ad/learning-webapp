import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { lazy } from 'react'

//normal components
import ProtectedRoute from './ProtectedRoute'
import NavbarLanding from '@Shared/navbar/landing'
import NavbarUser from '@Shared/navbar/user'
import Footer from '@Shared/footer'
import Error from '@Components/Error'
import RestrictedRoute from './RestrictedRoute'

// Lazy load components
const Landing = lazy(() => import('@Features/landing'))
const Dashboard = lazy(() => import('@Features/user/Dashboard'))
const Courses = lazy(() => import('@Features/user/courses'))
const CoursesDetails = lazy(() => import('@Features/user/courses/Details'))
const Cart = lazy(() => import('@Features/user/cart/Index'))
const ChangePassword = lazy(() => import('@Features/changePassword'))
const MyLearnings = lazy(() => import('@Features/user/myLearnings/Index'))
const ForgetPassword = lazy(
  () => import('@Features/user/Auth/components/ForgetPassword')
)
const ResetPassword = lazy(
  () => import('@Features/user/Auth/components/ResetPassword')
)

const Router = ({ isAuth }: { isAuth: boolean }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* normal routes */}
        <Route path="*" element={<Error />} />
        {/* end of normal routes */}

        {/* restricted routes only assisable when user is logout */}
        <Route element={<RestrictedRoute auth={isAuth} />}>
          <Route
            path="/"
            element={
              <>
                <NavbarLanding />
                <Landing />
                <Footer />
              </>
            }
          />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Route>
        {/* end of restricted routes */}

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
