import React from 'react';
import banner from "../../images/banner.png";
import werehouse from "../../images/werehouse.png";
import cloud from "../../images/cloud-native-foundational-pillars.png";
import scaleable from "../../images/scale_able.png";
import community from "../../images/community.png";
import scallable from "../../images/scallable.png";
import feature from "../../images/jigsaw.png";
const Home = () => {
    return (
        <>
            <div id="banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h1>We craft <br/>brands, web apps, and user interfaces we are in+ studio</h1>
                                <p>LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING.</p>
                                <a href="#" className="btn">Reas more</a>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="banner-content">
                                <div className="">
                                    <img src={banner} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="business_details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="business_details_content">
                                <div className="business_details_child">
                                    <img src={scaleable} alt=""/>
                                    <h4>Scalable Enterprise </h4>
                                    <p>Dorm sed odic duk Etiam portal semi malesuada magna malls euismod. Nullam Id
                                        dolor id nibh ultricies .vehkula iut id elk. Morbi leo risus.</p>

                                    <a href="#">Details <i className="fas fa-angle-double-right"/></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="business_details_content">
                                <div className="business_details_child">
                                    <img src={werehouse} alt=""/>
                                    <h4>Warehouse Management</h4>
                                    <p>Dorm sed odic duk Etiam portal semi malesuada magna malls euismod. Nullam Id
                                        dolor id nibh ultricies .vehkula iut id elk. Morbi leo risus.</p>

                                    <a href="#">Details <i className="fas fa-angle-double-right"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="business_details_content">
                                <div className="business_details_child">
                                    <img src={cloud} alt=""/>
                                    <h4>Cloud Native</h4>
                                    <p>Dorm sed odic duk Etiam portal semi malesuada magna malls euismod. Nullam Id
                                        dolor id nibh ultricies .vehkula iut id elk. Morbi leo risus.</p>

                                    <a href="#">Details <i className="fas fa-angle-double-right"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="component">
                <div className="container">
                    <div className="heading">
                        <h2 className="title">OPEN COMMUNITY</h2>
                        <h3 className="subtitle">Be a bart of our comvunity</h3>
                        <p>Dorm sed odic duk Etiam portal semi malesuada magna malls euismod</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-6 offset-sm-3 offset-md-0 offset-0 order-1 order-md-0 justify-content-center justify-content-md-start">
                            <div className="component_details_content">
                                <div className="component_details_child">
                                    <img src={feature} alt="" style={{width: "100px"}}/>
                                    <h4>Request A new features</h4>
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <button type="submit" className="btn btn-block">Submit Request</button>
                                    </form>

                                    <div className="community text-left mt-3">
                                        <h3>community collaborate :</h3>
                                        <ul className="colaboration">
                                            <li className="lead">Angular</li>
                                            <li className="lead">jQurey</li>
                                            <li className="lead">React</li>
                                            <li className="lead">Ionic</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" order-0 order-md-1 col-md-6 col-sm-12 align-items-center justify-content-center">
                            <div className="component_details_content">
                                <div className="component_details_child">
                                    <img src={community} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scalability">
                <div className="container">
                    <div className="heading">
                        <h2 className="title">Scalability</h2>
                        <p>Dorm sed odic duk Etiam portal semi malesuada magna malls euismod</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12 ">
                            <div className="scalability_content">
                                <div className="scalability_child">
                                    <img src={scallable} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 ">
                            <div className="scalability_content">
                                <div className="scalability_child">
                                    <h3>Scalability</h3>
                                    <h4>Perfectly Scalability designed</h4>
                                    <p>Dorm sed odic duk Etiam portal semi malesuada magna malls euismod. Nullam Id
                                        dolor id nibh ultricies .vehkula iut id elk. Morbi leo risus.</p>

                                    <a href="#" className="btn text-left">learn more</a>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/*<div id="scalability">*/}
            {/*    <div className="container py-5">*/}

            {/*        <div className="row align-items-center">*/}
            {/*            <div className=" col-12 text-center">*/}
            {/*                <div className="scalability_content">*/}
            {/*                    <div className="scalability_child">*/}
            {/*                        <h3>Scalability</h3>*/}
            {/*                        <h4>Perfectly Scalability designed</h4>*/}
            {/*                        <p>Dorm sed odic duk Etiam portal semi malesuada magna malls euismod. Nullam Id*/}
            {/*                            dolor id nibh ultricies .vehkula iut id elk. Morbi leo risus.</p>*/}

            {/*                        <a href="#" className="btn">learn more</a>                                </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default Home;
