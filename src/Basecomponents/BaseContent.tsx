import React from "react";
import "../index.css";
import bgPic from '../images/bgPic.jpg'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Trainy from "../buyTicketComponents/Trainy";
import Advanced from "../buyTicketComponents/Advanced";
import SnowSchool from "../buyTicketComponents/SnowSchool";
import Food from '../buyTicketComponents/Food'
import footerLogo1 from  './../images/SML+Logo+White.png'
import footerLogo2 from  './../images/owlLofo.png'



const BaseContent: React.FC = () => {
  return (
    <div className="flex flex-col  items-center">
      <img src={bgPic} className="w-full h-[500px]  object-cover  max-md:h-[300px]"></img>
      {/*главный текст*/}
      <div className="titleFont flex flex-col justify-center items-center absolute top-[130px] w-full h-auto max-sm:top-[100px] ">
          <div className="text-center text-[3vw] w-4/5 h-auto max-md:text-xl "><p>BANF SUNSHINE. LAKE LOUIS. MT.NOROQUAY</p></div>
          <div className="w-4/5 h-auto text-center text-[5vw]  max-md:text-3xl ">CANADA`S WILD IS CALLING</div>
      </div>
         {/*grid of BUY THIS TICKET*/}
         <div className="baseContentPicturesGrid">
          <div className="baseContentPicturesGridItem1"><Trainy/></div>
          <div className="baseContentPicturesGridItem2"><Advanced/></div>
          <div className="baseContentPicturesGridItem3"><SnowSchool/></div>
          <div className="baseContentPicturesGridItem4"><Food/></div>
        </div>


          {/*//////////////////footer///////////////////////// */}
        <footer className=" text-[#a6b6cf] bg-[rgb(0,_0,_0)]
                         mt-[20px] w-full h-[150px]  text-xl
                         max-lg:h-[300px]">
          {/*////////////////1 part of footer////////////////*/}
          <div className="flex h-full pl-[10px] max-lg:flex-col">
          
            <div className="flex items-center  justify-around p-[10] w-[150px] h-full">
             <div className=""><FaTelegramPlane  size={'25px'}/></div>
             <div className=""><FaInstagram size={'25px'}/></div>
            </div>
            <div className="flex justify-center flex-col w-[350px] h-full">
              <p>Outside North America: 1-403-705-4000</p>
              <p>1-87-SKI-BANFF (1-877-542-2633)</p>
            </div>
           
            <div className="flex  justify-around flex-col w-[450px] h-full pb-3">
              <p className="text-3xl pt-[10px] pb-[10px] max-sm:text-[23px]">Calgary Snow Central - Sales Office</p>
              <p className="">1037 11th Avenue S.W.</p>
              <p className="">Calgary, AB</p>
              <p className="">T2R OG1</p>
            </div>
          </div>
        </footer>
          <hr></hr>

          {/*/////////////////2 part of footer////////////////////////*/}
          <div className="text-3xl flex flex-col items-center w-full h-auto text-[#a6b6cf] bg-[rgb(0,_0,_0)]">
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

    </div>
  );
};
export default BaseContent;
