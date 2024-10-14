import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'; // Required for rendering pie chart
import { ChevronDown } from 'react-feather'; // For the Chevron icon, assuming react-feather is installed

const TopProducts = () => {
    const data = [
        { name: 'Basic Tees', value: 55 },
        { name: 'Custom Short Pants', value: 31 },
        { name: 'Super Hoodies', value: 14 },
    ];

    const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

    return (
        <div className="bg-white p-4 pb-0 rounded-[1rem] shadow">
            <div className="flex justify-between  items-center mb-4">
                <h3 className="text-lg font-semibold ">Top products</h3>
                <div className="flex items-center text-sm text-gray-500 mr-8">
                    May - June 2021 <ChevronDown size={16} />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={80} // Full circle
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>


                </div>
                <div className="w-1/2 pl-4 flex justify-center flex-col content-center">
                    {data.map((item, index) => (
                        <div key={item.name} className="mb-[1rem]">
                            <div className="flex items-center">
                                <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: COLORS[index] }}></div>
                                <span className="font-semibold">{item.name}</span>
                            </div>
                            <div className="text-sm text-gray-500">{item.value}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProducts;





