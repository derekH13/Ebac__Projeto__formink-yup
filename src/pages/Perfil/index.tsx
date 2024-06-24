import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList, { Efood } from '../../components/ProductList'

const Perfil = () => {
  const [listaRestaurantMenu, setListaRestaurantMenu] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaRestaurantMenu(res))
  }, [])

  return (
    <>
      <Header background={'dark'} />
      <Banner />
      <ProductList title="" background={'dark'} efoods={listaRestaurantMenu} />
    </>
  )
}

export default Perfil
