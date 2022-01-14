import { useGoogleLogin } from 'react-google-login'
import { UseUserData } from './useUserData'
import env from '../env.json'

export function useLogin () {
  const { signUser } = UseUserData()

  const { signIn, loaded } = useGoogleLogin({
    onSuccess: signUser,
    onFailure: (err) => console.error(err.details),
    clientId: env.auth.idClient,
    isSignedIn: true
  })

  return { signIn, loaded }
}
