import React, { useEffect, useState } from 'react';

const AllBookings = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [])
    return (
        <div>
            <h2>All Bookings from Customers</h2>
        </div>
    );
};

export default AllBookings;