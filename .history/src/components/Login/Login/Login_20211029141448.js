import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
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
        <div>
            <button
                className="px-3 py-1 bg-green-900"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    );
};

export default Login;