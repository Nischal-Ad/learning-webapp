import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@Components/Loader'

interface ProtectedRouteProps {
  auth: boolean
  isAdmin?: boolean
  Navbar: React.ReactElement
  Footer: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  auth = false,
  isAdmin = false,
  Navbar,
  Footer,
}) => {
  const location = useLocation()

  if (!auth) {
    const previousPath = location.state?.previousPath
    if (previousPath !== location.pathname) {
      return (
        <Navigate
          to="/"
          replace={true}
          state={{ previousPath: location.pathname }}
        />
      )
    }
  }

  // if (!isAdmin) {
  // 	return <Navigate to={'/'} replace />;
  // }

  return (
    <>
      {Navbar}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      {Footer}
    </>
  )
}

export default ProtectedRoute
