import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';
import { CgProfile } from "react-icons/cg";

const DashboardHeader = () => {
    return (

        <header className="flex justify-between items-center p-4 bg-gray100">
            <h2 className="text-3xl ml-3 tracking-custom-wide font-extrabold">Dashboard</h2>
            <div className="flex items-center rounded-[1rem] ">
                <div className="relative mr-4 flex justify-end  rounded-[1rem] bg-white">
                    <input type="text" placeholder="Search..." className="w-40 text-[.70 rem] pl-3 bg-white rounded-[1rem]  pr-2 py-1 border rounded" />
                    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={12} />
                </div>
                <Bell className="mx-3" />

                <span className='mx-3 rounded-full'> <CgProfile style={{ width: '2rem', height: '2rem' }} /></span>
            </div>
        </header>
    );

};

export default DashboardHeader;
