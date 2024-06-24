import React from 'react'
import ImgPoupapClose from '../../assets/icons/close.png'
import Botao from '../Button'
import { Efood } from '../ProductList'
import Tag from '../Tag'
import {
  CloseImg,
  ContainerPoupap,
  ModalImage,
  Poupap,
  SectionImgModal
} from './styles'

// Definindo o tipo de item baseado em Efood
type EfoodItem = Efood | null

interface ModalPoupapProps {
  onClose: () => void
  item: EfoodItem // Usando o tipo do item conforme definido em Efood
}

const ModalPoupap: React.FC<ModalPoupapProps> = ({ onClose, item }) => {
  // Verifica se item é definido antes de acessar suas propriedades
  if (!item) return null

  const formatPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <div className="container">
      <ContainerPoupap className="overlay">
        <Poupap>
          <CloseImg onClick={onClose}>
            <img src={ImgPoupapClose} alt="Fechar modal" />
          </CloseImg>
          <SectionImgModal>
            <ModalImage src={item.capa} alt={item.titulo} />
          </SectionImgModal>
          <div>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
            {/* Verifica se há itens no cardápio antes de exibir */}
            {item.cardapio.length > 0 && (
              <Tag size="big">
                <Botao
                  type="button"
                  title={'Adicionar ao carrinho'}
                  background="dark" // Exemplo de background, substitua conforme necessário
                >
                  Adicionar ao carrinho - {formatPreco(item.cardapio[0].preco)}
                </Botao>
              </Tag>
            )}
          </div>
        </Poupap>
      </ContainerPoupap>
    </div>
  )
}

export default ModalPoupap
