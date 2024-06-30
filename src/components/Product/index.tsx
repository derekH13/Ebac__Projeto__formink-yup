import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import RestaurantRatingImg from '../../assets/icons/estrela.png'
import Tag from '../../components/Tag'
import { Efood } from '../../pages/Perfil'
import Botao from '../Button'
import ModalPoupap from '../Modal'
import {
  CardConteiner,
  CardRestaurant,
  ContainerDescritivo,
  Imagem,
  Infos,
  LineSection,
  RatingStar
} from './styles'

export type Props = {
  image: string
  infos: string[]
  title: string
  nota: number
  description: string
  to: string
  background: 'light' | 'dark'
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean
  currentItem: Efood
  shouldTruncateDescription?: boolean
}

const Products = ({
  image,
  infos,
  title,
  nota,
  description,
  to,
  background,
  setIsModalVisible,
  isModalOpen,
  currentItem,
  shouldTruncateDescription = false
}: Props) => {
  const location = useLocation()
  const [currentItemModal, setCurrentItemModal] = useState<Efood | null>(null)

  const toggleModal = () => {
    setIsModalVisible(!isModalOpen)
  }

  const handleButtonClick = (
    foto: string,
    descricao: string,
    preco: number
  ) => {
    setCurrentItemModal({
      ...currentItem,
      cardapio: [
        {
          foto: foto,
          descricao: descricao,
          preco: preco,
          id: currentItem.id, // Se necessário para identificação do item
          nome: currentItem.titulo, // Pode ser o nome do item
          porcao: '' // Se houver campo de porção
        }
      ]
    })
    toggleModal()
  }

  const getTruncatedDescription = (description: string) => {
    if (description && description.length > 160) {
      return description.slice(0, 163) + '...'
    }
    return description
  }

  return (
    <div className="container">
      <CardConteiner>
        <CardRestaurant>
          <Imagem style={{ backgroundImage: `url(${image})` }} />
          <Infos>
            {infos.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </Infos>
          <ContainerDescritivo>
            <LineSection>
              <h3 className="tituloCard">{title}</h3>
              <div className="Rating">
                <h3 className="nota">{nota}</h3>
                <RatingStar
                  style={{ backgroundImage: `url(${RestaurantRatingImg})` }}
                />
              </div>
            </LineSection>
            <p>
              {shouldTruncateDescription &&
              location.pathname.includes('/perfil')
                ? getTruncatedDescription(description)
                : description}
            </p>
            {location.pathname === '/' ? (
              <Botao
                type="link"
                to={to}
                title="Saiba mais"
                background={background}
              >
                Saiba mais
              </Botao>
            ) : (
              <Botao
                type="button"
                onClick={() =>
                  handleButtonClick(
                    image,
                    description,
                    currentItem.cardapio[0].preco
                  )
                }
                title="Adicionar ao carrinho"
                background={background}
              >
                Adicionar ao carrinho
              </Botao>
            )}
          </ContainerDescritivo>
        </CardRestaurant>
      </CardConteiner>
      {isModalOpen && currentItemModal && (
        <ModalPoupap
          onClose={toggleModal}
          foto={currentItemModal.cardapio[0].foto}
          descricao={currentItemModal.cardapio[0].descricao}
          preco={currentItemModal.cardapio[0].preco}
        />
      )}
    </div>
  )
}

export default Products
