import ImgPizzaSrc from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Efood from '../../models/Efood'

const ListaRestaurantMenu: Efood[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImgPizzaSrc
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImgPizzaSrc
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImgPizzaSrc
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImgPizzaSrc
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImgPizzaSrc
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImgPizzaSrc
  }
]

const Perfil = () => (
  <>
    <Header background={'dark'} />
    <Banner />
    <ProductList title="" background={'dark'} efoods={ListaRestaurantMenu} />
  </>
)
export default Perfil
