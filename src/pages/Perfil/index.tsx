// Recursos externos
import { useParams } from 'react-router-dom'

// Funções
import { useGetFeatureEfoodQuery } from '../../services/api'

// Componentes
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

type Params = {
  id: string
}

const Perfil = () => {
  const { id } = useParams<Params>()
  const { data: listaRestaurantMenu, isLoading: isLoadingRestaurantMenu } =
    useGetFeatureEfoodQuery(id!)

  if (listaRestaurantMenu) {
    return (
      <>
        <Header background={'dark'} />

        <Banner />
        <ProductList
          title=""
          background={'dark'}
          efoods={listaRestaurantMenu.cardapio}
          isCardapio
          isLoading={isLoadingRestaurantMenu}
        />
      </>
    )
  }
  return <h4>Carregando ...</h4>
}

export default Perfil
