"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import images from "@/constants/images";

interface Metric {
  id: number;
  value: string;
  label: string;
}

const metricsData: Metric[] = [
  { id: 1, value: "500+", label: "Plastic Recycled (tons)" },
  { id: 2, value: "100+", label: "Collection Centers" },
  { id: 3, value: "1000+", label: "Households Participating" },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
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

const Matrics: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Row: Two Images */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 md:mb-20 relative">
          {/* Left Image */}
          <motion.div
            className="w-full md:w-2/3 h-48 sm:h-64 md:h-[400px] relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={images.MATRICS_LEFT}
              alt="Stacks of recycled materials"
              className="object-cover rounded-sm"
              fill
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full md:w-1/3 h-48 sm:h-64 md:h-[400px] relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src={images.MATRICS_RIGHT}
              alt="Tracking progress and milestones"
              className="object-cover rounded-sm"
              fill
            />
          </motion.div>

          {/* Text overlap for entire row */}
          <div className="absolute bg-white bg-opacity-80 shadow-lg rounded-lg left-4 right-4 md:left-auto md:right-50 md:w-1/3 md:h-fit px-4 md:px-8 py-4 md:py-6 bottom-0 md:bottom-4 transform text-gray-700 text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Tracking Progress and Milestones
            </h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Effective progress tracking and milestone setting are critical
              components...
            </p>
          </div>
        </div>
        {/* Bottom Row: Metrics with CountUp Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {metricsData.map((metric) => {
            // Remove '+' for the count and re-add it later if needed.
            const numericValue = parseInt(metric.value.replace("+", ""), 10);
            const hasPlus = metric.value.includes("+");

            return (
              <motion.div
                key={metric.id}
                variants={itemVariants}
                className="flex flex-col items-center justify-center bg-gray-50 rounded-lg py-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
                  <CountUp
                    end={numericValue}
                    duration={2}
                    enableScrollSpy
                    // Optional: scrollSpyDelay={200}
                  />
                  {hasPlus ? "+" : ""}
                </span>
                <p className="text-gray-700 text-sm sm:text-base text-center">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Matrics;
