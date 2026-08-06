
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
import { ErrorSpan } from "../../components/ErrorSpan"
import { useMutation } from "@tanstack/react-query"
import { useAuth } from "../../stores/userStore"

const CenterDiv = styled.div`
  text-align: center;
`

const Login = () => {

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<iLoginUser>()
  const { setAuth } = useAuth()

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      setAuth(data.token, data.user)

      toast.success('Logado com sucesso!')
      navigate('/')
    }
  })

  function handleLogin (data: iLoginUser) {
    loginMutation.mutate(data)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <CenterDiv>
          <Title>Entrar na conta</Title>
        </CenterDiv>
        <FullInput id='email' label="Email:" placeholder="Email"
          {...register('email')} />

        <FullInput id='password' label="Senha:" placeholder="Senha" type='password'
          {...register('password')} />

        <section>
          {loginMutation.isError && (
            <ErrorSpan>{(loginMutation.error as Error).message}</ErrorSpan>
          )}
          <Button type='submit' variant='submit'>Fazer login</Button>
          <Button onClick={() => navigate('/')} variant={'secondary'}>Voltar à página inicial</Button>
        </section>
        <p>Ainda não tem conta? <InAppTextLink to='/register'>Crie sua conta agora</InAppTextLink></p>
      </Form>
    </Container>
  )
}

export default Login
