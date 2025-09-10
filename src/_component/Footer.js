// import React from "react";
// import "@/styles/Footer.css";
// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
//   ArrowRightIcon,
// } from "@heroicons/react/24/solid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faLinkedinIn,
//   faInstagram,
//   faYoutube,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <footer className="footer-main pt-10 pb-6">
//       <div className="mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
//         <div className="hidden md:grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6 py-6 lg:py-8">
//           <div>
//             <ul>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="font-bold text-white hover:text-red-500 transition"
//                 >
//                   The BNI Experience
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="font-bold text-white hover:text-red-500 transition"
//                 >
//                   Our Global Community
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="font-bold text-white hover:text-red-500 transition"
//                 >
//                   My BNI Story
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="font-bold text-white hover:text-red-500 transition"
//                 >
//                   BNI Franchising
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <ul>
//               <li className="mb-3 font-bold text-white">About Us</li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Leadership
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   National Directors
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Our Founder
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   BNI® Foundation
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <ul>
//               <li className="mb-3 font-bold text-white">The Latest</li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Blog & News
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Networking Tips
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Global Events
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <ul>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Find a Chapter
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Start a Chapter
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Exclusive Member Benefits
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <ul>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   Member Services
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   BNI Connect
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   BNI Business Builder
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   BNI Brandshare
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   BNI US Store
//                 </a>
//               </li>
//               <li className="mb-3">
//                 <a
//                   href="#"
//                   className="text-white hover:text-red-500 transition"
//                 >
//                   BNI Global Store
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <ul>
//               <li className="mb-3 flex gap-2 items-center text-white">
//                 <PhoneIcon className="w-5 h-5" />
//                 <span>In U.S. (800)-825-8286</span>
//               </li>
//               <li className="mb-3 flex gap-2 items-center text-white">
//                 <MapPinIcon className="w-6 h-6" />
//                 <span>3430 Toringdon Way, Suite 300 Charlotte, NC 28277</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="md:hidden py-6 space-y-4">
//           {[
//             "The BNI Experience",
//             "Our Global Community",
//             "My BNI Story",
//             "BNI Franchising",
//             "About Us",
//             "The Latest",
//             "Join BNI",
//             "Member Services",
//             "Contact Us",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="flex justify-between items-center border-b border-white pb-2 text-white font-semibold"
//             >
//               <span>{item}</span>
//               {[
//                 "About Us",
//                 "The Latest",
//                 "Join BNI",
//                 "Member Services",
//               ].includes(item) && <span className="text-lg">→</span>}
//             </div>
//           ))}

//           <div className="mt-6 space-y-3 text-white text-sm">
//             <div className="flex items-center gap-2">
//               <PhoneIcon className="w-5 h-5" />
//               <span>In U.S. (800)-825-8286</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPinIcon className="w-6 h-6" />
//               <span>3430 Toringdon Way, Suite 300 Charlotte, NC 28277</span>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6">
//           <div>
//             <p className="text-white font-semibold">BNI SuccessNet™</p>
//             <p className="text-sm text-white">
//               Sign up for exclusive networking tips and more.
//             </p>
//           </div>

//           <div className="relative w-full max-w-xs">
//             <input
//               type="text"
//               placeholder="Email"
//               className="w-full bg-white rounded-3xl px-4 pr-12 text-sm h-12 focus:outline-none"
//             />
//             <button className="fto-btn absolute right-1 top-1 text-white bg-red-600 px-3 h-10 rounded-3xl flex items-center justify-center hover:bg-red-700 transition">
//               <ArrowRightIcon className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="flex items-center gap-3">
//             <p className="text-white font-semibold">Follow BNI</p>
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faFacebookF}
//                 className="w-6 h-6 text-white hover:text-red-500"
//               />
//             </a>
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faLinkedinIn}
//                 className="w-6 h-6 text-white hover:text-red-500"
//               />
//             </a>
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faInstagram}
//                 className="w-6 h-6 text-white hover:text-red-500"
//               />
//             </a>
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faYoutube}
//                 className="w-6 h-6 text-white hover:text-red-500"
//               />
//             </a>
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faTwitter}
//                 className="w-6 h-6 text-white hover:text-red-500"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import React, { useState } from "react";
import "@/styles/Footer.css";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const mobileMenus = [
    {
      title: "The BNI Experience",
      subMenu: [],
    },
    {
      title: "Our Global Community",
      subMenu: [],
    },
    {
      title: "My BNI Story",
      subMenu: [],
    },
    {
      title: "BNI Franchising",
      subMenu: [],
    },
    {
      title: "About Us",
      subMenu: [
        { name: "Leadership", href: "#" },
        { name: "National Directors", href: "#" },
        { name: "Our Founder", href: "#" },
        { name: "BNI® Foundation", href: "#" },
      ],
    },
    {
      title: "The Latest",
      subMenu: [
        { name: "Blog & News", href: "#" },
        { name: "Networking Tips", href: "#" },
        { name: "Global Events", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Join BNI",
      subMenu: [],
    },
    {
      title: "Member Services",
      subMenu: [
        { name: "BNI Connect", href: "#" },
        { name: "BNI Business Builder", href: "#" },
        { name: "BNI Brandshare", href: "#" },
        { name: "BNI US Store", href: "#" },
        { name: "BNI Global Store", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      subMenu: [],
    },
  ];

  return (
    <footer className="footer-main pt-10 pb-6">
      <div className="mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        {/* Desktop Footer */}
        <div className="hidden md:grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6 py-6 lg:py-8">
          <div>
            <ul>
              <li className="mb-3">
                <a
                  href="#"
                  className="font-bold text-white hover:text-red-500 transition"
                >
                  The BNI Experience
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="font-bold text-white hover:text-red-500 transition"
                >
                  Our Global Community
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="font-bold text-white hover:text-red-500 transition"
                >
                  My BNI Story
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="font-bold text-white hover:text-red-500 transition"
                >
                  BNI Franchising
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-3 font-bold text-white">About Us</li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Leadership
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  National Directors
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Our Founder
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  BNI® Foundation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-3 font-bold text-white">The Latest</li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Blog & News
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Networking Tips
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Global Events
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Find a Chapter
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Start a Chapter
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Exclusive Member Benefits
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  Member Services
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  BNI Connect
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  BNI Business Builder
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  BNI Brandshare
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  BNI US Store
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white hover:text-red-500 transition">
                  BNI Global Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-3 flex gap-2 items-center text-white">
                <PhoneIcon className="w-5 h-5" />
                <span>In U.S. (800)-825-8286</span>
              </li>
              <li className="mb-3 flex gap-2 items-center text-white">
                <MapPinIcon className="w-6 h-6" />
                <span>3430 Toringdon Way, Suite 300 Charlotte, NC 28277</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer Accordion */}
        <div className="md:hidden py-6 space-y-4 sm:py-2">
          {mobileMenus.map((item, i) => (
            <div key={i}>
              {/* Main menu */}
              <div
                className="flex justify-between items-center border-b border-white pb-2 text-white font-semibold cursor-pointer"
                onClick={() => setOpenMenu(openMenu === i ? null : i)}
              >
                <span>{item.title}</span>
                {item.subMenu.length > 0 && (
                  <span className="text-lg">{openMenu === i ? "−" : "→"}</span>
                )}
              </div>

              {/* Submenu */}
              {openMenu === i && item.subMenu.length > 0 && (
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  {item.subMenu.map((sub, idx) => (
                    <li key={idx}>
                      <a
                        href={sub.href}
                        className="text-white hover:text-red-500 transition"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact Info */}
          <div className="mt-6 space-y-3 text-white text-sm">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              <span>In U.S. (800)-825-8286</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-6 h-6" />
              <span>3430 Toringdon Way, Suite 300 Charlotte, NC 28277</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6">
          <div>
            <p className="text-white font-semibold">BNI SuccessNet™</p>
            <p className="text-sm text-white">
              Sign up for exclusive networking tips and more.
            </p>
          </div>

          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Email"
              className="w-full bg-white rounded-3xl px-4 pr-12 text-sm h-12 focus:outline-none"
            />
            <button className="fto-btn absolute right-1 top-1 text-white bg-red-600 px-3 h-10 rounded-3xl flex items-center justify-center hover:bg-red-700 transition">
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-white font-semibold">Follow BNI</p>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-6 h-6 text-white hover:text-red-500"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-6 h-6 text-white hover:text-red-500"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 text-white hover:text-red-500"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faYoutube}
                className="w-6 h-6 text-white hover:text-red-500"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-6 h-6 text-white hover:text-red-500"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
