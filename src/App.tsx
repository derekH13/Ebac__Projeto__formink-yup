import { BrowserRouter } from 'react-router-dom'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalCSS } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
