import { config } from '@fortawesome/fontawesome-svg-core'
import Banner from './ui/components/banner'
import { Lora, ArchivoBlack, PoppinsSemiBold } from "./ui/font";
import Navigation from './ui/components/navigation'
import SocialLinks from './ui/components/socialLinks';
config.autoAddCss = false

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <div className="flex bg-transparent min-h-screen w-full g-[5px] py-[25px] absolute">
        <div className="flex justify-between items-end" style={{flex: 2, minHeight: '100%'}}>        
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center" style={{flex: 4, minHeight: '100%'}}>
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
        <div className="flex justify-end items-start" style={{flex: 2, minHeight: '100%'}}>
          <Navigation />
        </div>
      </div>
    </main>
  );
}
