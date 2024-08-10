import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Container = styled.div<{ isOverlay: boolean }>`
  position: ${({ isOverlay }) => (isOverlay ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  background: ${({ isOverlay }) => (isOverlay ? 'rgba(0, 0, 0, 0.8)' : 'none')};
`

export const Sidebar = styled.aside`
  background-color: ${colors.rosePink};
  max-width: 360px;
  width: 100%;
  max-height: 1624px;
  height: 100%;
  padding: 32px 8px 0 7px;

  .divFormulario {
    margin-bottom: 24px;
  }

  h2 {
    color: ${colors.palePeach};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 16.41px;
    margin: 8px 0 16px 0;
  }

  ${ButtonContainer} {
    max-width: 344px;
    width: 100%;
    background-color: ${colors.palePeach};
    color: ${colors.rosePink};
    padding: 4px 0;
    margin-top: 8px;
  }
`
