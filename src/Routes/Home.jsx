import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  window.scrollTo(0,0)
   const [neonClass,setNeonClass] = useState('')
    return (
        <>
        <style> @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'); </style>

            <div className='home'>
                <h1>Choose Your League!</h1>
                <Link to="/kanto">
                    <img src="./images/kanto.png" alt="" />
                </Link>
                <Link to="/johto">
                <img className='johto' src="./images/johto.png" alt="" />
                </Link>
                <Link to="/hoenn">
                <img src="./images/hoen.png" alt="" />
                </Link>
                <Link to="/sinnoh">
                <img src="./images/sinnoh.png" alt="" />
                </Link>
                <Link to="/unova">
                <img src="./images/unova.png" alt="" />
                </Link>
                <Link to="/kalos">
                <img className='imgKalos' src="./images/kalos.png" alt="" />
                </Link>
                <Link to="/alola">
                <img className='johto' src="./images/alola.png" alt="" />
                </Link>
                <Link to="/galar">
                <img src="./images/galar.png" alt="" />
                </Link>

               
                
               
                
                
            </div>
        </>
    )
}

export default Home;