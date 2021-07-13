import React from 'react'

import { TIcon } from 'models/IconType'

import { LeftColumn, LeftSide, Main, ParentGrid, RightSide } from './styles'
import LeftColumnItem from './LeftColumnItem'

const letfColumnItems: TIcon[] = ['search', 'home']

const Layout = () => {
  return (
    <ParentGrid>
      <LeftSide>
        <LeftColumn>
          {letfColumnItems.map((item, index) => (
            <LeftColumnItem icon={item} key={index} />
          ))}
        </LeftColumn>
      </LeftSide>
      <Main>Teste Main</Main>
      <RightSide>Teste Right Side</RightSide>
    </ParentGrid>
  )
}

export default Layout
