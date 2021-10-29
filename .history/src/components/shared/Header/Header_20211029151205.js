import React from 'react';
import { useHistory } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';


// importing the banner from src files 
import logo from '../../../images/altlogo.png'

const Header = () => {

    const history = useHistory();
    const { user, logOut } = useFirebase();

    const handleNavLink = (url) => {
        history.push(url);
    }
    return (
        <div className="w-full bg-gray-800 py-5 flex justify-around items-center text-white text-sm">
            <img src={logo} className="w-16 h-10 bg-white rounded-lg cursor-pointer" onClick={() => handleNavLink("/")} />

            <div className="w-6/12 flex justify-evenly">
                <button className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    onClick={() => handleNavLink("/home")}>Home</button>
                <button className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    onClick={() => handleNavLink("/my-packages")}>My Packages</button>
                <button className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    onClick={() => handleNavLink("/all-packages")}>All Packages</button>
            </div>
            {
                user?.email ?
                    <div className="flex w-3/12 justify-around items-center">
                        <h4 className="font-semibold text-sm">
                            {user.displayName}</h4>
                        <img src={user.photoURL} className="rounded-full h-10 w-10 flex items-center justify-center border-4 border-double border-white" />
                        <button onClick={() => logOut()}
                            className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                        >Logout</button>

                    </div> :

                    <button onClick={() => handleNavLink('/login')}
                        className="font-semibold px-3 py-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md"
                    >Login</button>

            }

        </div>
    );
};

export default Header;