import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import Img1 from "./../images/map-we-go.jpg";
import Img2 from "./../images/bunfSunImage.jpg";
import Img3 from "./../images/lakeLouise.jpg";
import Img4 from "./../images/norquayPic.jpg";

import ImgBanf1 from "./../images/banfSun.jpg";
import ImgBanf2 from "./../images/banfSun2.jpg";


import ImgLake1 from "./../images/lakeLouise2.jpg";
import ImgLake2 from "./../images/lakeLouise3.jpg";
import ImgLake3 from "./../images/lakelouiseInside4.jpg";
import ImgLake4 from "./../images/lakelouiseInside2.jpg";
import ImgLake5 from "./../images/lakelouiseInside.jpg";

import ImgNorquay1 from "./../images/ImgNorquay1.jpg";
import ImgNorquay2 from "./../images/ImgNorquay2.jpg";
import ImgNorquay3 from "./../images/ImgNorquay3.jpg";

const Locations: React.FC = () => {
  const init = {
    banf: false,
    louise: false,
    norquay: false,
  };

  type toggleType = {
    banf?: boolean;
    louise?: boolean;
    norquay?: boolean;
  };
  // стей для динамич. отображения инф. (more about)
  const [toggle, setToggle] = useState<toggleType>(init);

  const BanfSunshine = (
    <div className="flex flex-col w-[90%] h-auto mb-[30px] ">
      <div className="flex items-center max-lg:flex-col ">
        <img src={ImgBanf1} className="w-[600px] object-contain  m-[10px]" alt="" />
        <div className="p-3 text-2xl">
          <h1 className="p-3 text-2xl">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
      </div>

      <div className="flex items-center max-lg:flex-col-reverse">
        <div className="p-3">
          <h1 className="p-3 text-2xl">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
        <img src={ImgBanf2} className="w-[600px] object-contain m-[10px]" alt="" />
      </div>

      <div className="flex items-center max-lg:flex-col">
        <img src={ImgBanf1} className="w-[600px] object-contain  m-[10px]" alt="" />
        <div className="p-3 text-2xl">
          <h1 className="p-3">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
      </div>
    </div>
  );
  const LakeLouise = (
    <div className="flex flex-col w-[90%] h-auto mb-[30px]">
      <div className="flex items-center max-lg:flex-col">
        <img src={ImgLake1} className="w-[600px] object-contain  m-[10px]" alt="" />
        <div className="p-3 text-2xl">
          <h1 className="p-3 text-2xl">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
      </div>

      <div className="flex items-center max-lg:flex-col-reverse">
        <div className="p-3">
          <h1 className="p-3 text-2xl">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
        <img src={ImgLake2} className="w-[600px] object-contain  m-[10px]" alt="" />
      </div>

      <div className="flex items-center max-lg:flex-col">
        <img src={ImgLake3} className="w-[600px] object-contain  m-[10px]" alt="" />
        <div className="p-3 text-2xl">
          <h1 className="p-3">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
      </div>

      <div className="flex items-center max-lg:flex-col-reverse">
        <div className="p-3 text-2xl">
          <h1 className="p-3">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
        <img src={ImgLake4} className="w-[600px] object-contain  m-[10px] " alt="" />
      </div>

      <div className="flex items-center max-lg:flex-col">
        <img src={ImgLake5} className="w-[600px] object-contain  m-[10px]" alt="" />
        <div className="p-3 text-2xl">
          <h1 className="p-3">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
      </div>
    </div>
  );
  const Norquay = (
    <div className="flex flex-col w-[90%] h-auto mb-[30px]">
      <div className="flex items-center max-lg:flex-col">
        <img src={ImgNorquay1} className="w-[700px] object-contain m-[10px] " alt="" />
        <div className="p-3 text-2xl">
          <h1 className="p-3 text-2xl">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
      </div>

      <div className="flex items-center max-lg:flex-col-reverse">
        <div className="p-3">
          <h1 className="p-3 text-2xl">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
        <img src={ImgNorquay2} className="w-[600px] object-contain  m-[10px]" alt="" />
      </div>

      <div className="flex items-center max-lg:flex-col">
        <img src={ImgNorquay3} className="w-[600px] object-contain  m-[10px]" alt="" />
        <div className="p-3 text-2xl">
          <h1 className="p-3">STORYBOOK SCENERY</h1>
          <p className="text-xl">
            If you’re entertaining ideas of a summer splash in Lake Louise,
            think again. Thanks to the glacial melt, the water is either frozen
            or freezing at all times. In fact, most lakes in the region are
            glacial-fed, and the rivers are equally as frosty. Locals like to
            take their summer soaks in Herbert Lake, which is just a ten-minute
            drive up the 93. There’s an old diving board on one side, which
            rumour claims once belonged to the swimming pool at the Chateau.
          </p>
        </div>
      </div>
    </div>
  );

  ///функция возвращает jsx-переменные (BanfSunshine,LakeLouise,Norquay) взависимости от стейтa toggle
  /// подробнее...
  ///по нажатию на кнопку (more about), мы инвертируем (true/false) конкретное свойство из стейта ( см. init)
  ///далее взависимости от свойства стейтa рендерим следующее: (BanfSunshine,LakeLouise,Norquay)
  /// также есть ДВА  вызова этой фукции для удобного отображения его в десктоп и в моб. устр.
  /// подробнее...
  /// для десктопа функция вызывается прямо под общим div-ом всех карточек.
  /// для моб. устр функция вызывается под своей конкретной карточкой .
  const LocationDetailsRender = () => {
    if (toggle.banf) {
      return BanfSunshine;
    } else if (toggle.louise) {
      return LakeLouise;
    } else if (toggle.norquay) {
      return Norquay;
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-auto overflow-auto dark:text-white">
      <div className="flex flex-col items-center mt-[60px] w-full h-auto">
        <h1 className="titleFont text-[80px] max-md:text-[60px] max-sm:text-[40px]">
          Map of area
        </h1>

        <img src={Img1} className=" object-cover w-[90%]  pr-[20px] pl-[20px]  max-sm:p-0" alt="map of area"/>

        <div
          className="mt-[50px] mb-[50px] px-[20px] py-[0] w-full h-auto flex justify-center 
                     max-lg:flex max-lg:items-center max-lg:flex-col">
         {/*Карточки локации (функции)*/}

         {/* 1 Карточка*/}

         <div className="flex flex-col items-center">

          <div className=" dark:bg-[#1e2b1a] rounded-2xl  dark:text-white bg-[#dee8dc] flex items-center flex-col  w-[400px] h-[500px] object-cover m-3 max-lg:w-full">
              <img
                className="w-full h-[250px] object-cover object-bottom rounded-2xl"
                src={Img2}
                alt=""
              />
              <div className="h-1/2 flex flex-col justify-around items-center font-[Arial,_Helvetica,_sans-serif]  text-center">
                <h1 className="text-5xl mt-2 max-sm:text-4xl">Banf Sunshine</h1>
                <p className="p-3 ">
                  This is a place where fall lines defy gravity and friendly
                  flannel-wearing locals will show you the goods.
                </p>
                <button
                  className="flex flex-col justify-center items-center w-[130px] border-[2px] border-solid border-[black] rounded-[30px] h-[50px] m-[20px]"
                  onClick={() => {
                    setToggle({ banf: !toggle.banf });
                  }}
                >
                  {toggle.banf ? <p>Less</p> : <p>More aboute</p>}
                  {toggle.banf ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </button>
              </div>
          </div>
            {/*фукциия для отображения  деталей карточек если окно меньше 976px */}
            <div className="hidden max-lg:block">{LocationDetailsRender()}</div>
         </div>

         {/* 2 Карточка*/}
         <div className="flex flex-col items-center">

          <div className=" dark:bg-[#1e2b1a]  dark:text-white rounded-2xl bg-[#dee8dc] flex items-center flex-col  w-[400px] h-[500px] object-cover m-3 max-lg:w-full">
    <img
      className="w-full h-[250px] object-cover object-bottom rounded-2xl"
      src={Img3}
      alt=""
    />
    <div className="h-1/2 flex flex-col justify-around items-center font-[Arial,_Helvetica,_sans-serif]  text-center">
      <h1 className="text-5xl mt-2 max-sm:text-4xl">Lake Louise</h1>
      <p className="p-3 ">
        This is a place where fall lines defy gravity and friendly
        flannel-wearing locals will show you the goods.
      </p>
      <button
        className="flex flex-col justify-center items-center w-[130px] border-[2px] border-solid border-[black] rounded-[30px] h-[50px] m-[20px]"
        onClick={() => {
          setToggle({ louise: !toggle.louise });
        }}
      >
        {toggle.louise ? <p>Less</p> : <p>More aboute</p>}
        {toggle.louise ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </button>
    </div>
          </div>
           {/*фукциия для отображения  деталей карточек если окно меньше 976px */}
           <div className="hidden max-lg:block">{LocationDetailsRender()}</div>
          </div>

         {/* 3 Карточка*/}   
         <div className="flex flex-col items-center bg-transparent ">
           <div className=" dark:bg-[#1e2b1a]  dark:text-white bg-[#dee8dc] rounded-2xl flex items-center flex-col  w-[400px] h-[500px] object-cover m-3 max-lg:w-full">
            <img
              className="w-full h-[250px] object-cover object-bottom rounded-t-2xl"
              src={Img4}
              alt=""
            />
            <div className="h-1/2 flex flex-col justify-around items-center font-[Arial,_Helvetica,_sans-serif]  text-center">
              <h1 className="text-5xl mt-2 max-sm:text-4xl">Norquay</h1>
              <p className="p-3 ">
                Just minutes from the Town of Banff, Mt. Norquay offers the only
                night skiing in Banff National Park, including a fully lit
                terrain park.
              </p>
              <button
                className="flex flex-col justify-center items-center w-[130px] border-[2px] border-solid border-[black] rounded-[30px] h-[50px] m-[20px]"
                onClick={() => {
                  setToggle({ norquay: !toggle.norquay });
                }}
              >
                {toggle.norquay ? <p>Less</p> : <p>More aboute</p>}
                {toggle.norquay ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </button>
            </div>
           </div>
           {/*фукциия для отображения  деталей карточек если окно меньше 976px */}
           <div className="hidden max-lg:block">{LocationDetailsRender()}</div>
         </div> 

         </div> 

          {/* фукциия для отображения  деталей карточек.При 976px- скрывается. Потом появляется под каждой карточкой */}
          <div className="max-lg:hidden">{LocationDetailsRender()}</div>   
      </div>
    </div>
  );

};

export default Locations;
