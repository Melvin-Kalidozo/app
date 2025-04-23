import CallToAction from "@/components/CallToAction";
import CallToActionBanner from "@/components/CallToActionBanner";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/HeroSection";
import HotToday from "@/components/hotToday";
import VitualGamesList from "@/components/vitualGamesList";
import { Divide } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <HeroSection />
        <CallToAction />
        <VitualGamesList />
        <HotToday />
        <CallToActionBanner />
        <Footer />
      </div>
    </div>
  );
}
