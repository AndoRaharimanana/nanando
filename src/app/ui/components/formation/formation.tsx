import { PoppinsSemiBold, Lora} from "../../font";
import Image from 'next/image';

function Item() {
    return (
      <div className='relative flex flex-col px-4 border-l border-solid pb-8'>
        <span className={`${PoppinsSemiBold.className}`}>Master</span>
        <span className={`${Lora.className} text-[12px]`}>ESTIA</span>
        <div className='absolute -left-4 p-3 border border-solid rotate-45 bg-[#fff] rounded-full'>
        </div>              
      </div>
    );
}
export default function Formation() {
    return (
      <div className='flex flex-1 items-center justify-center flex-col gap-[30px] px-14 lg:px-36 py-14' id="formation">
        <div className='flex items-center justify-center flex-col'>
          <span className={`${PoppinsSemiBold.className} text-[32px]`}>FORMATION</span>
        </div>
        <div className='flex justify-between w-full gap-[16px] md:gap-0'>
          <div className='flex flex-1 flex-col'>
            <span>Experience</span>
            <span className={`${PoppinsSemiBold.className} text-[16px] md:text-[24px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div className='flex flex-1 flex-col'>
            <Item />
            <Item />
          </div>
        </div>
      </div>
    );
  }