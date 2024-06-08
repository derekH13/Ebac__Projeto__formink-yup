import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

// Ajuste para aceitar a propriedade `background`
export const ButtonContainer = styled.button<{ background: 'light' | 'dark' }>`
  border: none;
  background-color: ${(props) =>
    props.background === 'dark' ? colors.palePeach : colors.rosePink};
  color: ${(props) =>
    props.background === 'dark' ? colors.rosePink : colors.palePeach};
  width: ${(props) => (props.background === 'dark' ? '304px' : '100%')};
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  width: 304px;
  height: 24px;
  background-color: ${colors.palePeach};
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`
