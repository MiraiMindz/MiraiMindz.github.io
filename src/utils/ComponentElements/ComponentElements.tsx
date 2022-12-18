import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MutableRefObject, useRef } from "react"
import * as vars from '../variables';
import { CapLinkProps, ToCLinkProps, ArrowHeadProps, BackNextChaptersProps, ChapterCardProps, BaseCardProps, CourseCardProps } from '../interfaces';


export function genRefs(stateFunc: Function): [MutableRefObject<any>, Function] {
  const refLoc: MutableRefObject<any> = useRef()
  const rLF = () => {
    refLoc.current.scrollIntoView()
  }
  const refLocFunc = () => {
    stateFunc()
    setTimeout(rLF, 200)
    console.log("scrolling")

  }

  return [refLoc, refLocFunc]
}

export function CapLink(props: CapLinkProps) {
  function upState() {
    if (props.markAsCompletedFunction != undefined) {
      props.markAsCompletedFunction()
    }
  }
  return (
    <div>
      <button onClick={upState}>
        <NavLink to={props.link} className="hidden md:block">
          <h1 className={props.blocked ? "text-ctp-surface0 cursor-default" : props.currentCap ? "text-ctp-blue pr-2" : "text-ctp-text hover:pr-2 transition-all"}>
            {props.title}
          </h1>
        </NavLink>
      </button>
      <button onClick={upState}>
        <NavLink to={props.link} className="block md:hidden">
          <h1 className={(props.blocked ? "text-ctp-surface0 cursor-default" : props.currentCap ? "text-ctp-blue" : "text-ctp-text transition-all") + " pl-2"}>
            {props.title}
          </h1>
        </NavLink>
      </button>
    </div>
  )
}

export function ToCLink(props: ToCLinkProps) {
  let levelIndent;
  switch (props.level) {
    case 1:
      levelIndent = "md:pl-1 md:hover:pl-2 ";
      break;
    case 2:
      levelIndent = "md:pl-2 md:hover:pl-3 ";
      break;
    case 3:
      levelIndent = "md:pl-3 md:hover:pl-4 ";
      break;
    case 4:
      levelIndent = "md:pl-4 md:hover:pl-5 ";
      break;
    case 5:
      levelIndent = "md:pl-5 md:hover:pl-6 ";
      break;
    case 6:
      levelIndent = "md:pl-6 md:hover:pl-7 ";
      break;
    case 7:
      levelIndent = "md:pl-7 md:hover:pl-8 ";
      break;
    case 8:
      levelIndent = "md:pl-8 md:hover:pl-9 ";
      break;
    case 9:
      levelIndent = "md:pl-9 md:hover:pl-10 ";
      break;
    case 10:
      levelIndent = "md:pl-10 md:hover:pl-11 ";
      break;
    default:
      levelIndent = "md:pl-0 md:hover:pl-1 ";
      break;
  }
  return ( //  <HashLink to={props.linkURL}>{props.title}</HashLink>
    <div>
      <h1 className="transition-all hover:text-ctp-blue block md:hidden text-justify">
        <button onClick={props.linkRefFunc}>{props.title}</button>
      </h1>
      <h1 className={levelIndent + "transition-all hover:text-ctp-blue hidden md:block"}>
        <ScrollLink  to={props.linkHashID} spy={true} smooth={true}>{props.ToCID} {props.title}</ScrollLink>
      </h1>
    </div>
  )
}

export function ArrowHead(props: ArrowHeadProps) {
  let dirr;
  if (props.direction == "up") {
    dirr = "rotate-0 "
  } else if (props.direction == "down") {
    dirr = "rotate-180 "
  } else if (props.direction == "left") {
    dirr = "-rotate-90 "
  } else if (props.direction == "right") {
    dirr = "rotate-90 "
  } else {
    dirr = ""
  }
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" className={dirr + "w-6 h-6"}>
      <g>
        <path d="M42.8,944.2c-9.2,19.1-9.5,33.3-2.5,40.9c16.1,17.6,65.7-16.1,96.2-37.3l240.9-167.7c30.5-21.2,84.1-48.8,121.3-49.5c3.7-0.1,7.4,0,11.1,0c37.1,0.9,90.6,28.9,120.8,50.5l232.6,165.6c30.3,21.5,79.6,55.6,96.1,38c7.2-7.6,7.2-22-1.6-41.2L544.7,39.1c-17.6-38.5-46.7-38.8-65.1-0.7L42.8,944.2z"/>
      </g>
    </svg>
  )
}


export function CapsSumWrapper({children}: any) {
  return (
    <div className={vars.textSizesLG2 + `font-bebasNeue overscroll-contain overflow-auto scroll-smooth bg-ctp-base select-none block border-ctp-text
    px-2 py-1 fixed
    text-center max-h-[80%]

    right-8                 3xl:right-8       4xl:right-24
    border-2                3xl:border-4      4xl:border-5
    rounded-xl              3xl:rounded-2xl   4xl:rounded-3xl
                md:top-16   3xl:top-20        4xl:top-40
    ` + vars.CapsWrapperSize}>
      {children}
    </div>
  )
}

export function BackNextChapters(props: BackNextChaptersProps) {
  let nxChapComponent;
  let prevChapComponent;
  let pcShown;
  let ncShown;
  let prevChapText;
  if (props.prevChapLink == '/classes/pyless') {
    prevChapText = "Voltar ao Menu"
  } else {
    prevChapText = "Capitulo Anterior"
  }

  if (props.prevChapLink != "") {
    prevChapComponent = <button onClick={props.updateStateFunction}><NavLink to={props.prevChapLink}><h1 className={vars.textSizesXL + "font-bebasNeue hover:pr-6 transition-all fill-ctp-blue text-ctp-blue hover:text-ctp-sky hover:fill-ctp-sky flex items-center"}><ArrowHead direction="left"/><span className="pl-1 pt-0.5">{prevChapText}</span></h1></NavLink></button>
    pcShown = true;
  } else {
    prevChapComponent = null;
    pcShown = false;
  }

  if (props.nextChapLink != "") {
    nxChapComponent = <button onClick={props.markAsCompletedFunction}><NavLink to={props.nextChapLink}><h1 className={vars.textSizesXL + "font-bebasNeue hover:pl-6 transition-all fill-ctp-blue text-ctp-blue hover:text-ctp-sky hover:fill-ctp-sky flex items-center"}><span className="pr-1 pt-0.5">Proximo Capitulo</span><ArrowHead direction="right"/></h1></NavLink></button>
    ncShown = true;
  } else {
    nxChapComponent = null;
    ncShown = false;
  }

  return (
    <div className="flex flex-row md:justify-center">
      <div className={(pcShown ? (ncShown ? "mr-4" : "") : "hidden") + " flex flex-row justify-end w-64"}>
      {prevChapComponent}
      </div>
      <div className={(ncShown ? (pcShown ? "ml-4" : "")  : "hidden") + " flex flex-row justify-start w-64"}>
      {nxChapComponent}
      </div>
    </div>
  )
}

export function ChapterCard(props: ChapterCardProps) {
  let status;
  let border;
  let capIdxBG;

  if (props.state == 2) {
    status = <span className="text-ctp-green font-bebasNeue">Completo</span>
  } else if (props.state == 1) {
    status = <span className="text-ctp-yellow font-bebasNeue">Em progresso...</span>
  } else {
    status = <span className="text-ctp-red font-bebasNeue">Não iniciado</span>
  }

  if (props.userCompletedArray != undefined) {
    if (props.userCompletedArray.includes(props.chapter)) {
      border = ' border-ctp-green '
      capIdxBG = ' bg-ctp-green '
    } else {
      border = ' border-ctp-text '
      capIdxBG = ' bg-ctp-text '
    }
  }

  return (
    <NavLink to={props.link}>
      <div className={`bg-ctp-mantle transition-all
      font-leagueGothic select-none
      flex flex-col justify-between

      md:h-32   3xl:h-40 4xl:h-52
      md:hover:scale-110 3xl:hover:scale-105
      md:border-2 4xl:border-5
      md:rounded-xl 4xl:rounded-2xl
      md:p-2  4xl:p-4`
      + border + (props.blocked ? 'blur-xs brightness-90' : '')}>
        <div className="flex flex-row justify-between">
          <h1 className={vars.textSizesBASE2 + "font-bebasNeue"}>{props.title}</h1>
          <div className={capIdxBG + "rounded-full font-bebasNeue  md:w-6 md:h-6 3xl:w-8 3xl:h-8 4xl:w-12 4xl:h-12"}>
            <h1 className={vars.textSizesBASE2 + "text-ctp-mantle text-center px-2"}>{props.chapter}</h1>
          </div>
        </div>
        <div>
          <p className={vars.textSizesBASE2}>
            {props.description}
          </p>
        </div>
        <div className={vars.textSizesSM2 + "font-bebasNeue"}>
          <p>Desenvolvimento: {status}</p>
        </div>
      </div>
    </NavLink>
  )
}

export function BaseCard(props: BaseCardProps) {
  return (
    <div className={`
    hidden md:block border-2 border-ctp-text rounded-xl p-2
    bg-ctp-mantle transition-all
    font-leagueGothic select-none
    md:hover:scale-110 3xl:hover:scale-105
    md:border-2 3xl:border-4 4xl:border-5
    md:rounded-xl 4xl:rounded-2xl
    md:p-2  3xl:p-4 4xl:p-6
    ` + (props.blocked ? 'blur-xs brightness-90' : '')}>
      {props.children}
    </div>
  )
}

export function BaseCardMobile(props: BaseCardProps) {
  return (
    <div className={'block md:hidden hover:scale-110 transition-all border-2 border-ctp-text rounded-xl p-2 bg-ctp-mantle select-none mb-8 h-48 ' + (props.blocked ? 'blur-xs brightness-90' : '')}>
      {props.children}
    </div>
  )
}

export function CourseCard(props: CourseCardProps) {
  let stateString: string;
  let stateColor: string;
  switch (props.courseState) {
    case 0:
      stateColor = 'text-ctp-red'
      stateString = "Não Iniciado."
      break;
    case 1:
      stateColor = 'text-ctp-yellow'
      stateString = "Em Progresso..."
      break;
    case 2:
      stateColor = 'text-ctp-green'
      stateString = "Concluido."
      break;

    default:
      stateColor = 'text-ctp-red'
      stateString = "Não Iniciado."
      break;
  }
  return (
    <NavLink to={props.link}>
      <BaseCard blocked={props.blocked}>
      <img className={`float-right
      ml-4 3xl:ml-8 4xl:ml-12
      md:w-20 md:h-20 3xl:w-24 3xl:h-24 4xl:w-32 4xl:h-32
      `} src={props.imgSrc} alt={props.imgAlt} />
      <h1 className={vars.textSizesLG2 + 'font-bebasNeue text-center'}>{props.title}</h1>
      <div className={vars.textSizesBASE2 + ` relative
      md:w-80 3xl:w-124 4xl:w-164
      md:h-40 3xl:h-56  4xl:h-64
      `}>
        <p className={`center-justified
        md:mb-2 3xl:mb-4 4xl:mb-8`}>
          {props.introResume}
        </p>
        <p className='text-justify'>
          {props.resume}
        </p>
        <p className='font-bebasNeue mt-2 bottom-0 absolute'>
          Desenvolvimento: <span className={stateColor}>{stateString}</span>
        </p>
      </div>
      </BaseCard>
      <BaseCardMobile blocked={props.blocked}>
        <img className='w-16 h-16 float-right ml-4' src={props.imgSrc} alt={props.imgAlt} />
        <h1 className={vars.textSizes2XL + 'font-bebasNeue text-center'}>{props.title}</h1>
        <div className={vars.textSizesBASE + ''}>
          <p className='center-justified'>
          {props.introResume}
          </p>
          <p className='center-justified'>
          {props.resume}
          </p>
          <p className='font-bebasNeue mt-2'>
            Desenvolvimento: <span className={stateColor}>{stateString}</span>
          </p>
        </div>
      </BaseCardMobile>
    </NavLink>
  )
}
