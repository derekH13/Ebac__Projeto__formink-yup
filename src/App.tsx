import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalCSS } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas key={Math.random()} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
