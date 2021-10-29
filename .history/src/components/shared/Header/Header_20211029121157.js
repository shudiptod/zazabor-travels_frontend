import React from 'react';
import { useHistory } from 'react-router';


// importing the banner from src files 
import logo from '../../../images/altlogo.png'

const Header = () => {

    const history = useHistory();

    const handleNavLink = (url) => {
        history.push(url);
    }
    return (
        <div className="w-full bg-gray-800 py-2 flex justify-around items-center text-white">
            <img src={logo} className="w-20 h-10 bg-white" />
            <button className="px-3 py-2 bg-transparent hover:bg-gray-200" onClick={() => handleNavLink("/home")}>Home</button>
            <button onClick={() => handleNavLink("/packages")}>Packages</button>
            <button onClick={() => handleNavLink("/my-packages")}>My Packages</button>
            <button onClick={() => handleNavLink("/all-packages")}>All Packages</button>

            <button>login</button>
        </div>
    );
};

export default Header;