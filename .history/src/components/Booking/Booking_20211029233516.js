import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

import './Booking.css';
const Booking = () => {
    const { register, handleSubmit, defaultValues, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: user.displayName,
            email: user.email,
        }
    });
    const { user } = useFirebase();
    const { displayName, email } = user;
    const { packageId } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    useEffect(() => {
        fetch(`https://pacific-castle-78944.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => {
                setSinglePackage(data);
            })
    }
        , []);



    const onSubmit = data => {
        const bookingDetail = {
            userMail: user.email,
            userData: data,
            destination: singlePackage
        }

        fetch('https://pacific-castle-78944.herokuapp.com/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetail)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking has been Processed!');
                    reset();
                }
            })

    };
    return (
        <div className="flex mt-4">
            <div className="w-6/12 border-r-4 border-gray-800 flex flex-col pt-10">
                <img src={singlePackage.img} className="w-5/12 mx-auto rounded-md" />
                <h2 className="text-center font-semibold font-mono text-xl mt-2">{singlePackage.name}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Person: {singlePackage.people}</h2>
                <h2 className="text-center font-semibold font-mono text-lg mt-2">Duration: {singlePackage.duration} Day(s)</h2>
                <h3 className="text-center font-semibold font-mono text-xl mt-2">Price: {singlePackage.price} USD</h3>
                <p className="text-justify font-medium font-mono text-md mt-2 w-8/12 mx-auto">{singlePackage.description}</p>

            </div>
            <div className="w-6/12 flex flex-col justify-center items-center">
                <h3 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">Confirm Your Vacation</h3>
                <p className="text-md text-center font-medium text-gray-800 font-mono my-5">Please provide your name, email, phone and starting date of your vacation.</p>
                <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>

                    <input  {...register("name")} />

                    <input {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input type="date" placeholder="Start Date" defaultValue="" {...register("start_date")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>


            </div>
        </div>
    );
};

export default Booking;