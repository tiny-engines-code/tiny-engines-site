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
            <HeroWrapper>
                {/*<div className="background-image" style={{backgroundImage: 'url(assets/img/ant2.jpg)'}}/>*/}
                {/* <div className="panelbox">*/}
                {/*    <h1 style={{color: "#22222", fontSize: '40px' }}>chris lomeli</h1>*/}
                {/*</div>*/}
                <HeroPanel>tiny engines</HeroPanel>

                <HeroTextPanel>Hi, I'm Chris Lomeli</HeroTextPanel>
                <HeroTextPanel>This site began as a personal development project</HeroTextPanel>
                <HeroTextPanel>and is (slowly) evolving into a private collection of documentation, and works in progress</HeroTextPanel>
                <HeroTextPanel>~ Welcome to a foreign fireside ~</HeroTextPanel>

            </HeroWrapper>
            <CardList/>
          <Helmet>
            <link rel="icon" href={favicon} />
          </Helmet>
        </div>


    );
}

export default HeroLayout;
