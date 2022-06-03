import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    user-select: none;
    -webkit-user-drag: none;
  }

  html, body {
    background: linear-gradient(to bottom, rgba(5, 6, 7, 0.9) 0%, rgba(5, 6, 7, 0.9) 50%), url(/corpotodo.jpg) no-repeat;
    background-size: cover;
    color: #fff;
    overflow-x: hidden;
  }

  *::-webkit-scrollbar, *::-webkit-scrollbar {
    width: 3px;
    height: 0;
    background-color: ${props => props.theme.colors.bgSecondary};
    overflow: visible;
  }

  *::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.clrPrimary};
  }

  *::-webkit-scrollbar-button, *::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`
