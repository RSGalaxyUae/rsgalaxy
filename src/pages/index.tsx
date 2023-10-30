import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import HeroSection from "@/components/section/HeroSection";
import { SectionDescription, SectionTitle } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Overlay from "@/components/shared/Overlay";
import FeatureCard from "@/components/shared/FeatureCard";
import { Eye, Gem, Target } from "lucide-react";
import AllServicesSection from "@/components/section/AllServicesSection";
import CertificateSliderSection from "@/components/section/CertificateSliderSection";
import CtaSection from "@/components/section/CtaSection";
import AboutSection from "@/components/section/AboutSection";
import FeaturesSection from "@/components/section/FeaturesSection";
import EnquirySection from "@/components/section/EnquirySection";





export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <HeroSection />

      {/* FEATURE SECTION */}

      <FeaturesSection />


      {/* ABOUT SECTION */}
      <AboutSection />


      {/* Service section */}
      <AllServicesSection />


      <div className="my-20"></div>
      {/* CTA Section */}
      <CtaSection />

      {/* CERTIFICATE SECTION */}
      <CertificateSliderSection className="mt-0" />



      {/* CONTACT SECTION */}
      <EnquirySection />
    </>
  );
}

