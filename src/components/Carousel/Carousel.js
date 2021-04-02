import React from 'react';
import './Carousel.css'
import bannerImg1 from '../../Assets/Images/banner1.jpg'
import bannerImg2 from '../../Assets/Images/banner2.jpg'
import bannerImg3 from '../../Assets/Images/banner3.jpg'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerImg1} className="d-block w-100" alt="banner-img1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Best Quality Laptop</h1>
                            <h4>We Provide best quality laptop With Reasonable price</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                        <img src={bannerImg2} className="d-block w-100" alt="banner-img2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Life time free servicing</h1>
                            <h4>We Provide 20 hours service with honesty.</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src="..." class="d-block w-100" alt="..."> */}
                        <img src={bannerImg3} className="d-block w-100" alt="banner-img3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Best Quality and new generation product</h1>
                            <h4>We also Provide many interesting gaming laptop</h4>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;