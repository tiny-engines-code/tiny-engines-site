import './Header.css';
import React from 'react';
import CardList from "./cards/CardList";


const Header = () => {
  return (
      <div>
          <section className="hero">
              <div className="background-image" style={{backgroundImage: 'url(assets/img/vwbug4.png)'}}/>
              <div className="hero-content-area">
                  <h1>tiny engines</h1>
              </div>
          </section>
          <CardList/>
      </div>

  );
}

export default Header;
