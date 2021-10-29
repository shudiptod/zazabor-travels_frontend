import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';

import './Booking.css';
const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useFirebase();

    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;

        // fetch('https://pacific-castle-78944.herokuapp.com/orders', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert('order has been processed!');
        //             clearTheCart();
        //             reset();
        //         }
        //     })

    };
    return (
        <div>
            <div className="w-full flex-col items-center">
                <h3 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">Confirm Your Vacation</h3>
                <p className="text-md text-center font-medium text-gray-800 font-mono my-10">Please provide your name, email, phone and starting date of your vacation.</p>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
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