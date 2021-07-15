import React, { useEffect, useMemo, useState } from 'react'
import KeyboardKey from './Key'

import { keyboardKeys } from './keyboardKeys'
import { Keyboard as StyledKeyboard } from './styles'
import useKeyPress from './useKeyPress'

const rowLength = 6

const Keyboard = () => {
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState()
  const [cursor, setCursor] = useState(0)

  const currentItem = keyboardKeys[cursor]
  const rightItemsLength = rowLength - currentItem.positionInRow
  const leftItemsLength = currentItem.positionInRow - 1

  useKeyPress({
    key: 'ArrowDown',
    action: () => {
      setCursor((prevState) => {
        const nextPosition = prevState + rightItemsLength + leftItemsLength + 1
        const exceededArray = nextPosition > keyboardKeys.length

        return exceededArray ? keyboardKeys.length : nextPosition
      })
    }
  })

  useKeyPress({
    key: 'ArrowUp',
    action: () => {
      setCursor((prevState) => {
        const nextPosition = prevState - rightItemsLength - leftItemsLength - 1
        const exceededArray = nextPosition < 1

        return exceededArray ? 0 : nextPosition
      })
    }
  })

  useKeyPress({
    key: 'ArrowRight',
    action: () => {
      setCursor((prevState) =>
        prevState < keyboardKeys.length - 1 ? prevState + 1 : prevState
      )
    }
  })

  useKeyPress({
    key: 'ArrowLeft',
    action: () => {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
  })

  return (
    <div>
      <p>{inputValue}AAA</p>
      <StyledKeyboard>
        {keyboardKeys.map((item, index) => (
          <KeyboardKey
            key={index}
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
