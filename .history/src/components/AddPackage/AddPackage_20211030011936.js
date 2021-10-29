import React from 'react';
import './AddPackage.css';

import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.name === "") {
            data.name = user.displayName;
        }
        if (data.email === "") {
            data.email = user.email;
        }
        const bookingDetail = {
            userMail: user.email,
            userData: data,
            destination: singlePackage,
            pending: true
        }

        fetch('http://localhost:5000/bookings', {
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
        <div>
            <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email")} />
                {errors.email && <span className="error">This field is required</span>}
                <input type="date" placeholder="Start Date" defaultValue="" {...register("start_date")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;