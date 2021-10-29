import React from 'react';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://pacific-castle-78944.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, []);
    return (
        <div>

        </div>
    );
};

export default MyBookings;