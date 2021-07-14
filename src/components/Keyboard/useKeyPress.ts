import { useEffect, useState } from 'react'

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const handlerKeyDown = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const handlerKeyUp = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handlerKeyDown)
    window.addEventListener('keyup', handlerKeyUp)

    return () => {
      window.removeEventListener('keydown', handlerKeyDown)
      window.removeEventListener('keyup', handlerKeyUp)
    }
  })

  return keyPressed
}

export default useKeyPress
