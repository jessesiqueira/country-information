import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './link.css'
import {
  FilterContainer,
  Input,
  DropButton,
  DropContainer,
  DropIten,
  ItensContainer,
  ButtonSearch,
  SearchContainer,
  Svg,
  ResponseContainer,
  Response,
  FlagImage,
  ItensResponse,
  InfoContainer,
  ItemInfo,
  RespostSearch,
  ResponseListIten,
  ResponseListIten1,
  AllContainerSearch
} from './style'
interface Props {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
interface Never {
  ccn3: number
  flags: any
  name: any
  population: number
  region: string
  flag: any
}

export default function Filter(props: Props) {
  const [isActive, setIsActive] = useState(false)
  const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'All']
  const [regions, setRegions] = useState('all')
  const [response, setResponse] = useState([])
  const [responseSearch, setResponseSearch] = useState<never[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${regions}`)
      .then(async (response) => await response.json())
      .then((response) => {
        console.log(response)
        setResponse(response)
      })
      .catch((error) => console.error(error))
  }, [regions])
  useEffect(() => {
    if (search.length > 0) {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then(async (response) => await response.json())
        .then((response: undefined) => {
          console.log(response)
          if (Array.isArray(response)) {
            setResponseSearch(response)
          }
        })
        .catch((error) => console.error(error))
    }
  }, [search])

  function filterRegion(currentRegion: string) {
    if (currentRegion === 'Africa') {
      setRegions('region/africa')
    } else if (currentRegion === 'America') {
      setRegions('region/america')
    } else if (currentRegion === 'Asia') {
      setRegions('region/asia')
    } else if (currentRegion === 'Europe') {
      setRegions('region/europe')
    } else if (currentRegion === 'Oceania') {
      setRegions('region/oceania')
    } else if (currentRegion === 'All') {
      setRegions('all')
      props.setSelected('Filter by Region')
    }
  }

  return (
    <FilterContainer>
      <AllContainerSearch>
        <SearchContainer>
          <ButtonSearch>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </Svg>
          </ButtonSearch>
          <Input
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <RespostSearch>
            {search !== '' && (
              <ResponseListIten1>
                {responseSearch.map((countri: Never) => (
                  <Link to={`/info/${countri.ccn3}`} key={countri.ccn3}>
                    <ResponseListIten>
                      <ResponseListIten>
                        {countri.name.common} {countri.flag}
                      </ResponseListIten>
                    </ResponseListIten>
                  </Link>
                ))}
              </ResponseListIten1>
            )}
          </RespostSearch>
        </SearchContainer>
        <DropContainer>
          <DropButton onClick={(e) => setIsActive(!isActive)}>
            {props.selected}
          </DropButton>

          {isActive && (
            <ItensContainer>
              {options.map((option) => (
                <DropIten
                  key={option}
                  onClick={(e) => {
                    props.setSelected(option)
                    setIsActive(false)
                    filterRegion(option)
                  }}
                >
                  {option}
                </DropIten>
              ))}
            </ItensContainer>
          )}
        </DropContainer>
      </AllContainerSearch>
      <ResponseContainer>
        <ItensResponse>
          {response.map((countri: Never) => (
            <Link
              className="link"
              to={`/info/${countri.ccn3}`}
              key={countri.ccn3}
            >
              <Response>
                <FlagImage src={countri.flags.png} />
                <InfoContainer>{countri.name.official}</InfoContainer>
                <InfoContainer>
                  Population:
                  <ItemInfo>
                    {String(countri.population).replace(
                      /(.)(?=(\d{3})+$)/g,
                      '$1,'
                    )}
                  </ItemInfo>
                </InfoContainer>
                <InfoContainer>
                  Region:<ItemInfo> {countri.region}</ItemInfo>
                </InfoContainer>
              </Response>
            </Link>
          ))}
        </ItensResponse>
      </ResponseContainer>
    </FilterContainer>
  )
}
