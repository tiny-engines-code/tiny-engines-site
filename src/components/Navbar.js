import React from 'react'
import {Link} from 'gatsby'
import {NavLeft, NavRight, NavWrapper} from '../elements'
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
                    <a className={navItem} href="https://chris-lomeli.gitbook.io/tiny-engines/">documentation</a>
                    {/*<Link className={navItem}  to="/posts">rants</Link>*/}
                    <Link className={navItem}  to="/history">resume</Link>
                    <a className={navItem} href="https://github.com/tiny-engines-code">code</a>
                </NavRight>
            </NavWrapper>
            <hr style={{border: '1px solid #202124'}}/>
        </div>


    )
}