import styled from 'styled-components'

export const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
`

export const LeftSide = styled.div`
  grid-column: 1 / 2;
  transition-duration: 0.3s;
  &:hover {
    background: #fff;
    svg {
      fill: #000;
      stroke: #000;
    }
  }
`

export const Main = styled.main`
  grid-column: 2 / 3;
  background: pink;
`

export const RightSide = styled.div`
  grid-column: 3 / 4;
  background: yellow;
`

export const LeftColumn = styled.div`
  padding: 1rem;
`
