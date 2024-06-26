import localFont from "next/font/local";

const general_sans_bold = localFont({ src: "../app/GeneralSans-Bold.otf" });
import Image from "next/image";

export default function Skills() {
  return (
    <div className="py-[24px] pl-[80px] flex items-start justify-start space-x-[98px] border-b-[2px] text-sm">
      <div>
        <h1 className="text-[#6E6D6D]">Skills Required</h1>
        <div className="flex flex-col items-start mt-2 justify-between space-y-[10px]">
          <Image src={"/home/figma.svg"} width={50} height={50} alt="figma" />
          <Image src={"/home/adobe.svg"} width={100} height={100} alt="adobe" />
          <Image src={"/home/xadobe.svg"} width={60} height={60} alt="xadobe" />
        </div>
      </div>
      <div>
        <h2 className="text-[#6E6D6D]">Preferred Language</h2>
        <p
          className={`${general_sans_bold} text-[#3D3D3D] font-extrabold mt-2`}
        >
          English
        </p>
      </div>
      <div>
        <h2 className="text-[#6E6D6D]">Type</h2>
        <p
          className={`${general_sans_bold} text-[#3D3D3D] font-extrabold mt-2`}
        >
          Full time
        </p>
      </div>
      <div>
        <h2 className="text-[#6E6D6D]">Years of Experience</h2>
        <p
          className={`${general_sans_bold} text-[#3D3D3D] font-extrabold mt-2`}
        >
          3+ Years of Experience
        </p>
      </div>
    </div>
  );
}
