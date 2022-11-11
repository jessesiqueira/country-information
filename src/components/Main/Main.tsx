// import { useState } from 'react'
import { MainContainer } from './style'

export default function Main() {
  // const [info, setInfo] = useState([])

  /* fetch(`https://restcountries.com/v3.1/all`)
    .then(async (response) => await response.json())
    .then((response) => {
      setInfo(response.data)
      console.log(response)
    })
    .catch((error) => console.error(error)) */

  return (
    <MainContainer>
      <ul>{}</ul>
    </MainContainer>
  )
}
