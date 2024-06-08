import Efood from '../../models/Efood'
import Product from '../Product'
import { ProductListContainer, ProductListItem } from './styles'

export type Props = {
  title: string
  background: 'light' | 'dark'
  efoods: Efood[]
}

const ProductList = ({ background, title, efoods }: Props) => (
  <div className="container">
    <ProductListContainer background={background}>
      <h2>{title}</h2>
      <ProductListItem background={background}>
        {efoods.map((efood) => (
          <Product
            key={efood.id}
            title={efood.title}
            description={efood.description}
            infos={efood.infos}
            nota={efood.nota}
            image={efood.image}
            background={'light'}
          />
        ))}
      </ProductListItem>
    </ProductListContainer>
  </div>
)

export default ProductList
