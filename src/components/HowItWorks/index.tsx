"use client";

import React from "react";
import Image from "next/image";
import images from "@/constants/images";
import { motion } from "framer-motion";

interface Step {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
}

const stepsData: Step[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Collect & Sort",
    description:
      "Drop off your plastic waste at our centers or schedule a pickup.",
    linkText: "Read More",
    linkHref: "/collect-and-sort",
    image: images.COLLECT_SORT,
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Process & Recycle",
    description:
      "Our experts carefully process the plastics, ensuring optimal recycling methods.",
    linkText: "Read More",
    linkHref: "/process-and-recycle",
    image: images.PROCESS_RECYCLE,
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Repurpose & Reuse",
    description:
      "Recycled plastics are transformed into eco-friendly products, closing the loop.",
    linkText: "Read More",
    linkHref: "/repurpose-and-reuse",
    image: images.REPURPOSE_REUSE,
  },
];

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

const HowItWorks: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Step-by-Step Recycling Process
          </h2>
        </div>

        <motion.div
          className="space-y-4 sm:space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {stepsData.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="
                flex flex-col
                sm:flex-row
                items-start
                sm:items-center
                gap-4
                sm:gap-6
                bg-gray-50
                rounded-lg
                shadow-sm
                hover:shadow-md
                transition-shadow
                duration-300
                p-4
                sm:p-6
              "
            >
              <div className="flex items-start w-full sm:w-3/4">
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-200 mr-4">
                  {step.stepNumber}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-1/4 mt-4 sm:mt-0">
                <a
                  href={step.linkHref}
                  className="text-blue-600 text-sm sm:text-base hover:underline font-medium mr-4 sm:mr-6"
                >
                  {step.linkText}
                </a>
                <div className="relative ">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={600}
                    className="object-cover rounded-md"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
