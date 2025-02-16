import React, { useState, useEffect } from 'react'

const Counter = () => {

    const calculateTimeLeft = () => {
        const deadline = new Date("2026-01-23T00:00:00").getTime(); // Set your deadline here
        const now = new Date().getTime();
        const difference = deadline - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (

        // <div className="flex justify-center space-x-4 my-6 text-lg font-semibold">
        //     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        //         <span className="block text-2xl">{timeLeft.days}</span> Days
        //     </div>
        //     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        //         <span className="block text-2xl">{timeLeft.hours}</span> Hours
        //     </div>
        //     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        //         <span className="block text-2xl">{timeLeft.minutes}</span> Minutes
        //     </div>
        //     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        //         <span className="block text-2xl">{timeLeft.seconds}</span> Seconds
        //     </div>
        // </div>
        <div className="flex justify-center space-x-4 my-6 text- font-semibold">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div key={index} className="bg-gradient-to-t from-[#addfad] to-[#302618] text-white p-4 rounded-lg shadow-lg text-center">
            <span className="block text-4xl font-bold">{value}</span>
            <span className="uppercase text-lg font-medium">{unit}</span>
          </div>
        ))}
      </div>

    )
}

export default Counter