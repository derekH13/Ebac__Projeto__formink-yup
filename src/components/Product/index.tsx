import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import RestaurantRatingImg from '../../assets/icons/estrela.png'
import Tag from '../../components/Tag'
import { CardapioItem } from '../../pages/Perfil'
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

export type Efood = {
  id: string
  capa: string
  tipo: string
  destacado: boolean
  titulo: string
  avaliacao: number
  descricao: string
  cardapio: CardapioItem[]
}

type ProductProps = {
  image: string
  infos: string[]
  title: string
  nota: number
  description: string
  to: string
  background: 'light' | 'dark'
  currentItem: CardapioItem | null
  shouldTruncateDescription?: boolean
  id: string
}

const Product: React.FC<ProductProps> = ({
  image,
  infos,
  title,
  nota,
  description,
  to,
  background,
  currentItem,
  shouldTruncateDescription = false,
  id
}) => {
  const location = useLocation()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const buttonText = location.pathname.startsWith(`/perfil/${id}`)
    ? 'Adicionar ao carrinho'
    : 'Saiba mais'

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
              location.pathname.startsWith(`/perfil/${id}`)
                ? getTruncatedDescription(description)
                : description}
            </p>
            {location.pathname.startsWith(`/perfil/${id}`) ? (
              <Botao
                type="button"
                onClick={toggleModal}
                title={buttonText}
                background={background}
              >
                {buttonText}
              </Botao>
            ) : (
              <Botao
                type="link"
                to={to}
                title={buttonText}
                background={background}
              >
                {buttonText}
              </Botao>
            )}
          </ContainerDescritivo>
        </CardRestaurant>
      </CardConteiner>
      {isModalVisible && currentItem && (
        <ModalPoupap
          onClose={toggleModal}
          foto={currentItem.foto}
          descricao={currentItem.descricao}
          porcao={currentItem.porcao}
          preco={currentItem.preco}
          nome={currentItem.nome}
        />
      )}
    </div>
  )
}

export default Product
