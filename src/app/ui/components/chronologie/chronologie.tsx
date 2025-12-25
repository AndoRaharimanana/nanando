import { PoppinsSemiBold, Lora } from "../../font";
import Image from "next/image";
import data from "@/app/services/data";

type ItemProps = {
  data: any;
  side: string;
};

type CompanyInfoProps = {
  year: string;
  poste: string;
  company: string;
  address: string;
  side: string;
};

function CompanyHeadline({
  year,
  poste,
  company,
  address,
  side,
}: CompanyInfoProps) {
  return (
    <div
      className={`flex flex-col pl-14 md:pl-0 ${
        side == "right" ? "" : "md:items-end"
      }`}
    >
      <span className={`${Lora.className} text-xs`}>{year}</span>
      <span>{poste}</span>
      <span className="text-nanando-grey">
        {company} <span className="text-xs">({address})</span>
      </span>
    </div>
  );
}

function Item({ data, side }: ItemProps) {
  return (
    <div className="flex md:items-center md:justify-center flex-col px-14 md:px-0 lg:px-36 relative">
      <div
        className={`relative flex flex-col w-full md:w-1/2 gap-5 md:px-14 border-solid  border-nanando-grey pb-14 border-l ${
          side == "right"
            ? "md:self-end md:justify-self-end md:border-l"
            : "md:self-start md:justify-self-start md:border-r md:border-l-0"
        }`}
      >
        <CompanyHeadline
          year={data.year}
          poste={data.poste}
          company={data.company.name}
          address={data.company.place}
          side={side}
        />
        <div
          className={`pb-10 pl-14 md:pl-0 text-justify ${
            side == "right" ? "" : "md:flex md:justify-end md:text-right"
          }`}
        >
          {data.description}
        </div>
        <div
          className={`flex flex-wrap gap-4 md:gap-6 pl-14 md:pl-0 ${
            side == "right" ? "" : "md:justify-end"
          }`}
        >
          {data.projects?.map((item: any, index: number) =>
            item.logo ? (
              <Image
                className="hover:scale-110 bg-nanando-white p-1 rounded-md"
                src={item.logo}
                key={index}
                width={100}
                height={50}
                sizes=""
                style={{
                  objectFit: "contain",
                  maxWidth: "100px",
                  maxHeight: "50px",
                }}
                alt=""
              />
            ) : (
              <span
                className={`${PoppinsSemiBold.className} bg-[#E0DF30] rounded-md text-nanando-black p-2 uppercase flex items-center`}
                key={index}
              >
                {item.name}
              </span>
            )
          )}
        </div>
        <div
          className={`absolute p-3 border border-solid rounded-md border-nanando-grey rotate-45 bg-[#000] -left-8 ${
            side == "right" ? "md:-left-8" : "md:-right-8 md:left-auto"
          } hover:scale-125 transition duration-500`}
        >
          <a href={data.company.link} target="blank">
            <Image
              src={data.company.logo}
              width={35}
              height={35}
              alt={data.company.name}
              className="relative -rotate-45"
            />
          </a>
        </div>
      </div>
      <div
        className={`absolute flex flex-col w-full md:w-2/6 gap-5 border border-solid rounded-md border-nanando-grey p-4 ${
          side == "right"
            ? "md:self-start md:justify-self-start"
            : "md:self-end md:justify-self-end"
        }`}
      >
        <div className="relative">
          <CompanyHeadline
            year={"July 2024 - by now"}
            poste={"Freelance"}
            company={"Reniala"}
            address={"Madagascar"}
            side={side}
          />
          <div
            className={`absolute p-3 -top-36 ${
              side == "right" ? "md:-left-8" : "md:-right-8 md:left-auto"
            }`}
          >
            <div
              className={`p-3 border border-solid rounded-md border-nanando-grey bg-[#000] hover:scale-125 transition duration-500`}
            >
              <a href={data.company.link} target="blank">
                <Image
                  src={data.company.logo}
                  width={35}
                  height={35}
                  alt={data.company.name}
                  className="relative"
                />
              </a>
            </div>
            <div className="h-36">
              <div className="w-[50%] border-r border-solid border-nanando-grey h-36"></div>
              <div className="w-[50%] h-36"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row w-full gap-10">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col border-t border-solid border-nanando-grey items-center">
                <span className="text-nanando-grey">3</span>
                <span className="text-nanando-grey">months</span>
              </div>
              <span className="text-nanando-grey">Aug 2025</span>
              <a
                href={data.company.link}
                target="blank"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={data.company.logo}
                  width={35}
                  height={35}
                  alt={data.company.name}
                  className="relative"
                />
              </a>
            </div>
            <div>
              <span>
                I spent 2 years as a full-stack mobile developer at iFoxCode
                (Mauritius), working remotely.
              </span>
            </div>
          </div>
          <div className="flex flex-row w-full gap-10">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col border-t border-solid border-nanando-grey items-center">
                <span className="text-nanando-grey">2</span>
                <span className="text-nanando-grey">months</span>
              </div>
              <span className="text-nanando-grey">Jun 2025</span>
              <a
                href={data.company.link}
                target="blank"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={data.company.logo}
                  width={35}
                  height={35}
                  alt={data.company.name}
                  className="relative"
                />
              </a>
            </div>
            <div>
              <span>
                I spent 2 years as a full-stack mobile developer at iFoxCode
                (Mauritius), working remotely.
              </span>
            </div>
          </div>
          <div className="flex flex-row w-full gap-10">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col border-t border-solid border-nanando-grey items-center">
                <span className="text-nanando-grey">2</span>
                <span className="text-nanando-grey">months</span>
              </div>
              <span className="text-nanando-grey">Mar 2025</span>
              <a
                href={data.company.link}
                target="blank"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={data.company.logo}
                  width={35}
                  height={35}
                  alt={data.company.name}
                  className="relative"
                />
              </a>
            </div>
            <div>
              <span>
                I spent 2 years as a full-stack mobile developer at iFoxCode
                (Mauritius), working remotely.
              </span>
            </div>
          </div>
          <div className="flex flex-row w-full gap-10">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col border-t border-solid border-nanando-grey items-center">
                <span className="text-nanando-grey">2</span>
                <span className="text-nanando-grey">months</span>
              </div>
              <span className="text-nanando-grey">Jan 2025</span>
              <a
                href={data.company.link}
                target="blank"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={data.company.logo}
                  width={35}
                  height={35}
                  alt={data.company.name}
                  className="relative"
                />
              </a>
            </div>
            <div>
              <span>
                I spent 2 years as a full-stack mobile developer at iFoxCode
                (Mauritius), working remotely.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute flex flex-col w-full md:w-1/6 gap-5 border-t border-solid border-nanando-grey ${
          side == "right"
            ? "md:self-center md:justify-self-start right-[50%]"
            : "md:self-end md:justify-self-end left-[50%]"
        }`}
      ></div>
    </div>
  );
}
export default function Chronologie() {
  return (
    <div
      className="flex flex-1 items-center justify-center flex-col gap-7 py-c75"
      id="experience"
    >
      <div className="flex items-center justify-center flex-col">
        <span className={`${PoppinsSemiBold.className} text-3xl`}>
          EXPERIENCES
        </span>
      </div>
      <div>
        {data.chronologie.map((item: any, index: number) => (
          <Item
            key={index}
            data={item}
            side={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </div>
  );
}
