import img from "../assets/Ridoy.jpg"
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div id="home" className="md:flex gap-10 px-2 md:px-20 py-32 bg-gray-100">
            <div className="md:w-1/2 mt-10 mx-auto md:hidden">
                <div className="flex h-full justify-center items-center ">
                    <img className="w-60 h-60 rounded-full" src={img} />
                </div>
            </div>
            <div className="md:w-1/2 mx-auto flex justify-center items-center ">
                <div className="space-y-5 text-center md:text-left">
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
                <div className="flex h-full justify-center items-center ">
                    <img className="w-60 h-60 rounded-full" src={img} />
                </div>
            </div>
        </div>
    );
};

export default Banner;