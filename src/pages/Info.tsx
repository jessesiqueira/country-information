import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header/Header'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import GlobalStyle from '../index'
import usePersistedState from '../utils/usePersistedState'
import InfoMain from '../components/Info/InfoContainer'

export default function Info() {
  const [lightMode, setLightMode] = useState('Dark Mode')
  const [theme, setTheme] = usePersistedState('theme', light)
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
      <InfoMain />
    </ThemeProvider>
  )
}
