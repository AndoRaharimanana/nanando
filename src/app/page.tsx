import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex" style={{backgroundColor: '#0A0A0A', minHeight: '100vh', width: '100%', gap: 5}}>
        <div style={{flex: 2, backgroundColor: '#171717', minHeight: '100%'}}></div>
        <div style={{flex: 1, backgroundColor: '#171717', minHeight: '100%'}}></div>
        <div style={{flex: 1, backgroundColor: '#171717', minHeight: '100%'}}></div>
        <div style={{flex: 1, backgroundColor: '#171717', minHeight: '100%'}}></div>
        <div style={{flex: 1, backgroundColor: '#171717', minHeight: '100%'}}></div>
        <div style={{flex: 2, backgroundColor: '#171717', minHeight: '100%'}}></div>
      </div>
      <div className="flex" style={{backgroundColor: 'transparent', minHeight: '100vh', width: '100%', gap: 5, position: 'absolute', padding: 25, paddingRight: 0}}>
        <div className="flex justify-between items-end" style={{flex: 2, minHeight: '100%'}}>        
          <ul className="flex" style={{gap: 10}}>
            <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
        </div>
        <div className="flex justify-between items-center" style={{flex: 4, minHeight: '100%'}}>
          <div className="flex justify-start items-start">
            <div className="rotate-180" style={{writingMode: 'vertical-rl', textOrientation: 'mixed', maxHeight: 180, zIndex: 2}}>
              Fullstack developer Symfony/React Native
            </div>
            <div style={{position: 'absolute', maxWidth: 580, bottom: 85, zIndex: 1, opacity: 0.7}}>
              <p style={{fontSize: 225, lineHeight: 1, wordWrap: 'break-word', color: '#525252'}}>
                Full stack
              </p>
            </div>
          </div>
          <div style={{maxWidth: 365, zIndex: 2}}>
            <p style={{fontSize: 125, lineHeight: 1}}>
              Hello I am Ando
            </p>
          </div>
        </div>
        <div className="flex justify-end items-start" style={{flex: 2, minHeight: '100%'}}>
          <ul className="flex rotate-180" style={{gap: 50, writingMode: 'vertical-rl', textOrientation: 'mixed', paddingLeft: 25}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
