// Recursos externos
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

// Funções
import { CardapioItem } from '../../services/api'

// Imagens
import RestaurantRatingImg from '../../assets/icons/estrela.png'

// Componentes
import Tag from '../../components/Tag'
import Botao from '../Button'
import ModalPoupap from '../Modal'

// Estilos
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
  nota?: number // Tornar 'nota' opcional
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
  shouldTruncateDescription = false
}) => {
  const location = useLocation()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const buttonText = location.pathname.startsWith(`/perfil/`)
    ? 'Adicionar ao carrinho'
    : 'Saiba mais'

  const getTruncatedDescription = (description: string) => {
    if (description && description.length > 160) {
      return description.slice(0, 160) + '...'
    }
    return description
  }

  const isPerfilPage = location.pathname.startsWith(`/perfil/`)

  return (
    <div className="container">
      <CardConteiner>
        <CardRestaurant
          title={`Clicque aqui para ver mais detalhes do cardapio : ${title}`}
        >
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
              {isPerfilPage && shouldTruncateDescription
                ? getTruncatedDescription(description)
                : description}
            </p>
            {isPerfilPage ? (
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
