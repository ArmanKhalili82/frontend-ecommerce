import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import u from '../assets/university.jpg'
import w from '../assets/working.jpg'

const Carousels = () => {
    const carouselItems = [
        {
            id: 1,
            title: "Our Best Sells",
            description: "Best price with better offers",
            imageUrl: u
        },

        {
            id: 2,
            title: "Our Autumn Sells",
            description: "Autumn price with amazing offers",
            imageUrl: w
        },
    ]

    const settings = {
        // dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };
  return (
    <div className="p-4">
            {/* <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Our Shop</h1> */}

            <div className="mb-2">
                <Slider {...settings}>
                    {carouselItems.map((item) => (
                        <div key={item.id} className="relative">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="mt-2">{item.description}</p>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <p className="text-lg">
                At our university, we provide a variety of courses to help you achieve your educational goals.
                Our experienced teachers are here to support you every step of the way.
            </p> */}
        </div>
  )
}

export default Carousels