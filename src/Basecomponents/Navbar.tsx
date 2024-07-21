import React, { ReactElement, useContext, useState } from 'react'
import ThemeSwichBtn from './ThemeSwichBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { BaseContext } from "../context/ContextProvider";
import {home,assorment,locations,stay,skis} from '../Links'


// 1 -ResoinsiveMenu
// функция для отображения адаптивного меню для десктоп,планшет и мобильных
// В ЗАВИСИМОСТИ ОТ ПЕРЕДОВАЕМЫХ ПАРАМНТРОВ (т.е. классов)


const ResoinsiveMenu = (defaultClass:string,classFormobile1:string,classFormobile2:string):ReactElement=>{

  
  return(
      <header className={`${defaultClass}`}>
      
         
       <Link to={home} className={`${classFormobile2}`}>
        <div className={`${classFormobile1}`}><FaHome size={40} /></div>
        <div>Home</div>
      </Link>

      <Link to={assorment} className={`${classFormobile2}`}>
        <div className={`${classFormobile1}`}><FaCartShopping size={40} /></div>
        <div>Assortment</div>
      </Link>
      
      <Link to={locations} className={`${classFormobile2}`}>
        <div className={`${classFormobile1}`}><IoLocationSharp  size={40}/></div>
        <div>location</div>
      </Link>
      
      <Link to={skis} className={`${classFormobile2}`}>
        <div className={`${classFormobile1}`}><IoLocationSharp  size={40}/></div>
        <div>skis</div>
      </Link>

      <Link to={stay} className={`${classFormobile2}`}>
        <div className={`${classFormobile1}`}><IoLocationSharp  size={40}/></div>
        <div>Stay</div>
      </Link>

    </header>
)}

const Header: React.FC = () =>{


  {/* 
  *   ResoinsiveMenu - становится МОБИЛЬНОЙ ВЕРСИЕЙ если дисплей меньше 480px
*/}
   
  const [menuToggle,setMenuToggle] = useState<boolean>(false) 
  const {cartProduct} = useContext(BaseContext);

  return(


    <div className='text-[25px] flex items-center justify-between w-full  h-[100px] bg-white  text-[#0a0a0a] max-exrtaSm:h-[50px] font-size: 20px; fixed z-[2]'> 

      {/*Кнопка для вывода меню для на моб. устройствах. Для для десктопа,планшета - спрятан.*/}
      <div onClick={()=>setMenuToggle(!menuToggle)} className='hidden max-sm:flex  w-11 '>
        <GiHamburgerMenu size={30} color='grey'/>
      </div>

      {/*header logo here*/}
      <div className='h-full w-full max-w-20 flex  max-sm:ml-16 max-exrtaSm:hidden'>
        <div className=' h-full w-full bg-[url(../public/img/logoImg.png)] bg-contain bg-no-repeat'></div>
      </div>

       {/* ResoinsiveMenu (header) -  для десктопа */}
       {ResoinsiveMenu('flex justify-around items-center w-[90%] h-full max-sm:hidden','hidden','')} 

        {/*ResoinsiveMenu - (sidebar) для моб. устройств.*/}

        {menuToggle&&ResoinsiveMenu(
        'dark:bg-slate-700 dark:text-white  bg-[white] flex flex-col justify-around w-[200px] h-[70vh] text-xl absolute top-[100%] [box-shadow:6px_1px_7px_2px_rgba(34,_60,_80,_0.2)] z-[1]',
         //обе повтооряющиеся классы нужны для корректной работы меню для десктопа
        'h-full flex justify-around items-center ',
        'h-full flex justify-around items-center h-12 [border-bottom:1px_solid_silver]')}
        {/*корзина*/}
        <div className='w-[130px] h-full flex justify-between items-center max-sm:w-[100px]'>
          <Link to='cart'>
           <div className='mt-[10px] relative w-[50px] h-full'>
            <FaOpencart size={'30px'} />
             <div className='text-center z-[-1] text-xl absolute bottom-[10px] right-[0] w-[30px] h-[30px] bg-[rgb(255,_179,_0)] rounded-[50%]'>
              <p> {cartProduct.length}</p>
              </div>
           </div>
         
          </Link>
         <ThemeSwichBtn/>
        </div>

    </div>

  )
}

export default Header;