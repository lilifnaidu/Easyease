import React, { useState } from 'react'
import './Header.css'
import cam from'../../assets/cam.png'
import chef from '../../assets/chef.png'
import frame from'../../assets/frame.png'
import Hall from'../../assets/Hall.png'
import { useNavigate } from 'react-router-dom'
import Linkyourservice from '../Formfolder/Linkyourservice/Linkyourservice'
const Header = () => {
  const navigate=useNavigate()
const imgesdata=[
  {
    img:cam,title:'Camera',navi:'/camera'
  },{
    img:chef,title:'Catering'
  },{
    img:frame,title:'Decoration'
  },{img:Hall,title:'Hall'}
]
const handleRoute=(e)=>{
navigate(e)
}
const [isform,setisform]=useState(false)
const ForformSet=()=>{
  setisform(!isform)
}
  return (
        <>
        <div className="collections">
       {
        imgesdata.map((item,index)=>(
          <div className="imagess" key={index} onClick={()=>handleRoute(item.navi)}>
              <figure className="icons">
                <img src={item.img} alt="" className="singleicon" />
                <figcaption className='titls'>{item.title}</figcaption>
              </figure>
          </div>
        ))
       }
        </div>
        <div className='buttonm' onClick={ForformSet} >{
          isform?"click here to close the form ":'Link Your service'
          }</div>
        {
          isform&&<Linkyourservice/>
        }

        </>
  )
}

export default Header
