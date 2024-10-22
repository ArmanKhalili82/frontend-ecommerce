import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import u from '../assets/university.jpg'
import w from '../assets/working.jpg'

const MultipleCarousels = () => {
    const carouselItems = [
        {
            id: 1,
            title: "Our Best Sells",
            imageUrl: u
        },

        {
            id: 2,
            title: "Our Autumn Sells",
            imageUrl: w
        },

        {
            id: 3,
            title: "T-shirt",
            imageUrl: w
        },

        {
            id: 4,
            title: "Shirt",
            imageUrl: u
        },

        {
            id: 5,
            title: "Pants",
            imageUrl: w
        },

        {
            id: 6,
            title: "Shoes",
            imageUrl: u
        },

        {
            id: 7,
            title: "Phones",
            imageUrl: w
        },

        {
            id: 8,
            title: "Jackets",
            imageUrl: u
        },

        {
            id: 9,
            title: "Watch",
            imageUrl: w
        },

        {
            id: 10,
            title: "Accessory",
            imageUrl: u
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: true,
      };
  return (
    <div className='mt-3 px-4'>
        <div className="mb-8">
            <Slider {...settings}>
                    {carouselItems.map((item) => (
                        <div key={item.id} className="relative p-3">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-96 object-cover rounded-lg" />
                            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                                <h2 className="text-2xl font-bold">{item.title}</h2>
                            </div>
                        </div>
                    ))}
            </Slider>            
        </div>
    </div>
  )
}

export default MultipleCarousels