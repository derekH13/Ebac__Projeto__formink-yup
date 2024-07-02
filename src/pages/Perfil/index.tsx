import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

export interface CardapioItem {
  id: string
  foto: string
  descricao: string
  preco: number
  nome: string
  porcao: string // Exemplo de campo obrigatório
}

export interface Efood {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Perfil = () => {
  const [listaRestaurantMenu, setListaRestaurantMenu] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaRestaurantMenu(res))
      .catch((error) => console.error('Erro ao carregar dados:', error))
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
