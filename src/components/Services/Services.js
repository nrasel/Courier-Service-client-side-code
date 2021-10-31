import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`https://warm-lake-35445.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            });
    }, [])



    return (
        services.length === 0 ? <div className="spinner-border mt-4" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
            :
            <div id="services">
                <div className="container mt-4 pt-4">
                    <div className="section-title mt-3">
                        <h1 className="position-relative">Our services</h1>
                    </div>

                    <div className="row">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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