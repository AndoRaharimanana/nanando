import { PoppinsSemiBold, Lora} from "../../font";
import Image from 'next/image';
import data from "@/app/services/data";

type ItemProps = {
  data: any;
  side: string;
};

function Item({ data, side}: ItemProps) {
    return (
        <div className='flex md:items-center md:justify-center flex-col px-14 md:px-0 lg:px-36'>
          <div className={`relative flex flex-col w-full md:w-1/2 gap-5 md:px-14 border-solid  border-nanando-grey pb-14 border-l ${side == 'right' ? 'md:self-end md:justify-self-end md:border-l' : 'md:self-start md:justify-self-start md:border-r md:border-l-0'}`}>
            <div className={`flex flex-col pl-14 md:pl-0 ${side == 'right' ? '' : 'md:items-end'}`}>
              <span className={`${Lora.className} text-xs`}>{data.year}</span>
              <span>{data.poste}</span>
              <span className="text-nanando-grey">{data.company.name} <span className="text-xs">({data.company.place})</span></span>
            </div>
            <div className={`pb-10 pl-14 md:pl-0 text-justify ${side == 'right' ? '' : 'md:flex md:justify-end md:text-right'}`}>
              {data.description}
            </div>
            <div className={`flex flex-wrap gap-4 md:gap-6 pl-14 md:pl-0 ${side == 'right' ? '' : 'md:justify-end'}`}>
              {data.projects?.map((item:any, index:number) => (                
                item.logo ? (
                  <Image className="hover:scale-110 bg-nanando-white p-1 rounded-md" src={item.logo} key={index}
                        width={100}
                        height={50}
                        sizes=""
                        style={{objectFit: "contain",
                        maxWidth: "100px", 
                        maxHeight: "50px", }}
                        alt=""  />
                ) : (
                  <span className={`${PoppinsSemiBold.className} bg-[#E0DF30] rounded-md text-nanando-black p-2 uppercase flex items-center`} key={index}>{item.name}</span>
                )                
              ))}
            </div>
          <div className={`absolute p-3 border border-solid rounded-md border-nanando-grey rotate-45 bg-[#000] -left-8 ${side == 'right' ? 'md:-left-8' : 'md:-right-8 md:left-auto'} hover:scale-125 transition duration-500`}>
            <a href={data.company.link} target="blank">
              <Image src={data.company.logo}
                    width={35}
                    height={35}
                    alt={data.company.name}
                    className='relative -rotate-45'  />
            </a>
          </div>
          </div>
        </div>
    );
}
export default function Chronologie() {
    return (
        <div className='flex flex-1 items-center justify-center flex-col gap-7 py-c75' id="experience">
          <div className='flex items-center justify-center flex-col'>
            <span className={`${PoppinsSemiBold.className} text-3xl`}>EXPERIENCES</span>
          </div>
          <div>
            {data.chronologie.map((item:any, index:number) => (
              <Item key={index} data={item} side={index % 2 === 0? 'right' : 'left'}/>
            ))}
          </div>
        </div>
    );
  }