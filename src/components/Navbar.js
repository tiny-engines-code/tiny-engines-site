import React from 'react'
import {Link} from 'gatsby'
import {NavLeft, NavRight, NavText, NavWrapper} from '../elements'
import {
    navItem,
} from '../styles/layout.module.css'

export default function Navbar() {
    return (
        <div>
            <NavWrapper>
                <NavLeft>chris lomeli</NavLeft>
                <NavRight>
                    <Link className={navItem} to="/">home</Link>
                    <a className={navItem} href="https://chris-lomeli.gitbook.io/tiny-engines/">docs</a>
                    <Link className={navItem}  to="/posts">posts</Link>
                    <Link className={navItem}  to="/about">about</Link>
                </NavRight>
            </NavWrapper>
            <hr style={{border: '1px solid #202124'}}/>
        </div>


    )
}