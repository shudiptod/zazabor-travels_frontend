import React from 'react';
import './Review.css';
const Review = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">
                Review From our Nomads</h2>
            <div className="w-10/12 mx-auto lg:grid lg:grid-cols-3 ">
                <blockquote>
                    <p>Pretty sweet tool that makes it so much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.</p>
                </blockquote>
                <blockquote>
                    <p>I’ve been dreaming of a tool like this for years and finally it’s here! So many travel planning apps promise to make life easier but end up being fiddly, glitchy and time consuming. Wanderlog is my new go-to tool after decades of professional travel.</p>
                </blockquote>
                <blockquote>
                    <p>I'm a rather extensive planner when I take trips so this was great. I liked how it auto-filled all of my travel information from my email account. Also, the level of detail that I can put into organizing a trip is greatly appreciated and goes above and beyond any of the other apps I've tried.</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Review;