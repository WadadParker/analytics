import React from 'react'

const FilterBar = ({filters,setFilters}) => {

    const changeHandler = (inputField,text) =>
    {
        setFilters(prev=>({...prev,[inputField]:text}));
    }

  return (
    <fieldset className='border border-gray-300 rounded-md pb-2 px-4 space-x-4 flex max-sm:grid max-sm:grid-cols-2'>
        <legend>
            Filters
        </legend>
        <aside>
            <label htmlFor='age' className='font-semibold'>Age:</label>
            <select id='age' value={filters.age} onChange={(e)=>changeHandler("age",e.target.value)}>
                <option value={""}>Any</option>
                <option value={"15-25"}>15-25</option>
                <option value={">25"}>{">25"}</option>
            </select>
        </aside>

        <aside>
            <label htmlFor='gender' className='font-semibold'>Gender:</label>
            <select htmlFor="gender" value={filters.gender} onChange={(e)=>changeHandler("gender",e.target.value)}>
                <option value={""}>Any</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
            </select>
        </aside>

        <aside>
            <label htmlFor='fromDate' className='font-semibold'>From Date:</label>
            <input value={filters.fromDate} type='date' id="fromDate" onChange={(e)=>changeHandler("fromDate",e.target.value)}/>
        </aside>

        <aside>
            <label htmlFor='toDate' className='font-semibold'>To Date:</label>
            <input value={filters.toDate} type='date' id="toDate" onChange={(e)=>changeHandler("toDate",e.target.value)}/>
        </aside>
        
    </fieldset>
  )
}

export default FilterBar