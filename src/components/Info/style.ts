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
  @media screen and (max-width: 890px) {
    width: 265px;
  }
`

export const Infos = styled.div`
  margin-top: 19px;
  height: 18px;
`

export const InfosContainer = styled.div`
  display: flex;
  gap: 9%;

  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
  }
`

export const FlagsContainer = styled.div`
  width: 40%;
  margin-left: 2%;

  @media screen and (max-width: 890px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

export const BorderCountries = styled.div``

export const InfosSubContainer = styled.div`
  margin-top: 7%;

  @media screen and (max-width: 890px) {
    margin-top: 0;
  }
`
export const ContainerInfo = styled.div`
  display: flex;
  gap: 90px;

  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-left: 20px;
  }
`
export const ItemInfo = styled.span`
  font-weight: lighter;
  padding-left: 5px;
`
export const AllInfoContainer = styled.div``

export const Title = styled.h1`
  @media screen and (max-width: 890px) {
    margin-left: 20px;
  }
`
