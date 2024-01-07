import React, { useEffect, useState } from 'react'
import Visualisation from '../components/Visualisation';

const Home = () => {

    const [data,setData] = useState("");

    const getData = async () =>
    {
       const response = await fetch("https://7ee898e8-734b-4d91-9532-90c831d0cb7d-00-1ei1pos5a4hj0.sisko.replit.dev/analytics");
       const data = await response.json();

       setData(data.data);
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
        <h1>This is home</h1>
        {
            data===""
            ? <h1 className='text-2xl font-bold'>Loading</h1>
            :<Visualisation data={data}/>
        }
        
    </div>
  )
}

export default Home