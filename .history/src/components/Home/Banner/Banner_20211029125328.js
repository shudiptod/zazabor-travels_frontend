import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-full bg-blue-200 flex">
            <div className="w-6/12">
                <h2>ZAZABOR TRAVELS</h2>
                <h2>Travel like a NOMAD with zazabors. We provide premium quality vacations with full package coverage.</h2>
            </div>
            <div className="w-6/12">
                <img src={banner} className="w-full rounded-md shadow-2xl filter drop-shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;