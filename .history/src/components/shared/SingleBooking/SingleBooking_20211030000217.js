import React from 'react';

const SingleBooking = (props) => {

    const { _id, userMail, userData, destination } = props.booking;
    const url = window.location.pathname;

    console.log("haha");
    return (
        <div className="flex mt-4">
            <div className="w-6/12 flex flex-col justify-center items-center">
                <h2 className="text-center font-semibold font-mono text-xl mt-2">Customer Details</h2>
                <h3 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">{userData.name}</h3>
                <h3 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">{userData.email}</h3>
                <h3 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">{userData.phone}</h3>
                <h3 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">{userData.start_date}</h3>

            </div>
            <div className="w-6/12 border-l-4 border-gray-800 flex flex-col pt-10">
                <h2 className="text-center font-semibold font-mono text-xl mt-2">Package Details</h2>
                <h2 className="text-center font-semibold font-mono text-xl mt-2">{destination.name}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Person: {destination.people}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Duration: {destination.duration} Day(s)</h2>
                <h3 className="text-center font-semibold font-mono text-xl mt-2">Price: {destination.price} USD</h3>

            </div>

        </div>
    );
};


export default SingleBooking;