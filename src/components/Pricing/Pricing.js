import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css'

const Pricing = () => {
    const [pricing, setPricing] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/pricing')
            .then(res => res.json())
            .then(data => setPricing(data))
    }, [])

    return (
        <div className="container">
            <div className="section-title mt-3 py-5">
                <h1 className="position-relative">Check Our Pricing</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    pricing.map(price => <div key={price._id}>
                        <div className="card border-0 mb-3">
                            <div className="card5 text-center">
                                <div className="cardTopBody">
                                    <h5 className="free1">{price.title}</h5>
                                    <p> <sup>$</sup> <span className="zero">{price.price}</span> <span className="mo"> / month</span></p>
                                </div>
                                <div className="card5Img mb-3">
                                    <img src={price.img} className="img-fluid" alt="" />
                                </div>
                                <div className="cardBottomInfo">
                                    <p className="card5para mb-1"> Online System</p>
                                    <p className="card5para mb-1"> Free apps</p>
                                    <p className="card5para mb-1">full access</p>
                                    <p className="card5para1 mb-1">live preview</p>
                                    <p className="card5para1">Support unlimited</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Pricing;