import React, { useState } from 'react'
import './decoration.css'
import decoration from '../../assets/Decorations/Decoration.jsx'

const Decoration = () => {
  const [search,setsearch]=useState('')
    console.log(search);
  const handleonchange=(e)=>{
   setsearch(e.target.value);
    
  }
const filtered=decoration.filter((item)=>
  item.cardname.toLowerCase().includes(search.toLowerCase())
)
  
  return (
  <>
  <div className="decontainer">
    <div className="inputt">
      <input type="text" className='inputss' onChange={handleonchange} />
      </div>
    <div className="cardss">
      {
       filtered.map((item)=>(
          <div className="deccords" key={item.id}>
            <img src={item.cardspic} alt=""  className='imgcard'/>
            <h2 className='dechead'>{item.cardname.toUpperCase()}</h2>
            <p className="decparah">{item.location.toUpperCase() }</p>
            <p className="decprice">Price: ₹{item.price}</p>
            <button className="viewmore-btn">View More</button>
          </div>
        ))
      }
    </div>

  </div>
  </>
  )
}

export default Decoration
