import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {

    const { key, name, description, img, price, people, duration } = props.package;
    return (
        <div className="container mx-auto lg:w-5/6 md:w-6/6 sm:w-5/6 h-full bg-gray-50 filter drop-shadow shadow-2xl border rounded-xl">
            <img src={img} className="mx-auto mt-5 lg:w-5/6 md:w-full sm:w-10/12 h-40 border rounded-xl" alt={name + " photo"} />
            <div className="container mx-auto w-full px-1 py-2 flex flex-col items-center">
                <h3 className="text-lg text-center text-gray-900 font-mono mb-5">{name}</h3>
                <p className="text-sm font-serif font-semibold text-gray-800 mb-2 w-10/12">{description.substring(0, 100) + '...'}</p>
                <Link to={'/package/' + key}>
                    <button className=" px-4 py-2 leading-normal text-sm text-white font-semibold bg-blue-600  rounded-3xl
                border hover:border-indigo-800 hover:bg-gray-300 hover:text-gray-900 mt-7 mb-5">Read More</button>
                </Link>
            </div>
        </div >
    );
};

export default SinglePackage;