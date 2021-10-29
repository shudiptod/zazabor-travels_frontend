import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import catloader from '../../images/cat-loader.gif';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useFirebase();
    if (loading) {
        return (
            <button type="button" class="bg-rose-600 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    <!-- ... -->
                </svg>
                Processing
            </button>
        )
        // return 'loading';
    };
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;