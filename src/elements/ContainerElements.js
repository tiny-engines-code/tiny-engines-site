import styled from "styled-components"

export const GridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(15, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;
  text-align: left;
`

export const ContentWrapper = styled.main`
  grid-column: 4 / span 12;
  padding: 3rem 6rem;
  color: lightgray;
  box-shadow: 0px 5px 20px rgba(30, 30, 31, 0.05);
  z-index: 10;
`

export const WideContentWrapper = styled.main`
  grid-column: 2 / span 14;
  padding: 3rem 6rem;
  box-shadow: 0px 5px 20px rgba(30, 30, 31, 0.05);
  z-index: 10;
`

export const ContentTitle = styled.div`
  grid-column: 3 / span 12;
  color: green;
  overflow: hidden;
  position: relative;
  justify-content: center;
  height: 100px;

  font: 32px "Microsoft Sans Serif", "Roboto Thin";
  /*font: italic 24px "Open Sans", sans-serif;*/
  padding: 50px 0;
  text-align: center;
  color: lightgray;
`

export const FeatureImageWrapper = styled.div`
  grid-column: 2 / span 14;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;
`
