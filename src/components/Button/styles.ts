import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

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
  /* margin-top: 16px; */
  cursor: pointer;
`

export const ButtonLink = styled(Link)<{ background: 'light' | 'dark' }>`
  width: ${(props) => (props.background === 'dark' ? '100%' : '84px')};
  height: 24px;
  background-color: ${(props) =>
    props.background === 'dark' ? colors.palePeach : colors.rosePink};
  color: ${(props) =>
    props.background === 'dark' ? colors.rosePink : colors.palePeach};
  width: 70px;
  height: 16px;
  top: 810px;
  left: 737px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  margin-top: 16px;
  cursor: pointer;
  padding: 4px 6px;
  margin-left: 8px;
`
