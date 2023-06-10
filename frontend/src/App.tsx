import { memo, useEffect } from 'react'
import WebFont from 'webfontloader'
import Router from './router/app.router'
import { useAuth } from '@Features/user/Auth/hooks/useAuth'
import { useAppSelector } from '@Store'
import Loading from '@Components/Loader'

const App = () => {
  const { onUserProfile } = useAuth()
  const { status, isAuth } = useAppSelector((store) => store.user)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito', 'Quicksand', 'Poppins', 'Bruno Ace SC', 'Cinzel'],
      },
    })
    onUserProfile()
  }, [])

  if (status === 'loading' || status === 'idle') {
    return <Loading />
  }

  return <Router isAuth={isAuth === true} />
}

export default memo(App)
