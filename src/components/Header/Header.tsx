import { Container, Button } from './style'

interface Props {
  toggleTheme: () => void
  lightMode: string
}

export default function Header(props: Props) {
  return (
    <Container>
      <h1>Where in the world?</h1>
      <Button onClick={props.toggleTheme}>{props.lightMode}</Button>
    </Container>
  )
}
