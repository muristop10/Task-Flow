
import Button from "../../components/Button"
import FullInput from "../../components/FormComponents/fullInput"
import { Container } from "../../components/FormComponents/container"
import { Form } from "../../components/FormComponents/form"
import { useNavigate } from "react-router-dom"
import { Title } from "../../components/Title"
import { EmphasisText } from "../../components/EmphasisText"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { registerUser } from "../../services/authService"
import { createRegisterUserSchema, type iRegisterUser } from "../../schemas/registerUser.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { ErrorSpan } from "../../components/ErrorSpan"

const CenterDiv = styled.div`
  text-align: center;
`

const Register = () => {

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success('Sucesso! Faça login!')
      navigate('/login')
    }
  })

  async function handleRegisterUser(data: iRegisterUser) {
    registerMutation.mutate(data)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({
    resolver: zodResolver(createRegisterUserSchema)
  })
  const navigate = useNavigate()

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleRegisterUser)}>
        <CenterDiv>
          <Title>Criar conta</Title>
          <EmphasisText>Comece já a organizar suas ideias com o Task Flow</EmphasisText>
        </CenterDiv>

        <FullInput id='name' label="Nome:"
          placeholder="Nome" error={errors.name?.message}
          {...register('name')} />

        <FullInput id='email' label="Email:"
          placeholder="Email" error={errors.email?.message}
          {...register('email')} />

        <FullInput id='password' label="Senha:" type='password'
          placeholder="Senha" error={errors.password?.message}
          {...register('password')} />

        <FullInput id='confirmPassword' label="Confirmar senha:" type='password'
          placeholder="Confirmar senha" error={errors.confirmPassword?.message}
          {...register('confirmPassword')} />

        <section>
          {registerMutation.isError && (
            <ErrorSpan>{(registerMutation.error as Error).message}</ErrorSpan>
          )}
          <Button type='submit' variant='submit'>Cadastre-se</Button>
          <Button onClick={() => navigate('/')} variant={'secondary'}>Voltar à página inicial</Button>
        </section>
      </Form>
    </Container>
  )
}

export default Register
