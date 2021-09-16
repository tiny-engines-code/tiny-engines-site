import React from 'react';
import CardList from "./cards/CardList";
import {HeroWrapper, HeroPanel, HeroTextPanel} from "../elements"
import Navbar from "./Navbar";

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
                <HeroTextPanel>This is my collection of notes, works in progress, and reflections -- mostly from a career in software engineering</HeroTextPanel>
                <HeroTextPanel>Welcome to a foreign fireside</HeroTextPanel>

            </HeroWrapper>
            <CardList/>
        </div>


    );
}

export default HeroLayout;
