import React, { useEffect, useState } from 'react';

const AllBookings = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://pacific-castle-78944.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [])
    return (
        <div>
            <h2>All Bookings from Customers</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1">

            </div>
            {
                bookings.map()
            }
        </div>
    );
};

export default AllBookings;