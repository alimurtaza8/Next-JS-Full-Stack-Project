

// import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import PriceComponent from "@/components/ui/PriceComponent";
import WeightSection from "@/components/ui/WeightSection";
import WeightCalculator from "@/components/ui/WeightCalculator";
import ProgressSection from "@/components/ui/ProgressSection";
import AssessmentSection from "@/components/ui/AssessmentSection";
import FAQSection from "@/components/ui/FAQSection";
// import FooterSection from "@/components/ui/Footer";
export default function WeightLoss() {
  return (
    <div>
      {/* <h1>Home</h1> */}
      {/* <Header /> */}
      <HeroSection />
      <PriceComponent />
      <WeightSection />
      <WeightCalculator />
      <ProgressSection />
      <AssessmentSection />
      <FAQSection />
      {/* <FooterSection /> */}
    </div>
  );
}