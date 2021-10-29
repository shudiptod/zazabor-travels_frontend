import React from 'react';

const SingleBooking = (props) => {

    const { _id, userMail, userData, destination } = props.booking;
    const url = window.location.pathname;

    console.log("haha");
    return (
        <div className="flex mt-4">
            <div className="w-6/12 flex flex-col justify-center items-center">
                <h2 className="text-center font-semibold font-mono text-xl mt-2">Customer Details</h2>
                <h3 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">Confirm Your Vacation</h3>
                <p className="text-md text-center font-medium text-gray-800 font-mono my-5">Please provide your name, email, phone and starting date of your vacation.</p>
            </div>
            <div className="w-6/12 border-l-4 border-gray-800 flex flex-col pt-10">
                <h2 className="text-center font-semibold font-mono text-xl mt-2">Package Details</h2>
                <h2 className="text-center font-semibold font-mono text-xl mt-2">{destination.name}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Person: {destination.people}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Duration: {destination.duration} Day(s)</h2>
                <h3 className="text-center font-semibold font-mono text-xl mt-2">Price: {destination.price} USD</h3>
                <p className="text-justify font-medium font-mono text-md mt-2 w-8/12 mx-auto">{destination.description}</p>

            </div>

        </div>
    );
};


export default SingleBooking;