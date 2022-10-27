import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
