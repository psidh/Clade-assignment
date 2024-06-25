"use client";
import Image from "next/image";
import { LuPencil } from "react-icons/lu";
import localFont from "next/font/local";
import toast, { Toaster } from "react-hot-toast";

const general_sans_bold = localFont({
  src: "../app/GeneralSans-Bold.otf",
});

const handleEdit = () => {
  toast.success("Edit job clicked");
};
const handleDelete = () => {
  toast.success("Delete job clicked");
};

export default function Sidebar() {
  return (
    <div className="py-[36px] px-[25px] bg-[#FCFCFC] border-l-[2px] h-full">
      <Toaster />
      <div className="flex justify-between items-center">
        <div
          onClick={handleDelete}
          className="bg-[#FED3CA] space-x-2 text-sm text-[#DC4A2D] border-[1px] border-[#DC4A2D] rounded-lg flex justify-center items-center py-[10px] px-[28px] cursor-pointer"
        >
          <Image src={"./delete.svg"} height={18} width={18} alt="image" />
          <p>Delete job</p>
        </div>
        <div
          onClick={handleEdit}
          className="bg-[#DC4A2D] text-white space-x-2 text-sm border-[1px] border-[#FED3CA] rounded-lg flex justify-center items-center py-[10px] px-[35px] cursor-pointer"
        >
          <LuPencil />
          <p>Edit job</p>
        </div>
      </div>
      <div className="flex justify-between p-[12px] items-center m-[16px] border-b-[1px]">
        <div className="space-x-[10px] flex justify-center items-center">
          <Image src={"./applicants.svg"} height={18} width={18} alt="image" />
          <p>Applicants</p>
        </div>
        <p className={`${general_sans_bold} text-[#3D3D3D] font-extrabold`}>
          400
        </p>
      </div>
      <div className="flex justify-between p-[12px] items-center m-[16px] border-b-[1px]">
        <div className="space-x-[10px] flex justify-center items-center">
          <Image src={"./matches.svg"} height={18} width={18} alt="image" />
          <p>Matches</p>
        </div>
        <p className={`${general_sans_bold} text-[#3D3D3D] font-extrabold`}>
          100
        </p>
      </div>
      <div className="flex justify-between p-[12px] items-center m-[16px] border-b-[1px]">
        <div className="space-x-[10px] flex justify-center items-center">
          <Image src={"./messae.svg"} height={18} width={18} alt="image" />
          <p>Messages</p>
        </div>
        <p className={`${general_sans_bold} text-[#3D3D3D] font-extrabold`}>
          147
        </p>
      </div>
      <div className="flex justify-between p-[12px] items-center m-[16px] border-b-[1px]">
        <div className="space-x-[10px] flex justify-center items-center">
          <Image src={"./view.svg"} height={18} width={18} alt="image" />
          <p>Views</p>
        </div>
        <p className={`${general_sans_bold} text-[#3D3D3D] font-extrabold`}>
          800
        </p>
      </div>
    </div>
  );
}
