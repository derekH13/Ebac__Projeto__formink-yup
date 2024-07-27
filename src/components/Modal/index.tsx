import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImgPoupapClose from '../../assets/icons/close.png'
import { add, CartItem, open } from '../../store/reducers/cart'
import Botao from '../Button'
import Tag from '../Tag'
import {
  CloseImg,
  ContainerPoupap,
  ModalImage,
  Poupap,
  SectionImgModal
} from './styles'

// Define a interface do ModalPoupapProps
interface ModalPoupapProps {
  onClose: () => void
  foto: string
  descricao: string
  preco: number
  nome: string
  porcao: string
}

const ModalPoupap: React.FC<ModalPoupapProps> = ({
  onClose,
  foto,
  descricao,
  preco,
  nome,
  porcao
}) => {
  const formatPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const dispatch = useDispatch()
  const items = useSelector(
    (state: { cart: { items: CartItem[] } }) => state.cart.items
  )

  const handleAddToCart = () => {
    const item: CartItem = {
      id: Date.now(), // Gere um ID único ou modifique conforme necessário
      foto,
      descricao,
      preco,
      nome,
      porcao
    }

    const existingItem = items.find((cartItem) => cartItem.nome === item.nome)

    if (!existingItem) {
      dispatch(add(item))
      dispatch(open())
      onClose()
    } else {
      alert('O prato já está no carrinho!')
    }
  }

  return (
    <div className="container">
      <ContainerPoupap className="overlay" onClick={onClose}>
        <Poupap onClick={(e) => e.stopPropagation()}>
          <CloseImg onClick={onClose}>
            <img src={ImgPoupapClose} alt="Fechar modal" />
          </CloseImg>
          <SectionImgModal>
            <ModalImage src={foto} alt="Produto" />
          </SectionImgModal>
          <div>
            <h3>{nome}</h3>
            <p>
              {descricao}
              <br />
              <br />
              {porcao}
            </p>
            <Tag size="big">
              <Botao
                type="button"
                onClick={handleAddToCart}
                title={'Adicionar ao carrinho'}
                background="dark"
              >
                Adicionar ao carrinho - {formatPreco(preco)}
              </Botao>
            </Tag>
          </div>
        </Poupap>
      </ContainerPoupap>
    </div>
  )
}

export default ModalPoupap
