

import HomeHero from "@/components/ui/HomeHeroSection";
import HowItWorks from "@/components/ui/HowItWorks";
import SimpleWaySection from "@/components/ui/SimpleWaySection";
import PopularTreatments from "@/components/ui/PopularTreatments";
import LatestHealthGuides from "@/components/ui/LatestHealthGuides";
import BestSellersSection from "@/components/ui/BestSellersSection";
import HomeFAQ from "@/components/ui/HomeFAQ";
export default function Home() {
  return (
    <div> 
     <HomeHero />
     <HowItWorks />
     <SimpleWaySection />
     <PopularTreatments />
     <LatestHealthGuides />
     <BestSellersSection />
     <HomeFAQ />

    </div>
  );
}