import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import catloader from '../../images/cat-loader.gif';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useFirebase();
    if (loading) {
        // return (
        //     <img src={catloader} className="w-8/12 h-full mx-auto" alt="Loading" />
        // )
        return 'loading';
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