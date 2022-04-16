import styled from "styled-components"

export const HeroWrapper = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 55vh;
  color: black;
  background-size: cover;
`
export const HeroBackImage = styled.div`
  //position: absolute;
  width: 100%;
  z-index: -1;
  //height: 100%;
  //object-fit: contain;
  background-size: cover;
  //animation: 8s fadein 1s forwards;
`

export const HeroPanel = styled.div`
  justify-content: center;
  font: bold 40px "Open Sans", sans-serif;
  text-align: center;
  //margin-top: 0px;
  line-height: 3;
  height: 100px;
  color: darkgray;
`

export const HeroTextPanel = styled.div`
  justify-content: center;
  font: 20px "Microsoft Sans Serif", "Roboto Thin";
  text-align: center;
  height: 35px;
  //color: #956ca8;
//  color: #555533;
  color: darkolivegreen;
`

