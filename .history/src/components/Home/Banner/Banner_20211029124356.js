import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="container mx-auto my-2 bg-green-600">
            <img src={banner} className="w-full mx-auto" />
        </div>
    );
};

export default Banner;