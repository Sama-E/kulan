import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StyleGuide from "@/components/StyleGuide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white max-auto overflow-hidden">
      {/* <StyleGuide /> */}
      <Header />
      <Hero />
      <div className="h-[4000px]">

      </div>
    </main>
  );
}
