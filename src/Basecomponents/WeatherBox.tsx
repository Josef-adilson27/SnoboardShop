import React, { useEffect, useState } from 'react'

const WeatherBox: React.FC = () =>{
    
    const [state,setState] = useState([])
    

   
    async function func_name(): Promise<void>{
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=c404f8c027354f0e950205517241807 &q=London&aqi=no');
        const data = await response.json();
        setState(data)
    }

    useEffect(()=>{
        func_name()

    },[])

    console.log(state);
  return(
      <div className='w-[400px] bg-slate-950 max-sm:w-full h-[400px] rounded-xl shadow-xl'>
        g
      </div>
  )
}

export default WeatherBox;