import React from 'react'

const FilterBar = () => {
  return (
    <fieldset className='border border-gray-300 rounded-md pb-2 px-4 space-x-4 flex'>
        <legend>
            Filters
        </legend>
        <aside>
            <label htmlFor='age' className='font-semibold'>Age:</label>
            <select id='age'>
                <option>Any</option>
                <option>15-25</option>
                <option>{">25"}</option>
            </select>
        </aside>

        <aside>
            <label htmlFor='gender' className='font-semibold'>Gender:</label>
            <select htmlFor="gender">
                <option>Any</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </aside>

        <aside>
            <label htmlFor='fromDate' className='font-semibold'>From Date:</label>
            <input type='date' id="fromDate"/>
        </aside>

        <aside>
            <label htmlFor='toDate' className='font-semibold'>To Date:</label>
            <input type='date' id="toDate" />
        </aside>
        
    </fieldset>
  )
}

export default FilterBar