import React from 'react';
import CardList from "./CardList";
import {HeroWrapper, HeroPanel, HeroTextPanel} from "../elements"
import Navbar from "./Navbar";
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.png'

const HeroLayout = () => {
    return (
        <div>
            <Navbar />
            <HeroWrapper  style={{backgroundImage: 'url(coffee.png)'}}>
                {/*<div className="background-image" style={{backgroundImage: 'url(vwbug4.jpg)'}}/>*/}
                {/* <div className="panelbox">*/}
                {/*    <h1 style={{color: "#22222", fontSize: '40px' }}>chris lomeli</h1>*/}
                {/*</div>*/}
                <HeroPanel>tiny engines</HeroPanel>

                {/*<HeroTextPanel>chris lomeli</HeroTextPanel>*/}
                <HeroTextPanel>This is an informal collection of code and documentation</HeroTextPanel>
               <HeroTextPanel>from seminars, tutorials, and one freeform post</HeroTextPanel>
              {/*<HeroTextPanel style={{color: 'mediumpurple'}}>~ Welcome to a foreign fireside ~</HeroTextPanel>*/}
            </HeroWrapper>
            <CardList/>
          <Helmet>
            <link rel="icon" href={favicon} />
          </Helmet>
        </div>


    );
}

export default HeroLayout;
