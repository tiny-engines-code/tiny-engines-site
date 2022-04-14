import styled from "styled-components"

export const HeroWrapper = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 25vh;
  color: black;
`
export const HeroBackImage = styled.div`
  position: absolute;
  top: -50px;
  width: 100%;
  z-index: -1;
  height: 100%;
  background-size: cover;
  animation: 8s fadein 1s forwards;
`

export const HeroPanel = styled.div`
  justify-content: center;
  font: bold 40px "Open Sans", sans-serif;
  text-align: center;
  margin-top: 120px;
  line-height: 3;
  height: 200px;
  color: darkgrey;
`

export const HeroTextPanel = styled.div`
  justify-content: center;
  font: 20px "Microsoft Sans Serif", "Roboto Thin";
  text-align: center;
  height: 35px;
  //color: #956ca8;
//  color: #555533;
  color: dodgerblue;
  //color: darkgrey;
`

