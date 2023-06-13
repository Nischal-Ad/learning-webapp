import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@Components/Loader'

interface IRestrictedRoutes {
  auth: boolean
}

const RestrictedRoute: React.FC<IRestrictedRoutes> = ({ auth = false }) => {
  if (auth) {
    return <Navigate to={'/dashboard'} replace={true} />
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default RestrictedRoute
