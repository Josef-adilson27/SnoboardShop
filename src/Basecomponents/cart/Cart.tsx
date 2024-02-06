import React,{useContext,useEffect,useState} from 'react'
import { BaseContext } from "../../context/ContextProvider";
import CartCard from './CartCard'
import Details from '../assortment/Details';

const Cart: React.FC = () =>{
  const [total,setTotal] = useState(0)
  const {cartProduct} = useContext(BaseContext);
  
  // получ. общ. цены.
  useEffect(()=>{
    let sum = 0
    cartProduct.map(item=>{
      sum += item.price*item.count
     setTotal(sum)
    })
  },[cartProduct])
  

  return(
    <div className='pt-[100px] pb-[150px] w-[100%]' >
      {/*детали товаров*/}
      <Details/>
      {/* рендер карточек */}
      {cartProduct.length?cartProduct?.map(item=>(<CartCard key={item.id} item={item}/>))
       :<h1 className='flex justify-center items-center w-full h-[50vh] text-4xl'>Ooops... Your cart is empty... </h1>
      }
      {/* footer корзины */}
      <div className=' dark:bg-slate-700 fixed bottom-[0] w-full h-[150px] bg-[#fafafa]'>
        <div className='flex items-center justify-around w-[400px] h-full bg-[#dbdcc4] max-sm:w-[100%]'>
             <p className='w-[70px] text-center bg-slate-500 rounded-[10px]'>
               $ {(cartProduct.length&&total).toLocaleString('en')}
             </p>          
             <button className="w-[150px]  h-[40px] bg-[var(--primary-color)] rounded-[20px] mb-[10px]">
              Сheckout
            </button>    
        </div>
      </div>
    </div>
  )
}
export default Cart;