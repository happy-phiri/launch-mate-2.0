import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import logo from "../assets/launchmate-logo1.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showNav]);

  return (
    <header className="z-50">
      <div className="max-w-[1440px] min-xl:px-0 px-5 mx-auto py-3 flex justify-between items-center">
        <Link to="/">
          <img src={logo} width={100} alt="launch mate logo" />
        </Link>

        <button
          onClick={() => setShowNav((prevState) => !prevState)}
          className="z-20">
          {showNav ? (
            <IoCloseSharp
              className="text-5xl cursor-pointer bg-amber-50 text-prussian-blue rounded-full p-2"
              height={75}
              width={75}
            />
          ) : (
            <IoMenuSharp
              className="text-5xl cursor-pointer bg-prussian-blue rounded-full text-amber-50 p-2"
              height={75}
              width={75}
            />
          )}
        </button>
      </div>

      {/* NAVIGATION BAR */}
      <nav
        className={`font-montserrat tracking-wider text-lg md:text-xl bg-dark-bg text-white flex flex-col justify-center items-center gap-10 fixed inset-0 transition-transform duration-500 ease-in-out  z-10 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-selective-yellow" : "hover:text-selective-yellow"
          }
          onClick={() => setShowNav(false)}>
          Home
        </NavLink>
        <NavLink
          to="guide"
          className={({ isActive }) =>
            isActive ? "text-selective-yellow" : "hover:text-selective-yellow"
          }
          onClick={() => setShowNav(false)}>
          Get Started Guide
        </NavLink>
        <NavLink
          to="generate-canvas"
          className={({ isActive }) =>
            isActive ? "text-selective-yellow" : "hover:text-selective-yellow"
          }
          onClick={() => setShowNav(false)}>
          Create Your Canvas
        </NavLink>
        {/* <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-selective-yellow" : "hover:text-selective-yellow"
          }
          onClick={() => setShowNav(false)}>
          About
        </NavLink>
        <NavLink
          to="tools"
          className={({ isActive }) =>
            isActive ? "text-selective-yellow" : "hover:text-selective-yellow"
          }
          onClick={() => setShowNav(false)}>
          Tools
        </NavLink> */}
      </nav>

      {showNav && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-5"
          onClick={() => setShowNav(false)}
        />
      )}
    </header>
  );
};

export default Header;
