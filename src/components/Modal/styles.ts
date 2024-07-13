import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const ContainerPoupap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed; /* Alterado para fixed */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1; /* Definindo um z-index alto */
`

export const Poupap = styled.div`
  position: relative;
  display: flex;
  width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${colors.rosePink};
  z-index: 1; /* Definindo um z-index mais alto para o conteúdo do popup */

  h3 {
    height: 21px;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.9px;
    color: ${colors.white};
    margin-bottom: 16px;
  }

  p {
    width: 656px;
    /* height: 176px; */
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: ${colors.white};
    margin: 16px 0;
  }

  ${TagContainer} {
    width: 218px;
    height: 24px;
    background-color: ${colors.palePeach};
    color: ${colors.rosePink};
    margin-bottom: 27px;
  }
`

export const SectionImgModal = styled.div`
  margin-right: 24px;
`

export const ModalImage = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const CloseImg = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  z-index: 1; /* Garantindo que o botão de fechar esteja acima de tudo */

  > img {
    width: 16px;
    height: 16px;
  }
`
