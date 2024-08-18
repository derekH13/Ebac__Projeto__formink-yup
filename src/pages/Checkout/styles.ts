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

  input {
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
  }

  &.InputFlex {
    display: flex;
    gap: 16px;
    column-gap: 34px;

    label {
      margin: 8px 0 8px 0;
    }

    input {
      border: none;
      max-width: 155px; /* Definir largura dos inputs dentro do flex */
      width: 100%;
      max-height: 32px;
      height: 100%;
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

  input {
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
  }

  &.InputFlexpayment {
    display: flex;
  }

  &.InputNumbCard {
    width: 228px;
  }
  &.InputCvv {
    width: 87px;
  }

  &.InputexpiresMonth {
    width: 155px;
  }
  &.expiresMonth {
    width: 155px;
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
