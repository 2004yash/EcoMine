import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Legend,
    Tooltip
} from 'chart.js';

// Register the components with ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Legend, Tooltip);

const ExpenseChart = () => {
    const chartData = {
        labels: ['June', 'July', 'August', 'September'], 
        datasets: [{
            label: 'Carbon Footprint',
            data: [750, 600, 550, 300], 
            backgroundColor: '#FF9E40',
        }],
    };

    const options = {
        plugins: {
            legend: { labels: { color: 'grey' } },
            title: { display: true, text: 'Carbon Footprint Over Time' },
        },
        scales: {
            y: {
                beginAtZero: true, 
                ticks: { color: 'grey' },
                title: { display: true, text: 'Carbon Footprint (kg CO₂e)' },
            },
            x: {
                ticks: { color: 'grey' },
                title: { display: true, text: 'Months' },
            }
        }
    };

    return (
        <div className="expense-chart">
            <h2>Carbon Footprint Tracking</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default ExpenseChart;
