import React from 'react';

const MyBookings = () => {
    return (
        <div>
            <h2 className="text-center text-blue-900 font-semibold font-mono text-2xl my-5">Your Bookings List</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
                {
                    bookings.map(booking =>
                        <SingleBooking key={booking._id} booking={booking}
                        ></SingleBooking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;