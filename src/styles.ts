// Recursos externos
import { createGlobalStyle } from 'styled-components'

// #Definindo paleta de cores presente no projeto figma
export const colors = {
  LightSalmon: '#E66767', //LightSalmon
  BlanchedAlmond: '#FFEBD9', //BlanchedAlmond
  white: '#FFFFFF',
  BrightOrange: '#FFB930', //BrightOrange
  FloralWhite: '#FFF8F2' //FloralWhite
}

// #Inicializando as configurações Globais
export const GlobalCSS = createGlobalStyle`
  /* Define as regras para todos os elementos */
  * {
    margin: 0; /* Remove as margens padrão */
    padding: 0; /* Remove o preenchimento padrão */
    box-sizing: border-box; /* Define a modelagem de caixa como border-box para incluir padding e border no cálculo do tamanho total */
    font-family: Roboto, sans-serif; /* Define a família de fontes padrão */
    text-decoration: none; /* Remove a decoração de texto padrão, como sublinhado */
    list-style: none; // Remove a bolinha
  }

  /* Define o estilo global para o corpo da página */
  body {
    background-color: ${colors.FloralWhite}; /* Define a cor de fundo principal */
    color:${colors.LightSalmon};/* Define a cor da fonte global */
    font-family:Roboto, sans-serif; /* definindo a font global no projeto */
    text-decoration: none;/* remover qualquer decoração de texto como links ou li */
    list-style-type: none;
  }
  .container {
  max-width: 1366px; /* largura total do container central do projeto */
  width: 100%; /* preenchimento de todo container */
  margin: 0 auto; /* removendo as margens ao mesmo tempo que centralizo o container junto com seus elementos */
}

`
