import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png"
const Navbar = () => {
  const [active, setActive] = useState(false);
  const navItems = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          // className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          // className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          // className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="project"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          // className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          // className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Educations
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          // className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          // className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
      <div className="navbar border-b fixed max-w-[1700px] md:pt-0 -mt-6  md:-mt-[24px] bg-white opacity-90 z-50">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content -ml-2 md:-ml-12 rounded-none mt-2 z-[1] p-2 shadow bg-base-100 h-screen w-52">
              {navItems}
            </ul>
          </div>
          <img className="w-8" src={logo} alt="" />
          <a className=" text-4xl font-bold  ">Ri<span className="text-amber-500" >doy</span></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
  );
};

export default Navbar;