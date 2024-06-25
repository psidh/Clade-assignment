import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import JobTitle from "@/components/JobTitle";
import Skills from "@/components/Skills";
import About from "@/components/About";
import CompanyCard from "@/components/Company";
import Sidebar from "@/components/Sidebar";
export default function page() {
  return (
    <div className="">
      <Navbar />
      <Links />
      <div className="flex">
        <div className="w-full">
          <JobTitle />
          <Skills />
          <About />
          <CompanyCard />
        </div>
        <div className="w-[31.66%]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
