import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Review from '../Review/Review';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div className="w-full mx-auto flex flex-col items-center">
            <Banner></Banner>
            <Packages></Packages>
            <Trending></Trending>
            <Review></Review>
        </div>
    );
};

export default Home;