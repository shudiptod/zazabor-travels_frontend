import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-8/12 my-2 rounded">
            <img src={banner} className="w-full rounded-md shadow-2xl" />
        </div>
    );
};

export default Banner;