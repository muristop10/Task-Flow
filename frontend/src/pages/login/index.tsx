
import Button from "../../components/Button"
import FullInput from "../../components/FormComponents/fullInput"
import { Container } from "../../components/FormComponents/container"
import { Form } from "../../components/FormComponents/form"
import { useNavigate } from "react-router-dom"
import { Title } from "../../components/Title"
import styled from "styled-components"
import { InAppTextLink } from "../../components/InAppTextLink"
import { useForm } from "react-hook-form"
import { type iLoginUser } from "../../schemas/loginUser.schema"
import { toast } from "sonner"
import { loginUser } from "../../services/authService"

const CenterDiv = styled.div`
  text-align: center;
`

const Login = () => {

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<iLoginUser>()

  async function handleLogin(data: iLoginUser) {
    try {
      await loginUser(data)
      toast.success('Sucesso!')
      navigate('/')
    } catch (e) {
      toast.error('Erro ao fazer login.')
      console.log('Erro: ', e)
    }
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
          {...register('password')} />

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
