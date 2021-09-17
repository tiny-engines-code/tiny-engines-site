import styled from "styled-components"

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  height: 30px;
  line-height: 1;

`

export const NavRight = styled.nav`
  grid-column-start: 3;
  grid-row-start: 1;
  //padding-top: 12px;
  font-size: 16px;

`
export const NavLeft = styled.nav`
  grid-column-start: 1;
  grid-row-start: 1;
  font-size: 24px;
`
