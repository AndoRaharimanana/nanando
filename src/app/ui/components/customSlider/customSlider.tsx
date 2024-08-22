import { PoppinsBold, PoppinsSemiBold} from "../../font";
import { Slider } from 'rsuite';

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

function Skills({ data }: {data: any}) {
  return (
    <div className='flex item-between justify-between flex-col w-full md:w-2/5 px-4 lg:px-8'>
      <div className='flex item-between justify-between'>
        <span>{data.name}</span>
        <span>{data.value}%</span>
      </div> 
      <div>
        <progress value={data.value} max={100} className='w-full'/>
      </div> 
    </div>    
  )
}

function Item({ name, value, side, data }: ItemProps) {
    return (
      <div className={`absolute flex item-between justify-between w-full gap-x-14 gap-y-8 flex-wrap ${side == 'right' ? '' : 'bg-nanando-white text-nanando-black' }`} style={{clipPath: side == 'right' ? 'polygon('+value+'% 0, 100% 0, 100% 100%, '+value+'% 100%)' : 'polygon(0 0, '+value+'% 0, '+value+'% 100%, 0 100%)'}}>
        <span className={`${PoppinsBold.className} text-[32px] w-full text-center md:text-[48px] md:absolute md:top-1/2 md:left-1/2 text-nanando-soft-grey md:-translate-y-1/2 md:-translate-x-1/2 -z-10 `}>{name}</span>
        {
          data.map((skill) => <Skills key={skill.name} data={skill} />)
        }
      </div>
    );
}
export default function CustomSlider({ value, changeData }: CustomSliderProps) {
    const backEndData = [
      {
        name: 'Php',
        value: 75,
      },
      {
        name: 'Java',
        value: 75,
      },
      {
        name: 'C#',
        value: 75,
      },
      {
        name: 'Docker',
        value: 75,
      }
    ];

    const frontEndData = [
      {
        name: 'React',
        value: 90,
      },
      {
        name: 'SCSS',
        value: 75,
      },
      {
        name: 'Tailwind',
        value: 75,
      },
      {
        name: 'React Native',
        value: 75,
      }
    ]

    return (
      <div className='flex flex-1 items-center justify-center flex-col gap-[30px] mx-14 lg:mx-36 py-14' id="skills">
        <div className='relative flex items-center justify-center flex-col gap-4'>
          <span className={`${PoppinsSemiBold.className} text-[32px]`}>My skills</span>
          <span className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <span className={`${PoppinsBold.className} text-[78px] absolute text-nanando-soft-grey z-[-1]`}>Skills</span>
        </div>
        <div className='relative flex item-between justify-between w-full h-[120px]'>
          <Item name="Back-end" value={value} side="left" data={backEndData}/>
          <Item name="Front-end" value={value} side="right" data={frontEndData}/>
          <div className='w-full absolute top-1/2'>
            <Slider onChange={changeData} tooltip={false} />
          </div>
        </div>
      </div>
    );
  }