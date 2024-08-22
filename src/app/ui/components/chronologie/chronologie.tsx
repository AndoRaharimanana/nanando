import { PoppinsSemiBold} from "../../font";
import Image from 'next/image';

function Item({ side }: { side: string }) {
    return (
        <div className='flex md:items-center md:justify-center flex-col px-14 md:px-0 lg:px-36'>
          <div className={`relative flex flex-col w-full md:w-1/2 gap-[20px] md:px-14 border-solid pb-14 border-l ${side == 'right' ? 'md:self-end md:justify-self-end md:border-l' : 'md:self-start md:justify-self-start md:border-r md:border-l-0'}`}>
            <div className={`flex flex-col pl-14 md:pl-0 ${side == 'right' ? '' : 'md:items-end'}`}>
              <span>2010 - 2020</span>
              <span>Developer java</span>
            </div>
            <div className={`pb-10 pl-14 md:pl-0 ${side == 'right' ? '' : 'md:flex md:justify-end md:text-right'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod fermentum augue, eget porttitor augue rutrum id. Praesent tincidunt placerat augue nec accumsan. Sed a euismod eros.
            </div>
          <div className={`absolute p-3 border border-solid rotate-45 bg-[#000] -left-6 ${side == 'right' ? 'md:-left-6' : 'md:-right-6 md:left-auto'}`}>
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