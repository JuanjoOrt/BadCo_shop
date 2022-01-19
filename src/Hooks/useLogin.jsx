import { useGoogleLogin, useGoogleLogout } from 'react-google-login'
import { useContext } from 'react'
import GlobalContext from '../Context/Context'
import env from '../env.json'

export function useLogin () {
  const { setUser } = useContext(GlobalContext)

  const { signIn, loaded } = useGoogleLogin({
    onSuccess: (user) => setUser(user),
    onFailure: (err) => console.error(err.details),
    clientId: env.auth.idClient,
    isSignedIn: true
  })

  const { signOut } = useGoogleLogout({
    clientId: env.auth.idClient,
    onLogoutSuccess: () => setUser(null)
  })

  return { signIn, signOut, loaded }
}
