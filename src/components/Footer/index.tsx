// Recursos externos
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// Imagens (não é exatamente um recurso externo, mas também não se encaixa bem em componentes ou estilos)
import faceSrc from '../../assets/icons/facebook.png'
import instaSrc from '../../assets/icons/instagram.png'
import LogoImgHome from '../../assets/icons/logo.png'
import twSrc from '../../assets/icons/twitter.png'

// Estilos
import { Footers, RedeSociais, SectionFooter, Titulo } from './styles'

const Footer = () => (
  <Footers className="container">
    <SectionFooter>
      <Link title="Clique aqui para retornar a pagina home" to="/">
        <img className="imagemLogo" src={LogoImgHome} alt="efood" />
      </Link>
      <RedeSociais>
        <HashLink to="https://www.instagram.com">
          <img src={instaSrc} alt="Instagram" />
        </HashLink>
        <HashLink to="https://www.facebook.com">
          <img src={faceSrc} alt="Facebook" />
        </HashLink>
        <HashLink to="https://www.twitter.com">
          <img src={twSrc} alt="Twitter" />
        </HashLink>
      </RedeSociais>
    </SectionFooter>
    <Titulo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Titulo>
  </Footers>
)

export default Footer
