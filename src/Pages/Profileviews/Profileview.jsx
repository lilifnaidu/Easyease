import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './profile.css'
import imag from '../../assets/images.jpeg'
import photogrphaerdata from '../../Components/Globaldata/Photogrpaher'

const Profileview = () => {
  const{ name}=useParams()
  console.log(name);
  const [activeTab,setactiveTab]=useState('photos')
  const photographer=photogrphaerdata.find(item=>
    item.name.replace(/\s+/g,'-').toLowerCase()===name
  )
  console.log(photographer);
  
  if (!photographer) return <p> profile not found sorry</p>
  return (
 <>
  <div className="bigcontainer">
      <div className="headercontent">
        <div className="image-container">
          <img src={imag} alt="" className="profilepic" />
        </div>
        <div className="headerdata">
          <h2 className="profilename">This_is_raju</h2>
          <p className="location">chinthal ka model</p>
          <p className="rating">rating</p>
          <p className="exerience">experience</p>
          <p className="catgory">catgory</p>
          <p className="timing">price for 24hrs</p>
          <p className="contact">contact number</p>
        </div>
      </div>
      <hr />
      <h3 className="contenthead">Please do check our content</h3>
      <hr className='hrhr'/>
      <div className='divsions'>
        <div className="photsection" >Photos</div>
        <div className="videosection" >videos</div>
      </div>
  </div>
 </>
  )
}

export default Profileview
