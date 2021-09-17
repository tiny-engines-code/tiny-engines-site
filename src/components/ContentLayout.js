import React from "react"
import {GridContainer} from "../elements"
import Navbar from "./Navbar";

export const ContentLayout = ({ children }) => {
  return (
      <div>
          <Navbar />
          <GridContainer>
                 {children}
          </GridContainer>
          {/*<Footer />*/}
      </div>
  )
}
