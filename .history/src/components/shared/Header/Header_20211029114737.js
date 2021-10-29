import React from 'react';


// importing the banner from src files 
import logo from '../../../images/logo.jpg'

const Header = () => {
    return (
        <div className="container w-full bg-blue-900 flex justify-around">
            <img src={logo} />
        </div>
    );
};

export default Header;