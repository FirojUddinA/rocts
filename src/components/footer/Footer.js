import React from 'react';
const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="heading">
                            <h2 className="title1">Contact Us</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">

                                <div className="footer-widgets">
                                    <div className="widget">
                                        <h4>More About Company</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            quisquam est, qui dolorem.

                                        </p>
                                        <p className="text-right">-John Patricks, CEO</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="footer-widgets">
                                    <div className="widget">
                                        <h4>More About Company</h4>
                                        <div className="useful-link">
                                            <a href="#"><i className="fab fa-facebook-f"/>@example</a>
                                            <a href="#"><i className="fab fa-twitter"/>@example</a>
                                            <a href="#"><i className="fab fa-linkedin-in"/>@example</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="footer-widgets">
                                    <div className="widget">
                                        <h4>Contact info</h4>
                                        <div className="contact-details">
                                            <div className="contact-info">
                                                <div className="icon"><i className="fas fa-map-signs"/></div>
                                                <p className="details">
                                                    Company name, Inc.
                                                    795 Folsom Ave, Suite 600
                                                    San Francisco, CA 94107
                                                </p>
                                            </div>
                                            <div className="contact-info">
                                                <div className="icon"><i className="fas fa-mobile-alt"/></div>
                                                <p className="details">
                                                    firoj.uddin2580@gmail.com
                                                </p>
                                            </div>
                                            <div className="contact-info">
                                                <div className="icon"><i className="fas fa-envelope"/></div>
                                                <p className="details">contact@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="bottom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="footer-copyright">
                                    <p>© 2015 Company Name. All Rights Reserved</p>

                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-none d-md-block">

                                <p className="copyright"><a href="#">Company Information</a> |<a href="#">Privacy Policy</a> | <a
                                    href="#">Term & Conditions</a></p>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    );
};

export default Footer;
