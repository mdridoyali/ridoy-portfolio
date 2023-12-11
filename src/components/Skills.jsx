import Title from "./Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import html from "../assets/brand/html.webp"
import css from "../assets/brand/CSS3_logo.svg.png"
import js from "../assets/brand/js (2).png"
import tailwind from "../assets/brand/tailwind.png"
import react from "../assets/brand/re.png"

const Skills = () => {
    return (
        <div className="mb-16">
            <Title heading={'My Skills'} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-slate-200 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={html} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">92%</p>
                        <h3 className="text-xl ">HTML5 </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slate-200 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={css} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">90%</p>
                        <h3 className="text-xl ">CSS3 </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slate-200 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={tailwind} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">90%</p>
                        <h3 className="text-xl ">Tailwind CSS </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slate-200 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={js} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">85%</p>
                        <h3 className="text-xl ">JavaScript </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slate-200 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={react} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">85%</p>
                        <h3 className="text-xl ">React </h3>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Skills;