import styled from 'styled-components'
import { colors } from '../../styles'

export const Row = styled.div`
  display: block;
`

export const InputGroup = styled.div`
  margin-bottom: 16px;

  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    color: ${colors.palePeach};
    display: block;
    margin: 8px 0 4px 0;
  }

  input {
    width: 100%; /* Ocupa a largura definida pelo container */
    max-height: 32px;
    height: 100%;
    padding: 8px;
    border: 1px solid ${colors.rosePink};
    background-color: ${colors.palePeach};
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
      margin: 0; /* Remover margens das labels dentro do flex */
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

  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    color: ${colors.palePeach};
    display: block;
    margin: 8px 0 4px 0;
  }

  input {
    width: 100%; /* Ocupa a largura definida pelo container */
    max-height: 32px;
    height: 100%;
    padding: 8px;
    border: 1px solid ${colors.rosePink};
    background-color: ${colors.palePeach};
    color: rgba(75, 75, 75, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
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
