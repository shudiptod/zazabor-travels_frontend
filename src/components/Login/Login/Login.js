import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {

    const { signInUsingGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result);
                history.push(redirect_url);
            })
    };

    return (
        <div className="text-center my-24">
            <h2 className="text-3xl text-yellow-600 font-mono font-semibold">Sign In Using Google</h2>
            <button
                className="px-3 py-1 bg-yellow-600 hover:bg-yellow-900 text-white font-bold rounded-md mt-8"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    );
};

export default Login;