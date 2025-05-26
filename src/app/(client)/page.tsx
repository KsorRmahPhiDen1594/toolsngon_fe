import Header from "../layouts/Header";
import CtaSection from "@/app/ui/CtaSection";
import DownloadSection from "@/app/ui/DownloadSection";
import FaqSection from "@/app/ui/FaqSection";
import FeatureSection from "@/app/ui/FeatureSection";
import FloatingButtons from "@/app/ui/FloatingButtons";
import HeroSection from "@/app/ui/HeroSection";
import PricingSection from "@/app/ui/PricingSection";
import Testimonials from "@/app/ui/Testimonials";
import OverviewSection from "../ui/OverviewSection";
import PlatformsSection from "../ui/PlatformsSection";
import ApprovedSection from "../ui/ApprovedSection";
import FooterSection from "../layouts/Footer";



export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection />
      <OverviewSection />
      <PlatformsSection />
      <FeatureSection />
      <ApprovedSection />
      <Testimonials />
      <PricingSection />
      <CtaSection />
      <FaqSection />
      <DownloadSection/>
      <FloatingButtons />
      <FooterSection/>
    </>
  );
}
