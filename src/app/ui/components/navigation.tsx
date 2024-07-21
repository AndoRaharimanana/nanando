import { Poppins} from "../font";
export default function Navigation() {
    return (
        <ul className={`flex rotate-180 ${Poppins.className} gap-[50px] pl-[25px] flex-row-reverse [writing-mode:vertical-lr] [text-orientation: mixed]`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Formation</a></li>
            <li><a href="#">Let's talk</a></li>
        </ul>
    );
  }