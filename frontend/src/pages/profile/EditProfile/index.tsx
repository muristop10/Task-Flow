import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate, useOutletContext } from "react-router-dom"
import { toast } from "sonner"
import type { z } from "zod"

import { Form } from "../../../components/FormComponents/form"
import FullInput from "../../../components/FormComponents/fullInput"
import Button from "../../../components/Button"
import { useAuth } from "../../../stores/userStore"
import { createDefaultUserSchema } from "../../../schemas/user.schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editMe } from "../../../services/meService"

type tEditProfileData = z.infer<typeof createDefaultUserSchema>

const EditProfile = () => {
  const { setIsEdit } = useOutletContext<{ setIsEdit: (val: boolean) => void }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const edit = useMutation({
    mutationFn: (data: tEditProfileData) => editMe(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] })
      toast.success("Informações editadas com sucesso!")
      navigate("/profile")
      setIsEdit(false)
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tEditProfileData>({
    resolver: zodResolver(createDefaultUserSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  })

  async function handleSubmitData(data: tEditProfileData) {
    try {
      edit.mutate(data)
    } catch {
      toast.error("Erro ao editar dados.")
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitData)}>
      <h2>Editar dados</h2>

      <FullInput
        label="Nome: "
        {...register("name")}
        error={errors.name?.message}
      />

      <FullInput
        label="Email: "
        {...register("email")}
        error={errors.email?.message}
      />

      <Button variant="submit" type="submit">
        Enviar
      </Button>

      <Button
        variant="secondary"
        type="button"
        onClick={() => {
          navigate("/profile")
          setIsEdit(false)
        }}
      >
        Cancelar
      </Button>
    </Form>
  )
}

export default EditProfile