import React from 'react';
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
            this is packages
            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 my-3 mx-auto">
                {

                    packages.map(item => <SinglePackage key={item.key} item={item}></SinglePackage>)
                }
            </div>
        </div>
    );
};

export default Packages;