import React from 'react';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
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