import React, { useState } from 'react'
import KeyboardKey from './Key'

import { keyboardKeys } from './keyboardKeys'
import { Wrapper } from './styles'

const Keyboard = () => {
  const [selected, setSelected] = useState()
  const [cursor, setCursor] = useState(0)

  return (
    <div>
      {keyboardKeys.map((item, index) => {
        return (
          <KeyboardKey
            key={item.id}
            active={index === cursor}
            item={item}
            setSelected={setSelected}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
