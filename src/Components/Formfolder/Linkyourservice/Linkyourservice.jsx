import React, { useState } from 'react'
import './Linkyourservice.css'
const Linkyourservice = () => {
    const [servicetype,setservicetype]=useState('')
    console.log(servicetype);
    
  return (
   <>
    <div className="Linkform">
<div className="getform">
    <form >
        <h2 className="formtitke">Please rigesiter here</h2>
            <label htmlFor="">
                Service Type:</label>    
        <select name="" id="" className='optiongroup' onChange={(e)=>setservicetype(e.target.value)} >
            <option value="defaultValue"  defaultValue >select your service</option>
            <option value="Photograph">Photograph</option>
            <option value="catering">catering</option>
            <option value="Hall">Hall</option>
            <option value="decoration">decoration</option>
            <option value="other">Other</option>
        </select>
        <div className="formsmake">
            <input type="text" placeholder='Your name *'  className='Naming' required/>
            <input type="text" placeholder='last name *' className='Naming' required/>
                    <input type="text" className="Naming" placeholder='Bussiness name'/>
                    <input type="email" placeholder='enter email id' className='Naming' />
                    <input type="text" placeholder='city/location' required className='Naming' />
                    <input type="number" className="Naming" required placeholder='enter ur number'/>
        </div>
        {
                servicetype=="Photograph"&&(
                    <>
<div className="formsmake">
                
                        <input  type="file" placeholder='upload ur shoot' className="Naming" multiple accept='image/*,video/'/>
                    
                        <input type="number" className="Naming" placeholder='experience'  />

</div>
         
                        <div className='inputdev'>    
                                <label>24-Hour Charge (₹):</label>
                        <input
                        type="number"
                        placeholder="Enter your rate for full-day service"
                        className="Naming"
                        min="0"
                        /></div>
                        <button>Submit</button>

                    </>
                )
        }
        {
            servicetype=='catering'&&(
                <>
                   <div className="formsmake">
                     <input type="text" className="Naming" placeholder='address' />
                     <input type="number" className="Naming" placeholder='enter ur price' />
                   </div>
                   <button>Submit</button>
                </>
            )
        }
        {
            servicetype=='Hall'&&(
                <>
                <div className="formsmake">
                    <input type="text" className="Naming" placeholder='enter'/>
                    <input type="file" className="naming" multiple accept='image/*,video/*'/>
                </div>
                <button>Submit</button>
                </>
            )
        }
        {
            servicetype=='decoration'&&(
                   <>
                <div className="formsmake">
                    <input type="text" className="Naming" placeholder='enter'/>
                    <input type="file" className="naming" multiple accept='image/*,video/*'/>
                </div>
                <button>Submit</button>
                </>
            )
        }
    </form>
</div>

    </div>
   </>
  )
}

export default Linkyourservice
