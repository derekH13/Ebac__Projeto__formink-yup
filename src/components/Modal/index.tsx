import React from 'react'
import ImgPoupapClose from '../../assets/icons/close.png'
import Botao from '../Button'
import Tag from '../Tag'
import { formatPreco } from '../Product'
import {
  CloseImg,
  ContainerPoupap,
  ModalImage,
  Poupap,
  SectionImgModal
} from './styles'

// Define a interface para as propriedades do modal
interface ModalPoupapProps {
  onClose: () => void
  item: {
    image: string
    title: string
    description: string
    background: 'light' | 'dark'
    nota: number
    infos: string[]
    to: string
  }
}

const ModalPoupap: React.FC<ModalPoupapProps> = ({ onClose, item }) => {
  return (
    <div className="container">
      <ContainerPoupap className="overlay">
        <Poupap>
          <CloseImg onClick={onClose}>
            <img src={ImgPoupapClose} alt="Fechar modal" />
          </CloseImg>
          <SectionImgModal>
            <ModalImage src={item.image} alt={item.title} />
          </SectionImgModal>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Tag size="big">
              <Botao
                type="button"
                title={'Adicionar ao carrinho'}
                background={item.background}
              >
                Adicionar ao carrinho - {formatPreco(60.9)}
              </Botao>
            </Tag>
          </div>
        </Poupap>
      </ContainerPoupap>
    </div>
  )
}

export default ModalPoupap
