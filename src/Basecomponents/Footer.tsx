import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerLogo1 from  './../images/SML+Logo+White.png'
import footerLogo2 from  './../images/owlLofo.png'

const Footer: React.FC = () =>{
  return(

         <footer className=" bg-black text-white w-full py-5 ">
          <div className='w-full '>
            <div className='w-full flex justify-center gap-10 py-5 max-md:flex-col max-md:items-center '>
              <span>CONTACT US</span>
              <span>BANFF HOTELS</span>
              <span>F.A.Q.</span>
              <span>OUR POLICIES</span>
              <span>OUR COMMITMENT</span>
              <span>WORK FOR US</span>
            </div>
          <hr className="mt-2 border-[1px] border-solid border-[rgb(197,167,35)] my-[60px]" />
          </div>
          {/*////////////////1 part of footer////////////////*/}

    
          <div className="text-3xl flex flex-col items-center w-full h-auto  text-[#a6b6cf] ">
              <img className="flex w-[300px] pt-3" src={footerLogo1} alt="" />
              <div className="flex flex-col  items-center p-3 text-[20px] ">
              <p className="flex flex-wrap text-center">RESERVATIONS@SKIBANFF.COM</p>
              <p className="flex flex-wrap text-center">FOR RESERVATIONS, CALL 1.877.542.2633</p>
              <p className="flex flex-wrap text-center">FRONT DESK: 1.403.762.6500</p>
              <p className="flex flex-wrap text-center">OUTSIDE NORTH AMERICA: 1.403.705.4000</p>
              <p className="flex flex-wrap text-center">SUNSHINE ACCESS ROAD, BANFF, ALBERTA, CANADA, T1L 1J5</p>
              </div>
              <img className="w-[200px]" src={footerLogo2} alt="" />
          </div>

        </footer>
      
  )
}

export default Footer;