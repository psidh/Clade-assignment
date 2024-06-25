import Image from "next/image";

const CompanyCard = () => {
  return (
    <div className="pl-[100px] py-[32px]">
      <div className="flex items-center space-x-4 mb-[24px]">
        <div className="relative w-12 h-12">
          <Image
            src="./atlassian logo.svg"
            alt="Atlassian Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-xl font-bold">Atlassian</h1>
      </div>
      <div className="flex items-start justify-start space-x-16">
        <div>
          <div className="flex flex-col justify-between mb-[24px]">
            <p className="text-[#6E6D6D]">Company size</p>
            <p className="font-medium">1k - 2k Employees</p>
          </div>
          <div className="flex flex-col justify-between mb-[24px]">
            <p className="text-[#6E6D6D]">Sector</p>
            <p className="font-medium">
              Information Technology, Infrastructure
            </p>
          </div>
          <div className="flex flex-col justify-between mb-[24px]">
            <p className="text-[#6E6D6D]">Founded In</p>
            <p className="font-medium">2019</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between mb-[24px]">
            <p className="text-[#6E6D6D]">Type</p>
            <p className="font-medium">Private</p>
          </div>
          <div className="flex flex-col justify-between mb-[24px]">
            <p className="text-[#6E6D6D]">Funding</p>
            <p className="font-medium">Bootstrapped</p>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-[#6E6D6D]">Founded By</p>
            <p className="font-medium">Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
