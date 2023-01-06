import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  background: ${props => props.theme.colors['base-background']};
  color: ${(props) => props.theme.colors['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: ${props => props.theme.fonts.regular}, sans-serif;
  font-weight: 400;
  font-size: ${props => props.theme.textSizes['text-regular-m']};
 }

 a {
  text-decoration: none;
 }

 button {
  cursor: pointer;
 }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-apperance: textfield;
}
`