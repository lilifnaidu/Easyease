import React, { useState } from 'react';
import './Camera.css'
import { Link, useParams } from 'react-router-dom';
import photogrphaerdata from '../../Components/Globaldata/Photogrpaher';
const Camera = () => {
  const {event}=useParams()
    const [value,setvalue]=useState('')
    const handleOnchnage=(e)=>{
        setvalue(e.target.value)

    }

    
  return (
    <>
   <div className="cameramain">
   <div className="forsearch">
     <input onChange={handleOnchnage} value={value} type="text" className="search" placeholder='search here by area name/Studio name'/>
<h2>{event}</h2>
   </div>
   <div className="photocards">
    {
        photogrphaerdata.filter((item , index)=>{
            const tosmall=value.toLowerCase()
            return(
                item.name.toLowerCase().includes(tosmall)||
                item.location.toLowerCase().includes(tosmall)
            )
        }).map((item,index)=>(
         <Link to={`/profile/${item.name.replace(/\s+/g,'-').toLowerCase()}`} className="cardview" key={index}>
        
                    <div className="imageplace">
                        <img src={item.profilephoto} alt="" className="imgd" />
                    </div>
                      <div className="textsection">
        <p className="name">{`${item.name}`}</p>
        <p className="location">📍 {`location:${item.location}`}</p>
        <p className="rating">⭐ {item.rating} / 5</p>
        <p className="experience">🕒 {`experience : ${item.experience}`}</p>
        <p className="category">🎯 {item.Category}</p>
        <p className="price">💰 ₹{`${item.price} for 24hrs`}</p>
      </div>
          
         
         </Link>
        ))
    }
   </div>
   </div>
    </>
  );
};

export default Camera;
