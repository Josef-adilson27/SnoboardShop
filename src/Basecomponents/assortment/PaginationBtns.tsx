import React from 'react'

type PropsType = {
  postsPerPage:number,
  totalPosts:number,
  paginate:(PageNum:number)=>void
}
 


const PaginationBtns: React.FC<PropsType> = ({postsPerPage,totalPosts,paginate}) =>{
  const PageNum = [];
  // запись номеров кнопок в массив
  for (let index = 1; index <=Math.ceil(totalPosts/postsPerPage); index++) {
      PageNum.push(index)  
  }

  //рендер кнонпок
  return(
    <div className='flex justify-center w-full h-[30px] mt-[50px] mb-[50px] rounded-[3]'>
      {
       PageNum.map(item=>(
          <div className='flex' key={item}>
              <button className='w-[50px] h-full bg-primary-color rounded-lg mx-1 text-white' onClick={()=>paginate(item)}>{item}</button>
          </div>        
       ))
      }          
   </div>
  )
}

export default PaginationBtns;