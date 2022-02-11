import { useEffect } from 'react'

export default function useChangeBackground (color) {
  useEffect(() => {
    document.body.style.background = color
    return () => { document.body.style.background = '#fff' }
  }, [])
}
