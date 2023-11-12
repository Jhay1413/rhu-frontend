import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Pie,Line } from 'react-chartjs-2';

const PopulationChart = ({ data }) => {
  const dataForLineChart = {
    labels: data.map(item => item.labels),
    datasets: [
      {
        label: 'Population',
        data: data.map(item => item.value),
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.1
      }
    ]
  };
  
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Population Over Time</h2>
      <Line
        data={dataForLineChart}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Population Growth Over Time"
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  );
};

export default PopulationChart;