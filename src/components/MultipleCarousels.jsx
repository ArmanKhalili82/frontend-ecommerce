import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import u from '../assets/university.jpg'
import w from '../assets/working.jpg'
import productImage from '../assets/productImages/adrian-ordonez-P0W27GRvyww-unsplash.jpg'
import productImage2 from '../assets/productImages/ahmed-rajgoli-shoaib-shakeel-FCsA8Adcgr4-unsplash.jpg'
import productImage3 from '../assets/productImages/andrew-hutchings-W2Dta_Yiwfw-unsplash.jpg'
import productImage4 from '../assets/productImages/avechenri-2hEaLqoPgPQ-unsplash.jpg'
import productImage5 from '../assets/productImages/yang-deng-2loKxdi6Hmo-unsplash.jpg'
import productImage6 from '../assets/productImages/wengang-zhai-_fOL6ebfECQ-unsplash.jpg'
import productImage7 from '../assets/productImages/t-kaiser-XF9zfijEQK8-unsplash.jpg'
import productImage8 from '../assets/productImages/mediamodifier-ogmenj2NGho-unsplash.jpg'

const MultipleCarousels = () => {
    const carouselItems = [
        {
            id: 1,
            title: "Our Best Sells",
            imageUrl: productImage
        },

        {
            id: 2,
            title: "Our Autumn Sells",
            imageUrl: productImage2
        },

        {
            id: 3,
            title: "T-shirt",
            imageUrl: productImage3
        },

        {
            id: 4,
            title: "Shirt",
            imageUrl: productImage4
        },

        {
            id: 5,
            title: "Pants",
            imageUrl: productImage5
        },

        {
            id: 6,
            title: "Shoes",
            imageUrl: productImage6
        },

        {
            id: 7,
            title: "Phones",
            imageUrl: productImage7
        },

        {
            id: 8,
            title: "Jackets",
            imageUrl: productImage8
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
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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