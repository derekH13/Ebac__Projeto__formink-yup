import { useState } from 'react'
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
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>> // Garantimos que setIsModalVisible seja definido
  isModalOpen: boolean // Garantimos que isModalOpen seja definido como booleano
  currentItem: Efood
  shouldTruncateDescription?: boolean // Propriedade opcional para decidir se deve truncar a descrição
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
  shouldTruncateDescription = false // Define como falso por padrão
}: Props) => {
  const location = useLocation()
  const [currentItemModal, setCurrentItemModal] = useState<Efood | null>(null) // Defina como Efood | null

  const toggleModal = () => {
    if (typeof isModalOpen === 'boolean') {
      // Verifica se isModalOpen é booleano
      setIsModalVisible(!isModalOpen)
    }
  }

  const handleButtonClick = () => {
    if (location.pathname === '/') {
      window.location.href = to
    } else {
      setCurrentItemModal(currentItem)
      toggleModal()
    }
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
            </p>{' '}
            {/* Renderiza a descrição completa na modal */}
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
                onClick={handleButtonClick}
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
        <ModalPoupap item={currentItemModal} onClose={toggleModal} />
      )}
    </div>
  )
}

export default Products
