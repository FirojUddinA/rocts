import React,{useState} from 'react';
import platform3 from '../../images/platform3.png';
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
const Navbar = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav id="header_area" className="navbar navbar-expand-md fixed-top  px-2 py-0 ">
                <div className="container">
                    <a href="/" className="navbar-brand"  onClick={closeMobileMenu}>
                        <img src={platform3} alt="" className="img-fluid"/>
                    </a>
                    <button onClick={handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu"
                            aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div  className={click ? 'collapse navbar-collapse' : 'navbar-collapse'} id="nav-menu">
                        <ul id="nav" className="navbar-nav ml-md-auto">
                            <li className="nav-item">
                                {/* <a className="nav-link active" href="#banner-area" onClick={closeMobileMenu}>Home</a> */}
                                <Link
    activeClass=" nav-link active"
    to="banner-area"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Home</Link>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="#business_details" onClick={closeMobileMenu}>Platform </a> */}
                            
                                <Link
    activeClass=" nav-link active"
    to="business_details"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Platform</Link>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="#component" onClick={closeMobileMenu}>Community</a> */}
                                <Link
    activeClass=" nav-link active"
    to="component"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Community</Link>
                            </li>

                            <li className="nav-item">
                              
                                {/* <a className="nav-link" href="#footer" onClick={closeMobileMenu}>Contact</a> */}
                                <Link
    activeClass=" nav-link active"
    to="scalability"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;
