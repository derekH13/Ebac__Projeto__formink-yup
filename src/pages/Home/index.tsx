import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

// Define o tipo Efood para tipar os dados do restaurante
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
  // Estado para armazenar a lista de restaurantes
  const [catalogoServico, setCatalogoServico] = useState<Efood[]>([])

  // Efeito para buscar os dados dos restaurantes ao carregar o componente
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCatalogoServico(res))
  }, [])

  return (
    <>
      <Header background="light" />
      {/* Passa os dados dos restaurantes para o componente ProductList */}
      <ProductList title="" background="light" efoods={catalogoServico} />
    </>
  )
}

export default Home
