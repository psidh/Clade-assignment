import Image from "next/image";
import localFont from "next/font/local";

const general_sans_medium = localFont({ src: "../app/GeneralSans-Medium.otf" });

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[95px] border-b-[2px]">
      <h1
        className={`logo ${general_sans_medium.className}`}
      >
        Logo
      </h1>
      <div className="navbar-tab">
        <div className="job">
          <Image src={"/job.svg"} width={24} height={24} alt="briefcase" />
          <p className="text-white">Jobs</p>
        </div>

        <div className="messages">
          <Image src={"/message.svg"} width={24} height={24} alt="briefcase" />
          <p>Messages</p>
        </div>

        <div className="payments">
          <Image
            src={"/paymentss.svg"}
            width={24}
            height={24}
            alt="briefcase"
          />
          <p>Payments</p>
        </div>
      </div>
      <div className="navbar-end">
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
