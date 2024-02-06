import { Dispatch, SetStateAction, createContext, useState, useEffect} from "react";
import { dataType } from "../types";




type componentType = {
  children:React.ReactNode
}

type UserContextInterface = {
   //основной тип данных для товаров
   product:dataType[],
   setProduct:Dispatch<SetStateAction<dataType[]>>,
   //тип данных для корзины
   setCartProduct?:Dispatch<SetStateAction<dataType[]>>,
   cartProduct:dataType[],
   //тип для показа и скрытия окна деталей.
   productsDetailHide:boolean,
   setProductsDetailHide:Dispatch<SetStateAction<boolean>>,
   //тип фукции для динамического получения данных о нажатых карточках.(кнопка Detsails из assortment) 
   dynamicCardsProperties:ProductsDetailsType
   cardsDetails:(item:ProductsDetailsType)=>void
   //думаю это понятно...
   Remove:(id:number)=>void
   Add:(id:number)=>void
   //тип фукции для листания картинок
   setImage:(param1:number,param2:(a:number)=>void, param3:string[])=>void
   IncCounter:(id:number)=>void,
   DecCounter:(id:number)=>void,
} 

// тип для компонента деталей продукта
type ProductsDetailsType = {
    product:string
    price:number
    img: string[]
    count:number
    name:string
    age:string,
    gender:string,
    hardness?:string
    level?:string
    geometry?:string,
    size?:string
}
// нач. значения для компонента деталей продукта
const init = {
  product:'',
  price:0,
  img: [],
  count:0,
  name:'' ,
  age:'',
  gender:'',
  hardness:'',
  level:'',
  geometry:'',
  size:''
}


export const BaseContext = createContext <UserContextInterface>({} as UserContextInterface)


export const ContextProvider = ({children}: componentType) => {
  const [dynamicCardsProperties,setDynamicCardsProperties]= useState<ProductsDetailsType>(init)
  const [productsDetailHide,setProductsDetailHide] = useState<boolean>(false)
  const [product,setProduct] = useState<dataType[]>([])
  const [cartProduct,setCartProduct] = useState<dataType[]>(JSON.parse(localStorage.getItem('cartItem')||'[]'))
  
  //запусить сервер - json-server --watch  data.json --port3031
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/data");
        if (response.ok) {
          console.log("Successful");
          setProduct(await response.json());
        } else {
          if (response.status === 404) throw new Error("404, Not found");
          if (response.status === 500)
            throw new Error("500, internal server error");
        }
      } catch (error) {
        console.log("Fetch", error);
      }
    }
    
    getData();
  }, []);
  
  //Запись в local storage уникальных элементов в корзину(cartProduct)
  useEffect(()=>{
    localStorage.setItem('cartItem',JSON.stringify([...new Map(cartProduct.map((item)=>[item["id"],item])).values()]));
  },[cartProduct])

  
  //фукция для динамического получения данных о нажатых карточках.(кнопка Detsails из assortment) 
  //получаем данные из Card ---> передаем в Details
  const cardsDetails = (item:ProductsDetailsType) =>{
    //делаем Details видимым
    setProductsDetailHide(!productsDetailHide)
    //объект данных о товаре
    setDynamicCardsProperties({
      product:item.product,
      price:item.price,
      img: item.img,
      count:item.count,
      name:item.name,
      age:item.age,
      gender:item.gender,
      hardness:item.hardness,
      level:item.level,
      geometry:item.geometry,
      size:item.size
    })    
  }

  //фукция для листания картинок
  const setImage = ( count:number,setImageFunc:(a:number)=>void, imageArray:string[]) =>{ 
    setImageFunc(count+1)
     if(count>=imageArray.length-1){ 
      setImageFunc(0)
     }
  }
  
  const Remove = (id:number)=>{setCartProduct(cartProduct.filter(item=>item.id!==id))}

  const IncCounter = (id:number)=>{
    const el = cartProduct.find(item=>item.id==id)
    el!.count+=1
    localStorage.setItem('cartItem',JSON.stringify([...new Map(cartProduct.map((item)=>[item["id"],item])).values()]));
    setCartProduct(JSON.parse(localStorage.getItem('cartItem')||'[]'))
  }
  
  const DecCounter = (id:number)=>{
    const el = cartProduct.find(item=>item.id==id)
    el!.count<=1?el!.count===1:el!.count-=1;
    localStorage.setItem('cartItem',JSON.stringify([...new Map(cartProduct.map((item)=>[item["id"],item])).values()]));
    setCartProduct(JSON.parse(localStorage.getItem('cartItem')||'[]'))
  }



  const Add = (id:number)=>{
    product.map(item=>{     
      if(item.id==id){
        if(!cartProduct.includes(item)){
          setCartProduct(current=>[...current,item])
        }
      }
    })
  }



  
  return(
    <BaseContext.Provider value={{
      product,
      setProduct,
      cartProduct,
      Remove,
      Add,
      productsDetailHide,
      setProductsDetailHide,
      cardsDetails,
      dynamicCardsProperties,
      setImage,
      IncCounter,
      DecCounter
      }}>
     {children}
    </BaseContext.Provider>
  )
};
 

