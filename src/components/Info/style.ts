import styled from 'styled-components'

export const InfoContainer = styled.div``

export const BackButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  width: 130px;
  height: 60px;
  margin-top: 3%;
  margin: 2%;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.06);
  font-size: large;
  font-weight: bold;

  :hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`
export const Flags = styled.img`
  width: 100%;
`

export const Infos = styled.div`
  margin-top: 19px;
  height: 18px;
`

export const InfosContainer = styled.div`
  display: flex;
  gap: 9%;
`

export const FlagsContainer = styled.div`
  width: 40%;
  margin-left: 2%;
`

export const BorderCountries = styled.div``

export const InfosSubContainer = styled.div`
  margin-top: 7%;
`
export const ContainerInfo = styled.div`
  display: flex;
  gap: 90px;
`
export const ItemInfo = styled.span`
  font-weight: lighter;
  padding-left: 5px;
`
export const AllInfoContainer = styled.div``
