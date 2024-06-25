import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import Skills from "@/components/Skills";
import About from "@/components/About";
import CompanyCard from "@/components/Company";
import Sidebar from "@/components/Sidebar";
export default function page() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-full">
          <Heading />
          <Title />
          <Skills />
          <About />
          <CompanyCard />
        </div>
        <div className="w-[33.66%]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
