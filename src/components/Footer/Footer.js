import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <section className="newslatter py-5 mt-5">
                <div className="container">
                    <div className="row g-3 text-center">
                        <div className="col-lg-3 col-sm-12 text-sm-center text-md-start text-lg-start col-md-6">
                            <div className="medilab-info ">
                                <h3>Delivars</h3>
                                <p >
                                    <span> A108 Green Road</span> <br />
                                    <span>Dhaka, NY 535022</span> <br />
                                    <span>Bangladesh</span><br />
                                    <span><strong>Phone: </strong>+1 5589 55488 65</span><br />
                                    <span><strong>Email:</strong> nrasel452@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 text-sm-center text-md-start text-lg-start col-md-6">
                            <div className="useful-link d-flex flex-column">
                                <h4>Useful Links</h4>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Home</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Services</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> My Orders</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> About Us</Link>

                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 text-sm-center text-md-start text-lg-start col-md-6">
                            <div className="useful-link  d-flex flex-column">
                                <h4>Our Services</h4>
                                <Link to="/home" ><i className="fas fa-chevron-right"></i> Standard Delivery</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Nationwide Delivery</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Fulfillment solution</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Cash on Delivery</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 text-sm-center text-md-start text-lg-start col-sm-12 col-md-6">
                            <div className="specialist-info">
                                <h4>Join Our Newsletters</h4>
                                <p>Courier???s first book and the ultimate guide to setting off on your own and starting something new.</p>
                                <form action="" className="specialist-form">
                                    <input className="specialist-email" type="email" name="" id="" />
                                    <input className="subscribe-btn" type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer bottom */}
            <footer className="footer py-4">
                <div className="container">
                    <div className="row gy-4">
                        <div className=" col-lg-6 col-md-8 credit-center">
                            <div className="d-flex flex-column">
                                <div className="copyright ">
                                    ?? Copyright <strong>Delivars</strong>. All Rights Reserved
                                </div>
                                <div className="credits mt-2">
                                    Designed by <Link to="/home">Naimur Rahman</Link>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-4 ">
                            <div className="footer-social-icon ">
                                <Link to="/home"><i className="fab fa-twitter icon-align"></i>
                                    <Link to="/home"><i className="fab fa-facebook-f icon-align"></i></Link>
                                    <Link to="/home" ><i className="fab fa-instagram icon-align"></i></Link>
                                    <Link to="/home" ><i className="fab fa-skype icon-align"></i></Link>
                                    <Link to="/home" ><i className="fab fa-linkedin icon-align"></i></Link></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;