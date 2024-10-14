import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardStats from '../components/DashboardStats';
import ActivitiesChart from '../components/ActivitiesChart';
import Sidebar from '../components/Sidebar';
import TopProducts from '../components/TopProducts';
import Schedule from '../components/Schedule';

const Dashboard = () => (
    <div className="flex bg-gray-100 px-5 py-10 rounded-[1rem]  min-h-screen">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
            <DashboardHeader />
            <main className="p-6 overflow-auto">
                <DashboardStats />
                <ActivitiesChart />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TopProducts />
                    <Schedule />
                </div>
            </main>
        </div>
    </div>
);

export default Dashboard;
