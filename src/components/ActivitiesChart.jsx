import React from 'react';
import { ChevronDown } from 'react-feather'; // For the Chevron icon, assuming react-feather is installed

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// Sample data for the chart
const activityData = [
    { week: 'Week 1', Guest: 200, User: 300 },
    { week: 'Week 2', Guest: 300, User: 400 },
    { week: 'Week 3', Guest: 250, User: 200 },
    { week: 'Week 4', Guest: 300, User: 450 },

];

const ActivityChart = () => (
    <div className="bg-white p-6 rounded-lg shadow mb-4">
        <h3 className="text-lg font-semibold ">Activities</h3>
        <div className="flex items-center text-sm text-gray-500">
            May - June 2021 <ChevronDown size={16} />
        </div>

        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend
                    layout="horizontal"
                    verticalAlign="top"
                    align="right"
                    wrapperStyle={{
                        top: '-2rem', // adjust top spacing
                        right: '1rem', // adjust right spacing
                        lineHeight: '2.5 rem', // line height
                    }}
                />

                <Line type="monotone" dataKey="Guest" stroke="#FF6384" />
                <Line type="monotone" dataKey="User" stroke="green" />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default ActivityChart;
