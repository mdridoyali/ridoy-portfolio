import { Button } from "@material-tailwind/react";
import img from "../assets/Ridoy.jpg"
import resumePdf from "../assets/brand/Ridoy's_Resume.pdf"
import "./style.css"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-scroll";
const About = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resumePdf;
        link.download = "Ridoy's_Resume.pdf"; // Customize the downloaded file name
        link.click();
    };
    return (
        <div  data-aos="slide-right"  id="about" className=" aboutImg text-white my-16 text-center pt-10 ">
            <h1 className='text-3xl font-bold border-b-2 border-lime-500 mb-8 w-max mx-auto'>About Me</h1>

            <div className="md:flex justify-between items-center md:px-10 pb-14 ">
                <div className="w-1/2 mx-auto text-center space-y-5  ">
                    <img className="w-24 h-28 rounded-full mx-auto" src={img} alt="" />
                    <div className="flex justify-center">
                        <Button
                            color="blue"
                            className="btn outline-none border-none  max-w-full rounded-none"
                            onClick={handleDownload}
                        >
                            Download CV <FaCloudDownloadAlt className="text-xl" />
                        </Button>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="btn btn-outline text-white  rounded-none rounded-r-lg border-blue-500 border-2 "
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <p className=" flex-1 mt-7 md:mt-0 text-lg text-left">
                    Hi, I'm Md Ridoy Ali, a passionate and creative Frontend Web Developer.
                    I enjoy turning complex problems into
                    simple, beautiful, and intuitive designs. My goal is to create
                    meaningful and user-friendly web experiences.
                </p>
            </div>

        </div>
    );
};

export default About;

