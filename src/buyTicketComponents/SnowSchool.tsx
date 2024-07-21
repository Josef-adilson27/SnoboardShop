/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import img1 from "../images/begginer1.jpg";
import img2 from "../images/begginer2.jpg";
import img3 from "../images/banfSun3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SnowSchool: React.FC = () => {

  
  const images: string[] = [img1, img2, img3];
  const slider = React.useRef(null);


  function SampleNextArrow(props:any) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-1 top-0 flex items-center  w-[30px] z-10 h-full"
      >
        <FaArrowCircleRight size={50} />
      </div>
    );
  }


  function SamplePrevArrow(props:any) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute flex left-1 items-center  w-[30px] z-10 h-full "
      >
        <FaArrowCircleLeft size={50} />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow /> ,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="  flex justify-center w-full h-[200px] max-[1024px]:h-[300px]  dark:bg-black dark:text-white">
      <div className="w-full h-full relative ">
        <Slider ref={slider} {...settings} className="h-full ">
          {images.map((item) => (
            <img
              src={item}
              className=" h-[200px] max-[1024px]:h-[300px] object-cover object-center w-full rounded-xl"
              alt=""
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default SnowSchool;
