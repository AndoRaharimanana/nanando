import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
export default function SocialLinks() {
    return (
        <ul className="flex gap-[10px] pl-[25px]">
            <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
    );
  }