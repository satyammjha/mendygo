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
                    <div key={index} className="relative w-full h-full overflow-hidden">
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