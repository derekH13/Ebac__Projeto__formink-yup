import { Link, useLocation } from 'react-router-dom'

import {
  CarrinhoDeProdutos,
  ContainerHeader,
  HeaderPage,
  Imagem,
  RestaurantName,
  Titulo
} from './styles'

// Importando imagens
import LogoImgHome from '../../assets/icons/logo.png'
import BannerImgHome from '../../assets/images/BannerImgHome.png'

export type Props = {
  background: 'light' | 'dark'
}

const Header = ({ background }: Props) => {
  const location = useLocation() // useLocation para obter a localização atual da pagina que estou

  // Defini o texto na localização atual
  const titleText =
    location.pathname === '/Perfil'
      ? ''
      : 'Viva experiências gastronômicas no conforto da sua casa'

  // Defini o texto na localização atual
  const titleRestaurate = location.pathname === '/Perfil' ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === '/Perfil' ? '0 produto(s) no carrinho' : ''

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
              <img className="imagemLogoLnk" src={LogoImgHome} alt="efood" />
            </Link>
            <CarrinhoDeProdutos>{titleCarrinho}</CarrinhoDeProdutos>
          </ContainerHeader>
          <Titulo>{titleText}</Titulo>
        </div>
      </Imagem>
    </HeaderPage>
  )
}
export default Header
