import { Efood } from '../../pages/Home'
import Product from '../Product'
import { ProductListContainer, ProductListItem } from './styles'

export type Props = {
  title: string
  background: 'light' | 'dark'
  efoods: Efood[]
}

const ProductList = ({ background, title, efoods }: Props) => {
  const getEfoodTags = (efood: Efood) => {
    const tags = []

    if (efood.tipo) {
      tags.push(efood.tipo)
    }
    if (efood.destacado) {
      tags.push('Destaque da semana')
    }
    return tags
  }

  return (
    <div className="container">
      <ProductListContainer background={background}>
        <h2>{title}</h2>
        <ProductListItem background={background}>
          {efoods.map((efood) => (
            <Product
              key={efood.id}
              image={efood.capa}
              infos={getEfoodTags(efood)}
              title={efood.titulo}
              nota={efood.avaliacao}
              description={efood.descricao}
              background={'light'}
            />
          ))}
        </ProductListItem>
      </ProductListContainer>
    </div>
  )
}

export default ProductList
