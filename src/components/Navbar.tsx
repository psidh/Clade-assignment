import Image from "next/image";
import localFont from "next/font/local";

const general_sans_medium = localFont({ src: "../app/GeneralSans-Medium.otf" });

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[109px] border-b-[2px]">
      <h1
        className={`py-[17px] px-[26.5px] bg-[#E7E7E7] text-[#DC4A2D] my-[24px] mx-[40px] inline-block ${general_sans_medium.className}`}
      >
        Logo
      </h1>
      <div className="h-[74px] w-[32.33%] flex items-center justify-evenly border-[1px] border-[#D1D1D1] rounded-full p-[8px]">
        <div className="py-[16px] px-[28px] m-8 flex items-center justify-evenly space-x-[8px] bg-[#DC4A2D] rounded-full">
          <Image src={"/job.svg"} width={24} height={24} alt="briefcase" />
          <p className="text-white">Job</p>
        </div>

        <div className="py-[16px] px-[15px] m-8 flex items-center justify-evenly space-x-[8px] text-[#B0B0B0]">
          <Image src={"/message.svg"} width={24} height={24} alt="briefcase" />
          <p>Messages</p>
        </div>

        <div className="py-[16px] px-[15px] m-8 flex items-center justify-evenly space-x-[8px] text-[#B0B0B0]">
          <Image
            src={"/paymentss.svg"}
            width={24}
            height={24}
            alt="briefcase"
          />
          <p>Payments</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly py-[14px] space-x-[12px] px-[24px]">
        <Image
          src={"/notification.svg"}
          width={24}
          height={24}
          alt="briefcase"
        />
        <div className="flex items-center justify-between">
          <Image
            src={"/atlassian.svg"}
            width={40}
            height={40}
            alt="briefcase"
            className="rounded-full"
          />
          <Image
            src={"/down-arrow.svg"}
            width={20}
            height={20}
            alt="briefcase"
          />
        </div>
      </div>
    </div>
  );
}
