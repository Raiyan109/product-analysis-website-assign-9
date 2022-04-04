import React from 'react';
import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='chart-container'>
            <div>
                <LineChart width={400} height={300} data={data}>
                    <Line dataKey={"investment"}></Line>
                    <Line dataKey={"revenue"}></Line>
                    <Line dataKey={"sell"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>

            <div>
                <PieChart width={400} height={300} data={data}>
                    <Pie data={data} dataKey={"investment"} cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                    <Pie data={data} dataKey={"investment"} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d"></Pie>
                </PieChart>
            </div>
        </div>


    );
};

export default Dashboard;