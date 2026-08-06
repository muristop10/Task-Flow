import React, { useEffect } from 'react'
import { useAuth } from '../../stores/userStore'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'

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

  if (isLoading) {
    return <Loader />
  }

  if (!user || !token) {
    return null
  }

  return <>{children}</>
}

export default RouteProtector
