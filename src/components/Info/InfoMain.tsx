import {
  InfoContainer,
  BackButton,
  Flags,
  FlagsContainer,
  Infos,
  InfosContainer,
  InfosSubContainer,
  ContainerInfo,
  ItemInfo,
  AllInfoContainer
} from './style'
import { Link, Params, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface Never {
  flags: any
  name: any
  population: number
  official: any
  region: string
  subregion: string
  capital: string
  tld: string
  languages: any
}

export default function InfoMain() {
  const [info, setInfo] = useState([])
  const url = 'https://restcountries.com/v3.1/alpha/'

  const { ccn3 }: Readonly<Params<string>> = useParams()

  const countriUrl = `${url}${ccn3}`

  useEffect(() => {
    fetch(`${countriUrl}`)
      .then(async (response) => await response.json())
      .then((response) => {
        console.log(response)
        setInfo(response)
      })
      .catch((error) => console.error(error))
  }, [countriUrl])

  const infoTest: Never = info[0]
  console.log(infoTest)

  return (
    <InfoContainer>
      <Link to={'/'}>
        <BackButton>⇠ Back</BackButton>
      </Link>
      <InfosContainer>
        <FlagsContainer>
          <Flags src={infoTest?.flags.png} />
        </FlagsContainer>
        <AllInfoContainer>
          <h1>{infoTest?.name.official}</h1>
          <ContainerInfo>
            <InfosSubContainer>
              <Infos>
                Native Names:
                <ItemInfo>
                  {infoTest && (
                    <>
                      {Object.values(infoTest.name.nativeName)
                        .map((native) => native.common)
                        .join(', ')}
                    </>
                  )}
                </ItemInfo>
              </Infos>
              <Infos>
                Population:
                <ItemInfo>
                  {String(infoTest?.population).replace(
                    /(.)(?=(\d{3})+$)/g,
                    '$1,'
                  )}
                </ItemInfo>
              </Infos>
              <Infos>
                Region:<ItemInfo>{infoTest?.region}</ItemInfo>
              </Infos>
              <Infos>
                Sub Region:
                <ItemInfo>{infoTest?.subregion}</ItemInfo>
              </Infos>
              <Infos>
                Capital:<ItemInfo>{infoTest?.capital}</ItemInfo>
              </Infos>
            </InfosSubContainer>
            <InfosSubContainer>
              <Infos>
                Top Level Domain:
                <ItemInfo>{infoTest?.tld}</ItemInfo>
              </Infos>
              <Infos>
                Currencies:
                <ItemInfo>
                  {infoTest && (
                    <>
                      {Object.values(infoTest.currencies)
                        .map((currencie) => currencie.name)
                        .join(', ')}
                    </>
                  )}
                </ItemInfo>
              </Infos>
              <Infos>
                Languages:
                <ItemInfo>
                  {infoTest && (
                    <>{Object.values(infoTest.languages).join(', ')}</>
                  )}
                </ItemInfo>
              </Infos>
            </InfosSubContainer>
          </ContainerInfo>
        </AllInfoContainer>
      </InfosContainer>
    </InfoContainer>
  )
}
