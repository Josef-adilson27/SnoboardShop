import React, { useState, useContext } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { BaseContext } from "../context/ContextProvider";



const Trainy: React.FC = () =>{

  const {setImage} = useContext(BaseContext);

  const images:string[] = ['/images/bigginer3.jpg','/images/begginer1.jpg','/images/begginer2.jpg']

  const [imgState,setImgState] = useState(0);
 


  return(
    <div className='w-full h-full dark:bg-black dark:text-white'>
        <div className='s w-full h-full relative'>
            <img  src={`/src${images[imgState]}`} className='object-cover  w-full h-full  '  alt="" />
            <div className=' first-letter:flex flex-col  absolute top-[0] w-full h-full '>
               <div className='s flex justify-around flex-col items-center w-full h-4/5'>
                 <p className='text-[40px] titleFont flex flex-wrap text-center max-sm:text-[10vw]'>For begginers</p>
               </div>
              <div className='flex justify-center flex-col items-center w-full h-1/5'>
                <button  className='z-[1] w-[150px] h-[30px] bg-[--primary-color]  text-xl'>BUY THIS TICKET</button>
              </div>
            </div>
            <div className='absolute flex items-center top-[0] w-full h-full'>
              <div className='flex justify-between w-full h-[50px] p-[5px]'>
               <button onClick={()=>setImage(imgState,setImgState,images)}><FaArrowCircleLeft size={'30px'}/></button>
               <button onClick={()=>setImage(imgState,setImgState,images)}><FaArrowCircleRight size={'30px'}/></button>
              </div>
            </div>
        </div>
      </div>
  )
}
export default Trainy;