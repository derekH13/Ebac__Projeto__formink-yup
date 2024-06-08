// Importando Stu
import { ContainerHeader, HeaderPage, Images, Titulo } from './styles'

// Importando imagens
import Logo from '../../assets/icons/logo.png'
import BannerGround from '../../assets/images/BannerImgHome.png'
import Button from '../Button'

const Header = () => (
  <>
    <HeaderPage className="container">
      <Images style={{ backgroundImage: `url(${BannerGround})` }}>
        <div className="container">
          <ContainerHeader></ContainerHeader>
          <a href="/">
            <img className="imagemLogoLnk" src={Logo} alt="efood" />
          </a>
          <Titulo>
            Viva experiências gastronômicas no conforto da sua casa
          </Titulo>
        </div>
      </Images>
    </HeaderPage>
  </>
)

export default Header
