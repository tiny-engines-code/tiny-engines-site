import styled from "styled-components"

export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(15, minmax(auto, 4.2rem)) 1fr;
  //grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;
  text-align: left;
`

export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 12;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;
`

export const ContentWrapper = styled.main`
  grid-column: 4 / span 12;
  //grid-row-start: 2;
  //background-color: hsl(0,0%,99%);
  padding: 3rem 6rem;
  box-shadow: 0px 5px 20px rgba(30, 30, 31, 0.05);
  z-index: 10;
`

export const ContentRow = styled.main`
  grid-column: 4 / span 12;
  //grid-row-start: 2;
  //background-color: hsl(0,0%,99%);
  padding: 1rem 1rem;
  box-shadow: 0px 5px 20px rgba(30, 30, 31, 0.05);
  z-index: 10;
`

export const ContainerNavLeft = styled.nav`
  grid-column: 2 / span 3;
  grid-row: 1 / span 1;
  font-size: 24px;
`

export const ContainerNavRight = styled.nav`
  grid-column: 12 / span 5;
  grid-row: 1 / span 1;
  //padding-top: 12px;
  font-size: 16px;
`

export const TempNavRight = styled.nav`
  grid-column: 7 / span 5;
  grid-row: 1 / span 1;
  //padding-top: 12px;
  font-size: 16px;
`
