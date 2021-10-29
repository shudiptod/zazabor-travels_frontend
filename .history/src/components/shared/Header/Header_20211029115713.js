import React from 'react';


// importing the banner from src files 
import logo from '../../../images/logo.jpg'

const Header = () => {
    return (
        <div className="container w-full bg-blue-900 flex justify-around">
            <img src={logo} className="w-full h-32" />
        </div>
    );
};

export default Header;