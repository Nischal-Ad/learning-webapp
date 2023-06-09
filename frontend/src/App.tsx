import { useEffect } from 'react'
import WebFont from 'webfontloader'
import Router from './router/app.router'
import { useAuth } from '@Features/user/Auth/hooks/useAuth'
import { useAppSelector } from '@Store'

const App = () => {
  const { onUserProfile } = useAuth()
  const { data } = useAppSelector((store) => store.user)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito', 'Quicksand', 'Poppins', 'Bruno Ace SC', 'Cinzel'],
      },
    })
    onUserProfile()
  }, [])

  return <Router isAuth={data?.success === true} />
}

export default App
