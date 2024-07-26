import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import LogoImgHome from '../../assets/icons/logo.png'
import BannerImgHome from '../../assets/images/BannerImgHome.png'
import { open } from '../../store/reducers/cart'
import {
  CarrinhoDeProdutos,
  CartButton,
  ContainerHeader,
  HeaderPage,
  Imagem,
  RestaurantName,
  Titulo
} from './styles'

export type Props = {
  background: 'light' | 'dark'
}

const Header = ({ background }: Props) => {
  const location = useLocation()
  const { id } = useParams<{ id: string }>()

  // Define o texto na localização atual
  const titleText =
    location.pathname === '/Perfil'
      ? ''
      : 'Viva experiências gastronômicas no conforto da sua casa'

  // Define o texto na localização atual
  const titleRestaurate = id ? 'Restaurantes' : ''
  const titleCarrinho = id ? '0 produto(s) no carrinho' : ''

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderPage className="container">
      <Imagem
        style={{ backgroundImage: `url(${BannerImgHome})` }}
        background={background}
      >
        <div className="container">
          <ContainerHeader>
            <RestaurantName>{titleRestaurate}</RestaurantName>
            <Link to="/">
              <img
                className="imagemLogoLnk"
                src={LogoImgHome}
                alt="efood"
                width="150"
                height="50" // Define altura e largura da imagem
              />
            </Link>

            <CarrinhoDeProdutos>
              {/* Coloque o evento onClick no elemento que deve abrir o carrinho */}
              <CartButton onClick={openCart}>{titleCarrinho}</CartButton>
            </CarrinhoDeProdutos>
          </ContainerHeader>
          <Titulo>{titleText}</Titulo>
        </div>
      </Imagem>
    </HeaderPage>
  )
}

export default React.memo(Header)
