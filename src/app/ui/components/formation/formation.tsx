import { PoppinsSemiBold, Lora } from "../../font";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getData } from "../../../data";

function Item({ data }: any) {
  return (
    <div className="relative flex flex-col pl-10 border-l-2 border-solid pb-8 border-nanando-grey">
      <span className={`${PoppinsSemiBold.className}`}>
        {data.degree}{" "}
        <span className={`${Lora.className} text-xs`}>({data.year})</span>
      </span>
      <span className={`${Lora.className} text-xs text-nanando-grey`}>
        {data.place}
      </span>
      <span className="flex flex-wrap gap-6 mt-4">
        {data.attach?.map((item: any, index: number) => (
          <a
            href={item.link}
            key={index}
            target="blank"
            className={`${item.color ? "bg-[" + item.color + "]" : "bg-nanando-white"} min-h-[50px] rounded-md p-1 flex align-items-center hover:scale-110`}
          >
            <Image
              src={item.logo}
              width={100}
              height={30}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </a>
        ))}
      </span>
      <div className="absolute -left-4 p-3 border border-solid bg-nanando-grey border-nanando-grey rounded-full hover:scale-125 transition duration-500">
        <Image src={"/checkmark.png"} width={15} height={15} alt="" />
      </div>
    </div>
  );
}
export default function Formation() {
  const locale = useLocale();
  const t = useTranslations();
  const data = getData(locale);
  return (
    <div
      className="flex flex-1 items-center justify-center flex-col gap-7 px-14 lg:px-36 py-c75"
      id="formation"
    >
      <div className="flex items-center justify-center flex-col">
        <span className={`${PoppinsSemiBold.className} text-3xl uppercase`}>
          {t("Formation.title")}
        </span>
      </div>
      <div className="flex justify-between w-full gap-base md:gap-0">
        <div className="flex flex-1 flex-col">
          <span>{t("Formation.subtitle")}</span>
          <span
            className={`${PoppinsSemiBold.className} text-base md:text-2xl`}
          >
            {data.formation.description}
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          {data.formation.items.map((item: any, index: number) => (
            <Item key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
