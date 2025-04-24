// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id ='footer'>
//       <div className="footer-content" >
//         <div className="footer-content-left">
//          <img src={assets.logo} alt="" />
//          <p>Loreum Ipsum is simply dummy text of the printing and typesetting industry</p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon}alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src= {assets.linkedin_icon}alt="" />
//           </div>
//         </div>
//         <div className="footer-content-center">
//             <h2>COMPANY</h2>
//             <ul>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy Policy</li>
//             </ul>
//         </div>
//         <div className="footer-content-right">
//            <h2>GET IN TOUCH</h2>
//            <ul>
//             <li>+91 8328439726</li>
//             <li>shankar23713@gmail.com</li>
//            </ul>
//         </div>
//       </div>
//         {/* <hr />
//        <p className="footer-copyright"> Copyright 2025 @Foodya.com - All Right Reserved</p>  */}
//        <div className="footer-bottom">
//       <hr />
//        <p className="footer-copyright">
//     Copyright 2025 © Foodya.com - All Rights Reserved
//       </p>
//         </div>

//     </div>
//   )
// }

// export default Footer


import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      {/* Main Content */}
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Foodya Logo" />
          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          <p>Foodya – Delivering your favorite meals with love, speed, and a sprinkle of flavor. Taste happiness at your doorstep.</p>

          
          {/* Social Icons */}
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8328439726</li>
            <li>shankar23713@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <hr />
        <p className="footer-copyright">
          Copyright 2025 © Foodya.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
