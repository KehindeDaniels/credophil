"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

// Data interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
}

// Example testimonial data
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Eco Plast",
    role: "Marketing Specialist",
    feedback:
      "Best recycling initiative! Seeing the transformation of wasteful products is incredible.",
  },
  {
    id: 2,
    name: "Vicfold",
    role: "Marketing Specialist",
    feedback:
      "Making a real difference! - They helped reduce plastic waste in our area and also helped to alleviate poverty.",
  },
  {
    id: 3,
    name: "Solidtrates",
    role: "Marketing Specialist",
    feedback:
      "They are open and transparent and it’s very nice doing business with Credophil. I love every bit of their services.",
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Experiences Shared by Our Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The team at WCKA Toolkit provided unparalleled support throughout
            our project. Their expertise and dedication were evident from day
            one, helping us navigate complex challenges.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4 text-blue-600">
                <FaQuoteLeft className="w-6 h-6" />
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                {testimonial.feedback}
              </p>

              {/* Name & Role */}
              <div className="mt-auto">
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
