import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer  } from 'recharts';
import { getShortDate, sanitizeData } from '../utils/utils';



const Visualisation = ({data}) => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const dateData = data.map(item => ({
    ...item,
    Day: getShortDate(item.Day)
  }));

  const handleBarClick = (e) => {
    setSelectedCategory(e.activeLabel);
  };

  const chartData = sanitizeData(data);


  return (
    <div className=' w-3/4 max-sm:w-full max-sm:mr-10 mt-5 space-y-2'>
      <ResponsiveContainer width="100%" height={300}>
      <BarChart  data={chartData} layout="vertical" onClick={handleBarClick}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="category" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalTime" fill="#8884d8"  />
      </BarChart>
      </ResponsiveContainer>

      {selectedCategory && (
        <ResponsiveContainer width="100%" height={300}>
        <LineChart  data={dateData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={selectedCategory} stroke="#8884d8" />
          
        </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Visualisation;
