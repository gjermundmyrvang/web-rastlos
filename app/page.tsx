import { Arrangements } from "@/components/Arrangements";
import { Blog } from "@/components/Blog";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Members } from "@/components/Members";
import { TopNav } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Semester } from "@/components/Semester";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
       <Header />
      <div className="max-w-7xl w-full flex flex-col items-center sm:items-start mx-auto">
       

        <TopNav />
        
        <SectionHeader title="Kommende arrangementer" />
        <Arrangements />

        <SectionHeader title="Styret" />
        <Members />

        <Semester />

        <SectionHeader title="I det siste" />
        <Blog />

        <SectionHeader title="Ta kontakt" />
        <ContactForm />

        <TopNav />

      </div>
    </main>
      
  );
}
