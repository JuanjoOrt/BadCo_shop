import GlobalContext from '../../Context/Context'
import { useContext } from 'react'

export default function Home () {
  const test = useContext(GlobalContext)
  console.log(test)

  return (
    <div>
      Home
    </div>
  )
}
