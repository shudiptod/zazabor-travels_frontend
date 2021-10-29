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
        <div className="w-full bg-blue-900 py-5 flex justify-around items-center text-white">
            <img src={logo} className="w-16 h-10 bg-white rounded-lg cursor-pointer" onClick={() => handleNavLink("/home")} />

            <div className="w-6/12 flex justify-evenly">
                <button className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    onClick={() => handleNavLink("/home")}>Home</button>
                <button className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    onClick={() => handleNavLink("/packages")}>Packages</button>
                <button className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    onClick={() => handleNavLink("/my-packages")}>My Packages</button>
                <button className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    onClick={() => handleNavLink("/all-packages")}>All Packages</button>
            </div>

            <button onClick={() => handleNavLink('/login')}
                className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
            >login</button>
        </div>
    );
};

export default Header;