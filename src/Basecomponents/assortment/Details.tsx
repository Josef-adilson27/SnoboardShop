import React, { useContext, useState} from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { BaseContext } from "../../context/ContextProvider";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


const Details: React.FC = () =>{
  const {
    //productsDetailHide состояние для сокрытия окна и его Set
    productsDetailHide,
    setProductsDetailHide,
    //объект содержащий динамические свойства нажатой карточки
    dynamicCardsProperties
  } = useContext(BaseContext);


const [imgState,setImgState] = useState(0);

const {setImage} = useContext(BaseContext);


  return(
      // прозрачное родительское окно на 100% ширину и высоту для  применения display-flex по нажитию кнопки Details
      <div className={` ${productsDetailHide?'flex':'hidden '} justify-center items-center w-full h-full absolute z-[2]`}>
        {/*основной контейнер контента*/}
        <div className='  w-[500px] h-[auto]  dark:bg-slate-800 dark:text-white  bg-[#ebebf5] text-[25px] [box-shadow:4px_4px_8px_0px_rgba(34,_60,_80,_0.2)]
                        max-md:w-[400px]
                        max-sm:w-[350px]
                        '>

          {/* кнопка применения display-none для выхода из окна*/}
          <div className='w-full h-[6%] p-[5px] flex justify-end items-center'>
            <button onClick={()=>setProductsDetailHide(!productsDetailHide)}><RxCrossCircled size={'30'}/></button>
          </div>

             {/* контейнер картины и кнопок влево вправо*/}
             <div className='w-full  flex justify-around'>
              <button onClick={()=>setImage(imgState,setImgState,dynamicCardsProperties.img)}><FaArrowCircleLeft size={'30px'}/></button>
               <img className='w-[70%] h-[400px] max-md:h-[300px]  max-sm:h-[250px]' src={dynamicCardsProperties.img[imgState]} alt="" />
              <button onClick={()=>setImage(imgState,setImgState,dynamicCardsProperties.img)}><FaArrowCircleRight size={'30px'}/></button>
             </div>
              {/* название продукта и цена*/}
             <div className='mt-[10px] w-full flex justify-around' >
              <p className='text-1xl font-bold p-[5px] rounded-[30px]'>{dynamicCardsProperties.name}</p>
              <p className='bg-[var(--primary-color)] flex justify-center items-center font-bold w-[100px] h-[30px] rounded-[30px]'>${(dynamicCardsProperties.price).toLocaleString('en')   }</p>
             </div>
              {/*рендеринг свойства продукта в зависимости от его наличия*/}
              <div className='w-[100%] text-center'>
               
                {dynamicCardsProperties.price    &&<p className='text-xl'>Price:    {dynamicCardsProperties.price}</p>}
                {dynamicCardsProperties.geometry &&<p className='text-xl'>Geometry: {dynamicCardsProperties.geometry}</p>}
                {dynamicCardsProperties.gender   &&<p className='text-xl'>Gender:   {dynamicCardsProperties.gender}</p>}
                {dynamicCardsProperties.level    &&<p className='text-xl'>Level:    {dynamicCardsProperties.level}</p>}
                {dynamicCardsProperties.size     &&<p className='text-xl'>Size:     {dynamicCardsProperties.size}</p>}
              </div>
          
        </div>
      </div>
  )
}

export default Details;