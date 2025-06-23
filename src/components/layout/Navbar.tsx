import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Social links - Desktop */}
        <div className="hidden sm:flex gap-4">
          <a
            href="https://www.instagram.com/harmansinghgill13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="text-pink-500 hover:text-pink-600" />
          </a>
          <a
            href="https://www.youtube.com/@sikandersinghyt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} className="text-red-600 hover:text-red-700" />
          </a>
          <a
            href="www.linkedin.com/in/harman-singh-19387328b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="text-blue-500 hover:text-blue-600" />
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* Social links - Mobile */}
              <li className="flex gap-3 mt-2">
                <a
                  href="https://www.instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} className="text-pink-500 hover:text-pink-600" />
                </a>
                <a
                  href="https://www.youtube.com/YOUR_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={20} className="text-red-600 hover:text-red-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/YOUR_PROFILE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} className="text-blue-500 hover:text-blue-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
