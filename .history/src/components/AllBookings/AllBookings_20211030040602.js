import React, { useEffect, useState } from 'react';
import SingleBooking from '../shared/SingleBooking/SingleBooking';

const AllBookings = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://pacific-castle-78944.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [bookings]);


    const handleDelete = id => {

        fetch(`https://pacific-castle-78944.herokuapp.com/bookings?id=${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const newBookings = bookings.filter(booking => booking._id !== id);
                    setBookings(newBookings);
                }
            })
    };

    const handleUpdate = id => {
        console.log(id)
        fetch(`https://pacific-castle-78944.herokuapp.com/updatePending?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const newBookings = bookings.map(booking => {
                        if (booking._id === id) {
                            booking.pending = false;
                        }
                    });
                    setBookings(newBookings);
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-blue-900 font-semibold font-mono text-2xl my-5">All Bookings from Customers</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
                {
                    bookings.map(booking =>
                        <SingleBooking key={booking._id} booking={booking}
                            handleDelete={handleDelete} handleUpdate={handleUpdate}
                        ></SingleBooking>)
                }
            </div>

        </div>
    );
};

export default AllBookings;