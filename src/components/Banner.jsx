import img from "../assets/medi/ridoy2.jpg"
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div id="home" className="md:flex lg:gap-10 px-2 md:px-20 py-24 bg-gray-100">
            <div className="md:w-1/2 mt-10 mx-auto md:hidden">
                <div className="flex justify-end items-center ">
                    <div className="bg-cyan-300 rounded-l-full ">
                        <div className="bg-cyan-200 my-1 py-1 ml-10 rounded-l-full ">
                            <img className="w-64 h-64 ml-10 rounded-l-full " src={img} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 mx-auto flex justify-center items-center ">
                <div className="space-y-5 text-left">
                    <h1 className=" text-3xl md:text-4xl  font-semibold">
                        <Typed
                            strings={['Hello,<br/> Welcome to my portfolio']}
                            typeSpeed={70}
                        />
                    </h1>
                    <h1 className=" text-4xl md:text-5xl  font-semibold">
                        I'm Md Ri<span className="text-amber-500" >doy</span>
                        {/* <Typed
                            strings={['Hello,<br/> Welcome to my portfolio']}
                            typeSpeed={70}
                        /> */}
                    </h1>
                    <h2 className="text-2xl ">Front End Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectssitatibus autem corrupti eveniet enim quibusdam iusto.</p>
                </div>
            </div>
            <div className="md:w-1/2 mt-10 mx-auto hidden md:block">
                <div className="flex justify-end items-center ">
                    <div className="bg-cyan-300 rounded-l-full ">
                        <div className="bg-cyan-200 my-1 py-1 ml-10 rounded-l-full ">
                            <img className="w-80 h-80 ml-10 rounded-l-full " src={img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;