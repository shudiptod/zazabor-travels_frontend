import React, { useEffect, useState } from 'react';

import SingleBooking from '../shared/SingleBooking/SingleBooking';

import loader from '../../images/loader.gif';
import { useHistory, useParams } from 'react-router';
const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { email } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://pacific-castle-78944.herokuapp.com/bookings?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.length < 1) {
                    alert('you do not have any bookings');
                    history.push('/home');
                }
                setBookings(data);
            })
    }, []);
    return (
        <div>
            <h2 className="text-center text-blue-900 font-semibold font-mono text-2xl my-5">Your Booking List</h2>
            {
                bookings.length === 0 ?
                    <img src={loader} className="w-10/12 mx-auto" />
                    :
                    <div className="w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
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

export default MyBookings;