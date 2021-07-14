import { useEffect, useState, useCallback } from 'react'

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const handlerKeyDown = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    },
    [targetKey]
  )

  const handlerKeyUp = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    },
    [targetKey]
  )

  useEffect(() => {
    window.addEventListener('keydown', handlerKeyDown)
    window.addEventListener('keyup', handlerKeyUp)

    return () => {
      window.removeEventListener('keydown', handlerKeyDown)
      window.removeEventListener('keyup', handlerKeyUp)
    }
  }, [handlerKeyDown, handlerKeyUp])

  return keyPressed
}

export default useKeyPress
