"use client";

import React from "react";
import Image from "next/image";
import images from "@/constants/images";
import { motion } from "framer-motion";

// Framer Motion variants
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

const OurCommitment: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top: Title, Description, CTA */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Our Commitment to Sustainability
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed mb-4">
                At Credophil, sustainability is at the heart of everything we
                do. We strive to reduce plastic pollution, promote responsible
                waste management, and innovate for a greener future.
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
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
        {/* Bottom: Two Images (Responsive Layout) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-64 md:h-96 overflow-hidden"
          >
            <Image
              src={images.COMMITMENT_LEFT}
              alt="Sustainability commitment left"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-64 md:h-96 overflow-hidden"
          >
            <Image
              src={images.COMMITMENT_RIGHT}
              alt="Sustainability commitment right"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCommitment;
