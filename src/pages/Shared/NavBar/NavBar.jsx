import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const navItems = (
  <>
    <li className="animated_Link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li className="animated_Link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/about"
      >
        About
      </NavLink>
    </li>
    <li className="animated_Link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/skills"
      >
        Skills
      </NavLink>
    </li>
    <li className="animated_Link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/projects"
      >
        Projects
      </NavLink>
    </li>
    <li className="animated_Link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/contact"
      >
        Contact
      </NavLink>
    </li>
  </>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <>
      <nav className="w-full font-semibold lg:w-10/12 mx-auto px-5 lg:px-0 md:px-0 py-4 relative">
        <div className="flex items-center justify-between">
          <div className=" flex justify-center items-center gap-1">
            <img className="w-12 lg:w-16" src="/Naimul_Islam.png" alt="" />
            <h2 className="text-cyan-600 text-2xl lg:text-3xl font-bold text-animate">
              Naimul Islam
            </h2>
          </div>
          <div className="hidden lg:block">
            <ul className="text-slate-200 text-xl flex justify-center gap-5 items-center ">
              {navItems}
            </ul>
          </div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6 text-cyan-400"></FaTimes>
            ) : (
              <FaBars className="w-6 h-6 text-cyan-400"></FaBars>
            )}
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="text-slate-200 text-xl absolute z-40 transition duration-500 bg-gray-900 w-full lg:hidden">
          <ul className="border-2 rounded-md shadow shadow-cyan-400 border-cyan-500 py-4 mx-2 flex flex-col justify-center items-center gap-5">
            {navItems}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
