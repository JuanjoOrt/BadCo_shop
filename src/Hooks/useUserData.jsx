import { useContext } from 'react'
import GlobalContext from '../Context/Context'

export function UseUserData () {
  const { setUser } = useContext(GlobalContext)
  const signUser = (userLogged) => {
    setUser(userLogged)
  }

  return { signUser }
}
