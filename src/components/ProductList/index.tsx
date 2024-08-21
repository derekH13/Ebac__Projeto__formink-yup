// Recursos externos
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

// Funções

// Componentes
import Product from '../Product'

// Estilos
import Loader from '../Loader'
import { ProductListContainer, ProductListItem } from './styles'

export type Props = {
  title: string
  background: 'light' | 'dark'
  efoods?: Efood[] | CardapioItem[]
  isCardapio?: boolean
  isLoading?: boolean
}

const ProductList: React.FC<Props> = ({
  title,
  background,
  efoods,
  isLoading,
  isCardapio = false
}) => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const [catalogoServico, setCatalogoServico] = useState<
    Efood[] | CardapioItem[]
  >([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        if (!response.ok) {
          throw new Error('Erro ao carregar dados')
        }
        const data = await response.json()
        setCatalogoServico(Array.isArray(data) ? data : [data]) // Assuming data is an array or an object
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      }
    }

    if (efoods && efoods.length === 0) {
      fetchData()
    } else {
      setCatalogoServico(efoods ?? []) // Default to an empty array if efoods is undefined
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

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <ProductListContainer background={background}>
        <h2>{title}</h2>
        <ProductListItem background={background}>
          {isCardapio
            ? // Renderizar informações de CardapioItem quando estiver na página Perfil/id
              (catalogoServico as CardapioItem[]).map((item) => (
                <Product
                  key={item.id}
                  image={item.foto}
                  infos={[]}
                  title={item.nome}
                  // Remove a propriedade nota se for CardapioItem
                  description={item.descricao}
                  to={`/perfil/${id}`}
                  background={background}
                  currentItem={item}
                  shouldTruncateDescription={location.pathname.includes(
                    '/perfil'
                  )}
                  id={item.id}
                />
              ))
            : // Renderizar informações de Efood quando estiver na página HOME
              (catalogoServico as Efood[]).map((efood) => (
                <Product
                  key={efood.id}
                  image={efood.capa}
                  infos={getEfoodTags(efood)}
                  title={efood.titulo}
                  nota={efood.avaliacao}
                  description={efood.descricao}
                  to={`/perfil/${efood.id}`}
                  background={background}
                  currentItem={null}
                  shouldTruncateDescription={location.pathname.includes(
                    '/perfil'
                  )}
                  id={efood.id.toString()} // Convertendo efood.id para string
                />
              ))}
        </ProductListItem>
      </ProductListContainer>
    </div>
  )
}

export default ProductList
