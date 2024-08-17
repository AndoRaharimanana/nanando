import { PoppinsSemiBold} from "../../font";
import Image from 'next/image';

function Item({ side }: { side: string }) {
    return (
        <div className='flex items-center justify-center flex-col px-36'>
          <div className={`relative flex flex-col w-1/2 gap-[20px] px-14 border-solid pb-14 ${side == 'right' ? 'self-end justify-self-end border-l' : 'self-start justify-self-start border-r'}`}>
            <div className={`flex flex-col ${side == 'right' ? '' : 'items-end'}`}>
              <span>2010 - 2020</span>
              <span>Developer java</span>
            </div>
            <div className={`pb-10 ${side == 'right' ? '' : 'flex justify-end text-right'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod fermentum augue, eget porttitor augue rutrum id. Praesent tincidunt placerat augue nec accumsan. Sed a euismod eros.
            </div>
          <div className={`absolute p-3 border border-solid rotate-45 bg-[#000] ${side == 'right' ? '-left-6' : '-right-6'}`}>
            <Image src={"/camera.png"}
                  width={25}
                  height={25}
                  alt=""
                  className='relative -rotate-45'  />
          </div>
          </div>
        </div>
    );
}
export default function Chronologie() {
    return (
        <div className='flex flex-1 items-center justify-center flex-col gap-[30px]' id="experience">
          <div className='flex items-center justify-center flex-col'>
            <span className={`${PoppinsSemiBold.className} text-[32px]`}>EXPERIENCE</span>
          </div>
          <div>
            <Item side='right'/>
            <Item side='left'/>
            <Item side='right'/>
          </div>
        </div>
    );
  }