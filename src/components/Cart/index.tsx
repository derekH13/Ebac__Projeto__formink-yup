import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Funções
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

// Componentes
import Botao from '../Button'

// Estilos
import Checkout from '../../pages/Checkout'
import { getTotalPrice, parseToBrl } from '../../utils'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false) // Estado para controlar a exibição do Checkout

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setShowCheckout(true)
    closeCart()
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'isOpen' : ''}>
        {!showCheckout && <S.Overlay onClick={closeCart} />}
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
            Valor Total <span>{parseToBrl(getTotalPrice(items))}</span>
          </S.Prices>
          <Botao
            onClick={goToCheckout}
            type="button"
            title="Clique aqui para continuar com a compra"
            background="dark"
          >
            Continuar com a entrega
          </Botao>
        </S.Sidebar>
      </S.CartContainer>

      {showCheckout && <Checkout />}
    </>
  )
}

export default Cart
