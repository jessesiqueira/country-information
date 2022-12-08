import styled from 'styled-components'

export const Container = styled.header`
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px ${(props) => props.theme.colors.box_shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 55px;
  padding-right: 55px;
  color: ${(props) => props.theme.font.colors};
  @media screen and (max-width: 860px) {
    height: 60px;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 1px 1px ${(props) => props.theme.colors.box_shadow};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
    color: ${(props) => props.theme.font.colors};
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${(props) => props.theme.font.colors};
`
export const Title = styled.h1`
  @media screen and (max-width: 860px) {
    font-size: 16px;
  }
`
