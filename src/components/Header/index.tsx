import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import LogoImgHome from '../../assets/icons/logo.png'
import BannerImgHome from '../../assets/images/BannerImgHome.png'
import { RootReducer } from '../../store'
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

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  // Define o texto na localização atual
  const titleRestaurate = id ? 'Restaurantes' : ''
  const titleCarrinho = id ? `${items.length} produto(s) no carrinho` : ''

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
