import BestSeller from "@/components/home/Best-seller";
import HeroSection from "@/components/home/Hero-section";
import Collection from "@/components/home/collection";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen ">
      <HeroSection />
      <Collection />
      <BestSeller />
    </main>
  )
}