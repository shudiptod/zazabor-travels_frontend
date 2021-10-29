import React from 'react';

// importing banner image from local file 
import banner from '../../../images/bandarban-banner.jpeg';
const Banner = () => {
    return (
        <div className="w-8/12 mx-auto my-2 ">
            <img src={banner} className="w-full mx-auto" />
        </div>
    );
};

export default Banner;