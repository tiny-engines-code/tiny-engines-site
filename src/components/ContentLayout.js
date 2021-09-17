import React from "react"
import {ContainerNavLeft, ContainerNavRight, ContainerWrapper, ContentWrapper} from "../elements"
import {Link} from "gatsby";
import {navItem} from "../styles/layout.module.css";
import Navbar from "./Navbar";

export const ContentLayout = ({ children }) => {
  return (
      <div>
          <Navbar />
          <ContainerWrapper>
              {children}
          </ContainerWrapper>
          {/*<Footer />*/}
      </div>
  )
}
