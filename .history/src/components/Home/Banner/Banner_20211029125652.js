import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-full bg-blue-200 flex">
            <div className="w-6/12 p-5">
                <h2 className="text-gray-900 font-sans font-medium text-3xl">ZAZABOR TRAVELS</h2>
                <p className="mt-4 text-gray-900 font-sans font-medium text-lg"
                >Travel like a NOMAD with zazabors. We provide premium quality vacations with full package coverage.</p>
            </div>
            <div className="w-6/12">
                <img src={banner} className="w-full rounded-md shadow-2xl filter drop-shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;