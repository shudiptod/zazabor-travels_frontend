import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div className="w-full mx-auto flex flex-col items-center">

            <Packages></Packages>
        </div>
    );
};

export default Home;