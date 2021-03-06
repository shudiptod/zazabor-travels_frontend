import React from 'react';

const SingleBooking = (props) => {

    const { _id, userMail, userData, destination, pending } = props.booking;
    const url = window.location.pathname;


    const handleDelete = id => {

        fetch(`https://pacific-castle-78944.herokuapp.com/bookings?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Booking Approved! Reload to See change.');
                }
            })
    }

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
                    alert('Booking Approved! Reload to See change.');
                }
            })
    }
    console.log("haha");
    return (
        <div className="flex mt-4 ">
            <div className="w-6/12 flex flex-col justify-center">
                <h2 className="text-left font-semibold font-mono text-xl my-2 underline">Customer Details</h2>
                <h3 className="text-xl text-left font-medium text-gray-800 font-mono my-1">Name:
                    <span className="font-semibold">{userData.name}</span></h3>
                <h3 className="text-xl text-left font-medium text-gray-800 font-mono my-1">Email:
                    <span className="font-semibold">{userData.email}</span> </h3>
                <h3 className="text-xl text-left font-medium text-gray-800 font-mono my-1">Phone:
                    <span className="font-semibold">{userData.phone}</span> </h3>
                <h3 className="text-xl text-left font-medium text-gray-800 font-mono my-1">Date:
                    <span className="font-semibold">{userData.start_date}</span></h3>

            </div>
            <div className="w-6/12 border-l-4 border-gray-800 flex flex-col">
                <h2 className="text-center font-semibold font-mono text-xl my-4 underline">Package Details</h2>
                <h2 className="text-center font-semibold font-mono text-xl mt-2">{destination.name}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Person: {destination.people}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Duration: {destination.duration} Day(s)</h2>
                <h3 className="text-center font-semibold font-mono text-xl mt-2">Price: {destination.price} USD</h3>

                <div className="flex w-8/12 mx-auto justify-around mt-3">
                    <button onClick={() => handleDelete(_id)} className="px-4 py-1 bg-yellow-600 text-white font-semibold rounded-md">{
                        url === "/allBookings" ? "Delete Booking" : "Cancel Booking"
                    }</button>
                    {
                        url === "/allBookings" ?
                            <>
                                {
                                    pending ? <button onClick={() => handleUpdate(_id)}
                                        className="px-4 py-1 bg-green-700 text-white font-semibold rounded-md">
                                        Approve Booking</button> : <button onClick={() => handleUpdate(_id)}
                                            className="px-4 py-1 bg-white text-green-900 font-semibold rounded-md border-2 border-green-900">
                                        Already Approved!</button>
                                }</> : <></>
                    }


                </div>
            </div>

        </div >
    );
};


export default SingleBooking;