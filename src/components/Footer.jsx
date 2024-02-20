import linkedin from "../assets/brand/linkedin.png"
import fb from "../assets/brand/fb.png"
import instagram from "../assets/brand/instagram.jpg"
import email from "../assets/brand/email.png"
import github from "../assets/brand/github.png"
import { FaLongArrowAltRight, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
    return (
      
            <footer className="footer items-center justify-center md:justify-between px-7 py-16 bg-neutral text-neutral-content">
                <aside className="items-center  md:grid-flow-col">
                    <div className="flex items-center w-full">
                        <img className="w-8 h-8 " src={logo} alt="" />
                        <h1 className="text-4xl  font-semibold">Ri<span className="text-amber-500" >doy</span></h1>
                    </div>
                    <div>
                        <div className="flex items-center gap-2"><FaWhatsapp /><p>+8801751437915</p></div>
                        <div className="flex items-center gap-2"> <FaMailBulk /><p>mdridoyislamr@gmail.com</p></div>
                    </div>
                </aside>
                <p className="hidden md:block">Copyright © 2023 - All right reserved</p>
                <nav className="grid-flow-col gap-3 md:place-self-center md:justify-self-end">
                    <div className="text-base mt-1 flex items-center gap-1" ><p>Follow Me on</p><FaLongArrowAltRight /></div>
                    <a href="https://www.linkedin.com/in/md-ridoy-islam-7a3b39280/" ><img className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={linkedin} /></a>
                    <a href="https://www.facebook.com/mdridoy.raj.355" ><img className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={fb} /></a>
                    <a href="https://www.instagram.com/mdridoy.raj.355/?hl=bn" ><img className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={instagram} /></a>
                    <a href="mailto:mdridoyislamr@gmail.com" ><img className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={github} /></a>
                    <a href="https://github.com/mdridoyali" ><img className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={email} /></a>
                </nav>
                <p className="block md:hidden">Copyright © 2023 - All right reserved</p>
            </footer>
   
    );
};

export default Footer;