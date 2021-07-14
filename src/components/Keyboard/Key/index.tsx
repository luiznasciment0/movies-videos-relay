import React from 'react'

import { KeyboardKey as TKeyboardKey } from '../keyboardKeys'
import { KeyboardKey as StyledKeyboardKey } from './styles'

type KeyboardKeyProps = {
  item: TKeyboardKey
  active: boolean
  setSelected: any
}

const KeyboardKey = ({ item, active, setSelected }: KeyboardKeyProps) => {
  return (
    <StyledKeyboardKey active={active} onClick={() => setSelected(item)}>
      {item.label}
    </StyledKeyboardKey>
  )
}

export default KeyboardKey
