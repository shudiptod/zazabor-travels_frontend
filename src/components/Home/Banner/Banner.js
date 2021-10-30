import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-full bg-gray-800 lg:flex lg:flex-row sm:flex-col justify-evenly py-10 items-center">
            <div className="w-9/12 mx-auto lg:w-4/12 lg:mx-0">
                <h2 className="text-white font-sans font-medium text-3xl">ZAZABOR TRAVELS</h2>
                <p className="mt-4 text-white font-sans font-medium text-lg text-justify"
                >Travel like a NOMAD with zazabors. We provide premium quality vacations with full package coverage.</p>
            </div>
            <div className="w-8/12 mx-auto mt-4 lg:w-6/12 lg:mx-0 lg:mt-0 ">
                <img src={banner} className="w-full rounded-md shadow-2xl filter drop-shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;