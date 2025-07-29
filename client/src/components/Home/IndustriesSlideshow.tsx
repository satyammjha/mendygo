'use client';

import Slider from "react-slick";
import Image from "next/image";

const imageNames = [
    "ind1.webp", "ind2.webp", "ind3.webp", "ind4.webp", "ind5.webp", "ind6.webp", "ind7.webp"
];

const IndustrySlideshow = () => {
    const settings = {
        dots: false,
        pauseOnHover: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="lg:w-[70%] w-[90%] h-full mx-auto">
            <Slider {...settings}>
                {imageNames.map((img, index) => (
                    <div key={index} className="relative w-full lg:h-[500px] h-[300px] overflow-hidden rounded-xl">
                        <Image
                            src={`/${img}`}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/40 to-transparent z-10" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default IndustrySlideshow;