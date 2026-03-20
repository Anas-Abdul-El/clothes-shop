
import BestSeller from "@/components/home/Best-seller";
import Comments from "@/components/home/Comments";
import HeroSection from "@/components/home/Hero-section";
import Collection from "@/components/home/collection";
import InstaPost from "@/components/home/InstaPost";
import { Suspense } from "react";
import { Loading } from "@/components/global/Loading";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen ">
      <HeroSection />

      <Suspense fallback={<Loading />}>
        <Collection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <BestSeller />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Comments />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <InstaPost />
      </Suspense>

    </main>
  )
}