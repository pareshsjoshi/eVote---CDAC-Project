import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import '../stylesheets/Testchart.css'; // Import the updated CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'black', // Ensure legend text is dark black
      },
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color: 'black', // Ensure title text is dark black
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'black', // Dark black for X-axis labels
      },
    },
    y: {
      ticks: {
        color: 'black', // Dark black for Y-axis labels
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function MyBarChart() {
  return (
    <div className="chart-container">
      <Bar options={options} data={data} />
    </div>
  );
}
