import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="container">
            <img src={banner} className="w-10/12" />
        </div>
    );
};

export default Banner;