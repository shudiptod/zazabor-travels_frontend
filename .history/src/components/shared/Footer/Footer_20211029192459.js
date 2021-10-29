import React from 'react';
import { FaFacebook, FaInstagram, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
    return (
        <div className="mb-0 bg-gray-900 text-white font-sans text-center 
        p-3 flex flex-col justify-center sm:mb-0 footer-div">
            <div className="mx-auto grid lg:grid-cols-2 sm:grid-cols-1 w-10/12 pt-5 pb-4 items-center justify-items-center text-center">
                <div className="mx-auto w-full h-full">
                    <h2 className="text-xl font-medium p-2">Travel Like Nomads</h2>
                    <hr />
                    <p className="text-sm font-medium p-1 mx-auto w-12/12">
                        We believe that travel has healing properties. It acts as a much-needed break from day-to-day stress. It clears your mind, rejuvenates, and relaxes.
                    </p>
                    <p className="text-sm font-semibold italic p-2">@all rights reserved to shudipto 2021</p>
                </div>
                <div className="mx-auto w-full flex flex-col justify-evenly items-center">
                    <div className="my-4 w-6/12 mx-auto flex justify-evenly items-center">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaWhatsapp></FaWhatsapp>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="mx-auto w-full flex flex-col items-center">
                        <h2 className="text-xl font-medium p-2">ZAZABOR Travels Limited</h2>
                        <h2 className="text-sm font-medium p-1">House-1, Road-5,Section-12</h2>
                        <h2 className="text-sm font-medium p-1">Banani, Dhaka-1514, Bangladesh</h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;