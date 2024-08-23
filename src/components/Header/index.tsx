// Recursos externos
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'

// Funções
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

// Imagens (não é exatamente um recurso externo, mas também não se encaixa bem em componentes ou estilos)
import LogoImgHome from '../../assets/icons/logo.png'
import BannerImgHome from '../../assets/images/BannerImgHome.png'

// Estilos
import * as S from './styles'

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
    <S.HeaderPage className="container">
      <S.Imagem
        style={{ backgroundImage: `url(${BannerImgHome})` }}
        background={background}
      >
        <div className="container">
          <S.ContainerHeader>
            <S.RestaurantName>{titleRestaurate}</S.RestaurantName>
            <Link title="Clique aqui para retornar a pagina home" to="/">
              <img
                className="imagemLogoLnk"
                src={LogoImgHome}
                alt="efood"
                width="150"
                height="50" // Define altura e largura da imagem
              />
            </Link>

            <S.CarrinhoDeProdutos>
              {/* Coloque o evento onClick no elemento que deve abrir o carrinho */}
              <S.CartButton role="button" onClick={openCart}>
                {titleCarrinho}
              </S.CartButton>
            </S.CarrinhoDeProdutos>
          </S.ContainerHeader>
          <S.Titulo>{titleText}</S.Titulo>
        </div>
      </S.Imagem>
    </S.HeaderPage>
  )
}

export default React.memo(Header)
