"use client";

import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Matrics from "@/components/Matric";
import MovementSection from "@/components/Movement";
import OurCommitment from "@/components/OurCommitment";
import PetFlakesSection from "@/components/PlasticTypes";
import Testimonials from "@/components/Testimonial";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhatWeStandFor from "@/components/WhatWeStandFor";
import AOS from "aos";
import { useEffect } from "react";
const LandingPage = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <Hero />
      <MovementSection />
      <PetFlakesSection />
      <WhatWeStandFor />
      <Matrics />
      <HowItWorks />
      <WhatWeOffer />
      <OurCommitment />
      <GallerySection />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
