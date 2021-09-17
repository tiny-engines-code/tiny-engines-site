import React from "react"
import {ContainerNavLeft, ContainerNavRight, ContainerWrapper, ContentWrapper} from "../elements"
import {Link} from "gatsby";
import {navItem} from "../styles/layout.module.css";

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
        <ContainerNavLeft>chris lomeli</ContainerNavLeft>
        <ContainerNavRight>
            <Link className={navItem} to="/">home</Link>
            <a className={navItem} href="https://chris-lomeli.gitbook.io/tiny-engines/">docs</a>
            <Link className={navItem}  to="/posts">posts</Link>
            <Link className={navItem}  to="/about">about</Link>
        </ContainerNavRight>
        <ContentWrapper>
            {children}
        </ContentWrapper>

      {/*<Footer />*/}
    </ContainerWrapper>
  )
}
