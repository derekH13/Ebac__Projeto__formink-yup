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
  const { data: listaRestaurantMenu, isLoading } = useGetFeatureEfoodQuery(id!)

  if (isLoading) {
    return (
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  if (!listaRestaurantMenu) {
    return (
      <div className="container">
        <h3>Restaurante não encontrado</h3>
      </div>
    )
  }

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

export default Perfil
