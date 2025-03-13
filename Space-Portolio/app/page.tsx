import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import FAQs from "@/components/main/Faqs";
import Image from "next/image";
import Clients from "@/components/main/Clients";

export default function Home() {
  return (
    
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Clients />
        <FAQs/>

      </div>
    </main>
  );
}
