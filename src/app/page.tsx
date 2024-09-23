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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import GitHubCalendar from 'react-github-calendar';
import data from './services/data';

config.autoAddCss = false

export default function Home() {
  const [value, setValue] = useState(50);
  const changeData = (value: number) => {
    setValue(value);
  };
  return (
    <main className='pb-c75'>
      <div className="flex min-h-screen flex-col items-center justify-between" id="home">
        <Banner />
        <div className="flex bg-transparent min-h-screen w-full g-1 py-6 absolute">
          <div className="flex flex-[2] justify-between items-end min-h-full">        
            <SocialLinks />
          </div>
          <div className="relative flex flex-[4] justify-between items-center min-h-full">
            <div className="flex justify-start items-start">
              <div className={`rotate-180 ${Lora.className} [writing-mode:vertical-lr] max-h-32 md:max-h-44 z-[2] text-[8px] md:text-xs lg:text-sm`}>
                Fullstack developer Symfony/React Native
              </div>
            </div>
            <div className='max-w-24 md:max-w-56 lg:max-w-c348 z-[2]'>
              <span className={`${PoppinsSemiBold.className} leading-tight md:leading-none text-4xl md:text-[85px] lg:text-9xl [text-shadow:0px_12px_5px_#0a0a0a]`}>
                Hello I am Ando
              </span>
            </div>
            <div className="absolute max-w-4xl z-[1] pt-9 md:pt-16 lg:pt-24">
              <span className={`${ArchivoBlack.className} leading-tight md:leading-none break-words text-nanando-soft-grey text-6xl md:text-9xl lg:text-[225px] [text-shadow:12px_12px_8px_#0a0a0a]`}>
                FULL STACK
              </span>
            </div>
          </div>
          <div className="flex flex-[2] justify-end items-start min-h-full">
            <Navigation />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 py-c75 px-10" id="about">
        <div className='hidden md:flex flex-1 items-center justify-end'>
          <Image src={"/guy-plaid-shirt.png"}
                 width={300}
                 height={300}
                 alt="" />
        </div>
        <div className='flex flex-1 items-center md:items-start justify-center flex-col gap-7'>
          <div className='flex items-start justify-center flex-col'>
            <span className={`${PoppinsSemiBold.className} text-3xl`}>ABOUT ME</span>
            <div className='flex w-full gap-2.5'>
              <div className='flex flex-1 items-center justify-between'>
                <hr className='flex flex-1 bg-nanando-white h-0.5'></hr>
              </div>              
              <span className={`${PoppinsSemiBold.className} flex flex-1 text-sm text-reniala-red`}>WHO AM I</span>
            </div>
            <div className='flex flex-1 items-center justify-end md:hidden pt-8'>
              <Image src={"/guy-plaid-shirt.png"}
                    width={300}
                    height={300}
                    alt="" />
            </div>
          </div>
          <p className={`${Poppins.className} max-w-md`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='flex items-start justify-center gap-7'>
            <button
              type="button"
              className={`${PoppinsSemiBold.className} inline-block rounded px-4 lg:px-6 py-4 text-xs uppercase text-white bg-reniala-red hover:-translate-y-1 hover:bg-reniala-red-dark transition ease-in-out delay-150 duration-300`}
            >
              Download resume
            </button>
            <a href="#contact">
              <button
                type="button"
                className={`${PoppinsSemiBold.className} inline-block rounded px-4 lg:px-6 py-4 text-xs uppercase text-white bg-reniala-red hover:-translate-y-1 hover:bg-reniala-red-dark transition ease-in-out delay-150 duration-300`}
              >
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
      <Chronologie />
      <Formation />
      <CustomSlider value={value} changeData={changeData}/>
      <div className='flex flex-1 flex-col md:flex-row items-center justify-center gap-7 px-14 lg:px-36 py-c75'>        
        <span className={`${PoppinsSemiBold.className} text-xl mb-4`}>Website made with: </span>
        <div className='flex justify-center w-full gap-10'>          
          <Image src="/skills/nextjs.png"
                  width={125}
                  height={50}
                  sizes=""
                  style={{objectFit: "contain",
                  maxWidth: "100px", 
                  maxHeight: "50px", }}
                  className="bg-nanando-white rounded-full p-3 hover:scale-110"
                  alt=""  />    
          <Image src="/skills/react.png"
                  width={125}
                  height={50}
                  sizes=""
                  style={{objectFit: "contain",
                  maxWidth: "100px", 
                  maxHeight: "50px", }}
                  className="bg-nanando-white rounded-full p-3 hover:scale-110"
                  alt=""  />    
          <Image src="/skills/tailwind.png"
                  width={125}
                  height={50}
                  sizes=""
                  style={{objectFit: "contain",
                  maxWidth: "100px", 
                  maxHeight: "50px", }}
                  className="bg-nanando-white rounded-full p-3 hover:scale-110"
                  alt=""  />
        </div>       
      </div> 
      <div className='flex flex-1 items-center justify-center flex-col gap-7 px-14 lg:px-36 py-c75' id="contact">
        <div className='flex items-center justify-center flex-col'>
          <span className={`${PoppinsSemiBold.className} text-3xl`}>CONTACT ME</span>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between w-full gap-base md:gap-0'>
          <span><a href="#" className='hover:text-reniala-red'><FontAwesomeIcon icon={faEnvelope} /> {data.profile.email}</a></span>
          <span><a href="#" className='hover:text-reniala-red'><FontAwesomeIcon icon={faWhatsapp} /> {data.profile.phone}</a></span>
          <span><a href="#" className='hover:text-reniala-red'><FontAwesomeIcon icon={faLinkedin} /> {data.profile.fullname}</a></span>
        </div>       
      </div>      
      <div className='hidden flex flex-1 items-center justify-center flex-col gap-7 px-14 lg:px-36 py-c75' id="contact">
        <div className='flex items-center justify-center flex-col'>
          <span className={`${PoppinsSemiBold.className} text-3xl`}>Git Contributions</span>
        </div>
        <div className='flex justify-between w-full gap-base md:gap-0'>
          <GitHubCalendar username="AndoRaharimanana" />        
        </div>
      </div> 
    </main>
  );
}
