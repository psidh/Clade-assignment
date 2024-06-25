import localFont from "next/font/local";
import Image from "next/image";
const general_sans_medium = localFont({ src: "../app/GeneralSans-Medium.otf" });

export default function JobTitle() {
  return (
    <div className="pt-[30px] pb-[32px] pl-[78px] border-b-[2px]">
      <div className="flex items-center justify-start space-x-2">
        <h1
          className={`text-[#3D3D3D] text-3xl ${general_sans_medium.className}`}
        >
          Senior Product Designer
        </h1>
        <div className="h-[3px] w-[3px] rounded-full bg-[#D1D1D1]"></div>
        <p className="text-[#888888] text-sm">posted 2 days ago</p>
        <Image src={"/home/badge.svg"} width={40} height={40} alt="badge" />
      </div>
      <div className="flex items-center justify-start space-x-[24px] pt-[10px]">
        <div className="flex items-center justify-evenly">
          <Image
            src={"/home/location.svg"}
            width={20}
            height={20}
            alt="badge"
          />
          <p className="text-[#5D5D5D]">Delaware, USA</p>
        </div>
        <div className="h-[3px] w-[3px] rounded-full bg-[#D1D1D1]"></div>
        <div className="flex items-center justify-evenly space-x-[4px]">
          <Image
            src={"/home/coinstack.svg"}
            width={20}
            height={20}
            alt="badge"
          />
          <p className="text-[#5D5D5D]">$300k-$400k</p>
        </div>
      </div>
    </div>
  );
}
