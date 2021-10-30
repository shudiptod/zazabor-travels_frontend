import React from 'react';

const SingleBooking = (props) => {

    const { _id, userMail, userData, destination, pending } = props.booking;
    const url = window.location.pathname;


    const handleDelete = id => {
        const check = window.confirm('Are you sure?');
        if (check) {
            fetch(`https://pacific-castle-78944.herokuapp.com/bookings?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Booking Deleted! Reloading to See change.');
                        window.location.reload();
                    }
                })
        }
        else {

        }

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
                    window.location.reload();
                }
            })
    }
    console.log("haha");
    return (
        <div className="flex flex-col lg:flex-row mt-4 ">
            <div className="w-10/12 mx-auto lg:w-6/12 flex flex-col justify-center">
                <h2 className="text-left font-semibold font-mono text-md lg:text-xl my-2 underline">Customer Details</h2>
                <h3 className="text-md lg:text-xl text-left font-medium text-gray-800 font-mono my-1">Name:
                    <span className="font-semibold">{userData.name}</span></h3>
                <h3 className="text-md lg:text-xl text-left font-medium text-gray-800 font-mono my-1">Email:
                    <span className="font-semibold">{userData.email}</span> </h3>
                <h3 className="text-md lg:text-xl text-left font-medium text-gray-800 font-mono my-1">Phone:
                    <span className="font-semibold">{userData.phone}</span> </h3>
                <h3 className="text-md lg:text-xl text-left font-medium text-gray-800 font-mono my-1">Date:
                    <span className="font-semibold">{userData.start_date}</span></h3>

            </div>
            <div className="w-10/12 mx-auto lg:w-6/12 lg:border-l-4 border-gray-800 flex flex-col">
                <h2 className="text-left lg:text-center font-semibold font-mono text-md lg:text-xl my-4 underline">Package Details</h2>
                <h2 className="text-left lg:text-center font-semibold font-mono text-md lg:text-xl mt-2">{destination.name}</h2>
                <h2 className="text-left lg:text-center font-semibold font-mono text-sm lg:text-lg mt-2">Person: {destination.people}</h2>
                <h2 className="text-left lg:text-center font-semibold font-mono text-sm lg:text-lg mt-2">Duration: {destination.duration} Day(s)</h2>
                <h3 className="text-left lg:text-center font-semibold font-mono text-md lg:text-xl mt-2">Price: {destination.price} USD</h3>

                <div className="flex w-full lg:w-8/12 mx-auto justify-around mt-3">
                    <button onClick={() => handleDelete(_id)} className="px-4 py-1 bg-yellow-600 hover:bg-yellow-800 text-white font-semibold rounded-md">{
                        url === "/allBookings" ? "Delete Booking" : "Cancel Booking"
                    }</button>
                    {
                        url === "/allBookings" ?
                            <>
                                {
                                    pending ? <button onClick={() => handleUpdate(_id)}
                                        className="px-5 lg:px-4 lg:py-1 bg-green-700 text-white text-sm lg:text-lg
                                        hover:bg-green-900 font-semibold rounded-md">
                                        Approve Booking</button> : <button onClick={() => handleUpdate(_id)}
                                            className="text-sm lg:text-lg px-5 lg:px-4 lg:py-1 bg-white text-green-900 font-semibold rounded-md border-2 border-green-900">
                                        Approved!</button>
                                }</> : <></>
                    }


                </div>
            </div>

        </div >
    );
};


export default SingleBooking;