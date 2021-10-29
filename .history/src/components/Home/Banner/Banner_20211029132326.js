import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-full bg-gray-800 flex justify-evenly py-5 pb-10 items-center">
            <div className="w-4/12 px-5">
                <h2 className="text-white font-sans font-medium text-3xl">ZAZABOR TRAVELS</h2>
                <p className="mt-4 text-white font-sans font-medium text-lg text-justify"
                >Travel like a NOMAD with zazabors. We provide premium quality vacations with full package coverage.</p>
            </div>
            <div className="w-6/12">
                <img src={banner} className="w-full rounded-md shadow-2xl filter drop-shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;