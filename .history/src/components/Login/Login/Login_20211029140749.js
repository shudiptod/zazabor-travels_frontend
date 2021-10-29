import React from 'react';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    return (
        <div>
            login
        </div>
    );
};

export default Login;