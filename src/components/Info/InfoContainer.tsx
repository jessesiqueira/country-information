import { InfoContainer, BackButton } from './style'
import { Link } from 'react-router-dom'
export default function InfoMain() {
  return (
    <InfoContainer>
      <Link to={'/'}>
        <BackButton>⇠ Back</BackButton>
      </Link>
    </InfoContainer>
  )
}
