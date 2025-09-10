"use client";

import Image from "next/image";
import "@/styles/Header.css";
import Link from "next/link";
import { useState } from "react";
import { EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="main-header">
      <nav
        className="mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex items-center justify-between pt-5 pb-5"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex ">
          <Link href="#">
            <span className="sr-only">Your Company</span>
            <Image
              src="/images/BNI_logo.png"
              alt=""
              className="h-10 w-auto"
              width={108}
              height={50}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:block headerback items-center rounded-[40px] p-3 lg:w-[90%]">
          <ul className="flex justify-between items-center list-none gap-2">
            <li className="Experi hover:text-[#cf2030] cursor-pointer pl-4">
              The BNI Experience
            </li>
            <li className="Experi hover:text-[#cf2030] cursor-pointer">
              Our Global Community
            </li>
            <li className="Experi hover:text-[#cf2030] cursor-pointer">
              My BNI Story
            </li>
            <li className="Experi hover:text-[#cf2030] cursor-pointer">
              BNI Franchising
            </li>
            <li className="Experi hover:text-[#cf2030] cursor-pointer">
              About BNI
            </li>
            <li className="Experi email flex gap-1">
               <EnvelopeIcon className="w-6 h-6 text-red-700" />
              support@bni.com
            </li>
            <li className="GetInvited">
              <button className="custom-button rounded-full">
                Get Invited
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/images/BNI_logo.png"
                  alt=""
                  className="h-8 w-auto"
                  width={32}
                  height={32}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                The BNI Experience
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Our Global Community
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                My BNI Story
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                BNI Franchising
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                About BNI
              </Link>
              <Link
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                <button className="nav-slide rounded-full">Get Invited</button>
              </Link>
              <Link
                href="#"
                className="email-slider block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                <EnvelopeIcon className="email-icon h-[20px] w-[35px] text-gray-600" />
                support@bni.com
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
