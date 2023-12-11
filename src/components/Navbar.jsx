import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [active, setActive] = useState(false);

  // const navItems = (
  //   <>
  //     <li><Link className="text-white text-xl " to="home" smooth={true} duration={500}>Home</Link></li>
  //     <li><Link className="text-white text-xl " to="about" smooth={true} duration={500}>About</Link></li>
  //     <li><Link className="text-white text-xl " to="contact" smooth={true} duration={500}   spy={true}
  //         activeClass="text-red-500">Contact</Link></li>
  //   </>
  // )

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
    <div className="">
      <div className="navbar fixed max-w-[1349px] md:pt-5   md:-mt-[20px] bg-white opacity-90">
        <div className="navbar-start pl-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className=" text-4xl font-bold  ">Ri<span className="text-amber-500" >doy</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;