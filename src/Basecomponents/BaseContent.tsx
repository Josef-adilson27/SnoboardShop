import React from "react";
import "../index.css";
import bgPic from "../images/bgPic.jpg";

import Trainy from "../buyTicketComponents/Trainy";
import Advanced from "../buyTicketComponents/Advanced";
import SnowSchool from "../buyTicketComponents/SnowSchool";
import Food from "../buyTicketComponents/Food";
import footerLogo1 from "./../images/SML+Logo+White.png";
import footerLogo2 from "./../images/owlLofo.png";

import Footer from "./Footer";
import WeatherBox from "./WeatherBox";
import ContenTextBox from "./ContenTextBox";
import StatisticBox from "./StatisticBox";

const BaseContent: React.FC = () => {
  
  return (
    <div className="flex flex-col w-full items-center  dark:text-white ">
      <img src={bgPic}className="w-full h-[1000px]  object-cover  max-md:h-[300px]"></img>
      <div className="titleFont flex flex-col justify-center items-center absolute top-[130px] w-full h-auto max-sm:top-[100px] ">
        <div className="text-center text-[3vw] w-4/5 h-auto max-md:text-xl ">
          <p>BANF SUNSHINE. LAKE LOUIS. MT.NOROQUAY</p>
        </div>
        <div className="w-4/5 h-auto text-center text-[5vw]  max-md:text-3xl ">
          CANADA`S WILD IS CALLING
        </div>
      </div>
      <ContenTextBox/>        
        <div className="w-full flex justify-around h-[400px] gap-3 max-xl:gap-10 my-5 max-sm:px-0 max-sm:w-[95%] max-xl:flex-col max-xl:h-auto max-xl:items-center">
          <WeatherBox/>
          <StatisticBox/>
        </div>
      <Footer/>
    </div>
  );
};

export default BaseContent;
