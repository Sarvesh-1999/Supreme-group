import React from "react";
import logo from "../assets/logo.png"
import footerbg from "../assets/footer.png"

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden ">
      {/* Decorative background elements */}
      <div className="absolute right-0 bottom-0 h-80"><img src={footerbg} alt="footer bg" /></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Logo Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="supreme group" />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Applications Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-sm mb-6 tracking-wide">APPLICATIONS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Apparel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Filtration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Customised Nonwoven
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-sm mb-6 tracking-wide">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Global Competency
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Innovation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  ESG Impact
                </a>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-sm mb-6 tracking-wide">MORE</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-sm mb-6 tracking-wide">FOLLOW US</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-gray-600 text-sm">©2024. All Rights Reserved.</p>
          <p className="text-gray-600 text-sm">
            Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.
          </p>
        </div>
      </div>
    </footer>
  );
}
