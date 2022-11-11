import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-left: 55px;
  padding-right: 55px;
`
export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  border-radius: 5px;
  height: 60px;
  color: ${(props) => props.theme.font.colors};
  font-size: 18px;
`
export const DropContainer = styled.div``

export const DropButton = styled.div`
  display: flex;
  height: 60px;
  width: 190px;
  padding-left: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.font.colors};
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.06);
  :hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`
export const ItensContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.06);
`

export const DropIten = styled.div`
  height: 60px;
  width: 190px;
  display: flex;
  padding-left: 15px;
  color: ${(props) => props.theme.font.colors};
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`

export const ButtonSearch = styled.button`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.06);
  background-color: ${(props) => props.theme.colors.primary};
  height: 60px;
`
export const Svg = styled.svg`
  color: ${(props) => props.theme.font.colors};
`
