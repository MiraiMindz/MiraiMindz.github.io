import { GenericStateProps } from "../../utils/interfaces";
import { TiltDivider1 } from "../Dividers/TiltDividers";
import { NavLink } from "react-router-dom";
import * as vars from '../../utils/variables';
import logoFooterDark from '/Logos/LogoFooterDark_SVG.svg';
import logoFooterLight from '/Logos/LogoFooterLight_SVG.svg';
import { getRandomNumber } from "../../utils/functions/getRandomNumber";
import { useEffect } from "react";

function DiscordIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
  )
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
  )
}


function QuoteText() {
  let quotes = ['Seja a luz mais forte que puder, para guiar o outros em suas próprias escuridões.', 'A intrínseca fé que rege vossa sublime existência, o condena ao vazio de seu próprio ceticismo, cercados por tais anseios, esperamos a morte.', 'Somos estrelas ou memórias no tempo?', 'Sempre dizemos que o Tempo dará todas as respostas, mas nós damos tempo ao Tempo?']

  let quote: string = quotes[getRandomNumber(0, quotes.length)];

  useEffect(() => {
    console.log(quote)
  }, [])

  if (quote != undefined) {
    return (
      <h1 className={vars.textSizesSM2 + "font-walterTurncoat italic center-justified mt-2"}>
        {quote}
      </h1>
    )
  } else {
    return (
      <h1 className={vars.textSizesSM2 + "font-walterTurncoat italic center-justified mt-2"}>
        {quotes[0]}
      </h1>
    )
  }
}

export function Footer(props: GenericStateProps) {
  return (
    <div className={(props.state ? "blur-sm " : "") + "bg-transparent"}>
      <div className="bg-transparent">
        <TiltDivider1/>
      </div>
      <div className={(props.state ? "pb-0 " : "md:pb-0 pb-24 ") + "bg-ctp-text text-ctp-base"}>
        <MDContent darkLightSwitch={props.darkLightSwitch}/>
        <PhoneContent darkLightSwitch={props.darkLightSwitch} />
      </div>
    </div>
  )
}

interface MDContentProps {
  darkLightSwitch: boolean;
}

function PhoneContent(props: MDContentProps) {
  return (
    <div className="px-4 block md:hidden relative">
      <div className="absolute w-full left-0 right-0 top-6">
      <img src={props.darkLightSwitch ? logoFooterLight : logoFooterDark}
        alt="logo" className="w-20 h-20 ml-auto mr-auto"/>
      </div>
      <div className={vars.textSizesLG2 + 'flex flex-row justify-between relative'}>
        <div>
          <h1 className="font-bebasNeue">Contato</h1>
          <ul className="font-leagueGothic fill-ctp-base">
            <li>
              <a className="flex flex-row items-center" href="https://github.com/MiraiMindz">
                <div className="w-8">
                  <div className="w-6 h-6 fill-ctp-base">
                    <GithubIcon />
                  </div>
                </div>
                <h1>MiraiMindz</h1>
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center" href="https://www.linkedin.com/in/b2barreto/">
                <div className="w-8">
                  <div className="w-6 h-6 fill-ctp-base">
                    <LinkedInIcon />
                  </div>
                </div>
                <h1>b2barreto</h1>
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center" href="https://discord.com/users/775275139948085248/">
                <div className="w-8">
                  <div className="w-6 h-6 fill-ctp-base">
                    <DiscordIcon />
                  </div>
                </div>
                <h1>Mirai#9416</h1>
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center" href="mailto:barreto2contato@gmail.com">
                <div className="w-8">
                  <div className="w-6 h-6 fill-ctp-base">
                    <EmailIcon />
                  </div>
                </div>
                <h1>barreto2contato@gmail.com</h1>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bebasNeue">Explore</h1>
          <ul className="font-leagueGothic text-right">
            <li>
              <NavLink to="/">
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                Aulas
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                Sobre mim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <QuoteText />
      <h1 className={vars.textSizesXL2 + "font-bebasNeue text-center mt-2"}>Mirai Website</h1>
    </div>
  )
}


function MDContent(props: MDContentProps) {
  return (
    <div className={vars.textSizesLG2 + 'hidden md:block'}>
      <div className="grid grid-cols-3 grid-rows-1 mx-8">
        <div className="w-fit ml-auto mr-auto">
          <h1 className="ml-16 font-bebasNeue">
          Contato
          </h1>
          <ul className="ml-16 font-leagueGothic fill-ctp-base w-56 2xl:w-56 3xl:w-132">
            <li className="hover:pl-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <a className="flex flex-row items-center" href="https://github.com/MiraiMindz">
                <div className="md:w-8 2xl:w-16 3xl:w-24">
                  <div className="md:w-6 md:h-6 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16">
                    <GithubIcon />
                  </div>
                </div>
                <h1>MiraiMindz</h1>
              </a>
            </li>
            <li className="hover:pl-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <a className="flex flex-row items-center" href="https://www.linkedin.com/in/b2barreto/">
                <div className="md:w-8 2xl:w-16 3xl:w-24">
                  <div className="md:w-6 md:h-6 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16">
                    <LinkedInIcon />
                  </div>
                </div>
                <h1>b2barreto</h1>
              </a>
            </li>
            <li className="hover:pl-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <a className="flex flex-row items-center" href="https://discord.com/users/775275139948085248/">
                <div className="md:w-8 2xl:w-16 3xl:w-24">
                  <div className="md:w-7 md:h-6 2xl:w-14 2xl:h-12 3xl:w-20 3xl:h-16">
                    <DiscordIcon />
                  </div>
                </div>
                <h1>Mirai#9416</h1>
              </a>
            </li>
            <li className="hover:pl-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <a className="flex flex-row items-center" href="mailto:barreto2contato@gmail.com">
                <div className="md:w-8 2xl:w-16 3xl:w-24">
                  <div className="md:w-6 md:h-6 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16">
                    <EmailIcon />
                  </div>
                </div>
                <h1>barreto2contato@gmail.com</h1>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <img src={props.darkLightSwitch ? logoFooterLight : logoFooterDark} alt="logo"  className="md:w-20 md:h-20 2xl:w-32 2xl:h-32 3xl:w-48 3xl:h-48 3xl:my-1"/>
          <QuoteText />
        </div>
        <div className="w-fit ml-auto mr-auto text-right">
          <h1 className="font-bebasNeue mr-4">
            Explore
          </h1>
          <ul className="font-leagueGothic mr-4 md:w-24 2xl:w-32 3xl:w-48">
            <li className="hover:pr-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <NavLink to="/">
                Início
              </NavLink>
            </li>
            <li className="hover:pr-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <NavLink to="/">
                Projetos
              </NavLink>
            </li>
            <li className="hover:pr-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <NavLink to="/classes">
                Aulas
              </NavLink>
            </li>
            <li className="hover:pr-4 transition-all hover:fill-ctp-surface2 hover:text-ctp-surface2">
              <NavLink to="/about">
                Sobre mim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="font-bebasNeue text-center 2xl:mt-2 3xl:mt-4">Mirai Website</h1>
    </div>
  )
}
