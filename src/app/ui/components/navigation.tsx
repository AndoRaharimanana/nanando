import { Poppins} from "../font";
export default function Navigation() {
    return (
        <ul className={`flex rotate-180 ${Poppins.className} gap-[50px] pl-[25px] flex-row-reverse [writing-mode:vertical-lr] [text-orientation: mixed] fixed`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#formation">Formation</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Let's talk</a></li>
        </ul>
    );
  }