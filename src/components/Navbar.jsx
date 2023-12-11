import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = (
    <>
      <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
      <li><Link to="about" smooth={true} duration={500}>About</Link></li>
      <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
    </>
  )
  return (
    <div className="">
      <div className="navbar fixed max-w-7xl bg-slate-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className=" text-3xl font-bold ">Ri<span className="text-amber-500" >doy</span></a>
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