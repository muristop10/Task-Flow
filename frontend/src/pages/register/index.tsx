
import Button from "../../components/Button"
import FullInput from "../../components/FormComponents/fullInput"
import { Container } from "../../components/FormComponents/container"
import { Form } from "../../components/FormComponents/form"
import { useNavigate } from "react-router-dom"
import { Title } from "../../components/Title"
import { EmphasisText } from "../../components/EmphasisText"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import type { RegisterUser } from "../../types/registerUser"
import { toast } from "sonner"
import { ErrorSpan } from "../../components/ErrorSpan"
import { registerUser } from "../../services/authService"

const CenterDiv = styled.div`
  text-align: center;
`

const Register = () => {

  async function handleRegisterUser(data: RegisterUser) {
    try {
      await registerUser(data)
      toast.success('Sucesso!')
    } catch (e) {
      toast.error('Erro ao enviar formulário.')
    }
  }  

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<RegisterUser>()
  const navigate = useNavigate()

  const passwordValue = watch('password')

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleRegisterUser)}>
        <CenterDiv>
          <Title>Criar conta</Title>
          <EmphasisText>Comece já a organizar suas ideias com o Task Flow</EmphasisText>
        </CenterDiv>

        <FullInput id='name' label="Nome:" placeholder="Nome"
          {...register('name', {
            required: 'Nome obrigatório',
            validate: value =>
              !/\d/.test(value) || 'O nome não pode conter números'
          })} />
        {
          errors.name && (
            <ErrorSpan>
              {errors.name.message}
            </ErrorSpan>
          )
        }

        <FullInput id='email' label="Email:" placeholder="Email"
          {...register('email', {
            required: 'Email obrigatório',
            pattern: {
              value: /\S+@\S+\.\S/,
              message: 'Email inválido'
            }
          })} />
        {
          errors.email && (
            <ErrorSpan>
              {errors.email.message}
            </ErrorSpan>
          )
        }

        <FullInput id='password' label="Senha:" placeholder="Senha"
          {...register('password', {
            required: 'Senha obrigatória',
            minLength: {
              value: 8,
              message: 'A senha deve ter no mínimo 8 caracteres'
            },
            maxLength: {
              value: 64,
              message: 'A senha deve ter no máximo 64 caracteres'
            },
          })} />
        {
          errors.password && (
            <ErrorSpan>
              {errors.password.message}
            </ErrorSpan>
          )
        }

        <FullInput id='confirmPassword' label="Confirmar senha:" placeholder="Confirmar senha:"
          {...register('confirmPassword', {
            required: 'Confirme sua senha',
            validate: (value:string) =>
              value === passwordValue || 'As senhas não coincidem'
          })} />
        {
          errors.confirmPassword && (
            <ErrorSpan>
              {errors.confirmPassword.message}
            </ErrorSpan>
          )
        }

        <section>
          <Button type='submit' variant='submit'>Cadastre-se</Button>
          <Button onClick={() => navigate('/')} variant={'secondary'}>Voltar à página inicial</Button>
        </section>
      </Form>
    </Container>
  )
}

export default Register
