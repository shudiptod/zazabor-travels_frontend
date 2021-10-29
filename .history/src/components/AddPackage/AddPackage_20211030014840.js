import React from 'react';
import './AddPackage.css';

import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch('https://pacific-castle-78944.herokuapp.com/addPackage', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Package has been added!');
                    reset();
                }
            })

    };

    return (
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center">
            <h3 className="text-3xl text-center font-semibold
             text-green-800 font-mono my-4">
                Add A New Package</h3>

            <form className="package-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name"  {...register("name", { required: true })} />
                <input placeholder="image url" {...register("img", { required: true })} />
                <input type="number" placeholder="duration" defaultValue="" {...register("duration", { required: true })} />
                <input type="number" placeholder="no of people" defaultValue="" {...register("people", { required: true })} />
                <input type="number" placeholder="price" defaultValue="" {...register("price", { required: true })} />
                <textarea placeholder="  Description ..." defaultValue="" {...register("description", { required: true })} />
                <input className="bg-green-900 text-white cursor-pointer font-semibold" type="submit" value="Add Package" />
            </form>
        </div>
    );
};

export default AddPackage;