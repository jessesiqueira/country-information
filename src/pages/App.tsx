import Header from '../components/Header/Header'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import GlobalStyle from '../index'
import usePersistedState from '../utils/usePersistedState'
import Filter from '../components/Filter/Filter'
import Main from '../components/Main/Main'
import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', light)
  const [selected, setSelected] = useState('Filter by Region')
  const [lightMode, setLightMode] = useState('Dark Mode')
  const Dark = 'Dark Mode'
  const Light = 'Light Mode'
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    setLightMode(theme.title === 'light' ? Light : Dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} lightMode={lightMode} />
      <Filter selected={selected} setSelected={setSelected} />
      <Main />
    </ThemeProvider>
  )
}
