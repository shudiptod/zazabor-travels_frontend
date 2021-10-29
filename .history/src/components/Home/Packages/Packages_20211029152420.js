import React from 'react';

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setServices(data[0].services);
            });
    }, []);
    return (
        <div>
            this is packages
        </div>
    );
};

export default Packages;