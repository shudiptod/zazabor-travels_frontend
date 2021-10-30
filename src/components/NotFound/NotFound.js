import React from 'react';
import { useHistory } from 'react-router';

import notfound from '../../images/notfound.png';
const NotFound = () => {
    const history = useHistory();

    return (
        <div className="w-10/12 lg:w-4/12 mx-auto mt-5 flex flex-col justify-between items-center">
            <img src={notfound} className="w-full lg:w-6/12" />
            <button
                className="px-3 py-1 bg-yellow-600 text-white font-semibold mt-5 -mb-10 rounded-lg hover:bg-red-600"
                onClick={() => history.goBack()}
            >Go Back</button>
        </div>
    );
};

export default NotFound;