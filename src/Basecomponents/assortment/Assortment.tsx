import React, { useContext,useState} from "react";
import { BaseContext } from "../../context/ContextProvider";
import Card from "./Card";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Details from "./Details";
import PaginationBtns from "./PaginationBtns";

const Assortment: React.FC = () => {
//основной стейт товаров
const {product} = useContext(BaseContext);

//стейы для пагинации
const [currPage,setCurrPage] = useState(1) 
//колл. карточек
const [postsPerPage] = useState(10)

const lastIndex  = currPage*postsPerPage; 
const firstIndex = lastIndex-postsPerPage;
//вырезаем из основного стейта
const currPosts  = product.slice(firstIndex,lastIndex)

const paginate = (PageNum:number) => setCurrPage(PageNum)


  return (


    <div className=" dark:text-white [100%]">
      
        {/* backGround image */}
      <div className="fixed z-[-1] bg-cover w-full h-[110%] bg-[url(./images/bgPic.jpg)]"></div>

        {/*компонент для рендера деталей о товаре*/}     
        <Details/>
        
       {/*рендер каточек*/}
      <div className=" verflow-hidden; grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] w-full h-auto pt-[100px]
                       max-md:grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] 
                       max-sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {/*маппинг карточек*/}
        {currPosts.length?currPosts.map(item=>(<Card key={item.id}  item={{...item}}/>))
        :<h1 className='flex justify-center items-center w-full h-[50vh] text-4xl'>Ooops... Server denied. Please try: json-server --watch  data.json --port3031</h1>
        }
      </div>

         {/*пагинация страниц*/}
        <PaginationBtns postsPerPage={postsPerPage} totalPosts={product.length} paginate={paginate}/>
    </div>
    
  );
};
export default Assortment;
