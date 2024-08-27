// Recursos externos
import { createGlobalStyle } from 'styled-components'

// #Definindo paleta de cores presente no projeto figma
export const colors = {
  LightSalmon: '#E66767', //LightSalmon
  BlanchedAlmond: '#FFEBD9', //BlanchedAlmond
  white: '#FFFFFF',
  BrightOrange: '#FFB930', //BrightOrange
  FloralWhite: '#FFF8F2', //FloralWhite
  CrimsonRed: '#fae0e4'
}

/* Breakpoints */
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
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
  margin: 0 auto; /* centralizando o container */
  padding: 0 20px; /* adicionando um padding para as laterais */

  /* Estilo para desktop */
@media (max-width: ${breakpoints.desktop}) {
  .container {
    max-width: 1024px;
    padding: 0 16px; /* ajuste de padding para telas menores */
  }
}

/* Estilo para tablet */
@media (max-width: ${breakpoints.tablet}) {
  .container {
    max-width: 768px;
    padding: 0 12px;
  }
}

/* Estilo para mobile */
@media (max-width: ${breakpoints.mobile}) {
  .container {
    max-width: 480px;
    padding: 0 8px;
  }
}
}

`
