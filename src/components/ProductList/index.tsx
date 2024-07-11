import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { CardapioItem, Efood } from '../../pages/Perfil'
import Products from '../Product'
import { ProductListContainer, ProductListItem } from './styles'

export type Props = {
  title: string
  background: 'light' | 'dark'
  efoods: Efood[]
}

const ProductList: React.FC<Props> = ({ title, background, efoods }) => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const [catalogoServico, setCatalogoServico] = useState<Efood[]>([])
  const [currentItemModal, setCurrentItemModal] = useState<CardapioItem>(
    {} as CardapioItem
  )

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

    if (efoods.length === 0) {
      fetchData()
    } else {
      setCatalogoServico(efoods)
    }
  }, [id, efoods])

  const handleButtonClick = (item: CardapioItem) => {
    setCurrentItemModal(item)
  }

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

  return (
    <div className="container">
      <ProductListContainer background={background}>
        <h2>{title}</h2>
        <ProductListItem background={background}>
          {location.pathname.startsWith('/perfil')
            ? // Renderizar informações de CardapioItem quando estiver na página Perfil/id
              catalogoServico.map((efood) =>
                efood.cardapio.map((item) => (
                  <Products
                    key={item.id}
                    image={item.foto}
                    infos={getEfoodTags(efood)}
                    title={item.nome}
                    nota={efood.avaliacao}
                    description={item.descricao}
                    to={`/perfil/${efood.id}`}
                    background={background}
                    currentItem={currentItemModal}
                    shouldTruncateDescription={location.pathname.includes(
                      '/perfil'
                    )}
                    id={id || ''}
                  />
                ))
              )
            : // Renderizar informações de Efood quando estiver na página HOME
              catalogoServico.map((efood) => (
                <Products
                  key={efood.id}
                  image={efood.capa}
                  infos={getEfoodTags(efood)}
                  title={efood.titulo}
                  nota={efood.avaliacao}
                  description={efood.descricao}
                  to={`/perfil/${efood.id}`}
                  background={background}
                  currentItem={currentItemModal}
                  shouldTruncateDescription={location.pathname.includes(
                    '/perfil'
                  )}
                  id={id || ''}
                />
              ))}
        </ProductListItem>
      </ProductListContainer>
    </div>
  )
}

export default ProductList
