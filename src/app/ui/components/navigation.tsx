import React, {useState} from 'react';
import { Poppins, PoppinsSemiBold, Lora} from "../font";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import SocialLinks from "./socialLinks";

function Menu() {
    return (
        <>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#formation">Formation</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Let's talk</a></li>        
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
                <FontAwesomeIcon icon={displayMobileMenu ? faXmark : faBars} fontSize={25} onClick={clickMobileMenu}/>
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
                            <li className="">aanod@email.com</li>
                            <li className="">+2613404040</li>
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