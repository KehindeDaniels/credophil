"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import images from "@/constants/images";

// Build an array of your gallery images from the centralized images file.
const galleryImages = [
  images.GALLERY_1,
  images.GALLERY_2,
  images.GALLERY_3,
  images.GALLERY_4,
  images.GALLERY_5,
];

const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lightbox Handlers
  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
      );
    }
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  // Variants for the grid items (entrance animation)
  const gridItemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for the lightbox image sliding effect
  const lightboxVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            See Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Credophil, we offer innovative recycling solutions that transform
            plastic waste into high-quality reusable materials.
          </p>
        </div>

        {/* Horizontal Scrollable Row */}
        <div className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide">
          {galleryImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              variants={gridItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex-shrink-0 cursor-pointer group"
              style={{ width: "300px", height: "200px" }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={imgSrc}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Desktop Arrows: Fixed at viewport edges (visible on md and up) */}
            <button
              className="fixed left-8 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 hidden md:block"
              onClick={showPrev}
            >
              <FaChevronLeft />
            </button>
            <button
              className="fixed right-8 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 hidden md:block"
              onClick={showNext}
            >
              <FaChevronRight />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full p-4"
              key={selectedIndex}
              variants={lightboxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.5,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                onClick={closeLightbox}
              >
                <FaTimes />
              </button>

              {/* Mobile Arrows: Positioned inside container (visible on mobile only) */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 md:hidden"
                onClick={showPrev}
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 md:hidden"
                onClick={showNext}
              >
                <FaChevronRight />
              </button>

              <Image
                src={galleryImages[selectedIndex]}
                alt="Expanded gallery image"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
