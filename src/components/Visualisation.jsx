import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

// Sample data (replace this with your actual data)
// const data = [
//   { Day: '4/10/2022', A: 218, B: 857, C: 837, D: 161, E: 718, F: 573 },
//   { Day: '4/11/2022', A: 317, B: 623, C: 930, D: 385, E: 400, F: 957 },
//   // Add more data entries...
// ];

const Visualisation = ({data}) => {
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

  return (
    <div>
      <BarChart width={600} height={300} data={chartData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="category" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalTime" fill="#8884d8"  />
      </BarChart>
    </div>
  );
};

export default Visualisation;
