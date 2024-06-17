import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FC } from "react";
import Actionbtn from "../common_fields/Actionbtn";
import { useNavigate } from "react-router-dom";
import ActionBtnborder from "../common_fields/ActionBtnborder";

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
    customHiehgt: any,
    mobilecustomHiehgt: any,
    data: {
        bgColor?: string,
        btn1Text?: string,
        btn2Text?: string,
        btn1Url?: string,
        btn2Url?: string,
        imgThumb?: string,
        imgAlt?: string,
        H1Text: string,
        paragraph: string
    }[],
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

    data,
    customHiehgt,
    mobilecustomHiehgt
}) => {

    const navigation = useNavigate()
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    // const customHiehgt: any = '400px'
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {data && data.map((list: any) => (
                        <>
                            <div
                                className={`sm:h-[${mobilecustomHiehgt}] md:h-[${customHiehgt}]`}
                                style={{
                                    backgroundColor: `${list.bgColor ? list.bgColor : '#ffffff'}`,
                                    // height: `${customHeight ? customHeight : '100%'}`
                                }}
                            >
                                <div className="w-full sm:flex md:flex gap-5 sm:gap-4 items-center px-4">
                                    <div className="sm:w-3/5 md:w-3/5 sm:mb-4 md:mb-0 h-full">
                                        <h1 className="md:text-[40px] sm:text-[26px] font-bold">{list.H1Text}</h1>
                                        <p className="my-4">{list.paragraph}</p>
                                        <div className="sm:w-2/3 md:w-2/4 flex gap-2">
                                            {list.btn1Text &&
                                                <Actionbtn
                                                    btnText={list.btn1Text}
                                                    onClick={() => navigation(`${list.btn1Url}`)}
                                                />}

                                            {list.btn2Text &&
                                                <ActionBtnborder
                                                    btnText={list.btn2Text}
                                                    onClick={() => navigation(`${list.btn2Url}`)}
                                                />}
                                        </div>
                                    </div>
                                    <div className="sm:w-2/5 md:w-2/5 h-full items-center">
                                        <figure className={`w-full h-[${customHiehgt}]`}>
                                            <img src={list.imgThumb} alt={list.imgAlt} className=" max-w-full object-contain h-full w-full" />
                                        </figure>

                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                </Slider>
            </div>
        </>
    )
}

export default Commonslider
