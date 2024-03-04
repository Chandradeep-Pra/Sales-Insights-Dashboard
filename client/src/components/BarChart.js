import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";

function BarChart({ data }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const salesByMonth = {};

  data.forEach(transaction => {
    if (transaction.sold) {
      const month = new Date(transaction.dateOfSale).getMonth();
      salesByMonth[months[month]] = (salesByMonth[months[month]] || 0) + 1;
    }
  });

  const chartData = {
    labels: Object.keys(salesByMonth),
    datasets: [{
      label: 'Number of Items Sold',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
      hoverBorderColor: 'rgba(255, 99, 132, 1)',
      data: Object.values(salesByMonth),
    }],
  };

  return (
    <div>
      <h2>Month-wise Sales (Number of Sold transactions)</h2>
      <canvas id="barChart" width="400" height="200"></canvas>
    </div>
  );
}

export default BarChart;
