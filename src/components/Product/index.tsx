import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Importa os estilos personalizados e componentes estilizados
import {
  CardConteiner,
  CardRestaurant,
  ContainerDescritivo,
  Imagem,
  Infos,
  LineSection,
  RatingStar
} from './styles'

// Importa a imagem da estrela de classificação do restaurante
import RestaurantRatingImg from '../../assets/icons/estrela.png'

// Importa o componente Tag
import Tag from '../../components/Tag'
import Botao from '../Button'
import ModalPoupap from '../Modal'

// Define o tipo Props para tipar as propriedades que o componente MockUp espera receber
export type Props = {
  title: string
  description: string
  infos: string[]
  nota: number
  image: string
  background: 'light' | 'dark'
}

// Define o componente funcional MockUp que recebe propriedades do tipo Props
const Products = ({
  title,
  description,
  infos,
  nota,
  image,
  background
}: Props) => {
  const location = useLocation() // Usa o hook useLocation para obter a localização atual da URL

  // Define o texto no botão baseado na localização atual
  const buttonText =
    location.pathname === '/Perfil' ? 'Adicionar ao carrinho' : 'Saiba mais'

  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar a visibilidade do modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleButtonClick = () => {
    if (
      location.pathname === '/Perfil' &&
      buttonText === 'Adicionar ao carrinho'
    ) {
      toggleModal()
    } else {
      // Redireciona para a página de perfil
      window.location.href = '/Perfil'
    }
  }

  return (
    <div className="container">
      <>
        <CardConteiner>
          <CardRestaurant>
            {/* Define a imagem de fundo do restaurante */}
            <Imagem style={{ backgroundImage: `url(${image})` }} />
            <Infos>
              {/* Mapeia as informações e renderiza o componente Tag para cada uma */}
              {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
              ))}
            </Infos>
            <ContainerDescritivo>
              <LineSection>
                {/* Renderiza o título do card */}
                <h3 className="tituloCard">{title}</h3>
                <div className="Rating">
                  {/* Renderiza a nota e a imagem de classificação */}
                  <h3 className="nota">{nota}</h3>
                  <RatingStar
                    style={{ backgroundImage: `url(${RestaurantRatingImg})` }}
                  />
                </div>
              </LineSection>
              {/* Renderiza a descrição do card */}
              <p>{description}</p>
              {/* Renderiza um Link que leva para a página de perfil com um botão de tag */}
              <Link to="/Perfil">
                <Tag size="big">
                  <Botao
                    type="button"
                    title={buttonText}
                    background={'light'}
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                  </Botao>
                </Tag>
              </Link>
            </ContainerDescritivo>
          </CardRestaurant>
        </CardConteiner>

        {isModalOpen && <ModalPoupap onClose={toggleModal} />}
      </>
    </div>
  )
}

// Exporta o componente MockUp como padrão
export default Products
