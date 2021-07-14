import React, { useEffect, useState } from 'react'
import KeyboardKey from './Key'

import { keyboardKeys } from './keyboardKeys'
import { Keyboard as StyledKeyboard } from './styles'
import useKeyPress from './useKeyPress'

const arrayRemainder = (arrayLength: number, cursorPosition: number) =>
  arrayLength - cursorPosition

const arrayPast = (cursorPosition: number) => cursorPosition - 1

const Keyboard = () => {
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState()
  const [cursor, setCursor] = useState(0)

  const arrowDownPress = useKeyPress('ArrowDown')
  const arrowUpPress = useKeyPress('ArrowUp')
  const arrowLeftPress = useKeyPress('ArrowLeft')
  const arrowRightPress = useKeyPress('ArrowRight')
  const enterKeyPress = useKeyPress('Enter')

  useEffect(() => {
    if (arrowDownPress) {
      setCursor((prevState) => {
        const totalGridItems = 37
        const rowLength = 6
        const cursorPositionInRow =
          cursor > 5 ? cursor + 1 / rowLength : cursor + 1

        const remainderSpace = arrayRemainder(rowLength, cursorPositionInRow)
        const leftSpace = arrayPast(cursorPositionInRow)
        const nextPosition = prevState + remainderSpace + leftSpace + 1

        return nextPosition > totalGridItems ? totalGridItems : nextPosition
      })
    }

    if (arrowRightPress) {
      setCursor((prevState) =>
        prevState < keyboardKeys.length - 1 ? prevState + 1 : prevState
      )
    }

    if (arrowLeftPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
  }, [arrowDownPress, arrowRightPress, arrowLeftPress, cursor])

  return (
    <div>
      <p>{inputValue}AAA</p>
      <StyledKeyboard>
        {keyboardKeys.map((item, index) => (
          <KeyboardKey
            key={item.id}
            active={index === cursor}
            item={item}
            setSelected={setSelected}
          />
        ))}
      </StyledKeyboard>
    </div>
  )
}

export default Keyboard
