'use client';

import Slider from "react-slick";
import Image from "next/image";

const imageNames = [
    "ind1.png", "ind2.png", "ind3.png", "ind4.png", "ind5.png", "ind6.png", "ind7.png"
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
        <div className="w-full h-full mx-0">
            <Slider {...settings}>
                {imageNames.map((img, index) => (
                    <div className="relative w-full h-auto aspect-[16/9] overflow-hidden">
                        <Image
                            src={`/${img}`}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>

                ))}
            </Slider>
        </div>
    );
};

export default IndustrySlideshow;