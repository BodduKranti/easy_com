import Commonslider from '../../component/CommonSlider/Commonslider'
import { useAppState } from '../../redux-store/HookRedux'
import { publicUrl } from '../../utility/api_url'

const Home = () => {
    const { productTitle } = useAppState((state) => state.products)

    return (
        <>
            <h2 className='text-green-500 font-bold'>
                Home {productTitle} {publicUrl}
            </h2>

            {/* ========== Slick Carosuel ========= */}
            <div className='w-full overflow-hidden'>
                <Commonslider
                    dots={false}
                    infinite={true}
                    autoplay={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    breakpoint1024_slidesToShow={4}
                    breakpoint1024_slidesToScroll={1}
                    breakpoint600_slidesToShow={2}
                    breakpoint600_slidesToScroll={1}
                    breakpoint480_slidesToShow={1}
                    breakpoint480_slidesToScroll={1}
                    breakpoint1024_dots={false}
                    breakpoint600_dots={false}
                    breakpoint480_dots={false}
                />
            </div>

        </>
    )
}

export default Home
