import HeroBanner from "@/components/HeroBanner";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <StatsSection></StatsSection>
    </div>
  );
}
