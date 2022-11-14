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
