import { Arrangements } from "@/components/Arrangements";
import { Blog } from "@/components/Blog";
import { Header } from "@/components/Header";
import { Members } from "@/components/Members";
import { TopNav } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Semester } from "@/components/Semester";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header />

        <TopNav />
        
        <SectionHeader title="Fremtidige arrangementer" />
        <Arrangements />

        <SectionHeader title="Styret" />
        <Members />

        <Semester />

        <SectionHeader title="I det siste" />
        <Blog />


      </div>
    </main>
      
  );
}
