import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { Efood } from '../Home'

const ListaRestaurantMenu: Efood[] = []

const Perfil = () => (
  <>
    <Header background={'dark'} />
    <Banner />
    <ProductList title="" background={'dark'} efoods={ListaRestaurantMenu} />
  </>
)
export default Perfil
