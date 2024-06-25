import localFont from "next/font/local";

const general_sans_medium = localFont({ src: "../app/GeneralSans-Medium.otf" });

export default function Heading() {
  return (
    <div
      className={`py-[20px] pl-[100px] flex items-center justify-start space-x-[75px] border-b-[2px] ${general_sans_medium.className}`}
    >
      <p className="text-[#DC4A2D] text-lg underline underline-offset-[26px] cursor-pointer">
        Job Preview
      </p>
      <p className="text-[#888888] cursor-pointer">Applicants</p>
      <p className="text-[#888888] cursor-pointer">Match</p>
      <p className="text-[#888888] cursor-pointer">Messages</p>
    </div>
  );
}
