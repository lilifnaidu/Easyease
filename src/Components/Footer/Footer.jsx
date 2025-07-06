import React from 'react'
import './footer.css'
import phnftr from  '../../assets/phnftr.png'
import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import twt from '../../assets/twt.png'
import chats from '../../assets/chats.png'
const FootinftheFooter = () => {
  return (
    <div className='endingcontainer'>
      <div className="fottddev">
        <div className="foottitle">
            <h1 className="fotiltle">Download EventEase Today</h1>
            <p className="footparah">Start planning your perfect event in minutes. Available on iOS and Android.</p>
            <div className="allbtns">
                <div className="footbuts1">Download For ios</div>
                <div className="footbuts2">Download For Andriod</div>
            </div>
        </div>
        <div className="footerimage">
            <img src={phnftr} className='footimg' />
        </div>
      </div>
      <hr />
      <div className="partner">
        <h2 className="parenerh1">Partner with us </h2>
        <p className="parahhigh">Are you a venue owner or photographer? Join our platform and grow your business.</p>
        <div className="allbtns">
            <div className="footbuts1">List your venue</div>
                <div className="pbutn">Rise ur request </div>
        </div>
      </div>
        <hr />
        <div className="getintouch">
          <h1 className='getin'>Get in touch with us</h1>
          <div className="finaldevmain">
            <div className="lastdivs1">
              <p className="finalp">Email: <br />
              liliflilif21@gmail.com</p>
            </div>
            <div className="lastdivs2">
               <p className="finalp">Phone: <br />
              8897399259/9642499259</p>
            </div>
            <div className="lastdivs3"> <p className="finalp">CHAT SUPPORT: <br />
              24/7 CUSTOMERE CARE</p></div>
          </div>
        </div>
          <hr />
          <div className="socialmedia">
            <h2 className="socialmediaconnects">Our social media</h2>
         <div className="iconsimg">
             <div className="images1">
              <img src={fb} alt=""  className='iconsed'/>
            </div>
            <div className="images2">
                <img src={insta} alt="" className='iconsed' />
            </div>
            <div className="images3">
                <img src={twt} alt="" className='iconsed' />
            </div>
         </div>

          </div>
          <footer className='some'><img src={chats} alt="" className="footsers" /></footer>
    </div>

  )
}

export default FootinftheFooter
