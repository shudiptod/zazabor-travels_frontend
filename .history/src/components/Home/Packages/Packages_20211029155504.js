import React, { useEffect, useState } from 'react';
import SinglePackage from '../../shared/SinglePackage/SinglePackage';

const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            });
    }, []);
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">Premium Tour Plans</h2>
            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 my-3 py-5 mx-auto bg-gray-900">
                {

                    packages.map(item => <SinglePackage key={item.key} item={item}></SinglePackage>)
                }
            </div>
        </div>
    );
};

export default Packages;