import React from 'react';

const Trending = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">Trending Spots</h2>
            <div className="w-full grid grid-cols-4">
                <img src="https://images.unsplash.com/photo-1606199553171-aeb72afd49c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80" />
                <img src="https://images.unsplash.com/photo-1630733341742-ece050549b2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div>
    );
};

export default Trending;