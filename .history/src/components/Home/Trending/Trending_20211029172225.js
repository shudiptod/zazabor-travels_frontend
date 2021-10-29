import React from 'react';

const Trending = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">Trending Spots</h2>
            <div className="w-11/12 mx-auto grid grid-cols-4">
                <img className="transform hover:scale-50" src="https://images.unsplash.com/photo-1606199553171-aeb72afd49c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80" />
                <img src="https://images.unsplash.com/photo-1630733341742-ece050549b2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <img src="https://images.unsplash.com/photo-1603191048213-16a132107a3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" />
                <img src="https://images.unsplash.com/photo-1617280325974-f9c5721a4862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
            </div>
        </div>
    );
};

export default Trending;