import React from 'react';

const TodaySchedule = () => (
    <div className="bg-white p-6 pb-0 rounded-[1rem] shadow">
        <div className="flex justify-between items-center mb-[2rem]">
            <h3 className="text-lg font-semibold">Today's schedule</h3>
            <span className="text-sm text-blue-500 mr-8">See All &gt;</span>
        </div>
        <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="font-semibold">Meeting with suppliers from Kuta Bali</p>
            <p className="text-sm text-gray-500">14.00-15.00</p>
            <p className="text-sm text-gray-500">at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4 ">
            <p className="font-semibold">Check operation at Giga Factory 1</p>
            <p className="text-sm text-gray-500">18.00-20.00</p>
            <p className="text-sm text-gray-500">at Central Jakarta</p>
        </div>
    </div>
);

export default TodaySchedule
