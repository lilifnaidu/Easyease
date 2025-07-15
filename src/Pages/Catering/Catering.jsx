import React, { useState } from 'react'
import birthday from'../../assets/Catering/birthday.jpg'
import festival from '../../assets/Catering/festival.jpg'
import food from '../../assets/Catering/food.jpg'
import indian from '../../assets/Catering/indian.jpg'
import corporate from '../../assets/Catering/service1.jpg'
import './Catering.css'
const Catering = () => {
  const partytypedata=[
    {
      partytype:"BIRTHDAY",cardpic:birthday
    },{partytype:"FESTIVAL",cardpic:festival },
    {partytype:"Family Events",cardpic:food},
    {partytype:"MARRIAGE",cardpic:indian},
    {partytype:'Corporate',cardpic:corporate}

  ]
  const[vegactive,setvegactive]=useState(false)
  const [nonvegactive,setnonvegactive]=useState(false)
  const [bothactive,setbothactive]=useState(false)
  const handlebuttons=(type)=>{
  if (type=='veg') {
    setvegactive(!vegactive)
setbothactive(false)
  }
  if (type=='nonveg') {
    setnonvegactive(!nonvegactive)
    setbothactive(false)
  }
  if (type=='both') {
    setbothactive(!bothactive)
    setnonvegactive(false)
    setvegactive(false)
  }
  }

  return (
        <>
        <div className='thiscontainer'>
        <h2 className='maketitle'>Catering serives choose your plan</h2>
        <div className="toggle-wrappe">
          <button className={`toggle-btn ${vegactive?'active':''}`} onClick={()=>handlebuttons('veg')}>Veg</button>
          <button className={`toggle-btn ${nonvegactive?'active':''}`} onClick={()=>handlebuttons('nonveg')}>Non-veg</button>
          <button className={`toggle-btn ${bothactive ? 'active':''}`} onClick={()=>handlebuttons('both')}>Both</button>
        </div>
       
        <div className="eventcontainer">
          {
            partytypedata.map((item,index)=>(
              <div className="eventcard" key={index}>
                  <img src={item.cardpic} alt="" className='cardsphotoo'/>
                   <h3 className='headerh1'>{item.partytype}</h3>
               <div>
               
               </div>
              </div>
              
            ))
          }
        </div>
         </div>
        </>
  )
}

export default Catering
