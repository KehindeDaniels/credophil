"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRecycle, FaBuilding, FaShoppingCart } from "react-icons/fa";

// Types for the offerings data
interface Offering {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}
const offeringsData: Offering[] = [
  {
    id: 1,
    title: "Plastic Waste Collection",
    description: "We offer home and business plastic pickup services.",
    icon: <FaRecycle className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Corporate Recycling Programs",
    description: "Help your company go green with our recycling solutions.",
    icon: <FaBuilding className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Recycled Product Sales",
    description: "Purchase eco-friendly products made from recycled plastic.",
    icon: <FaShoppingCart className="w-6 h-6 text-blue-600" />,
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhatWeOffer: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Title, Description, CTA */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              What the Company Offers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
              We adhere to the highest standards of quality in all our products
              and services. From design and development to manufacturing, we
              focus on delivering exceptional value.
            </p>
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
          </motion.div>

          {/* Right Column: Offerings Card */}
          <motion.div
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div
              className="
                bg-gray-50 
                rounded-xl 
                shadow-md 
                p-6 
                space-y-4 
              "
            >
              {offeringsData.map((offering) => (
                <motion.div
                  key={offering.id}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">{offering.icon}</div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
