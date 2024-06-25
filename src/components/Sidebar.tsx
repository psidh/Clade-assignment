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
    <div className="sidebar">
      <Toaster />
      <div className="flex justify-between items-center space-x-2">
        <div onClick={handleDelete} className="delete-button">
          <Image src={"./delete.svg"} height={14} width={14} alt="image" />
          <p>Delete job</p>
        </div>
        <div onClick={handleEdit} className="edit-button">
          <LuPencil className="text-sm" />
          <p>Edit job</p>
        </div>
      </div>
      <div className="details">
        <div className="item">
          <Image src={"./applicants.svg"} height={18} width={18} alt="image" />
          <p>Applicants</p>
        </div>
        <p className={`${general_sans_bold}`}>
          400
        </p>
      </div>
      <div className="details">
        <div className="item">
          <Image src={"./matches.svg"} height={18} width={18} alt="image" />
          <p>Matches</p>
        </div>
        <p className={`${general_sans_bold}`}>
          100
        </p>
      </div>
      <div className="details">
        <div className="item">
          <Image src={"./messae.svg"} height={18} width={18} alt="image" />
          <p>Messages</p>
        </div>
        <p className={`${general_sans_bold}`}>
          147
        </p>
      </div>
      <div className="details">
        <div className="item">
          <Image src={"./view.svg"} height={18} width={18} alt="image" />
          <p>Views</p>
        </div>
        <p className={`${general_sans_bold}`}>
          800
        </p>
      </div>
    </div>
  );
}
