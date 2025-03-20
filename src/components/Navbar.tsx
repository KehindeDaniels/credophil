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
    { name: "Blog", route: "/blog" },
    { name: "Contact", route: "/contact" },
  ];

  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div
      className={`w-full h-[90px] fixed z-50 top-0 bg-white text-primary py-3 border-b`}
    >
      <div className="w-full flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
        </Link>

        <div className=" lg:flex hidden items-center gap-14">
          {navOptions.map((navItem, index) => {
            const isActive = pathname === navItem.route;

            return (
              <Link key={index} href={navItem.route} className="relative group">
                {navItem.name}
                <span
                  className={`absolute left-0 transform bottom-0 h-[2px] bg-orange transition-all duration-300 ease-in-out ${
                    isActive ? "w-[19px]" : "w-0 group-hover:w-[19px]"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        <div className="lg:flex hidden items-center gap-4">
          <button
            className="
            hidden md:inline-flex
            items-center justify-center
            bg-[#0070f3] hover:bg-[#0059c9]
            text-white font-medium
            px-5 py-2
            rounded-full
            transition-colors
            duration-200
          "
          >
            Get started
          </button>
        </div>

        <motion.div
          whileTap={{ scale: 0.85 }}
          className="mobile-nav lg:hidden flex cursor-pointer"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <motion.div
            animate={
              mobileNavOpen
                ? { rotateZ: 43, y: 6, transition: { duration: 0.1 } }
                : {}
            }
            className="nav-rect"
          ></motion.div>
          <motion.div
            animate={
              mobileNavOpen
                ? { opacity: 0, transition: { duration: 0.1 } }
                : { opacity: 1, transition: { delay: 0.3 } }
            }
            className="nav-rect"
          ></motion.div>
          <motion.div
            animate={
              mobileNavOpen
                ? { rotateZ: -40, y: -4, transition: { duration: 0.2 } }
                : {}
            }
            className="nav-rect"
          ></motion.div>
        </motion.div>
      </div>

      {/* Only show the animation after the component has mounted */}
      {hasMounted && (
        <motion.div
          animate={{ height: mobileNavOpen ? "calc(100% - 90px)" : 0 }}
          className={`fixed inset-0 overflow-hidden top-[90px] z-50 bg-white flex flex-col w-full lg:hidden flex-grow transition-height duration-300`}
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col flex-grow">
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
              <div className="flex flex-col gap-5">
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
                  Get started
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
