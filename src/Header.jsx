import React from 'react';
import logo from './assets/images/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            {/* <!----- ############# Header ################ -----> */}

            <header class="container-fluid">
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4 d-none d-sm-block contacthd">
                                <p><a href="">India</a></p>
                            </div>
                            <div class="col-sm-8">

                                <ul class="social-login">
                                    <li>
                                        <i class="fab fa-facebook-square"></i>
                                    </li>
                                    <li>
                                        <i class="fab fa-twitter-square"></i>
                                    </li>
                                    <li>
                                        <a href='https://www.instagram.com/_tregway' target='_blank'><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/company/tregway/' target='_blank'><i class="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>

                                <ul class="email">
                                    <li><i class="fa fa-envelope"></i>connect@tregway.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="menu-jk" class="header-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="logo col-md-3">
                                <img src={logo} alt="logo" />
                                <a data-toggle="collapse" data-target="#menu" href="#menu"><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                            </div>
                            <div id="menu" class="navs d-none d-md-block col-md-9">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/aboutus">About Us</Link></li>
                                    {/* <li><a href="packages.html">Packages</a></li>
                                    <li><a href="destination.html">Destinations</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact_us.html">Contact Us</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
