import React from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css'

const Service = ({ service }) => {
    const { title, description, img } = service;
    return (
        <div className="service pb-3">
            <div className="h-100">
                <div className="service-box h-100">
                    <div className="">
                        <img className="service-img img-fluid" src={img} alt="" />
                    </div>
                    <h4 className="my-4">{title}</h4>
                    <p>{description}</p>
                    <NavLink to="/orderPlace" className="appoinment-btn text-white rounded-pill border-0">Book Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;