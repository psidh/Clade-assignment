import localFont from "next/font/local";
import Image from "next/image";
const general_sans_medium = localFont({
  src: "../app/GeneralSans-Regular.otf",
});

export default function About() {
  return (
    <div
      className={`py-[28px] pl-[80px] border-b-[2px] ${general_sans_medium.className} text-sm`}
    >
      <h1 className="text-[#6E6D6D] mb-2">About the Job</h1>
      <ol>
        <li>1. Handle the UI/UX research design</li>
        <li>2. Work on researching the latest web trends</li>
        <li>3. Work on conceptualizing and visualizing</li>
        <li>4. Create graphics content and other graphic-related works</li>
      </ol>
      <h2>Benefits:</h2>
      <ul className="ml-4">
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      <h2>Schedule:</h2>
      <ul className="ml-4">
        <li>Day shift</li>
      </ul>
      <h2>Supplemental Pay Types:</h2>
      <ul className="ml-4">
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>
      <p>Work Location: In-person</p>
    </div>
  );
}
