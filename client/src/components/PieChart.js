
import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";


function PieChart({ data }) {
    console.log(data);
    const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    const categoryCounts = {};
    if(!data){
        console.log("Loading Data !!!! ");
    }else{
        for (const transaction of data){
            if (categoryCounts[transaction.category] === undefined) {
                categoryCounts[transaction.category] = 0;
            } else {
                categoryCounts[transaction.category] = categoryCounts[transaction.category] + 1;
            }
        }
    };
    const labels = Object.keys(categoryCounts);
    const data = Object.values(categoryCounts);
    const updatedChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Number of transactions by Category',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', 
            'rgba(54, 162, 235, 0.2)', 
            'rgba(255, 206, 86, 0.2)', 
            'rgba(75, 192, 192, 0.2)', 
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    setChartData(updatedChartData);
  }, [data]); 

  
  return (
    <div>
      <h2>Product Category Distribution</h2>
      <canvas id="pieChart" width="400" height="200"></canvas>
    </div>
  );
}

export default PieChart;
