import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

export type Efood = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [catalogoServico, setCatalogoServico] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCatalogoServico(res))
  }, [])

  return (
    <>
      <Header background="light" />
      <ProductList title="" background="light" efoods={catalogoServico} />
    </>
  )
}

export default Home
