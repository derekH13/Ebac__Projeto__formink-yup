// Recursos externos
import { useDispatch, useSelector } from 'react-redux'

// Funções
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

// Componentes
import Botao from '../Button'

// Estilos
import { parseToBrl } from '../../utils'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{parseToBrl(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          Valor Total <span>{parseToBrl(getTotalPrice())}</span>
        </S.Prices>
        <Botao
          type="button"
          title="Clique aqui para continuar com a compra"
          background="dark"
        >
          Continuar com a entrega
        </Botao>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
