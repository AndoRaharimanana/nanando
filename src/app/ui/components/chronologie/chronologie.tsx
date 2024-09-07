import { PoppinsSemiBold, Lora} from "../../font";
import Image from 'next/image';

type ItemProps = {
  data: any;
  side: string;
};

function Item({ data, side}: ItemProps) {
    return (
        <div className='flex md:items-center md:justify-center flex-col px-14 md:px-0 lg:px-36'>
          <div className={`relative flex flex-col w-full md:w-1/2 gap-5 md:px-14 border-solid pb-14 border-l ${side == 'right' ? 'md:self-end md:justify-self-end md:border-l' : 'md:self-start md:justify-self-start md:border-r md:border-l-0'}`}>
            <div className={`flex flex-col pl-14 md:pl-0 ${side == 'right' ? '' : 'md:items-end'}`}>
              <span className={`${Lora.className} text-xs`}>{data.year}</span>
              <span>{data.poste}</span>
              <span className="text-nanando-grey">{data.company.name} <span className="text-xs">({data.company.place})</span></span>
            </div>
            <div className={`pb-10 pl-14 md:pl-0 ${side == 'right' ? '' : 'md:flex md:justify-end md:text-right'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod fermentum augue, eget porttitor augue rutrum id. Praesent tincidunt placerat augue nec accumsan. Sed a euismod eros.
            </div>
            <div className={`flex flex-wrap gap-6 pl-14 md:pl-0 ${side == 'right' ? '' : 'md:justify-end'}`}>
              <Image className="hover:animate-bounce" src={"/camera.png"}
                    width={25}
                    height={25}
                    alt=""  />

              <Image src={"/camera.png"}
                                  width={25}
                                  height={25}
                                  alt=""  />                                 
            </div>
          <div className={`absolute p-3 border border-solid rotate-45 bg-[#000] -left-8 ${side == 'right' ? 'md:-left-8' : 'md:-right-8 md:left-auto'} hover:scale-125 transition duration-500`}>
            <a href={data.company.link} target="blank">
              <Image src={data.company.logo}
                    width={35}
                    height={35}
                    alt={data.company.name}
                    className='relative -rotate-45'  />
            </a>
          </div>
          </div>
        </div>
    );
}
export default function Chronologie() {
  const data =  [
      {
        year: 'April 2023 - by now',
        poste: 'Remote Fullstack Symfony/React/React Native',
        company: {
          logo: '/ifoxcode.png',
          name: 'Ifoxcode',
          place: 'Mauritius',
          link: "https://ifoxcode.com/"
        }
      },
      {
        year: 'December 2021 - by now',
        poste: 'JAVA Developer',
        company: {
          logo: '/bici.png',
          name: 'BICI',
          place: 'Madagascar',
          link: "https://bici.mg/"
        }
      },
      {
        year: 'July 2023 - October 2023',
        poste: 'Intern Blockchain Developer',
        company: {
          logo: '/bici.png',
          name: 'BICI',
          place: 'Madagascar',
          link: "https://bici.mg/"
        }
      },
      {
        year: 'December 2021 - March 2023',
        poste: 'Remote Webmaster',
        company: {
          logo: '/RAPP.jpg',
          name: 'RAPP',
          place: 'Mauritius',
          link: "https://www.rapp.com/"
        }
      },
      {
        year: 'August 2021 - November 2021',
        poste: 'Intern JAVA Developer',
        company: {
          logo: '/bici.png',
          name: 'BICI',
          place: 'Madagascar',
          link: "https://bici.mg/"
        }
      },
    ];

    return (
        <div className='flex flex-1 items-center justify-center flex-col gap-7 py-c75' id="experience">
          <div className='flex items-center justify-center flex-col'>
            <span className={`${PoppinsSemiBold.className} text-3xl`}>EXPERIENCE</span>
          </div>
          <div>
            {data.map((item, index) => (
              <Item key={index} data={item} side={index % 2 === 0? 'right' : 'left'}/>
            ))}
          </div>
        </div>
    );
  }