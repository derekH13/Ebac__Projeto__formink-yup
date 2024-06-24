import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import RestaurantRatingImg from '../../assets/icons/estrela.png'
import Tag from '../../components/Tag'
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
}

const Products = ({
  image,
  infos,
  title,
  nota,
  description,
  to,
  background
}: Props) => {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleButtonClick = () => {
    if (location.pathname === '/Perfil') {
      toggleModal()
    } else {
      window.location.href = to
    }
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
            <p>{description}</p>
            <Botao
              type="link"
              to={to}
              title={
                location.pathname === '/Perfil'
                  ? 'Adicionar ao carrinho'
                  : 'Saiba mais'
              }
              background={background}
              onClick={handleButtonClick}
            >
              {location.pathname === '/Perfil'
                ? 'Adicionar ao carrinho'
                : 'Saiba mais'}
            </Botao>
          </ContainerDescritivo>
        </CardRestaurant>
      </CardConteiner>
      {isModalOpen && <ModalPoupap onClose={toggleModal} />}
    </div>
  )
}

export default Products
