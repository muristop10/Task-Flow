import React, { useEffect } from 'react'
import { useAuth } from '../../stores/userStore'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const RouteProtector = ({ children }: { children: React.ReactNode }) => {

  const navigate = useNavigate()

  const { user, token, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && (!user || !token)) {
      toast.error('Faça login!', {
        id: 'login-required'
      })

      navigate('/')
    }
  }, [isLoading, user, token, navigate])


  return <>
    {children}
  </>
}

export default RouteProtector
