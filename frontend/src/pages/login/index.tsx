
import Button from "../../components/Button"
import FullInput from "../../components/FormComponents/fullInput"
import { Container } from "../../components/FormComponents/container"
import { Form } from "../../components/FormComponents/form"
import { useNavigate } from "react-router-dom"
import { Title } from "../../components/Title"
import styled from "styled-components"
import { InAppTextLink } from "../../components/InAppTextLink"
import { useForm } from "react-hook-form"
import type { LoginUser } from "../../types/loginUser"

const CenterDiv = styled.div`
  text-align: center;
`

const Login = () => {

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<LoginUser>()

  function handleLogin (data: LoginUser) {
    console.log(data)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <CenterDiv>
          <Title>Entrar na conta</Title>
        </CenterDiv>
        <FullInput id='email' label="Email:" placeholder="Email"
        {...register('email')} />
        <FullInput id='password' label="Senha:" placeholder="Senha"
        {...register('password')}  />
        <section>
          <Button type='submit' variant='submit'>Fazer login</Button>
          <Button onClick={() => navigate('/')} variant={'secondary'}>Voltar à página inicial</Button>
        </section>
        <p>Ainda não tem conta? <InAppTextLink to='/register'>Crie sua conta agora</InAppTextLink></p>
      </Form>
      </Container>
  )
}

export default Login
