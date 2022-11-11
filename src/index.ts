import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body{
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
}
#root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
`
