// Recursos externos
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Imagens
import ImgPoupapClose from '../../assets/icons/close.png'

// Funções
import { add, CartItem, open } from '../../store/reducers/cart'

// Componentes
import Botao from '../Button'
import Tag from '../Tag'

// Estilos
import { parseToBrl } from '../../utils'
import * as S from './styles'

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
      <S.ContainerPoupap className="overlay" onClick={onClose}>
        <S.Poupap onClick={(e) => e.stopPropagation()}>
          <S.CloseImg onClick={onClose}>
            <img src={ImgPoupapClose} alt="Fechar modal" />
          </S.CloseImg>
          <S.SectionImgModal>
            <S.ModalImage src={foto} alt="Produto" />
          </S.SectionImgModal>
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
                Adicionar ao carrinho - {parseToBrl(preco)}
              </Botao>
            </Tag>
          </div>
        </S.Poupap>
      </S.ContainerPoupap>
    </div>
  )
}

export default ModalPoupap
