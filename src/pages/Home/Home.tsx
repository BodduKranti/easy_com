import Commonslider from '../../component/CommonSlider/Commonslider'

const Home = () => {

    const HomeSlider: any[] = [
        {
            bgColor: '#F4F4F4',
            btn1Text: 'Buy Now',
            btn2Text: 'Contact',
            btn1Url: '/product',
            btn2Url: '/contact',
            imgThumb: './images/home-slider/hm-1-slider-1.webp',
            imgAlt: 'Shoes',
            H1Text: 'This Shoes is very good quality',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, dolor eius. Necessitatibus placeat sunt veritatis est voluptatibus beatae nihil unde?',
        },
        {
            bgColor: '#F4F4F4',
            btn1Text: 'Buy Now',
            btn2Text: 'Contact',
            btn1Url: '/product',
            btn2Url: '/contact',
            imgThumb: './images/home-slider/hm-7-slider-1.webp',
            imgAlt: 'Shoes',
            H1Text: 'This Shoes is very good quality',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, dolor eius. Necessitatibus placeat sunt veritatis est voluptatibus beatae nihil unde?',
        },
        {
            bgColor: '#F4F4F4',
            btn1Text: 'Buy Now',
            btn2Text: 'Contact',
            btn1Url: '/product',
            btn2Url: '/contact',
            imgThumb: './images/home-slider/hm-9-slider-1.webp',
            imgAlt: 'Shoes',
            H1Text: 'This Shoes is very good quality',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, dolor eius. Necessitatibus placeat sunt veritatis est voluptatibus beatae nihil unde?',
        }
    ]

    return (
        <>

            {/* ========== Slick Carosuel ========= */}
            <div className='w-full overflow-hidden'>

                <Commonslider
                    dots={false}
                    infinite={true}
                    autoplay={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    breakpoint1024_slidesToShow={1}
                    breakpoint1024_slidesToScroll={1}
                    breakpoint600_slidesToShow={1}
                    breakpoint600_slidesToScroll={1}
                    breakpoint480_slidesToShow={1}
                    breakpoint480_slidesToScroll={1}
                    breakpoint1024_dots={false}
                    breakpoint600_dots={false}
                    breakpoint480_dots={false}
                    customHiehgt={'440px'}
                    mobilecustomHiehgt={'250px'}
                    data={HomeSlider}
                />
            </div>

        </>
    )
}

export default Home
