import React from 'react';
import SinglePackage from '../../shared/SinglePackage/SinglePackage';

const Packages = () => {

    const [pacakges, setPackages] = useState([]);
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

                    package.map(package => <SinglePackage key={package.key} package={package}></SinglePackage>)
                }
            </div>
        </div>
    );
};

export default Packages;