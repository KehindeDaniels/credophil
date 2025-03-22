"use client";

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Matrics from "@/components/Matric";
import MovementSection from "@/components/Movement";
import PetFlakesSection from "@/components/PlasticTypes";
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
    </div>
  );
};

export default LandingPage;
