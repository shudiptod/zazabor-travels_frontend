import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-8/12 bg-green-900 flex">
            <div className="w-6/12">
                <img src={banner} className="w-full rounded-md shadow-2xl filter drop-shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;