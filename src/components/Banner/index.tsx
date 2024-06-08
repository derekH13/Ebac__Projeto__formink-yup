import bannerImg from '../../assets/images/heroImgPerfil.png'
import { ImgBanner } from './styles'

const Banner = () => {
  return (
    <>
      <div className="container">
        <ImgBanner style={{ backgroundImage: `url(${bannerImg})` }}>
          <h3>Italiana</h3>
          <h1>La Dolce Vita Trattoria</h1>
        </ImgBanner>
      </div>
    </>
  )
}

export default Banner
