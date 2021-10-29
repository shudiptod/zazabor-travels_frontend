import React from 'react';
import './Review.css';
const Review = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">
                Review From our Nomads</h2>
            <div className="w-10/12 mx-auto grid grid-cols-3 align">
                <blockquote>
                    <p>Pretty sweet tool that makes it so much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.</p>
                </blockquote>
                <blockquote>
                    <p>I’ve been dreaming of a tool like this for years and finally it’s here! So many travel planning apps promise to make life easier but end up being fiddly, glitchy and time consuming. Wanderlog is my new go-to tool after decades of professional travel.</p>
                </blockquote>
                <blockquote>
                    <p>Bandarban, is a district in South-Eastern Bangladesh, and a part of the Chittagong Division. It is on</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Review;