import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import linkedinLogo from "../assets/linkendin.png"
import translateLogo from "../assets/translate.png"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <div className="container  mx-auto h-full py-2 xl:py-3  flex items-center justify-between gap-4">
        <a href="/" className="block">
          <img
            src={logo}
            alt="Logo of Supreme with text"
            loading="eager"
            className="h-10 cursor-pointer"
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          <button className="bg-[#5CD6FF] h-[50px] rounded-[100px] py-2.5 px-8 text-[16px]">
            Contact Us
          </button>
          <span>
            <img src={linkedinLogo} alt="" />
          </span>
          <span className="flex font-semibold text-[12px] items-center">
            <img src={translateLogo} alt="" />
            ENG
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
