import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MutableRefObject, useRef } from "react"
import * as vars from '../variables';
import { CapLinkProps, ToCLinkProps, ArrowHeadProps, BackNextChaptersProps } from '../interfaces';


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
  return (
    <div>
      <NavLink to={props.link} className="hidden md:block">
        <h1 className={props.blocked ? "text-ctp-surface0 cursor-default" : props.currentCap ? "text-ctp-blue pr-2" : "text-ctp-text hover:pr-2 transition-all"}>
          {props.title}
        </h1>
      </NavLink>
      <NavLink to={props.link} className="block md:hidden">
      <h1 className={(props.blocked ? "text-ctp-surface0 cursor-default" : props.currentCap ? "text-ctp-blue" : "text-ctp-text transition-all") + " pl-2"}>
        {props.title}
      </h1>
    </NavLink>
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
        <ScrollLink  to={props.linkHashID} spy={true} smooth={true}>{props.title}</ScrollLink>
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
    <div className={vars.textSizesLG + "w-20 font-bebasNeue border-2 border-ctp-text rounded-xl px-2 py-1 fixed top-16 right-8 text-center max-h-[81%] overscroll-contain overflow-auto scroll-smooth bg-ctp-base select-none"}>
      {children}
    </div>
  )
}

export function BackNextChapters(props: BackNextChaptersProps) {
  let nxChapComponent;
  let prevChapComponent;
  let pcShown;
  let ncShown;
  if (props.prevChapLink != "") {
    prevChapComponent = <NavLink to={props.prevChapLink}><h1 className={vars.textSizesXL + "font-bebasNeue hover:pr-6 transition-all fill-frost-3 text-frost-3 hover:text-frost-1 hover:fill-frost-1 flex items-center"}><ArrowHead direction="left"/><span className="pl-1 pt-0.5">Capitulo Anterior</span></h1></NavLink>
    pcShown = true;
  } else {
    prevChapComponent = null;
    pcShown = false;
  }

  if (props.nextChapLink != "") {
    nxChapComponent = <NavLink to={props.nextChapLink}><h1 className={vars.textSizesXL + "font-bebasNeue hover:pl-6 transition-all fill-frost-3 text-frost-3 hover:text-frost-1 hover:fill-frost-1 flex items-center"}><span className="pr-1 pt-0.5">Proximo Capitulo</span><ArrowHead direction="right"/></h1></NavLink>
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
