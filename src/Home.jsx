import React from 'react';
import slid_1 from './assets/images/slider/1.png';
import slid_2 from './assets/images/slider/2.png';
import slid_3 from './assets/images/slider/3.png';
import pack1 from './assets/images/packages/Goa.svg';
import pack2 from './assets/images/packages/Himachal.svg';
import pack3 from './assets/images/packages/Jammu-kashmir.svg';
import pack4 from './assets/images/packages/kerala.svg';
import pack5 from './assets/images/packages/Ladakh.svg';
import pack6 from './assets/images/packages/Rajasthan.svg';
import blog1 from './assets/images/blog/kashmir.svg';
import blog2 from './assets/images/blog/kerala.svg';
import blog3 from './assets/images/blog/goa.svg';
import blog4 from './assets/images/blog/rajasthan.svg';
import d1 from './assets/images/destination/goa.svg';
import d2 from './assets/images/destination/amritsar.svg';
import d3 from './assets/images/destination/jaipur.svg';
import d4 from './assets/images/destination/kerala.svg';
import d5 from './assets/images/destination/mumbai.svg';
import d6 from './assets/images/destination/mysore.svg';
import d7 from './assets/images/destination/varanasi.svg';
import d8 from './assets/images/destination/humpi.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Home = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slidesData = [
        {
            image: slid_3,
            // heading: "Tailored Journeys, Seamless Travel Planning",
            // subheading: "A travel agency offers personalized vacation planning, booking services, and tailored itineraries. It handles flights, accommodations, tours, and activities, ensuring seamless and memorable travel experiences for clients worldwide.",
            // buttonLabel: "Book Online",
            // buttonLink: "#shop",
        },
        {
            image: slid_2,
            // heading: "Exclusive Offers",
            // subheading: "Don't miss out on our limited-time deals",
            // buttonLabel: "Book Online",
            // buttonLink: "#offers",
        },
        {
            image: slid_1,
            // heading: "Join Our Community",
            // subheading: "Connect with like-minded individuals",
            // buttonLabel: "Book Online",
            // buttonLink: "#community",
        },
        // Add more slides as needed
    ];
    return (
        <div>
            {/* <!--################### Slider Starts Here #######################---> */}

            {/* <div class="slider-detail">

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item ">
                            <img class="d-block w-100" src={slid_1} alt="First slide" />
                            <div class="carousel-caption fvgb d-none d-md-block">
                                <h5 class="animated bounceInDown">Create an Awesome Website Today </h5>
                                <p class="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br />
                                    aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                                    sed sagittis at, sagittis quis neque. Praesent.</p>

                                <div class="row vbh">

                                    <div class="btn btn-primary animated bounceInUp"> Apply Online </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item active">
                            <img class="d-block w-100" src={slid_2} alt="Second slide" />
                            <div class="carousel-caption vdg-cur d-none d-md-block">
                                <h5 class="animated bounceInDown">Best Free Educational Template</h5>
                                <p class="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br />
                                    aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                                    sed sagittis at, sagittis quis neque. Praesent.</p>

                                <div class="row vbh">

                                    <div class="btn btn-primary animated bounceInUp"> Apply Online </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item active">
                            <img class="d-block w-100" src={slid_3} alt="Third slide" />
                            <div class="carousel-caption vdg-cur d-none d-md-block">
                                <h5 class="animated bounceInDown">Best Free Educational Template</h5>
                                <p class="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br />
                                    aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                                    sed sagittis at, sagittis quis neque. Praesent.</p>

                                <div class="row vbh">

                                    <div class="btn btn-primary animated bounceInUp"> Apply Online </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


            </div> */}

            <div className="carousel-container">
                <Slider {...settings}>
                    {slidesData.map((slide, index) => (
                        <div key={index} className="slide-content">
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                            {/* <div className="text-overlay">
                                <h2>{slide.heading}</h2>
                                <p>{slide.subheading}</p>
                                <a href={slide.buttonLink} className="slide-button">
                                    {slide.buttonLabel}
                                </a>
                            </div> */}
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <!--################### Slider Starts Here #######################---> */}

            <div class="search-container contaienr-fluid">
                <div class="container">
                    <div class="row search-box">
                        <div class="col-md-3">
                            <select name="" id="" class="form-control">
                                <option value="">Select Activity</option>
                                <option value="">City Tours</option>
                                <option value="">Relaxation Tours</option>
                                <option value="">Cultral Tours</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select name="" id="" class="form-control">
                                <option value="">Select Activity</option>
                                <option value="">City Tours</option>
                                <option value="">Relaxation Tours</option>
                                <option value="">Cultral Tours</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <input placeholder="Select Date" type="text" class="form-control" />
                        </div>
                        <div class="col-md-3">
                            <button class="btn w-100 btn-primary">Search Package</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--################### Packages Starts Here #######################---> */}

            <section class="top-packages container-fluid">
                <div class="container">
                    <div class="session-title row">
                        <h2>Top Packages</h2>
                        <p>Discover world-famous tours, featuring iconic landmarks, cultural gems, and unforgettable experiences.</p>
                    </div>
                    <div class="pack-row row">
                        <div class="col-md-4">
                            <div class="pac-col">
                                <img src={pack1} alt="" />
                                <div class="packdetail">
                                    <h4>Relaxing Goa Holiday</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 6 Days 5 Nights</span>
                                        <b>₹38000</b>
                                    </div>
                                    <div class="eview-row row no-margin">
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pac-col">
                                <img src={pack5} alt="" />
                                <div class="packdetail">
                                    <h4>Immerse Yourself in Ladakh's Magic</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>₹59000</b>
                                    </div>
                                    <div class="eview-row row no-margin">
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pac-col">
                                <img src={pack6} alt="" />
                                <div class="packdetail">
                                    <h4>Discover Rajasthan's Rich Heritage</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>₹29000</b>
                                    </div>
                                    <div class="eview-row row no-margin">
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pac-col">
                                <img src={pack2} alt="" />
                                <div class="packdetail">
                                    <h4>Escape to the Himalayas: Himachal Awaits</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>₹25000</b>
                                    </div>
                                    <div class="eview-row row no-margin">
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pac-col">
                                <img src={pack3} alt="" />
                                <div class="packdetail">
                                    <h4>Jammu & Kashmir: India's Crown Jewel</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>₹45000</b>
                                    </div>
                                    <div class="eview-row row no-margin">
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pac-col">
                                <img src={pack4} alt="" />
                                <div class="packdetail">
                                    <h4>Kerala - Discover Kerala, Discover Bliss</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>₹39000</b>
                                    </div>
                                    <div class="eview-row row no-margin">
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--################### Offers Starts Here #######################---> */}

            <div class="lloking-for container-fluid">
                <div class="inn-lay">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 natur-col mx-auto">
                                <h2>Up to 30% Discount on Selected Packages</h2>
                                <h4 class="pt-3">Adventure awaits! Whether you're booking flights, finding the perfect accommodation, or planning a custom itinerary, we've got you covered. Enjoy peace of mind with comprehensive travel insurance and 24/7 support. Let us handle the details so you can focus on exploring new destinations and creating unforgettable memories. Ready to embark on your next journey? Let's make it happen!</h4>
                                <button class="btn btn-light">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--  ************************* Blog Starts Here ************************** --> */}
            <div class="blog">

                <div class="container">
                    <div class="row session-title">
                        <h2>Our Blog</h2>
                        <p>Inspiring journeys, tips, and guides for global explorers.</p>
                    </div>
                    <div class="row blog-row">
                        <div class="col-md-6 col-sm-12">
                            <div class="blog-singe no-margin row">
                                <div class="col-sm-5 blog-img-tab">
                                    <img src={blog1} alt="" />
                                </div>
                                <div class="col-sm-7 blog-content-tab">
                                    <h2>Kashmir: Mountains, houseboats</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Paradise on Earth, snow-capped mountains, serene lakes, houseboats, Mughal gardens, adventure sports, warm hospitality. Kashmir awaits!</p>
                                    <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="blog-singe no-margin row">
                                <div class="col-sm-5 blog-img-tab">
                                    <img src={blog2} alt="" />
                                </div>
                                <div class="col-sm-7 blog-content-tab">
                                    <h2>Kerala: Backwaters, beaches</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Backwaters, beaches, Ayurveda, spice plantations, houseboats, wildlife sanctuaries, lush greenery. Kerala awaits!</p>
                                    <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="blog-singe no-margin row">
                                <div class="col-sm-5 blog-img-tab">
                                    <img src={blog3} alt="" />
                                </div>
                                <div class="col-sm-7 blog-content-tab">
                                    <h2>Goa: Sun, sand, sea, parties</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Sun-kissed beaches, vibrant nightlife, Portuguese charm, tropical vibes, water sports, delicious seafood, and endless relaxation. Goa awaits!</p>
                                    <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="blog-singe no-margin row">
                                <div class="col-sm-5 blog-img-tab">
                                    <img src={blog4} alt="" />
                                </div>
                                <div class="col-sm-7 blog-content-tab">
                                    <h2>Rajasthan: Forts, palaces, culture</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Royal forts, vibrant culture, Thar desert, camel safaris, majestic palaces, colorful markets, and warm hospitality. Rajasthan awaits!</p>
                                    <a href="blog_single.html">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* <!-- ******************** Travel Destination Starts Here ******************* --> */}

            <div class="travel-destination container-fluid">
                <div class="container">
                    <div class="session-title">
                        <h2>Popular Tours</h2>
                        <p>Explore top tours: from iconic landmarks and vibrant cities to hidden gems and cultural experiences, offering unforgettable adventures worldwide.</p>
                    </div>
                    <div class="destination-row row">
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d1} alt="" />
                                <div class="layycover">
                                    <h4>Goa <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d2} alt="" />
                                <div class="layycover">
                                    <h4>Punjab <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d3} alt="" />
                                <div class="layycover">
                                    <h4>Rajasthan <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d4} alt="" />
                                <div class="layycover">
                                    <h4>Kerala <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d5} alt="" />
                                <div class="layycover">
                                    <h4>Maharashtra <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d6} alt="" />
                                <div class="layycover">
                                    <h4>Karnataka <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d7} alt="" />
                                <div class="layycover">
                                    <h4>Uttar Pradesh <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d8} alt="" />
                                <div class="layycover">
                                    <h4>Andhra Pradesh <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
