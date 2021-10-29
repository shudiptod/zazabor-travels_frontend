import React from 'react';

const SingleBooking = (props) => {

    const { _id, userMail, userData, destination } = props.booking;
    console.log("haha");
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

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email")} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input type="date" placeholder="Start Date" defaultValue="" {...register("start_date")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                    <input type="submit" />
                </form>


            </div>
        </div>
    );
};


export default SingleBooking;