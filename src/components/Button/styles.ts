import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  border: none;
  background-color: ${colors.rosePink};
  max-width: 82px;
  width: 100%;
  max-height: 24px;
  height: 100%;
  width: 82px;
  height: 24px;
`
export const ButtonLink = styled(Link)`
  width: 304px;
  height: 24px;
  background-color: ${colors.palePeach};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`
