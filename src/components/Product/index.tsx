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

const Products: React.FC<Props> = ({
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
}) => {
  const location = useLocation()
  const [currentItemModal, setCurrentItemModal] = useState<{
    cardapio: {
      foto: string
      descricao: string
      nome: string
      preco: number
      porcao: string
    }[]
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
  } | null>(null)

  const toggleModal = () => {
    setIsModalVisible(!isModalOpen)
  }

  const handleButtonClick = (
    foto: string,
    descricao: string,
    nome: string,
    preco: number
  ) => {
    const itemSelecionado = {
      ...currentItem,
      cardapio: [
        {
          foto: foto,
          descricao: descricao,
          preco: preco,
          porcao: '',
          nome: nome
        }
      ]
    }
    setCurrentItemModal(itemSelecionado)
    toggleModal()
  }

  const getTruncatedDescription = (description: string) => {
    if (description && description.length > 160) {
      return description.slice(0, 160) + '...'
    }
    return description
  }

  return (
    <div className="container">
      <CardConteiner>
        <CardRestaurant>
          <Imagem style={{ backgroundImage: `url(${image})` }} />
          <Infos>
            {infos.map((info, index) => (
              <Tag key={index}>{info}</Tag>
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
                    title,
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
          foto={image}
          descricao={description}
          preco={currentItemModal.cardapio[0].preco}
          nome={title}
        />
      )}
    </div>
  )
}

export default Products
