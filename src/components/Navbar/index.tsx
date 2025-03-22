"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Nav = () => {
  const navOptions = [
    { name: "Home", route: "/" },
    { name: "About us", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Blog", route: "/blog" },
    { name: "Contact us", route: "/contact" },
  ];

  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div
      className="
        w-full h-[90px] 
        fixed z-50 top-0 
        bg-white text-primary 
        border-b
      "
    >
      {/* Desktop/Nav Bar Row */}
      <div
        className="
          max-w-7xl mx-auto
          h-full
          px-4
          flex items-center 
          justify-between
        "
      >
        {/* Left: Logo */}
        <Link href="/">
          <Image src="/logo.svg" width={100} height={100} alt="logo" priority />
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
          {navOptions.map((navItem, index) => {
            const isActive = pathname === navItem.route;
            return (
              <Link
                key={index}
                href={navItem.route}
                className="relative group text-gray-700"
              >
                {navItem.name}
                <span
                  className={`
                    absolute left-0 bottom-0 
                    h-[2px] bg-orange 
                    transition-all duration-300 ease-in-out
                    ${isActive ? "w-[19px]" : "w-0 group-hover:w-[19px]"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: GetStarted Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <button
            className="
              bg-[#0070f3] hover:bg-[#0059c9]
              text-white font-medium
              px-5 py-2
              rounded-full
              transition-colors
              duration-200
            "
          >
            GetStarted
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <motion.div
          whileTap={{ scale: 0.85 }}
          className="lg:hidden flex cursor-pointer flex-col"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {/* Top bar */}
          <motion.div
            animate={
              mobileNavOpen
                ? { rotateZ: 45, y: 12, transition: { duration: 0.2 } }
                : { rotateZ: 0, y: 0 }
            }
            className="w-7 h-0.5 bg-gray-600 mb-2"
          />
          {/* Middle bar */}
          <motion.div
            animate={
              mobileNavOpen
                ? { opacity: 0, transition: { duration: 0.2 } }
                : { opacity: 1, transition: { duration: 0.2 } }
            }
            className="w-7 h-0.5 bg-gray-600 mb-2"
          />
          {/* Bottom bar */}
          <motion.div
            animate={
              mobileNavOpen
                ? { rotateZ: -45, y: -8, transition: { duration: 0.2 } }
                : { rotateZ: 0, y: 0 }
            }
            className="w-7 h-0.5 bg-gray-600"
          />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {hasMounted && (
        <motion.div
          animate={{ height: mobileNavOpen ? "calc(100% - 90px)" : 0 }}
          className="
            fixed inset-0 
            top-[90px] 
            z-50 bg-white 
            flex flex-col w-full 
            lg:hidden
            overflow-hidden 
            transition-height 
            duration-300
          "
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col flex-grow px-6 pt-4">
              {navOptions.map((navItem, index) => (
                <motion.div
                  key={index}
                  className="py-4"
                  initial={{ y: 45, opacity: 0 }}
                  animate={
                    mobileNavOpen
                      ? {
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.4,
                            delay: 0.1 + index * 0.1,
                          },
                        }
                      : {
                          y: 45,
                          opacity: 0,
                          transition: { duration: 0.3 },
                        }
                  }
                >
                  <Link
                    href={navItem.route}
                    onClick={() => setMobileNavOpen(false)}
                    className="relative group text-3xl font-bold"
                  >
                    {navItem.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="py-7 border-t text-center">
              <button
                className="
                  bg-[#0070f3] hover:bg-[#0059c9]
                  text-white font-medium
                  px-5 py-2
                  rounded-full
                  transition-colors
                  duration-200
                "
              >
                GetStarted
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
