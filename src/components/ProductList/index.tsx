import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Efood } from '../../pages/Perfil'
import Product from '../Product'
import { ProductListContainer, ProductListItem } from './styles'

export type Props = {
  title: string
  background: 'light' | 'dark'
  efoods: Efood[]
}

const ProductList = ({ background, title, efoods }: Props) => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const [catalogoServico, setCatalogoServico] = useState<Efood[]>([])

  // Determinando se é a página de perfil
  const isPerfilPage = location.pathname.includes('/perfil')

  useEffect(() => {
    if (efoods.length === 0) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setCatalogoServico([res]))
        .catch((error) => console.error('Erro ao carregar dados:', error))
    } else {
      setCatalogoServico(efoods)
    }
  }, [id, efoods])

  const getEfoodTags = (efood: Efood) => {
    const tags: string[] = []
    if (efood.tipo) {
      tags.push(efood.tipo)
    }
    if (efood.destacado) {
      tags.push('Destaque da semana')
    }
    return tags
  }

  const getdescription = (description: string) => {
    if (description.length > 176) {
      return description.slice(0, 173) + '...'
    }
    return description
  }

  return (
    <div className="container">
      <ProductListContainer background={background}>
        <h2>{title}</h2>
        <ProductListItem background={background}>
          {catalogoServico.map((efood) =>
            isPerfilPage ? (
              efood.cardapio.map((item) => (
                <Product
                  key={item.id}
                  image={item.foto}
                  infos={getEfoodTags(efood)}
                  title={item.nome}
                  nota={efood.avaliacao}
                  description={getdescription(item.descricao)}
                  to={`/perfil/${efood.id}`}
                  background={background}
                />
              ))
            ) : (
              <Product
                key={efood.id}
                image={efood.capa}
                infos={getEfoodTags(efood)}
                title={efood.titulo}
                nota={efood.avaliacao}
                description={getdescription(efood.descricao)}
                to={`/perfil/${efood.id}`}
                background={background}
              />
            )
          )}
        </ProductListItem>
      </ProductListContainer>
    </div>
  )
}

export default ProductList
