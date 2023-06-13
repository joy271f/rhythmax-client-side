import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                className="mySwiper swiper-h"
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <img src="/banner.jpg" alt="" />
                    <div className="absolute text-center bottom-0 w-full flex items-center top-5 bg-gradient-to-t from-black">
                        <div className="text-white w-3/4 mx-auto md:space-y-5">
                            <h2 className='md:text-5xl mb-0 font-bold gradient-text uppercase'>Welcome to Our Music School!</h2>
                            <p>Igniting Talents through Exceptional Sound - Your Gateway to Musical Excellence!</p>
                            <div>
                                <button className="btn bg-pink-600 text-white border-none mr-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/banner.jpg" alt="" />
                    <div className="absolute text-center bottom-0 w-full flex items-center top-5 bg-gradient-to-t from-black">
                        <div className="text-white w-3/4 mx-auto md:space-y-5">
                            <h2 className='md:text-5xl mb-0 font-bold gradient-text uppercase'>Discover the Joy of Music!</h2>
                            <p>Where Music Comes Alive! Join us for a Vibrant and Inspiring Musical Journey!</p>
                            <div>
                                <button className="btn bg-pink-600 text-white border-none mr-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/banner.jpg" alt="" />
                    <div className="absolute text-center bottom-0 w-full flex items-center top-5 bg-gradient-to-t from-black">
                        <div className="text-white w-3/4 mx-auto md:space-y-5">
                            <h2 className='md:text-5xl mb-0 font-bold gradient-text'>Unlock Your Musical Potential with Us!</h2>
                            <p>Embark on a Harmonious Journey to Unleash Your Musical Potential!</p>
                            <div>
                            <button className="btn bg-pink-600 text-white border-none mr-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;