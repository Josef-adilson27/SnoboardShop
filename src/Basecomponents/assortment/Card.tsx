import React,{useContext} from "react";
import { BaseContext } from "../../context/ContextProvider";
import { dataType } from "../../types";


type ItemType = {
  item:dataType,
}

const Card: React.FC<ItemType> = ({item}) => {

const {Add,cardsDetails } = useContext(BaseContext);


  return(
    <div className="[box-shadow:0px_0px_10px_-3px_rgba(34,_60,_80,_0.6)] m-3 bg-white rounded-xl "> 

      <div className=" flex justify-center items-center w-[170px] h-[320px] rounded-xl  
                        max-sm:w-[160px] 
                        max-sm:h-[300px]">

        <div className="w-full h-full flex items-center justify-between flex-col">

          <div className="w-full h-[60%] rounded-xl ">        
           <img className="bg-cover  w-full h-full rounded-xl " src={item.img[0]} alt="" /> 
          </div>
           
          <div className="w-full flex items-center flex-col">
            <p className="pl-[10px] mb-[5px] text-xl">{item.name}</p>
             {/* в cardsDetails передаем item для отображения их в Datails*/}
            <button onClick={()=>cardsDetails(item)} className="w-[100px]  h-[100%] text-white  bg-[var(--primary-color)] rounded-[20px] mb-[10px]">Details</button>  
          </div>


          <div className=" flex items-center justify-center w-full h-[10%] border-solid max-md:h-[10%]">
             <button onClick={()=>Add(item.id)} className="w-[100px]  h-[100%] bg-[var(--primary-color)] text-white rounded-[20px] mb-[10px]">add</button>                        
          </div>

        </div>
      </div>
    </div>
  );
};
export default Card;
