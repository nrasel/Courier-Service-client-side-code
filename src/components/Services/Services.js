import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            });
    }, [])
    return (
        <div id="services">
            <div className="container mt-5 pt-5">
                <div className="section-title mt-3">
                    <h1 className="position-relative">Our services</h1>
                </div>

                <div className="row">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;