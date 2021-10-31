import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-img">
            <section id="top-banner" className="d-flex align-items-center">
                <div className="container">
                    <div className="banner-info text-start">
                        <h1 className="banner-heading">Reliable Delivery for Your Business.</h1>
                        <p className="mb-3">Courier guarantees reliable delivery of your product to your customer, at the right location in the right time through its efficient distribution management.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;