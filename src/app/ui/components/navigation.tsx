import React, {useState} from 'react';
import { Poppins, PoppinsSemiBold, Lora} from "../font";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import SocialLinks from "./socialLinks";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import data from '@/app/services/data';

function Menu() {
    return (
        <>
            <li><a className='hover:text-reniala-red active:text-reniala-red hover:decoration-solid transition duration-300' href="#home">Home</a></li>
            <li><a className='hover:text-reniala-red active:text-reniala-red hover:decoration-solid transition duration-300' href="#about">About</a></li>
            <li><a className='hover:text-reniala-red active:text-reniala-red hover:decoration-solid transition duration-300' href="#experience">Experience</a></li>
            <li><a className='hover:text-reniala-red active:text-reniala-red hover:decoration-solid transition duration-300' href="#formation">Formation</a></li>
            <li><a className='hover:text-reniala-red active:text-reniala-red hover:decoration-solid transition duration-300' href="#skills">Skills</a></li>
            <li><a className='hover:text-reniala-red active:text-reniala-red hover:decoration-solid transition duration-300' href="#contact">Let's talk</a></li>        
        </>
    );
}

export default function Navigation() {
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const clickMobileMenu = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    };    
    return (
        <>
            <ul className={`rotate-180 ${Poppins.className} gap-12 pl-6 flex-row-reverse [writing-mode:vertical-lr] [text-orientation: mixed] fixed hidden lg:flex`}>
                <Menu />
            </ul>            
            <div className="fixed lg:hidden mx-4 z-50">
                <FontAwesomeIcon icon={displayMobileMenu ? faXmark : faBars} fontSize={25} onClick={clickMobileMenu} className="shadow shadow-nanando-black"/>
            </div>            
            <div className={`fixed ${displayMobileMenu ? '' : 'hidden'} lg:hidden w-full h-full bg-nanando-soft-grey z-40 top-0 flex items-center justify-center`}>
                <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:w-full">
                    <div className="flex">
                        <ul className={`leading-[80px] text-3xl ${PoppinsSemiBold.className}`}>
                            <Menu />
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ul className={`leading-6 ${Lora.className}`}>
                            <li className=""><FontAwesomeIcon icon={faEnvelope} /> {data.profile.email}</li>
                            <li className=""><FontAwesomeIcon icon={faWhatsapp} /> {data.profile.phone}</li>
                        </ul>                
                        <div>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
  }