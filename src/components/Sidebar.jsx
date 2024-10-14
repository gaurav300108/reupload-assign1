import React from 'react';
import { FiHome, FiUsers, FiCalendar, FiSettings, FiDollarSign, FiHelpCircle } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div className="h-90 w-25 bg-black  text-white w-64 pb-22 pt-16  rounded-[1rem] flex flex-col justify-between items-center">
            <div>
                <h1 className="text-4xl font-bold mb-8">WaveTech</h1>
                <ul className="space-y-9">
                    <li className="flex items-center">
                        <FiHome className="mr-4" /> Dashboard
                    </li>
                    <li className="flex items-center">
                        <FiDollarSign className="mr-4" /> Transactions
                    </li>
                    <li className="flex items-center">
                        <FiCalendar className="mr-4" /> Schedules
                    </li>
                    <li className="flex items-center">
                        <FiUsers className="mr-4" /> Users
                    </li>
                    <li className="flex items-center">
                        <FiSettings className="mr-4" /> Settings
                    </li>
                </ul>
            </div>
            <div>
                <ul className="space-y-3 mb-10">
                    <li className="flex items-start ml-[-5rem]">
                        Help
                    </li>
                    <li className="flex items-center  ml-[-5rem]">Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
