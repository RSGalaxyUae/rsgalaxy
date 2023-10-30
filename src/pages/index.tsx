
import { api } from "@/utils/api";
import HeroSection from "@/components/section/HeroSection";
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

