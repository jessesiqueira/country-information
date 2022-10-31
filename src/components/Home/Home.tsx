import {
  HomeComponent,
  BackGround,
  CardFront,
  CardBack,
  InfoCardFront,
  InfoContainer,
  UserName,
  UserDate,
  UserCvc,
  ContainerInputData,
  InputCardNumber,
  InputContainer,
  InputDateM,
  InputDateY,
  InputName,
  InputCvc,
  Label,
  LabelCvc,
  Button,
  Span,
  Div
} from './style'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Home() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [userName, setUserName] = useState('YOUR NAME')
  const [userDateM, setUserDateM] = useState('00')
  const [userDateY, setUserDateY] = useState('00')
  const [cvc, setCvc] = useState('000')

  const handleChanger = (e) => {
    setCardNumber(e.target.value)
  }
  const hadleChangerName = (e) => {
    setUserName(e.target.value)
  }

  const handlerChangerDateM = (e) => {
    setUserDateM(e.target.value)
  }
  const handlerChangerDateY = (e) => {
    setUserDateY(e.target.value)
  }
  const handlerChangerCvc = (e) => {
    setCvc(e.target.value)
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  function onSubmit(userData: string | number) {
    console.log(userData)
  }

  return (
    <HomeComponent>
      <BackGround>
        <CardFront>
          <InfoCardFront>{cardNumber}</InfoCardFront>
          <InfoContainer>
            <UserName>{userName}</UserName>
            <UserDate>
              {userDateM}/{userDateY}
            </UserDate>
          </InfoContainer>
        </CardFront>
        <CardBack>
          <UserCvc>{cvc}</UserCvc>
        </CardBack>
      </BackGround>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="InputName">CARDHOLDER NAME</Label>
        <br />
        <InputName
          onChange={hadleChangerName}
          {...register('name', { required: true })}
          type="text"
          placeholder="e.g. Jesse Siqueira"
        />
        {errors.name != null && <Span>Campo obrigatório</Span>}

        <br />
        <Label htmlFor="InputCardNumber">CARD NUMBER</Label>
        <br />
        <InputCardNumber
          maxLength={8}
          onChange={handleChanger}
          {...register('card', { required: true })}
          placeholder="e.g. 1234 5678 9101 1121"
        />
        {errors.card != null && <Span>Campo obrigatório</Span>}

        <br />
        <Label htmlFor="InputDateM">EX. DATE (MM/YY)</Label>
        <LabelCvc htmlFor="InputCvc">CVC</LabelCvc>
        <ContainerInputData>
          <br />
          <InputDateM
            onChange={handlerChangerDateM}
            maxLength={2}
            {...register('dateM', { required: true })}
            placeholder="MM"
          />

          <InputDateY
            maxLength={2}
            onChange={handlerChangerDateY}
            {...register('dateY', { required: true })}
            placeholder="YY"
          />

          <InputCvc
            maxLength={3}
            onChange={handlerChangerCvc}
            {...register('cvc', { required: true })}
            placeholder="e.g. 123"
          />
        </ContainerInputData>
        <Div>
          {errors.dateM != null && <Span>Obrigatório</Span>}
          {errors.dateY != null && <Span>Obrigatório</Span>}
          {errors.cvc != null && <Span>Obrigatório</Span>}
        </Div>
        <Button type="submit">Confirme</Button>
      </InputContainer>
    </HomeComponent>
  )
}
