import { Happenings } from "@/components/Happenings";
import { Header } from "@/components/Header";
import { Members } from "@/components/Members";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header />
        
        <SectionHeader title="Fremtidige arrangementer" />
        <Happenings />

        <SectionHeader title="Medlemmer" />
        <Members />

      </div>
    </main>
      
  );
}
