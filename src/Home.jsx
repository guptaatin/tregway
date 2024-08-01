import React from 'react';
import slid_1 from './assets/images/slider/slid_1.jpg';
import slid_2 from './assets/images/slider/slid_2.jpg';
import pack1 from './assets/images/packages/pack1.jpg';
import pack2 from './assets/images/packages/pack2.jpg';
import pack3 from './assets/images/packages/pack3.jpg';
import pack4 from './assets/images/packages/pack4.jpg';
import pack5 from './assets/images/packages/pack5.jpg';
import pack6 from './assets/images/packages/pack6.jpg';
import blog1 from './assets/images/blog/blog1.jpg';
import blog2 from './assets/images/blog/blog2.jpg';
import blog3 from './assets/images/blog/blog3.jpg';
import blog4 from './assets/images/blog/blog4.jpg';
import d1 from './assets/images/destination/d1.jpg';
import d2 from './assets/images/destination/d2.jpg';
import d3 from './assets/images/destination/d3.jpg';
import d4 from './assets/images/destination/d4.jpg';

export const Home = () => {
    return (
        <div>
            {/* <!--################### Slider Starts Here #######################---> */}

            <div class="slider-detail">

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
                            <img class="d-block w-100" src={slid_2} alt="Third slide" />
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
                        <p>There are many variations of passages of Lorem Ipsum available form</p>
                    </div>
                    <div class="pack-row row">
                        <div class="col-md-4">
                            <div class="pac-col">
                                <img src={pack1} alt="" />
                                <div class="packdetail">
                                    <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>$1450</b>
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
                                    <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>$1450</b>
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
                                    <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>$1450</b>
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
                                    <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>$1450</b>
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
                                    <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>$1450</b>
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
                                    <h4>Tokyo - 4 Days in Korea, Entertica</h4>
                                    <div class="daydet">
                                        <span><i class="far fa-clock"></i> 4 Days 3 Nights</span>
                                        <b>$1450</b>
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
                                <h2>Up to 40% Discount on Selected Packages</h2>
                                <h4 class="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</h4>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="row blog-row">
                        <div class="col-md-6 col-sm-12">
                            <div class="blog-singe no-margin row">
                                <div class="col-sm-5 blog-img-tab">
                                    <img src={blog1} alt="" />
                                </div>
                                <div class="col-sm-7 blog-content-tab">
                                    <h2>Curabit finibus dui sem.</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
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
                                    <h2>Excepteur sint occaecat</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
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
                                    <h2>Treatmnkl sint occaecat</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
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
                                    <h2>Orcidinodal sint occaecat</h2>
                                    <p><i class="fas fa-user"><small>Admin</small></i>  <i class="fas fa-eye"><small>(12)</small></i>  <i class="fas fa-comments"><small>(12)</small></i></p>
                                    <p class="blog-desic">Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the </p>
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
                        <h2>Popular Destination</h2>
                        <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                    </div>
                    <div class="destination-row row">
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d1} alt="" />
                                <div class="layycover">
                                    <h4>Brazil <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d2} alt="" />
                                <div class="layycover">
                                    <h4>Malaysia <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d3} alt="" />
                                <div class="layycover">
                                    <h4>Sri Lanka <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d4} alt="" />
                                <div class="layycover">
                                    <h4>Canada <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d3} alt="" />
                                <div class="layycover">
                                    <h4>Vietnam <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d1} alt="" />
                                <div class="layycover">
                                    <h4>Thailand <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d3} alt="" />
                                <div class="layycover">
                                    <h4>Thailand <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 descol">
                            <div class="destcol">
                                <img src={d4} alt="" />
                                <div class="layycover">
                                    <h4>Thailand <span class="badge badge-info">5 Places</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
