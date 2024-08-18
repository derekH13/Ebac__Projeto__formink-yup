// Recursos externos
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Componentes
import Cart from './components/Cart'
import Footer from './components/Footer'
import Rotas from './routes'

// Estilos
import { GlobalCSS } from './styles'

// Funções
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
