import { useForm } from "react-hook-form"
import Button from "../../components/Button"
import { Container } from "../../components/FormComponents/container"
import { Form } from "../../components/FormComponents/form"
import { Select } from "../../components/FormComponents/select"
import { StyledLabel } from "../../components/FormComponents/fullInput"
import { useTheme } from "../../stores/themeStore"


const Settings = () => {

  interface SettingsData {
    theme: 'light' | 'dark'
  }

  const { register, handleSubmit } = useForm<SettingsData>()
  const { theme, setTheme } = useTheme()

  function handleSettingsChange(data: SettingsData) {
    setTheme(data.theme)
  }

  return (
    <div>

      <Container>
        <Form onSubmit={handleSubmit(handleSettingsChange)}>
          <h2>Configurações</h2>
          <StyledLabel>Modo de cores:</StyledLabel>
          <Select {...register('theme')} defaultValue={theme}>
            <option value='light'>Claro </option>
            <option value='dark'>Escuro </option>
          </Select>

          <Button variant="submit" type="submit">
            Aplicar
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Settings
