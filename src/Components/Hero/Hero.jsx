import React from 'react'
import './Hero.css'
import full from '../../assets/all.png'
const Hero = () => {
  return (
   <>
        <div className="ultracontainer">

     <div className="mains">
           <div className="first">
                <div className="headshero">
                <h1 className="celeb">Celebrate Life's</h1>
                <h1 className="moments">Beautiful Moments</h1>
            </div>
            <p className="parah">
                Discover perfect venues and capture precious memories with <span className="highs"> EventEase</span>. Your dream celebration is just a tap away.
            </p>
            <div className='buts'>
                <span className="btns1">Download App</span>
                <span className="btns2">Explore </span>
            </div>
        </div>
            <div className="images">
                <img src={full} alt="" className="broadcast" />
            
            </div>
     </div>
        </div>
       
   </>
  )
}

export default Hero
