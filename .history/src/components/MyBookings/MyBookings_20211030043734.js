import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import SingleBooking from '../shared/SingleBooking/SingleBooking';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useFirebase();
    const { email } = user;
    useEffect(() => {
        fetch(`https://pacific-castle-78944.herokuapp.com/bookings?email=${user?.email ? user.email : email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data);
            })
    }, []);
    return (
        <div>
            <h2 className="text-center text-blue-900 font-semibold font-mono text-2xl my-5">Your Booking List</h2>
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