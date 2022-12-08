import { Container, Button, Title } from './style'

interface Props {
  toggleTheme: () => void
  lightMode: string
}

export default function Header(props: Props) {
  return (
    <Container>
      <Title>Where in the world?</Title>
      <Button onClick={props.toggleTheme}>{props.lightMode}</Button>
    </Container>
  )
}
