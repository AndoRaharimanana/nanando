import { PoppinsSemiBold, Lora } from "../../font";
import Image from "next/image";
import data from "@/app/services/data";
import React, { MouseEventHandler, useState } from "react";

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
  link?: string;
};

function CompanyHeadline({
  year,
  poste,
  company,
  address,
  side,
  link,
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
        {link ? (
          <>
            <a href={link} target="_blank" className="hover:text-reniala-red">
              {company}
            </a>{" "}
          </>
        ) : (
          company
        )}
        <span className="text-xs">({address})</span>
      </span>
    </div>
  );
}

function OptionalSection({ data, side }: { data: any; side: string }) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div
        className={`absolute p-3 -top-16 transition-all delay-500 duration-500 ease-out ${
          side == "right" ? "md:left-48" : "md:right-48 md:left-auto"
        }
         ${opened ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        `}
      >
        <div
          className={`p-3 border border-double border-[5px] rounded-md border-nanando-grey/50 bg-nanando-grey/30 hover:scale-125 transition duration-500`}
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
          <div
            className={`w-[50%] border-r-[5px] border-double border-nanando-grey/50
              transition-all duration-700 ease-out
            ${opened ? " delay-[1s] h-36 " : " delay-0 h-0"}`}
          ></div>
        </div>
      </div>
      <div
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
        className={`absolute flex flex-col rounded-md p-5 bg-nanando-grey/30 backdrop-blur-md z-[999]
          transition-all duration-700
          ${
            side == "right"
              ? opened
                ? "md:self-start md:justify-self-start right-[55%]"
                : "md:self-center md:justify-self-start right-[55%]"
              : opened
                ? "md:self-end md:justify-self-end left-[55%]"
                : "md:self-end md:justify-self-end left-[55%]"
          }
              ${
                opened
                  ? "delay-0 w-full md:w-2/6 gap-5 border border-solid border-nanando-grey/30 animate-none"
                  : "delay-0 items-center md:w-64 animate-bounce"
              }
              `}
      >
        <div
          className={`flex
          ${
            opened ? "flex-row place-content-between" : "flex-col items-center"
          }`}
        >
          <div className={`flex ${opened ? "gap-0" : "gap-3"}`}>
            <a
              href={data.company.link}
              target="blank"
              className={`transition-all duration-700
          ${opened ? "opacity-0 scale-0 w-0" : "opacity-100 scale-100 w-[35px]"}`}
            >
              <Image
                src={data.company.logo}
                width={35}
                height={35}
                alt={data.company.name}
                className="relative"
              />
            </a>
            <CompanyHeadline
              year={data.year}
              poste={data.poste}
              company={data.company.name}
              address={data.company.place}
              link={data.company.link}
              side={side}
            />
          </div>
        </div>
        <div
          className={`flex-col gap-5
          ${
            opened
              ? "flex opacity-100 translate-y-0"
              : "hidden opacity-0 translate-y-6"
          }`}
        >
          {data.projects.map((item: any, index: number) => (
            <div className="flex flex-row w-full gap-10" key={`prj-${index}`}>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col border-t border-solid border-nanando-grey items-center min-w-[100px]">
                  <span className="text-nanando-grey">{item.date}</span>
                  <span className="text-nanando-grey">({item.duration})</span>
                </div>

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
                <span>
                  <span className="text-reniala-red/80">{item.name}: </span>
                  {item.description}
                </span>
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
            ),
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

      {dataOptional && <OptionalSection data={dataOptional} side={side} />}
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
