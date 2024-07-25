import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

import { useGetFeatureEfoodQuery } from '../../services/api'

type Params = {
  id: string
}

const Perfil = () => {
  const { id } = useParams<Params>()
  const { data: listaRestaurantMenu } = useGetFeatureEfoodQuery(id!)

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
        />
      </>
    )
  }
  return <h4>Carregando ...</h4>
}

export default Perfil
