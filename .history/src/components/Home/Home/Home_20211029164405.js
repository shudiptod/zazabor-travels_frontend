import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div className="w-8/12 mx-auto flex flex-col items-center">
            <Banner></Banner>
            <Packages></Packages>
        </div>
    );
};

export default Home;