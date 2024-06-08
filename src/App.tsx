import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Product from './components/Product'
import { GlobalCSS } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Product
          title={''}
          description={''}
          infos={[]}
          nota={''}
          image={''}
          background={'light'}
        />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div></div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
