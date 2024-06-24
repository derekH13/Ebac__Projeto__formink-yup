import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { Efood } from '../Home'

type Params = {
  id: string
}
const ListaRestaurantMenu: Efood[] = []

const Perfil = () => {
  const { id } = useParams()

  const [efood, setEfood] = useState<Efood>()

  return (
    <>
      <Header background={'dark'} />
      <Banner />
      <ProductList title="" background={'dark'} efoods={ListaRestaurantMenu} />
    </>
  )
}
export default Perfil
