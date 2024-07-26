import { useSelector } from 'react-redux'
import pizza from '../../assets/images/pizza.png'
import { RootReducer } from '../../store'
import Botao from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="Pizza" />
            <div>
              <h3>Nome do prato</h3>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Pizza" />
            <div>
              <h3>Nome do prato</h3>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Prices>
          Valor Total <span>R$250,00</span>
        </Prices>
        <Botao
          type={'button'}
          title={'Clique aqui para continuar com a compra'}
          background={'dark'}
        >
          Continuar com a entrega
        </Botao>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
