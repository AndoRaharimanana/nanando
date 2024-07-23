import { config } from '@fortawesome/fontawesome-svg-core'
import Banner from './ui/components/banner'
import { Lora, ArchivoBlack, PoppinsSemiBold } from "./ui/font";
import Navigation from './ui/components/navigation'
import SocialLinks from './ui/components/socialLinks';
import Image from 'next/image';
config.autoAddCss = false

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Banner />
        <div className="flex bg-transparent min-h-screen w-full g-[5px] py-[25px] absolute">
          <div className="flex flex-[2] justify-between items-end min-h-full">        
            <SocialLinks />
          </div>
          <div className="flex flex-[4] justify-between items-center min-h-full">
            <div className="flex justify-start items-start">
              <div className={`rotate-180 ${Lora.className} [writing-mode:vertical-lr] [text-orientation: mixed] max-h-[180px] z-[2]`}>
                Fullstack developer Symfony/React Native
              </div>
              <div className="absolute max-w-[920px] bottom-[85px] z-[1]">
                <span className={`${ArchivoBlack.className} leading-none break-words text-nanando-soft-grey text-[225px]`}>
                  FULL STACK
                </span>
              </div>
            </div>
            <div className='max-w-[348px] z-[2]'>
              <span className={`${PoppinsSemiBold.className} leading-none text-[125px]`}>
                Hello I am Ando
              </span>
            </div>
          </div>
          <div className="flex flex-[2] justify-end items-start min-h-full">
            <Navigation />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[50px] py-[75px]">
        <div className='flex flex-1 items-center justify-end'>
          <Image src={"/guy-plaid-shirt.png"}
                 width={300}
                 height={300}
                 alt="" />
        </div>
        <div className='flex flex-1 items-start justify-center flex-col gap-[30px]'>
        <div className='flex items-start justify-center flex-col'>
            <span className={`${PoppinsSemiBold.className} text-[28px]`}>ABOUT ME</span>
            <span>WHO AM I</span>
          </div>
          <p className='max-w-[450px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='flex items-start justify-center gap-[30px]'>
            <button
              type="button"
              className="inline-block rounded px-6 pb-2 pt-2.5 text-xs uppercase text-white bg-dark-grey"
            >
              Download resume
            </button>
            <button
              type="button"
              className="inline-block rounded px-6 pb-2 pt-2.5 text-xs uppercase text-white bg-dark-grey"
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
