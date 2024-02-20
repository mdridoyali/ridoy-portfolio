// import { Button } from "@material-tailwind/react";
import img from "../assets/Ridoy.jpg"
// import resumePdf from "../assets/Tools/Ridoy's-resume.pdf"
import "./style.css"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import Title from "./Title";
const About = () => {
    // const handleDownload = () => {
    //     // window.open(resumePdf, '_blank');
    //     const link = document.createElement("a");
    //     link.href = '/resume.pdf';
    //     link.download = "Ridoy's-resume"; 
    //     link.click();
    //     // Replace the link with the modified Google Drive link
    // };
    return (
        <div data-aos="slide-right" id="about" className=" aboutImg text-white my-16 text-center pt-10 ">
            <Title heading={'About me'} />
            <div className="md:flex justify-between items-center md:px-10 pb-14 ">
                <div className="w-1/2 mx-auto text-center space-y-5  ">
                    <img className="w-24 h-28 rounded-full mx-auto" src={img} alt="" />
                    <div className="flex justify-center">
                        <a
                          
                            href="/Ridoy's-resume.pdf"
                            download
                            // target="_blank"
                            className="btn outline-none border-none bg-blue-500 text-white hover:text-black  max-w-full rounded-none"
                            // onClick={handleDownload}
                        >
                            Download CV <FaCloudDownloadAlt className="text-xl" />
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="btn btn-outline text-white  rounded-none rounded-r-lg border-blue-500 border-2 "
                        >
                            Contact me
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

