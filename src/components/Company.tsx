import Image from "next/image";

const CompanyCard = () => {
  return (
    <div className="company">
      <div className="flex items-center space-x-4 mb-[16px]">
        <div className="relative w-8 h-8">
          <Image
            src="./atlassian logo.svg"
            alt="Atlassian Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-lg font-bold">Atlassian</h1>
      </div>
      <div className="flex items-start justify-start space-x-20">
        <div>
          <div className="details">
            <h2>Company size</h2>
            <h3>1k - 2k Employees</h3>
          </div>
          <div className="details">
            <p>Sector</p>
            <p>Information Technology, Infrastructure</p>
          </div>
          <div className="details">
            <p>Founded In</p>
            <p>2019</p>
          </div>
        </div>
        <div>
          <div className="details">
            <p>Type</p>
            <p>Private</p>
          </div>
          <div className="details">
            <p>Funding</p>
            <p>Bootstrapped</p>
          </div>

          <div className="flex flex-col justify-between">
            <p>Founded By</p>
            <p>Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
