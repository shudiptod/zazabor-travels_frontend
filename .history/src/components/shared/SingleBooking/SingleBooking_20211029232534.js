import React from 'react';

const SingleBooking = (props) => {

    const { _id, name, img, price, description, duration, people } = props.booking;

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};


export default SingleBooking;