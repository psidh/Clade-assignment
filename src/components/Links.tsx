import localFont from "next/font/local";

const general_sans_medium = localFont({ src: "../app/GeneralSans-Medium.otf" });

export default function Links() {
  return (
    <div
      className={`heading ${general_sans_medium.className}`}
    >
      <h1 className="text-[#DC4A2D] text-lg underline underline-offset-[19px] cursor-pointer">
        Job Preview
      </h1>
      <p>Applicants</p>
      <p>Match</p>
      <p>Messages</p>
    </div>
  );
}
