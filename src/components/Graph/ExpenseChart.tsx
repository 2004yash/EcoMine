import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ref, onValue } from "firebase/database";
import { db } from '../../firebase';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Legend,
    Tooltip
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Legend, Tooltip);

const ExpenseChart = () => {
    const [expenses, setExpenses] = useState<{ amountSpent: number, date: string }[]>([]);

    // useEffect(() => {
    //     const expenseRef = ref(db, 'expenses');
    //     onValue(expenseRef, (snapshot) => {
    //         const data = snapshot.val();
    //         const formattedData = data
    //             ? Object.keys(data).map((key) => ({
    //                 amountSpent: data[key].amountSpent,
    //                 date: data[key].date,
    //             }))
    //             : [];
    //         setExpenses(formattedData);
    //     });
    // }, []);

    const chartData = {
        labels: expenses.map(expense => expense.date),
        datasets: [{
            label: 'Expenses',
            data: expenses.map(expense => expense.amountSpent),
            backgroundColor: '#FF9E40',
        }],
    };

    const options = {
        plugins: {
            legend: { labels: { color: 'grey' } },
            title: { display: true, text: 'Expenses Over Time' },
        },
        scales: {
            y: {
                ticks: { color: 'grey', beginAtZero: true },
                title: { display: true, text: 'Amount Spent ($)' },
                beginAtZero: true,
            },
            x: {
                ticks: { color: 'grey', beginAtZero: true },
                title: { display: true, text: 'Date' },
                beginAtZero: true,
            }
        }
    };

    return (
        <div className="expense-chart">
            <h2>Expense Tracking</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default ExpenseChart;
