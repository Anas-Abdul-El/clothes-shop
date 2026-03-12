import BestSeller from "@/components/home/Best-seller";
import Comments from "@/components/home/Comments";
import HeroSection from "@/components/home/Hero-section";
import Collection from "@/components/home/collection";
import InstaPost from "@/components/home/InstaPost";
import { createTest } from "../../server/createTest";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen ">
      <HeroSection />
      <Collection />
      <BestSeller />
      <Comments />
      <InstaPost />
    </main>
  )
}