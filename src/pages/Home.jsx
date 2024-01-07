import React, { useEffect, useState } from 'react'
import Visualisation from '../components/Visualisation';
import FilterBar from '../components/FilterBar';

const Home = () => {

    const [data,setData] = useState([]);
    const [filters,setFilters] = useState({age:"",gender:"",fromDate:"",toDate:""});

    const getData = async () =>
    {
       const response = await fetch("https://7ee898e8-734b-4d91-9532-90c831d0cb7d-00-1ei1pos5a4hj0.sisko.replit.dev/analytics");
       const data = await response.json();

       setData(data.data);
    }

    const filterAgeAndGender = ()=>
    {
        const filteredData = data.filter(({Age,Gender})=>Age.includes(filters.age) && Gender.includes(filters.gender));
        return filteredData;
    }

    const filterDateRange = (filteredAgeAndGenderData) =>
    {
        const filteredData = filteredAgeAndGenderData.filter(obj => {
            const objDateParts = obj.Day.split('/'); // Splitting the 'Day' string by '/'
            const objDate = new Date(`${objDateParts[1]}/${objDateParts[0]}/${objDateParts[2]}`); // Creating a Date object
          
            // Checking if the object's date falls within the specified range
            return objDate >= new Date(filters.fromDate) && objDate <= new Date(filters.toDate);
          });
          if(filteredData.length===0)
            return filteredAgeAndGenderData;
          return filteredData;
    }

    const filteredAgeAndGenderData = filterAgeAndGender();
    const filteredData = filterDateRange(filteredAgeAndGenderData);

    useEffect(()=>{
        getData();
    },[])

  return (
    <div className='flex justify-center items-center flex-col'>
        <FilterBar filters={filters} setFilters={setFilters}/>
        {
            data.length===0
            ? <h1 className='text-2xl font-bold'>Loading</h1>
            :<Visualisation data={filteredData}/>
        }
        
    </div>
  )
}

export default Home