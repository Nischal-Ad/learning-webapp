import { useEffect } from 'react'
import WebFont from 'webfontloader'
import router from './router/app.router'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito', 'Quicksand', 'Poppins', 'Bruno Ace SC', 'Cinzel'],
      },
    })
  }, [])

  return <RouterProvider router={router} />
}

export default App
