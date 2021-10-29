import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import Loader from '../shared/Loader/Loader';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useFirebase();
    if (loading) return <Loader></Loader>;
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