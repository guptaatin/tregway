import React from 'react';
import about from './assets/images/about.png';
import member1 from './assets/images/team/accomadation.png';
import member2 from './assets/images/team/booking.png';
import member3 from './assets/images/team/tours-packages.png';
import member4 from './assets/images/team/travel-isurance.png';

export const AboutUs = () => {
    return (
        <div>
            {/* <!--  ************************* Page Title Starts Here ************************** --> */}
            <div class="page-nav no-margin row">
                <div class="container">
                    <div class="row">
                        <h2>About Tregway</h2>
                        <ul>
                            <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                            <li><i class="fas fa-angle-double-right"></i> About Us</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* <!--  ************************* About Us Starts Here ************************** -->     */}

            <div class="about-us container-fluid">
                <div class="container">
                    <div class="row natur-row no-margin w-100">
                        <div class="text-part col-md-6">
                            <h2>About Us</h2>
                            <p>Welcome to Tregway, where your dream vacations come to life! Our curated travel packages offer unique, memorable experiences in breathtaking destinations. Whether you seek adventure, relaxation, cultural immersion, or a bit of everything, Tregway has the perfect itinerary for you</p>

                            <p>Why Choose Tregway? Expert Itineraries: Handpicked destinations and activities ensure a seamless travel experience. Exclusive Experiences: Gain access to unique sites, guided tours, and local insights. Flexible Package :</p>

                            <p>Customize your travel plans, whether solo, with family, or in a group. Exceptional Support: Our dedicated team assists you from planning to return. Our Packages - Adventure Awaits: Thrilling adventures in exotic locales. Cultural Immersion: Deep cultural dives with guided tours and culinary experiences. Luxury Escapes: Five-star accommodations and gourmet dining. Family Fun: Packages designed for all ages. Romantic Getaways: Serene escapes for couples.</p>
                        </div>
                        <div class="image-part col-md-6">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- ################# Our Team Starts Here#######################---> */}
            <section class="our-team">
                <div class="container">
                    <div class="session-title row">
                        <h2>Our Services</h2>
                    </div>
                    <div class="row team-row">
                        <div class="col-md-3 col-sm-6">
                            <div class="single-usr">
                                <img src={member1} alt="" />
                                <div class="det-o">
                                    <h4>Accomadation</h4>
                                    <i>Hotel/stays</i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-usr">
                                <img src={member2} alt="" />
                                <div class="det-o">
                                    <h4>Bookings</h4>
                                    <i>Flights/Trains</i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-usr">
                                <img src={member3} alt="" />
                                <div class="det-o">
                                    <h4>Tours packages</h4>
                                    <i>Domestic/International</i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-usr">
                                <img src={member4} alt="" />
                                <div class="det-o">
                                    <h4>Travel Support</h4>
                                    <i>Visa/Insurance</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
