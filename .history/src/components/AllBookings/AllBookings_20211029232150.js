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
            all packages
        </div>
    );
};

export default AllBookings;