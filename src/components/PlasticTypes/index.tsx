"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import images from "@/constants/images";

interface PetFlake {
  id: number;
  title: string;
  image: string;
  description?: string;
}

const petFlakesData: PetFlake[] = [
  {
    id: 1,
    title: "Adapting and Thriving in a Changing World",
    image: images.FLAKES_BLUE,
  },
  {
    id: 2,
    title: "Adapting and Thriving in a Changing World",
    image: images.WHITE,
  },
  {
    id: 3,
    title: "Adapting and Thriving in a Changing World",
    image: images.FLAKES_GREEN,
  },
];

// Variants for the heading and intro text
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Container variant for the cards grid
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variant for each card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PetFlakesSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Animated Section Heading & Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3">
            Types of PET Flakes We Recycle
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            We process high-quality PET flakes, ensuring they are repurposed
            into sustainable materials for various applications.
          </p>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {petFlakesData.map((flake) => (
            <motion.div
              key={flake.id}
              className="relative rounded-lg overflow-hidden shadow-lg group"
              variants={cardVariants}
            >
              {/* Image */}
              <Image
                src={flake.image}
                alt={flake.title}
                width={400}
                height={400}
                className="w-full h-64 object-cover object-center"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-semibold drop-shadow-md">
                  {flake.title}
                </h3>
                {flake.description && (
                  <p className="mt-1 text-sm text-white drop-shadow-md">
                    {flake.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PetFlakesSection;
