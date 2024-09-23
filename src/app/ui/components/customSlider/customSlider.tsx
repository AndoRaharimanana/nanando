import { PoppinsBold, PoppinsSemiBold} from "../../font";
import { Slider } from 'rsuite';
import Image from 'next/image';
import data from "@/app/services/data";

type ProgressProps = {
  value: number;
  side: string;
};

type SkillsProps = {
  data: any;
  side: string;
};

type ItemProps = {
  name: string;
  value: number;
  side: string;
  data: Array<any>;
};

type CustomSliderProps = {
  value: number;
  changeData: (value: number) => void;
};

function Progress({ value, side}: ProgressProps) {
  return (
    <div className='w-full h-3 bg-nanando-grey rounded'>
      <div className={`${side == 'right' ? 'bg-nanando-white' : 'bg-reniala-red' } h-3 rounded`} style={{width: value+'%'}}>

      </div> 
    </div>    
  )
}

function Skills({ data, side}: SkillsProps) {
  return (
    <div className='flex item-between justify-between flex-col w-full md:w-2/5 px-4 lg:px-8'>
      <div className='flex item-between justify-between'>
        <span>{data.name}</span>
        <span>{data.value}%</span>
      </div> 
      <div>
        <Progress value={data.value} side={side}/>
      </div> 
    </div>    
  )
}

function Item({ name, value, side, data }: ItemProps) {
    return (
      <div className={`absolute flex item-between justify-between w-full gap-x-14 gap-y-8 flex-wrap py-8 ${side == 'right' ? '' : 'bg-nanando-white text-nanando-black rounded-lg' }`} style={{clipPath: side == 'right' ? 'polygon('+value+'% 0, 100% 0, 100% 100%, '+value+'% 100%)' : 'polygon(0 0, '+value+'% 0, '+value+'% 100%, 0 100%)'}}>
        <span className={`${PoppinsBold.className} text-4xl w-full text-center md:text-3xl lg:text-5xl md:absolute md:top-1/2 md:left-1/2 text-nanando-soft-grey md:-translate-y-1/2 md:-translate-x-1/2 -z-10 `}>
            <div className="hidden md:block">
              <span className={`${side == 'right' ? 'invisible' : '' } ${value <= 40 ? 'hidden' : '' }`}>{name}</span>
              <span className={`${side == 'right' ? '' : 'invisible' } ${value >= 60 ? 'hidden' : '' }`}>{name}</span>
            </div>
            <p><span className="md:hidden">{name}-</span>end</p>
        </span>
        {
          data.map((skill) => <Skills key={skill.name} data={skill} side={side} />)
        }
      </div>
    );
}
export default function CustomSlider({ value, changeData }: CustomSliderProps) {

    return (
      <div className='flex flex-1 items-center justify-start md:justify-center flex-col gap-7 mx-14 lg:mx-36 min-h-[650px] md:min-h-fit py-c75' id="skills">
        <div className='relative flex items-center justify-center flex-col gap-4'>
          <span className={`${PoppinsSemiBold.className} text-3xl`}>My skills</span>
          <span className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <span className={`${PoppinsBold.className} text-7xl absolute text-nanando-soft-grey z-[-1]`}>Skills</span>
        </div>
        <div className='relative flex item-between justify-between w-full h-c575 md:h-c17'>
          <Item name="Back" value={value} side="left" data={data.backEndData}/>
          <Item name="Front" value={value} side="right" data={data.frontEndData}/>
          <div className='w-full absolute top-1/2'>
            <Slider defaultValue={value} onChange={changeData} tooltip={false} />
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center pt-16">
          <span className={`${PoppinsSemiBold.className} text-xl mb-4`}>Additional skills</span>
          <div className="flex items-center justify-between md:justify-center flex-wrap gap-4 md:gap-10">
            {data.additionalSkillsData.withPhoto.map((item:any, index:number) => (                         
              <Image src={item.logo} key={index}
                width={125}
                height={50}
                sizes=""
                style={{objectFit: "contain",
                maxWidth: "100px", 
                maxHeight: "50px", }}
                className="bg-nanando-white rounded-full p-3 hover:scale-110"
                alt=""  />
            ))}
            {data.additionalSkillsData.noPhoto.map((item:any, index:number) => (                         
              <span key={index} className={`${PoppinsSemiBold.className} text-center bg-nanando-white rounded-md text-nanando-black p-2 uppercase flex align-items-center max-h-8 hover:scale-110`}>{item.name}</span>                                    
            ))}                        
          </div>
        </div>
      </div>
    );
  }