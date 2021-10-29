import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-full max-auto my-2 bg-green-600">
            <img src={banner} className="w-10/12 mx-auto" />
        </div>
    );
};

export default Banner;