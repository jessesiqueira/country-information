import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  display: flex;
  justify-items: center;
  padding-left: 55px;
  padding-right: 55px;
  justify-content: center;
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
export const DropContainer = styled.div`
  z-index: 1;
`

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
`
export const SearchContainer = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.06);
  background-color: ${(props) => props.theme.colors.primary};
  height: 60px;
  z-index: 2;
  width: 380px;
`
export const Svg = styled.svg`
  color: ${(props) => props.theme.font.colors};
`
export const ResponseContainer = styled.main`
  position: absolute;
  margin-top: 100px;
  display: flex;
  justify-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Response = styled.div`
  justify-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 0px;
  width: 100%;
  height: 105%;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`

export const FlagImage = styled.img`
  height: 180px;
  width: 100%;
`
export const ItensResponse = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  color: ${(props) => props.theme.font.colors};
  position: relative;
  width: 85%;
  height: auto;
`
export const InfoContainer = styled.div`
  padding-left: 15px;
  margin-top: 15px;
`
export const ItemInfo = styled.span`
  font-weight: lighter;
  padding-left: 5px;
`

export const RespostSearch = styled.div``

export const ResponseListIten = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 60px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 5px;
  padding-left: 10px;
  align-items: center;
  display: flex;
  :hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`
export const ResponseListIten1 = styled.div`
  overflow: hidden;
  overflow-y: auto;
  max-height: 180px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.06);
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.primary};
`
export const AllContainerSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
