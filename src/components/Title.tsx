import localFont from "next/font/local";
import Image from "next/image";
const general_sans_medium = localFont({ src: "../app/GeneralSans-Medium.otf" });

export default function Title() {
  return (
    <div className="pt-[36px] pb-[16px] pl-[100px] border-b-[2px]">
      <div className="flex items-center justify-start space-x-8">
        <h1
          className={`text-[#3D3D3D] text-4xl ${general_sans_medium.className}`}
        >
          Senior Product Designer
        </h1>
        <div className="h-[8px] w-[8px] rounded-full bg-[#D1D1D1]"></div>
        <p className="text-[#888888]">posted 2 days ago</p>
        <Image src={"/home/badge.svg"} width={60} height={60} alt="badge" />
      </div>
      <div className="flex items-center justify-start space-x-[24px] py-[24px]">
        <div className="flex items-center justify-evenly space-x-[8px]">
          <Image
            src={"/home/location.svg"}
            width={20}
            height={20}
            alt="badge"
          />
          <p className="text-[#5D5D5D]">Delaware, USA</p>
        </div>
        <div className="h-[8px] w-[8px] rounded-full bg-[#D1D1D1]"></div>
        <div className="flex items-center justify-evenly space-x-[8px]">
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
