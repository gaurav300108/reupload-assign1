import React from 'react';
import { DollarSign, TagIcon, ThumbsUp, Users } from 'lucide-react';

const StatCard = ({ title, value, icon, bgColor }) => (
    <div className={`${bgColor} p-6 rounded-[1rem] flex justify-between items-center`}>
        <div>
            <h2 className="text-sm font-medium text-gray-600">{title}</h2>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`${bgColor.replace('100', '200')} mt-[-3rem] rounded-full`}>
            {icon}
        </div>
    </div>
);

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
                title="Total Revenues"
                value="$2,129,430"
                icon={<DollarSign size={24} className="text-green-600" />}
                bgColor="bg-green-100"
            />
            <StatCard
                title="Total Transactions"
                value="1,520"
                icon={<TagIcon size={24} className="text-yellow-600" />}
                bgColor="bg-yellow-100"
            />
            <StatCard
                title="Total Likes"
                value="9,721"
                icon={<ThumbsUp size={24} className="text-pink-600" />}
                bgColor="bg-pink-100"
            />
            <StatCard
                title="Total Users"
                value="892"
                icon={<Users size={24} className="text-blue-600" />}
                bgColor="bg-blue-100"
            />
        </div>
    );
};

export default DashboardStats;