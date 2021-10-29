import React from 'react';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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