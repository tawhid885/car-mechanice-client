import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);
    return (
        <div>
            <h2>this is booking: {service.name}</h2>
            <p>Price : {service.price}</p>
            <p>{service.description}</p>
            <img src={service.img} alt="this is pic" />
        </div>
    );
};

export default Booking;