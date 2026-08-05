
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
import { ErrorSpan } from "../../components/ErrorSpan"
import { registerUser } from "../../services/authService"
import { createRegisterUserSchema, type iRegisterUser } from "../../schemas/registerUser"
import { zodResolver } from "@hookform/resolvers/zod"

const CenterDiv = styled.div`
  text-align: center;
`

const Register = () => {

  async function handleRegisterUser(data: iRegisterUser) {
    try {
      await registerUser(data)
      toast.success('Sucesso!')
    } catch (e) {
      toast.error('Erro ao enviar formulário.')
      console.log(e)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
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

        <FullInput id='password' label="Senha:" 
        placeholder="Senha" error={errors.password?.message}
          {...register('password')}/>

        <FullInput id='confirmPassword' label="Confirmar senha:" 
        placeholder="Confirmar senha:" error={errors.confirmPassword?.message}
          {...register('confirmPassword')} />

        <section>
          <Button type='submit' variant='submit'>Cadastre-se</Button>
          <Button onClick={() => navigate('/')} variant={'secondary'}>Voltar à página inicial</Button>
        </section>
      </Form>
    </Container>
  )
}

export default Register
