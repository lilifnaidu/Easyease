import React from 'react'
import './Camersegment.css'
import haldi from '../../assets/haldi.webp'
import maturity from '../../assets/maturity.jpeg'
import wedding from '../../assets/wedding.png'
import baby from '../../assets/baby.avif'
import { Link } from 'react-router-dom'
const Camerasegemt = () => {
    const categories = ["Haldi", "Baby Ceremony", "Wedding", "Maturity Function"];
    const cardsdataforshow=[{party:"Haldi",imgsorc:haldi},{party:" Baby cermony",imgsorc:baby},
        {party:"Wedding",imgsorc:wedding},{party:"Maturity function",imgsorc:maturity}
    ]
  return (
<>
<div className="containing">
    {
        cardsdataforshow.map((item)=>(
      <Link to={`/camera/${item.party.replace(/\s+/g,'_').toLowerCase()}`}>
            <div className="makecards" >
          
                  <img src={item.imgsorc} alt="" className='cardsimage' />
                <h3>{item.party}</h3>
           
            </div>
      </Link>
        ))
    }
</div>
</>
  )
}

export default Camerasegemt
