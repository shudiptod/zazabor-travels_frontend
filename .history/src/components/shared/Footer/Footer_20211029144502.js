import React from 'react';
import { FaFacebook, FaInstagram, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
    return (
        <div className="mb-0 w-full bg-gray-900 text-white font-sans text-center 
        p-3 flex flex-col justify-center footer-div sm:mb-0 footer-div">
            <div className="mx-auto grid lg:grid-cols-3 sm:grid-cols-1 w-10/12 pt-5 pb-4 items-center justify-items-center text-center">
                <div className="mx-auto w-full h-full">
                    <h2 className="text-xl font-medium p-2">Sunrise Motto</h2>
                    <p className="text-sm font-medium p-1 mx-auto w-12/12">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
                </div>
                <div className="mx-auto w-full flex flex-col justify-evenly items-center">
                    <div className="flex w-6/12 justify-center items-center">
                        <h2 className="text-xl font-medium p-2">Contact With Us</h2>
                    </div>
                    <div className="flex w-6/12 justify-center  items-center">
                        <i><FaMailBulk></FaMailBulk></i>
                        <h2 className="text-sm font-medium p-1">sunrise@yahoo.com</h2>
                    </div>
                    <div className="flex w-5/12 justify-evenly  items-center">
                        <i><FaPhoneAlt></FaPhoneAlt></i>
                        <h2 className="text-sm font-medium p-1">019XXX4449X</h2>
                    </div>

                    <div className="my-4 w-6/12 mx-auto flex justify-evenly items-center">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaWhatsapp></FaWhatsapp>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
                <div className="mx-auto w-full flex flex-col items-center">
                    <i className="mb-4"><FaMapMarkerAlt></FaMapMarkerAlt></i>
                    <h2 className="text-xl font-medium p-2">Sunrise Medical Hospital</h2>
                    <h2 className="text-sm font-medium p-1">House-1, Road-5,Section-12</h2>
                    <h2 className="text-sm font-medium p-1">Banani, Dhaka-1514, Bangladesh</h2>
                </div>
            </div>
            <p className="text-sm font-semibold italic p-2">@all rights reserved to shudipto 2021</p>

        </div>
    );
};

export default Footer;