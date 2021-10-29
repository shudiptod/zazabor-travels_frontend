import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-10/12">
            <img src={banner} className="w-full" />
        </div>
    );
};

export default Banner;