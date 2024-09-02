import { PoppinsSemiBold, Lora} from "../../font";
import Image from 'next/image';

function Item() {
    return (
      <div className='relative flex flex-col px-4 border-l-2 border-solid pb-8'>
        <span className={`${PoppinsSemiBold.className}`}>Master</span>
        <span className={`${Lora.className} text-xs`}>ESTIA</span>
        <div className='absolute -left-4 p-3 border border-solid rotate-45 bg-nanando-white rounded-full hover:rotate-0 hover:bg-reniala-red hover:border-reniala-red transition duration-500'>
        </div>              
      </div>
    );
}
export default function Formation() {
    return (
      <div className='flex flex-1 items-center justify-center flex-col gap-7 px-14 lg:px-36 py-c75' id="formation">
        <div className='flex items-center justify-center flex-col'>
          <span className={`${PoppinsSemiBold.className} text-3xl`}>FORMATION</span>
        </div>
        <div className='flex justify-between w-full gap-base md:gap-0'>
          <div className='flex flex-1 flex-col'>
            <span>Experience</span>
            <span className={`${PoppinsSemiBold.className} text-base md:text-2xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div className='flex flex-1 flex-col'>
            <Item />
            <Item />
          </div>
        </div>
      </div>
    );
  }