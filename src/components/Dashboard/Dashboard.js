import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 104010
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
                <h2 className='dash-head'>Month Wise Sell </h2>
                <LineChart width={400} height={300} data={data}>

                    <Line dataKey={"sell"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"sell"}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

            <div>
                <h2 className='dash-head'>Investment VS Revenue </h2>
                <PieChart width={500} height={400} data={data}>
                    <Pie data={data} dataKey={"investment"} cx="200" cy="200" outerRadius={60} fill="#8884d8" label></Pie>
                    <Pie data={data} dataKey={"revenue"} cx="200" cy="200" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>


    );
};

export default Dashboard;