import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { Efood } from '../Perfil'

const Home = () => {
  const [catalogoServico, setCatalogoServico] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCatalogoServico(res))
      .catch((error) => console.error('Erro ao carregar dados:', error))
  }, [])

  return (
    <>
      <Header background="light" />
      <ProductList title="" background="light" efoods={catalogoServico} />
    </>
  )
}

export default Home
