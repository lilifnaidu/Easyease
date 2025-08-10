import React from 'react'
import './religious.css'
import hindu from '../../assets/Religious/hindu.jpeg'
import muslim from '../../assets/Religious/muslim.jpeg'   
import sikh from '../../assets/Religious/sikhism.jpeg'
import christian from '../../assets/Religious/christiian.jpeg'     
import buddism from '../../assets/Religious/buddism.jpeg'
import jainism from '../../assets/Religious/jainism.jpeg'
import { useNavigate } from 'react-router-dom'
const Religioussegement = () => {
    const religiousdata=[
        {religion:"Hindu",imgsrc:hindu,path:"/hindu"},
        {religion:"Muslim",imgsrc:muslim,path:'/muslim'},  
        {religion:"Sikh",imgsrc:sikh,path:'/sikh'},
        {religion:"Christian",imgsrc:christian,path:'/christian'},
        {religion:"Buddism",imgsrc:buddism,path:'/buddism'},
        {religion:"Jainism",imgsrc:jainism,path:'/jainism'}
    ]
    const navigate=useNavigate()
  return (
        <>
        <div className="religioussegment">
            <h1 className='headingofreligious'>Choose Your Religious Segment</h1>
            <div className="religiouscards">
                {
                    religiousdata.map((item)=>(
                        <div className="religiouscard" key={item.religion} onClick={()=>navigate(item.path)}>
                            <img src={item.imgsrc} alt={item.religion} className='religiousimage' />
                            <h3>{item.religion}</h3>
                        </div>
                    ))
                }
            </div>
            <div className="others">
                <h2>Others</h2>
             
            </div>
        </div>
        
        </>
  )
}

export default Religioussegement
