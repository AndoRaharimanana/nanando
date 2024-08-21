'use client'
import { config } from '@fortawesome/fontawesome-svg-core'
import Banner from './ui/components/banner'
import { Lora, ArchivoBlack, PoppinsSemiBold, PoppinsBold, Poppins } from "./ui/font";
import Navigation from './ui/components/navigation'
import SocialLinks from './ui/components/socialLinks';
import Image from 'next/image';
import { Slider } from 'rsuite';
import React, {useState} from 'react';
import Chronologie from './ui/components/chronologie/chronologie';
import Formation from './ui/components/formation/formation';
import CustomSlider from './ui/components/customSlider/customSlider';

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
          <div className="relative flex flex-[4] justify-between items-center min-h-full">
            <div className="flex justify-start items-start">
              <div className={`rotate-180 ${Lora.className} [writing-mode:vertical-lr] [text-orientation: mixed] max-h-[120px] md:max-h-[180px] z-[2] text-[8px] md:text-xs lg:text-sm`}>
                Fullstack developer Symfony/React Native
              </div>
            </div>
            <div className='max-w-[100px] md:max-w-[225px] lg:max-w-[348px] z-[2]'>
              <span className={`${PoppinsSemiBold.className} leading-tight md:leading-none text-[40px] md:text-[85px] lg:text-[125px]`}>
                Hello I am Ando
              </span>
            </div>
            <div className="absolute max-w-[920px] z-[1] pt-[35px] md:pt-[60px] lg:pt-[90px]">
              <span className={`${ArchivoBlack.className} leading-tight md:leading-none break-words text-nanando-soft-grey text-[60px] md:text-[125px] lg:text-[225px]`}>
                FULL STACK
              </span>
            </div>
          </div>
          <div className="flex flex-[2] justify-end items-start min-h-full">
            <Navigation />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[50px] py-[75px] px-[40px]" id="about">
        <div className='hidden md:flex flex-1 items-center justify-end'>
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
            <div className='flex flex-1 items-center justify-end md:hidden pt-8'>
              <Image src={"/guy-plaid-shirt.png"}
                    width={300}
                    height={300}
                    alt="" />
            </div>
          </div>
          <p className={`${Poppins.className} max-w-[450px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='flex items-start justify-center gap-[30px]'>
            <button
              type="button"
              className={`${PoppinsSemiBold.className} inline-block rounded px-4 lg:px-6 py-[15px] text-xs uppercase text-white bg-reniala-red`}
            >
              Download resume
            </button>
            <button
              type="button"
              className={`${PoppinsSemiBold.className} inline-block rounded px-4 lg:px-6 py-[15px] text-xs uppercase text-white bg-reniala-red`}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
      <Chronologie />
      <Formation />
      <CustomSlider value={value} changeData={changeData}/>
    </main>
  );
}
