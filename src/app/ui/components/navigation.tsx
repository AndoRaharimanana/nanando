import { Poppins} from "../font";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
    return (
        <>
            <ul className={`rotate-180 ${Poppins.className} gap-[50px] pl-[25px] flex-row-reverse [writing-mode:vertical-lr] [text-orientation: mixed] fixed hidden lg:flex`}>
                <Menu />
            </ul>            
            <div className="fixed lg:hidden mx-4 z-50">
                <FontAwesomeIcon icon={faBars} fontSize={25}/>
            </div>            
            <div className="fixed w-full h-full bg-nanando-soft-grey z-40 top-0">
                <ul className="">
                    <Menu />
                </ul>
            </div> 
        </>
    );
  }