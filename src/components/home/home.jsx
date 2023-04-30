import React from 'react'
import Social from './social';
import Data  from './data';
import "./home.css";

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img">
            <Data/>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Home 
