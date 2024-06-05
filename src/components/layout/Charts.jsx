import { Grid } from '@mui/material';
import React from 'react';
import {
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  PieChart,
  Pie
} from 'recharts';

const pdata = [
  { name: 'Python', students: 5, fees: 10 },
  { name: 'Java', students: 26, fees: 19 },
  { name: 'Php', students: 20, fees: 50 },
  { name: 'React', students: 25, fees: 10 },
  { name: 'Next', students: 5, fees: 30 },
  { name: 'MERN', students: 26, fees: 35 }
];

const pdata2 = [
    { name: 'Python', value: 5, },
    { name: 'Java', value: 26,},
    { name: 'Php', value: 20,},
    { name: 'React', value: 25,},
    { name: 'Next', value: 5, },
    { name: 'MERN', value: 26,}
  ];


function Charts() {
  return (
    <div className="p-5">
        <Grid container>
        <Grid item md={6}>
        <div className="w-full px-5">
            <h1 className="chart-heading p-5 text-4xl text-red-500">Line Chart</h1>
            <ResponsiveContainer width="100%">
            <LineChart data={pdata}>
                <CartesianGrid />
                <XAxis dataKey="name" interval={'preserveStartEnd'} />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: 'white' }} />
                <Legend />
                <Line type="monotone" dataKey="students" stroke="blue" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
            </LineChart>
            </ResponsiveContainer>
        </div>
        </Grid>
        
        <Grid item md={6}>
        <div className="w-full px-5">
            <h1 className="chart-heading p-5 text-4xl text-red-500">Bar Chart</h1>
            <ResponsiveContainer width="100%" height={500}>
            <BarChart data={pdata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#8884d8" />
                <Bar dataKey="fees" fill="#82ca9d" />
            </BarChart>
            </ResponsiveContainer>
        </div>
        </Grid>
        </Grid>

        <Grid container>
        <Grid item md={6}>
        <div className="w-full mt-10 px-5">
            <h1 className="chart-heading p-5 text-4xl text-red-500">Bar Chart</h1>
            <ResponsiveContainer width="100%" height={500}>
            <PieChart width={730} height={250}>
                <Tooltip />
                <Pie data={pdata} dataKey="students" nameKey="fees" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={pdata2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
            </ResponsiveContainer>
        </div>
        </Grid>
        </Grid>
        
    </div>
  );
}

export default Charts;
