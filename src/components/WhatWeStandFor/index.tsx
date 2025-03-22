"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaBalanceScale } from "react-icons/fa";

// Data interface
interface StandForItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}
// Example data array
const standForData: StandForItem[] = [
  {
    id: 1,
    title: "Mission",
    description:
      "Transforming plastics waste into sustainable solutions, promoting environmental responsibility and fostering a cleaner, greener future.",
    icon: <FaBullseye className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "A world free from plastic pollution, where recycling drives innovation, sustainability, and a thriving circular economy.",
    icon: <FaLightbulb className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 3,
    title: "Values",
    description:
      "Sustainability, innovation, community, responsibility, transparency, and continuous improvement for a cleaner and greener planet.",
    icon: <FaBalanceScale className="w-8 h-8 text-blue-500" />,
  },
];

// Framer Motion Variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger the card animations
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhatWeStandFor: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Animated Heading */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold mb-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          What We Stand For
        </motion.h2>

        {/* Cards Container */}
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {standForData.map((item) => (
            <motion.div
              key={item.id}
              className="
                flex flex-col items-center
                text-center
                bg-gray-50
                rounded-lg
                p-6
                shadow-sm
                hover:shadow-md
                transition-shadow
                duration-300
              "
              variants={cardVariants}
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;
