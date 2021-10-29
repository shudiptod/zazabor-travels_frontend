import React from 'react';
import { useHistory } from 'react-router';


// importing the banner from src files 
import logo from '../../../images/logo.jpg'

const Header = () => {

    const history = useHistory();

    const handleNavLink = (url) => {
        history.push(url);
    }
    return (
        <div className="w-full bg-blue-900 py-2 flex justify-around items-center">
            <img src={logo} className="w-4 h-5" />
            <button className="px-3 py-2 bg-transparent hover:bg-gray-200" onClick={() => handleNavLink("/home")}>Home</button>
            <button onClick={() => handleNavLink("/packages")}>Packages</button>
            <button onClick={() => handleNavLink("/my-packages")}>My Packages</button>
            <button onClick={() => handleNavLink("/all-packages")}>All Packages</button>

            <button>login</button>
        </div>
    );
};

export default Header;