"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import images from "@/constants/images";

// Define variants for the image and text animations
const imageVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const MovementSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariant}
        >
          <Image
            src={images.MOVEMENT} // Using centralized image path
            alt="Recycling movement"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>

        {/* Right Column: Text & CTA */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariant}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join the Recycling Movement.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The future of our planet depends on the choices we make today. By
            choosing to recycle, you play a crucial role in preserving nature,
            reducing landfill waste, and fighting climate change. Creddohh makes
            recycling easy and accessible, empowering individuals and businesses
            to contribute to a healthier world.
          </p>
          <Link href="/learn-more">
            <button
              className="
                bg-blue-600 
                hover:bg-blue-700 
                text-white 
                font-medium 
                px-6 
                py-3 
                rounded-full 
                transition-colors 
                duration-200
              "
            >
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MovementSection;
