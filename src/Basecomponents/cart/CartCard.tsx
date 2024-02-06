import React,{useContext} from "react";
import { BaseContext } from "../../context/ContextProvider";
import { dataType } from "../../types";


type ItemType = {
  item:dataType,
}


const Card: React.FC<ItemType> = ({item}) => {

  const {Remove,IncCounter,DecCounter,cardsDetails} = useContext(BaseContext);

  return(
    <div className=' flex justify-center w-full mb-[10px] '>
    <div className=' flex w-[90%] h-[300px] border-[1px] rounded-[10px] [box-shadow:0px_0px_10px_-3px_rgba(34,_60,_80,_0.6)]
                      max-xl:h-[270px]  
                      max-lg:h-[250px] 
                      max-md:h-[150px] 
                     
                      max-md:w-[98%] '>

      <img className='w-[300px] h-full p-1 
                       max-xl:w-[270px]  
                       max-lg:w-[250px] 
                       max-md:w-[150px]'
      src={item.img[0]} alt=""/>
        
      <div className='flex-[1] flex justify-around  items-center  h-full'>
        
         <div>
          {item.name&&<p className='    text-xl max-md:hidden'>Name: {item.name}</p>}
          {item.price&&<p className='   text-xl max-md:hidden'>Price: {item.price}</p>}
          {item.size&&<p className='    text-xl max-md:hidden'>Size: {item.size}</p>}
          {item.level&&<p className='   text-xl max-md:hidden'>Level: {item.level}</p>}
          {item.gender&&<p className='  text-xl max-md:hidden'>Gender: {item.gender}</p>}
          {item.geometry&&<p className='text-xl max-md:hidden'>Geometry: {item.geometry}</p>}
         </div> 
         
         <div className="h-[90%]  flex items-center max-md:flex-col justify-around ">
          <button  onClick={()=>Remove(item.id)} className="w-[150px]  h-[50px]  bg-[var(--primary-color)] rounded-[40px] 
                                                            max-md:w-[80px]   
                                                            max-md:h-[40px]">
                                                            delete</button>  
          <button  onClick={()=>cardsDetails(item)} className="w-[150px] hidden h-[50px]  bg-[var(--primary-color)] rounded-[40px] 
                                                            max-md:w-[80px]   
                                                            max-md:h-[40px]
                                                            max-md:block ">                                                        
                                                            Details</button>           
         </div>

          <div className='flex flex-col  items-center justify-between w-[40px] max-md:w-[30px] h-[80px] bg-slate-400'>         
            <button onClick={()=>IncCounter(item.id)} className='w-full  bg-slate-600'>+</button>
             <span>{item.count}</span>
            <button onClick={()=>DecCounter(item.id)} className='w-full  bg-slate-600'>-</button>     
         </div>

       </div>
     </div>
   </div>
  );
};
export default Card;
