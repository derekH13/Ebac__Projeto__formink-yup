import styled from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'
import { colors } from '../../styles'

export const Row = styled.div`
  display: block;
  align-items: flex-end;

  small {
    color: ${colors.BlanchedAlmond};
  }
`

export const InputGroup = styled.div`
  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    color: ${colors.BlanchedAlmond};
    display: block;
    margin: 8px 0 8px 0;
  }

  input,
  select {
    width: 100%; /* Ocupa a largura definida pelo container */
    max-height: 32px;
    height: 100%;
    padding: 8px;
    border: 1px solid ${colors.LightSalmon};
    background-color: ${colors.BlanchedAlmond};
    color: rgba(75, 75, 75, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;

    &.error {
      border: 1px solid red;
    }
  }

  &.InputFlex,
  select {
    display: flex;
    gap: 16px;
    column-gap: 34px;

    &.error {
      border: 1px solid red;
    }
    label {
      margin: 8px 0 8px 0;
    }

    input,
    select {
      border: none;
      max-width: 155px; /* Definir largura dos inputs dentro do flex */
      width: 100%;
      max-height: 32px;
      height: 100%;

      &.error {
        border: 1px solid red;
      }
    }
  }
`
export const InputGroupPayment = styled.div`
  column-gap: 30px;

  small {
    color: ${colors.BlanchedAlmond};
  }

  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    color: ${colors.BlanchedAlmond};
    display: block;
    margin: 8px 0 4px 0;
  }

  input,
  select {
    width: 100%; /* Ocupa a largura definida pelo container */
    max-height: 32px;
    height: 100%;
    padding: 8px;
    border: 1px solid ${colors.LightSalmon};
    background-color: ${colors.BlanchedAlmond};
    color: rgba(75, 75, 75, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    margin-bottom: 8px;

    &.error {
      border: 1px solid red;
    }
  }

  &.InputFlexpayment,
  select {
    display: flex;

    &.error {
      border: 1px solid red;
    }
  }

  &.InputNumbCard,
  select {
    width: 228px;

    &.error {
      border: 1px solid red;
    }
  }
  &.InputCvv,
  select {
    width: 87px;

    &.error {
      border: 1px solid red;
    }
  }

  &.InputexpiresMonth,
  select {
    width: 155px;

    &.error {
      border: 1px solid red;
    }
  }
  &.expiresMonth,
  select {
    width: 155px;

    &.error {
      border: 1px solid red;
    }
  }
`
export const TitleH3 = styled.h3`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  text-align: left;
  color: ${colors.BlanchedAlmond};
  margin-bottom: 16px;
`
export const Paragrafo = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${colors.BlanchedAlmond};
`

export const TabButton = styled.div`
  margin-top: 24px;
  ${ButtonContainer} {
    max-width: 344px;
    width: 100%;
    background-color: ${colors.BlanchedAlmond};
    color: ${colors.LightSalmon};
    padding: 4px 0 4px 0;
    margin-bottom: 8px;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; // Certifique-se de que está acima de outros conteúdos
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`
