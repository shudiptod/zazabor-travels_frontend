import React from 'react';
import './AddPackage.css';

import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        // if (data.name === "") {
        //     data.name = user.displayName;
        // }
        // if (data.email === "") {
        //     data.email = user.email;
        // }
        // const bookingDetail = {
        //     userMail: user.email,
        //     userData: data,
        //     destination: singlePackage,
        //     pending: true
        // }

        // fetch('https://pacific-castle-78944.herokuapp.com/bookings', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookingDetail)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert('Booking has been Processed!');
        //             reset();
        //         }
        //     })

    };

    return (
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center">
            <h3 className="text-3xl text-center font-semibold
             text-green-800 font-mono my-4">
                Add A New Package</h3>

            <form className="package-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name"  {...register("name")} />
                <input placeholder="image url" {...register("img")} />
                <input type="number" placeholder="duration" defaultValue="" {...register("duration")} />
                <input type="number" placeholder="no of people" defaultValue="" {...register("people")} />
                <input type="number" placeholder="price" defaultValue="" {...register("price")} />
                <textarea placeholder="  Description ..." defaultValue="" {...register("description")} />
                <input className="bg-green-900 text-white cursor-pointer font-semibold" type="submit" value="Add Package" />
            </form>
        </div>
    );
};

export default AddPackage;