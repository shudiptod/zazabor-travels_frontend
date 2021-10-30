import React, { useEffect, useState } from 'react';
import SingleBooking from '../shared/SingleBooking/SingleBooking';

import loader from '../../images/loader.gif';
const AllBookings = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://pacific-castle-78944.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, []);
    return (
        <div>
            <h2 className="text-center text-blue-900 font-semibold font-mono text-xl lg:text-2xl my-5">All Bookings from Customers</h2>
            {
                bookings.length === 0 ?
                    <img src={loader} className="w-10/12 mx-auto" />
                    :
                    <div className="w-full lg:w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
                        {
                            bookings.map(booking =>
                                <SingleBooking key={booking._id} booking={booking}
                                ></SingleBooking>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllBookings;