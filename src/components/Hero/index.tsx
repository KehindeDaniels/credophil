"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Import the recycle icon from react-icons/fa
import { FaRecycle } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="
        relative 
        w-full 
        h-dvh
        flex 
        items-center 
        justify-center
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg" // Update path if needed
          alt="Plastic recycling facility"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-[#020C28]/80 
          to-[#060527]/80
          -z-10
        "
      />

      {/* Rotating Icons */}
      <motion.div
        className="absolute top-[5%] left-[8%] md:top-[10%] md:left-[15%]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        <FaRecycle className="w-8 h-8 md:w-16 md:h-16 text-green-300/40 blur-[0.5px]" />
      </motion.div>

      <motion.div
        className="absolute bottom-[8%] right-[10%] md:bottom-[15%] md:right-[12%]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      >
        <FaRecycle className="w-6 h-6 md:w-12 md:h-12 text-green-200/30 blur-[0.3px]" />
      </motion.div>

      {/* Hero Content */}
      <div
        className="
          text-white 
          text-center 
          px-4 
          max-w-2xl
        "
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Turning Plastic Waste Into a Sustainable Future
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl mb-8"
        >
          Join us in recycling for a cleaner planet. Every plastic recycled is a
          step towards sustainability. Enjoy the best of our service.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        >
          <button
            className="
              bg-[#0070f3] 
              hover:bg-[#0059c9] 
              text-white 
              font-medium 
              px-6 
              py-3 
              rounded-full 
              transition-colors 
              duration-200
            "
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Social Icons (Optional) */}
      <div
        className="
          absolute 
          right-8 
          bottom-8 
          flex 
          flex-col 
          gap-3 
          text-white
        "
      >
        {/* Example for Instagram */}
        <a href="https://instagram.com" aria-label="Instagram" target="_blank">
          {/* Replace with your preferred icon or an SVG */}
          <div className="w-6 h-6 bg-gray-400 hover:bg-gray-300" />
        </a>
        {/* Example for Facebook */}
        <a href="https://facebook.com" aria-label="Facebook" target="_blank">
          <div className="w-6 h-6 bg-gray-400 hover:bg-gray-300" />
        </a>
        {/* Example for Twitter */}
        <a href="https://twitter.com" aria-label="Twitter" target="_blank">
          <div className="w-6 h-6 bg-gray-400 hover:bg-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
