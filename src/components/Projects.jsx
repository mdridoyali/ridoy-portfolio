import Title from "./Title";
import banner from "../assets/writes/banner.jpg"
import popular from "../assets/writes/populer.jpg"
import allblog from "../assets/writes/allb.jpg"
import addblog from "../assets/writes/addb.jpg"

import banner2 from "../assets/medi/banner.png"
import upcoming from "../assets/medi/upcoming.png"
import contact from "../assets/medi/contact.png"
import dashboard from "../assets/medi/dashboard.png"


import tailwind from "../assets/brand/tailwind.png"
import react from "../assets/brand/re.png"
import firebase from "../assets/brand/firebase.png"
import node from "../assets/brand/NODE2.png"
import express from "../assets/brand/express.png"
import mongodb from "../assets/brand/mongodb.png"
import material from "../assets/brand/material.png"


const Projects = () => {
    return (
        <div  id="project" className="mb-16">
            <Title heading={'My projects'} />
            <div>

                <div  data-aos="flip-left" className="md:flex ">
                    <div className="flex-1 grid grid-cols-2 gap-3 md:border-r-2  border-blue-300  pr-2">
                        <img className="shadow-xl border-t-2 rounded-md" src={banner2} alt="" />
                        <img className="shadow-xl border-t-2 rounded-md" src={upcoming} alt="" />
                        <img className="shadow-xl border-t-2 rounded-md" src={contact} alt="" />
                        <img className="shadow-xl border-t-2 rounded-md" src={dashboard} alt="" />
                    </div>
                    <div className="flex-1 mt-5 md:mt-0 space-y-2 px-2">
                        <h2 className="text-3xl border-l-2  border-blue-300  font-bold ">Medi Camp</h2>
                        <p className="font-semibold">Summary of the site</p>
                        <hr />
                        <p>
                            A versatile medical camp platform enabling seamless interaction for Participants, Organizers, and Health Professionals. Participants register, manage payments via Camp K Stripe, and track their history. Organizers effortlessly oversee camp details, confirm payments, and manage their own events. Health Professionals express interest in upcoming camp.
                        </p>
                        <div className="flex items-center ">
                            <p className="font-semibold">Technology used:</p>
                            <div className="flex ">
                                <img className="w-8 h-8 rounded-full" src={react} alt="" />
                                <img className="w-8 h-8 rounded-full" src={firebase} alt="" />
                                <img className="w-8 h-8 rounded-full" src={tailwind} alt="" />
                                <img className="w-8 h-8 rounded-full" src={material} alt="" />
                                <img className="w-8 h-8 rounded-full" src={node} alt="" />
                                <img className="w-8 h-8 rounded-full" src={express} alt="" />
                                <img className="w-8 h-8 rounded-full" src={mongodb} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <a href="https://github.com/mdridoyali/medi-camp-client-12" target="blank" className="btn btn-sm btn-outline">Client</a>
                            <a href="https://github.com/mdridoyali/medi-camp-server-12" target="black" className="btn btn-sm btn-outline">Server</a>
                            <a href="https://medicamp-603c8.web.app/" target="blank" className="btn btn-sm bg-blue-600 border-none outline-none hover:text-black text-white">Preview</a>
                        </div>
                    </div>
                </div>
                <hr className="my-8" />
                <div   data-aos="flip-right" className="md:flex ">
                    <div className="flex-1 grid grid-cols-2 gap-3 md:border-r-2  border-blue-300  pr-2">
                        <img className="shadow-xl border-t-2 rounded-md" src={banner} alt="" />
                        <img className="shadow-xl border-t-2 rounded-md" src={popular} alt="" />
                        <img className="shadow-xl border-t-2 rounded-md" src={allblog} alt="" />
                        <img className="shadow-xl border-t-2 rounded-md" src={addblog} alt="" />
                    </div>
                    <div className="flex-1 mt-5 md:mt-0 space-y-2 px-2">
                        <h2 className="text-3xl font-bold border-l-2  border-blue-300   ">Writes World</h2>
                        <p className="font-semibold">Summary of the site</p>
                        <hr />
                        <p>
                            Empower your blogging journey on this platform! Users create accounts, upload, and manage blogs effortlessly. Unique features include restriction on commenting for blog owners, wish list functionality. Explore engaging blogs with intuitive interface, enhanced by optional task completions using React and other technologies.
                        </p>
                        <div className="flex items-center ">
                            <p className="font-semibold">Technology used:</p>
                            <div className="flex ">
                                <img className="w-8 h-8 rounded-full" src={react} alt="" />
                                <img className="w-8 h-8 rounded-full" src={firebase} alt="" />
                                <img className="w-8 h-8 rounded-full" src={tailwind} alt="" />
                                <img className="w-8 h-8 rounded-full" src={node} alt="" />
                                <img className="w-8 h-8 rounded-full" src={express} alt="" />
                                <img className="w-8 h-8 rounded-full" src={mongodb} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <a href="https://github.com/mdridoyali/writes-world-client-11" target="blank" className="btn btn-sm btn-outline">Client</a>
                            <a href="https://github.com/mdridoyali/writes-world-server-11" target="black" className="btn btn-sm btn-outline">Server</a>
                            <a href="https://ass-11-jwt.web.app/" target="blank" className="btn btn-sm bg-blue-600 border-none outline-none hover:text-black text-white">Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

