'use client'
import { config } from '@fortawesome/fontawesome-svg-core'
import Banner from './ui/components/banner'
import { Lora, ArchivoBlack, PoppinsSemiBold, PoppinsBold, Poppins } from "./ui/font";
import Navigation from './ui/components/navigation'
import SocialLinks from './ui/components/socialLinks';
import Image from 'next/image';
import { Slider } from 'rsuite';
import React, {useState} from 'react';

config.autoAddCss = false

export default function Home() {
  const [value, setValue] = useState(0);
  const changeData = (value: number) => {
    setValue(value);
  };
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between" id="home">
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
      <div className="flex items-center justify-between gap-[50px] py-[75px]" id="about">
        <div className='flex flex-1 items-center justify-end'>
          <Image src={"/guy-plaid-shirt.png"}
                 width={300}
                 height={300}
                 alt="" />
        </div>
        <div className='flex flex-1 items-start justify-center flex-col gap-[30px]'>
          <div className='flex items-start justify-center flex-col'>
            <span className={`${PoppinsSemiBold.className} text-[32px]`}>ABOUT ME</span>
            <div className='flex w-full gap-[10px]'>
              <div className='flex flex-1 items-center justify-between'>
                <hr className='flex flex-1 bg-nanando-white h-[3px]'></hr>
              </div>              
              <span className={`${PoppinsSemiBold.className} flex flex-1 text-[14px] text-reniala-red`}>WHO AM I</span>
            </div>
          </div>
          <p className={`${Poppins.className} max-w-[450px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='flex items-start justify-center gap-[30px]'>
            <button
              type="button"
              className={`${PoppinsSemiBold.className} inline-block rounded px-6 py-[15px] text-xs uppercase text-white bg-reniala-red`}
            >
              Download resume
            </button>
            <button
              type="button"
              className={`${PoppinsSemiBold.className} inline-block rounded px-6 py-[15px] text-xs uppercase text-white bg-reniala-red`}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center flex-col gap-[30px]' id="experience">
        <div className='flex items-center justify-center flex-col'>
          <span className={`${PoppinsSemiBold.className} text-[32px]`}>EXPERIENCE</span>
        </div>
        <div>
          <div className='flex items-center justify-center flex-col px-36'>
            <div className='relative flex self-end justify-self-end flex-col w-1/2 gap-[20px] px-14 border-l border-solid pb-14'>
              <div className='flex flex-col'>
                <span>2010 - 2020</span>
                <span>Developer java</span>
              </div>
              <div className='pb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod fermentum augue, eget porttitor augue rutrum id. Praesent tincidunt placerat augue nec accumsan. Sed a euismod eros.
              </div>
            <div className='absolute -left-6 p-3 border border-solid rotate-45 bg-[#000]'>
              <Image src={"/camera.png"}
                    width={25}
                    height={25}
                    alt=""
                    className='relative -rotate-45'  />
            </div>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col px-36'>
            <div className='relative flex self-start justify-self-start flex-col w-1/2 gap-[20px] px-14 border-r border-solid pb-14'>
              <div className='flex flex-col items-end'>
                <span>2010 - 2020</span>
                <span>Developer java</span>
              </div>
              <div className='pb-10 flex justify-end text-right'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod fermentum augue, eget porttitor augue rutrum id. Praesent tincidunt placerat augue nec accumsan. Sed a euismod eros.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod fermentum augue, eget porttitor augue rutrum id. Praesent tincidunt placerat augue nec accumsan. Sed a euismod eros.
              </div>
            <div className='absolute -right-6 p-3 border border-solid rotate-45 bg-[#000]'>
              <Image src={"/camera.png"}
                    width={25}
                    height={25}
                    alt=""
                    className='relative -rotate-45'  />
            </div>
            </div>
        </div>
          <div className='flex items-center justify-center flex-col px-36'>
            <div className='relative flex self-end justify-self-end flex-col w-1/2 gap-[20px] px-14 border-l border-solid pb-14'>
              <div className='flex flex-col'>
                <span>2010 - 2020</span>
                <span>Developer java</span>
              </div>
              <div className='pb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod fermentum augue, eget porttitor augue rutrum id. Praesent tincidunt placerat augue nec accumsan. Sed a euismod eros.
              </div>
            <div className='absolute -left-6 p-3 border border-solid rotate-45 bg-[#000]'>
              <Image src={"/camera.png"}
                    width={25}
                    height={25}
                    alt=""
                    className='relative -rotate-45'  />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center flex-col gap-[30px] px-36 py-14' id="formation">
        <div className='flex items-center justify-center flex-col'>
          <span className={`${PoppinsSemiBold.className} text-[32px]`}>FORMATION</span>
        </div>
        <div className='flex justify-between w-full'>
          <div className='flex flex-1 flex-col'>
            <span>Experience</span>
            <span className={`${PoppinsSemiBold.className} text-[24px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div className='flex flex-1 flex-col'>
            <div className='relative flex flex-col px-4 border-l border-solid pb-8'>
              <span className={`${PoppinsSemiBold.className}`}>Master</span>
              <span className={`${Lora.className} text-[12px]`}>ESTIA</span>
              <div className='absolute -left-4 p-3 border border-solid rotate-45 bg-[#fff] rounded-full'>
              </div>              
            </div>
            <div className='relative flex flex-col px-4 border-l border-solid pb-8'>
              <span className={`${PoppinsSemiBold.className}`}>Master</span>
              <span className={`${Lora.className} text-[12px]`}>ESTIA</span>
              <div className='absolute -left-4 p-3 border border-solid rotate-45 bg-[#fff] rounded-full'>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center flex-col gap-[30px] mx-36 py-14' id="skills">
        <div className='relative flex items-center justify-center flex-col gap-4'>
          <span className={`${PoppinsSemiBold.className} text-[32px]`}>My skills</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <span className={`${PoppinsBold.className} text-[78px] absolute text-nanando-soft-grey z-[-1]`}>Skills</span>
        </div>
        <div className='relative flex item-between justify-between w-full h-[120px]'>
          <div className='absolute flex item-between justify-between w-full gap-x-14 gap-y-8 flex-wrap bg-nanando-white text-nanando-black' style={{clipPath: 'polygon(0 0, '+value+'% 0, '+value+'% 100%, 0 100%)'}}>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>Php</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>Php</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>Php</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>Php</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <span className={`${PoppinsBold.className} text-[48px] absolute top-1/2 left-1/2 text-nanando-soft-grey -translate-y-1/2 -translate-x-1/2`}>Back-end</span>
          </div>
          <div className='absolute flex item-between justify-between w-full gap-x-14 gap-y-8 flex-wrap' style={{clipPath: 'polygon('+value+'% 0, 100% 0, 100% 100%, '+value+'% 100%)'}}>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>React</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>React</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>React</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <div className='flex item-between justify-between flex-col w-2/5 px-8'>
              <div className='flex item-between justify-between'>
                <span>React</span>
                <span>90%</span>
              </div> 
              <div>
                <progress value={75} max={100} className='w-full'/>
              </div> 
            </div>
            <span className={`${PoppinsBold.className} text-[48px] absolute top-1/2 left-1/2 text-nanando-soft-grey -translate-y-1/2 -translate-x-1/2`}>Front-end</span>
          </div>
          <div className='w-full absolute top-1/2'>
            <Slider onChange={changeData} tooltip={false} />
          </div>
        </div>
      </div>
    </main>
  );
}
