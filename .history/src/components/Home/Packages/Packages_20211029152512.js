import React from 'react';

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
        </div>
    );
};

export default Packages;