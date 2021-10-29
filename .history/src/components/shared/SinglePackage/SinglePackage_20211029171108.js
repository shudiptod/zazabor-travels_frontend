import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {

    const { key, name, description, img, price, people, duration } = props.item;
    return (
        <div className="container mx-auto lg:w-5/6 md:w-6/6 sm:w-5/6 h-full bg-gray-50 filter drop-shadow shadow-2xl border rounded-xl">
            <img src={img} className="mx-auto mt-5 lg:w-5/6 md:w-full sm:w-10/12 h-40 border rounded-xl" alt={name + " photo"} />
            <div className="container mx-auto w-5/6 px-1 py-2 flex flex-col">
                <h3 className="text-lg text-left text-gray-900 font-mono mb-5">{name}</h3>
                <div className="w-full flex justify-between mb-5 text-blue-900">
                    <div className="w-5/12 flex items-center justify-evenly">
                        <h3 className="text-md text-left font-semibold font-sans ">{people} Person</h3>
                        <FaUserFriends></FaUserFriends>
                    </div>
                    <h3 className="text-md text-left font-semibold font-sans ">{duration} days</h3>

                </div>
                <p className="text-sm text-justify font-serif font-semibold text-gray-800 mb-2 ">{description.substring(0, 100) + '...'}</p>
                <div className="w-full flex items-center justify-around mu-4 ">
                    <h3 className="text-xl text-left text-gray-900 font-mono">{price} USD</h3>
                    <Link to={'/booking/' + key}>
                        <button className=" px-3 py-2 text-md text-white font-semibold bg-blue-800  rounded-3xl
                border hover:border-indigo-800 hover:bg-gray-300 hover:text-gray-900">Book vacation</button>
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default SinglePackage;