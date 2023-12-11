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
import firebase from "../assets/brand/firebase.png"
import node from "../assets/brand/NODE2.png"
import express from "../assets/brand/express.png"
import mongodb from "../assets/brand/mongodb.png"

const Skills = () => {
    return (
        <div className="mb-16">
            <Title heading={'My Skills'} />
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                  <SwiperSlide>
                    <div className="bg-teal-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={js} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">80%</p>
                        <h3 className="text-xl ">JavaScript </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-purple-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={react} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">85%</p>
                        <h3 className="text-xl ">React </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-light-blue-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={firebase} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">90%</p>
                        <h3 className="text-xl ">Firebase </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-orange-50 hover:bg-blue-gray-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={html} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">92%</p>
                        <h3 className="text-xl ">HTML5 </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={css} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">90%</p>
                        <h3 className="text-xl ">CSS3 </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-lime-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={tailwind} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">90%</p>
                        <h3 className="text-xl ">Tailwind CSS </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-red-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={node} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">70%</p>
                        <h3 className="text-xl ">Node JS </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-amber-100 text-center p-5 space-y-4 rounded-lg">
                        <img className=" w-24 mx-auto   " src={express} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">70%</p>
                        <h3 className="text-xl ">Express JS </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-100 text-center mb-14 p-5 space-y-4 rounded-lg">
                        <img className=" w-24 h-24 mx-auto   " src={mongodb} />{" "}
                        <p className="bg-blue-400 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md ">70%</p>
                        <h3 className="text-xl ">MongoDB </h3>
                    </div>
                </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default Skills;