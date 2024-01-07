import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { getShortDate } from '../utils/utils';

const Visualisation = ({data}) => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleBarClick = (e) => {
    setSelectedCategory(e.activeLabel);
  };


  // Aggregate total time spent for each category across the selected date range
  const aggregateData = data.reduce((acc, entry) => {
    Object.keys(entry).forEach((key) => {
      if (key !== 'Day' && key!=='_id' && key!=='Gender' && key!=='Age') {
        acc[key] = (acc[key] || 0) + entry[key];
      }
    });
    return acc;
  }, {});

  // Convert aggregated data into an array format required for Recharts
  const chartData = Object.keys(aggregateData).map((key) => ({
    category: key,
    totalTime: aggregateData[key],
  })).reverse();

  const dateData = data.map(item => ({
    ...item,
    Day: getShortDate(item.Day)
  }));

  return (
    <div>
      <BarChart width={600} height={300} data={chartData} layout="vertical" onClick={handleBarClick}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="category" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalTime" fill="#8884d8"  />
      </BarChart>

      {selectedCategory && (
        <LineChart width={600} height={300} data={dateData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={selectedCategory} stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
};

export default Visualisation;
