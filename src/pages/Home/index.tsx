// Funções
import { useGetHomePageQuery } from '../../services/api'

// Componentes
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

const Home = () => {
  const { data: catalogoServico = [] } = useGetHomePageQuery() // Define um valor padrão vazio para catalogoServico

  return (
    <>
      <Header background="light" />
      <ProductList title="" background="light" efoods={catalogoServico} />
    </>
  )
}

export default Home
