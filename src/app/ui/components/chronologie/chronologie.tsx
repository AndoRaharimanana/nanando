import { PoppinsSemiBold, Lora } from "../../font";
import Image from "next/image";
import data from "@/app/services/data";

type ItemProps = {
  data: any;
  side: string;
  dataOptional: any;
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

function Item({ data, side, dataOptional }: ItemProps) {
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
      {dataOptional && (
        <>
          <div
            className={`absolute p-3 -top-16  ${
              side == "right" ? "md:left-36" : "md:right-36 md:left-auto"
            }`}
          >
            <div
              className={`p-3 border border-double border-[5px] rounded-md border-nanando-grey/50 bg-nanando-grey/30 hover:scale-125 transition duration-500`}
            >
              <a href={dataOptional.company.link} target="blank">
                <Image
                  src={dataOptional.company.logo}
                  width={35}
                  height={35}
                  alt={dataOptional.company.name}
                  className="relative"
                />
              </a>
            </div>
            <div className="h-36">
              <div className="w-[50%] border-r-[5px] border-double border-nanando-grey/50 h-36"></div>
              <div className="w-[50%] h-36"></div>
            </div>
          </div>
          <div
            className={`absolute flex flex-col w-full md:w-2/6 gap-5 border border-solid rounded-md border-nanando-grey/30 p-4 bg-nanando-grey/30 backdrop-blur-md z-[999] ${
              side == "right"
                ? "md:self-start md:justify-self-start"
                : "md:self-end md:justify-self-end"
            }`}
          >
            <CompanyHeadline
              year={dataOptional.year}
              poste={dataOptional.poste}
              company={dataOptional.company.name}
              address={dataOptional.company.place}
              side={side}
            />
            <div className="flex flex-col gap-5">
              {dataOptional.projects.map((item: any, index: number) => (
                <div className="flex flex-row w-full gap-10">
                  <div className="flex flex-row gap-5">
                    <div className="flex flex-col border-t border-solid border-nanando-grey items-center">
                      <span className="text-nanando-grey">
                        {item.duration.split(" ")[0]}
                      </span>
                      <span className="text-nanando-grey">
                        {item.duration.split(" ")[1]}
                      </span>
                    </div>
                    <span className="text-nanando-grey">{item.date}</span>
                    <Image
                      src={item.logo}
                      width={50}
                      height={50}
                      alt={item.name}
                      className="relative bg-white rounded-md p-1"
                      sizes=""
                      style={{
                        objectFit: "contain",
                        maxWidth: "50px",
                        maxHeight: "50px",
                      }}
                    />
                  </div>
                  <div>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`absolute flex flex-col w-full md:w-1/6 gap-5 border-t-[5px] border-double border-nanando-grey/50 ${
              side == "right"
                ? "md:self-center md:justify-self-start right-[50%]"
                : "md:self-end md:justify-self-end left-[50%]"
            }`}
          ></div>
        </>
      )}
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
            dataOptional={data.freelance[index]}
          />
        ))}
      </div>
    </div>
  );
}
