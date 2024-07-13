// ModalPoupap.tsx
import React from 'react'
import ImgPoupapClose from '../../assets/icons/close.png'
import Botao from '../Button'
import Tag from '../Tag'
import {
  CloseImg,
  ContainerPoupap,
  ModalImage,
  Poupap,
  SectionImgModal
} from './styles'

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

  const handleAddToCart = () => {
    // Lógica para adicionar o item ao carrinho
    // console.log('Item adicionado ao carrinho:', nome)
    onClose() // Fecha o modal após adicionar ao carrinho (simulação)
  }

  return (
    <div className="container">
      <ContainerPoupap className="overlay" onClick={onClose}>
        <Poupap>
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
                onClick={handleAddToCart} // Adiciona a função de clique
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
