import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDelete = (id) => {
        const process = window.confirm("Are You to Delete?");
        if (process) {
            fetch(`http://localhost:4000/services/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully!");
                        const newServices = services.filter(service => service._id !== id);
                        setServices(newServices);
                    }
                });
        }
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => {
                    return (
                        <div>
                            <h4>{service.name}</h4>
                            <p>{service.price}</p>
                            <button onClick={() => handleDelete(service._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ManageServices;