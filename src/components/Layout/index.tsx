import React, { useRef } from 'react'

import { TIcon } from 'models/IconType'

import { LeftColumn, LeftSide, Main, ParentGrid, RightSide } from './styles'
import LeftColumnItem from './LeftColumnItem'
import Keyboard from 'components/Keyboard'

const letfColumnItems: TIcon[] = ['search', 'home']

const Layout = () => {
  const leftColumnRef = useRef<HTMLDivElement>(null)

  return (
    <ParentGrid>
      <LeftSide ref={leftColumnRef}>
        <LeftColumn>
          {letfColumnItems.map((item, index) => (
            <LeftColumnItem icon={item} key={index} />
          ))}
        </LeftColumn>
      </LeftSide>
      <Main>
        <Keyboard leftColumnRef={leftColumnRef} />
      </Main>
      <RightSide>Teste Right Side</RightSide>
    </ParentGrid>
  )
}

export default Layout
