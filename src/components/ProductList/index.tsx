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
          {catalogoServico.map((efood) =>
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
                currentItem={
                  location.pathname.startsWith('/perfil')
                    ? item
                    : currentItemModal
                }
                shouldTruncateDescription={location.pathname.includes(
                  '/perfil'
                )}
                id={id || ''} // Inicializa com uma string vazia se id for undefined
              />
            ))
          )}
        </ProductListItem>
      </ProductListContainer>
      {currentItemModal && (
        <Products
          image={currentItemModal.foto}
          infos={[]}
          title={currentItemModal.nome}
          nota={0} // Substitua pela avaliação real do item, se disponível
          description={currentItemModal.descricao}
          to=""
          background={background}
          currentItem={currentItemModal}
          shouldTruncateDescription={false}
          id={''}
        />
      )}
    </div>
  )
}

export default ProductList
