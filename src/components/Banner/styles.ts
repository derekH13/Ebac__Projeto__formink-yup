import styled from 'styled-components'
import { colors } from '../../styles'

export const ImgBanner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  h3 {
    font-size: 32px;
    font-weight: 100;
    color: ${colors.white};
    padding-top: 25px;
    margin-left: 171px;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    padding-top: 156px;
    padding-bottom: 32px;
    margin-left: 171px;
  }
`
