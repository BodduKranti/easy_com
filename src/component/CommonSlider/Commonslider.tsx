import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FC } from "react";

interface Commonsliderprops {
    dots: boolean,
    infinite: boolean,
    autoplay: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    breakpoint1024_dots?: boolean,
    breakpoint1024_slidesToShow?: number,
    breakpoint1024_slidesToScroll?: number,

    breakpoint600_dots?: boolean,
    breakpoint600_slidesToShow?: number,
    breakpoint600_slidesToScroll?: number,

    breakpoint480_dots?: boolean,
    breakpoint480_slidesToShow?: number,
    breakpoint480_slidesToScroll?: number,
}

const Commonslider: FC<Commonsliderprops> = ({
    dots,
    infinite,
    autoplay,
    speed,
    slidesToShow,
    slidesToScroll,
    breakpoint1024_dots,
    breakpoint1024_slidesToShow,
    breakpoint1024_slidesToScroll,

    breakpoint600_dots,
    breakpoint600_slidesToShow,
    breakpoint600_slidesToScroll,

    breakpoint480_dots,
    breakpoint480_slidesToShow,
    breakpoint480_slidesToScroll,
}) => {
    var settings = {
        dots: dots,
        infinite: infinite,
        autoplay: autoplay,
        speed: speed,
        slidesToShow: slidesToShow ? slidesToShow : 1,
        slidesToScroll: slidesToScroll ? slidesToScroll : 1,
        initialSlide: 0,
        nextArrow: <IoIosArrowBack className="w-25 h-25 text-green-500" />,
        prevArrow: <IoIosArrowForward className="w-25 h-25 text-green-500" />,
        responsive: slidesToShow > 1 ? [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: breakpoint1024_slidesToShow,
                    slidesToScroll: breakpoint1024_slidesToScroll,
                    dots: breakpoint1024_dots
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: breakpoint600_slidesToShow,
                    slidesToScroll: breakpoint600_slidesToScroll,
                    dots: breakpoint600_dots
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: breakpoint480_slidesToShow,
                    slidesToScroll: breakpoint480_slidesToScroll,
                    dots: breakpoint480_dots
                }
            }
        ] : [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
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
        <>
            <div className="slider-container">
                <Slider {...settings}>

                    <div className='bg-green-500 h-[150px]'>
                        <h3>1</h3>
                    </div>
                    <div className='bg-blue-500 h-[150px]'>
                        <h3>2</h3>
                    </div>
                    <div className='bg-red-500 h-[150px]'>
                        <h3>3</h3>
                    </div>
                    <div className='bg-purple-500 h-[150px]'>
                        <h3>4</h3>
                    </div>
                    <div className='bg-orange-500 h-[150px]'>
                        <h3>5</h3>
                    </div>
                    <div className='bg-black h-[150px]'>
                        <h3>6</h3>
                    </div>
                    <div className='bg-pink-500 h-[150px]'>
                        <h3>7</h3>
                    </div>
                    <div className='bg-yellow-500 h-[150px]'>
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Commonslider
