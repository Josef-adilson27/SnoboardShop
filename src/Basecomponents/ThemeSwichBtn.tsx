import React, { useEffect, useState } from 'react'



const ThemeSwichBtn: React.FC = () =>{

  const [toggle,setToggle] = useState<boolean>(false)

  useEffect(()=>{
   const item = JSON.parse(localStorage.getItem('checkout')||'false');
    item&&setToggle(item)
  },[])


  useEffect(()=>{
   
    localStorage.setItem('checkout',JSON.stringify(toggle))
    const HTML = document.querySelector('html') 
    const btnBall = document.querySelector('.ball')
    // нажатие кнопку (toggleBtnWrapper) - изменение состояния стейта toggle (true or false)
    // по этому условию добавляем или удаляем класс dark от HTML тега (index.html)
    // класс ballMotion просто двигает кнопку и все.
    
    if(toggle){
      HTML?.classList.add('dark')
      btnBall?.classList.add('ballMotion')
    }else{
      HTML?.classList.remove('dark')
      btnBall?.classList.remove('ballMotion')
    }
  },[toggle])
  
  const themeToggle=()=>{setToggle(!toggle)}

  return(
    <div onClick={themeToggle} className="toggleBtnWrapper">
      <div className='ball dark:bg-slate-600'></div>
    </div>
  )
}

export default ThemeSwichBtn;