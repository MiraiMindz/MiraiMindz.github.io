import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GenericStateProps, HeaderClassProps, HeaderProps, MobileMenuProps, PCNavMenuProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'
import { TiltDivider1Mobile } from '../Dividers/TiltDividers'
import innerCircle from './innerCircle.svg'
import SunRays from './SunRays.svg'




const tabletPCStyle = 'hidden justify-between p-4 md:flex '
const mobileStyle = ' md:hidden '
const navMenuLinkStyle =
  ' w-fit rounded-lg mx-0.5 pt-1.5 px-1.5 md:my-0 md:pt-1 text-ctp-text hover:text-ctp-base bg-ctp-base hover:bg-ctp-text'


function PCLogo() {
  return (
    <div className='mr-auto'>
      <NavLink to='/'>Mirai</NavLink>
    </div>
  )
}

function HamburguerMenu(props: GenericStateProps) {
  return (
    <button onClick={props.funcState}>
      <div
        className={
          'tham tham-e-squeeze tham-w-6' + (props.state ? ' tham-active' : '')
        }>
        <div className='tham-box'>
          <div className='tham-inner bg-ctp-text' />
        </div>
      </div>
    </button>
  )
}

// function TogglerIcon() {
//   return (
//   )
// }

function Ticon() {
  return (
    <div className='w-8 h-8 rounded-full p-0.5 border-2 fill-ctp-base border-ctp-base bg-ctp-text'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.39 472.39">
        <g className="toggle-sun">
          <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
        </g>
        <g className="toggle-circle">
          <circle className="cls-1" cx="236.2" cy="236.2" r="103.78" />
        </g>
      </svg>
    </div>
  )
}

function PCNavMenu(props: PCNavMenuProps) {
  return (
    <div className='ml-auto flex content-center align-middle items-center justify-center'>
      <button onClick={props.themeFunc} className={props.themeState ? "light-theme" : "dark-theme"}>
        <Ticon/>
      </button>
      <NavLink
        to='/'
        className={navMenuLinkStyle}>
        Início
      </NavLink>
      <NavLink
        to='/about'
        className={navMenuLinkStyle}>
        Sobre
      </NavLink>
      <NavLink
        to='/classes'
        className={navMenuLinkStyle}>
        Aulas
      </NavLink>
    </div>
  )
}

function PCHeader(props: PCNavMenuProps) {
  return (
    <div className='fixed top-0 w-screen bg-ctp-base z-20'>
      <div className={vars.textSizesLG + tabletPCStyle + 'font-bebasNeue'}>
      <PCLogo />
      <PCNavMenu themeFunc={props.themeFunc} themeState={props.themeState}/>
      </div>
    </div>
  )
}


function MobileMenu(props: MobileMenuProps) {
  const [capState, setCapState] = useState<boolean>(false);
  const [sumState, setSumState] = useState<boolean>(false);
  function handleCapState() {
    setCapState(!capState)
  }
  function handleSumState() {
    setSumState(!sumState)
  }
  let checkSums: boolean;
  let checkCaps: boolean;
  if (props.caps != null) {
    checkCaps = true
  } else {
    checkCaps = false
  }

  if (props.sums != null) {
    checkSums = true
  } else {
    checkSums = false
  }

  console.log("checkSums: " + checkSums)
  console.log("checkCaps: " + checkCaps)
  console.log("capState: " + capState)
  console.log("sumState: " + sumState)

  return (
    <div
      className={
        vars.textSizes4XL +
        'w-screen h-screen flex-col justify-center items-center overflow-auto bg-ctp-base' +
        (props.state ? ' flex' : ' hidden')
      }>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-8 block'}>
      <NavLink
        to='/'
        className={navMenuLinkStyle}
        onClick={props.funcState}>
        Início
      </NavLink>
      </div>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-8 block'}>
      <NavLink
        to='/about'
        className={navMenuLinkStyle}
        onClick={props.funcState}>
        Sobre
      </NavLink>
      </div>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-8 block'}>
        <NavLink
          to='/classes'
          className={navMenuLinkStyle}
          onClick={props.funcState}>
          Aulas
        </NavLink>
      </div>

      <div className={checkCaps ? "block" : "hidden"}>
      <button onClick={handleCapState} className={sumState ? 'hidden' : capState ? "block" : "my-8 block"}>
        {capState ? "Voltar" : "Capitulos"}
      </button>
      </div>

      <div className={checkSums ? "block" : "hidden"}>
        <button onClick={handleSumState} className={capState ? 'hidden' : sumState ? "block" : "my-8 block"}>
          {sumState ? "Voltar" : "Sumário"}
        </button>
      </div>

      <div className={sumState ? 'block' : 'hidden'}>
        <div className='h-[40rem] w-screen overscroll-contain overflow-auto scroll-smooth pt-4 mb-24 flex flex-col justify-between items-center px-2'>
          {props.sums}
        </div>
      </div>

      <div className={capState ? 'block' : 'hidden'}>
        <div className='h-[40rem] w-screen overscroll-contain overflow-auto scroll-smooth pt-4 mb-24 flex flex-col justify-between items-center px-2'>
          {props.caps}
        </div>
      </div>
    </div>
  )
}

function MobileHeader(props: HeaderProps) {
  return (
    <div
      className={
        (props.state ? 'bg-transparent' : '') +
        ' bottom-0 fixed w-full'
      }>
      <div className='grid grid-rows-2'>
        <div className={(props.state ? 'hidden ' : 'block ') + 'row-start-1 row-end-1'}>
          <TiltDivider1Mobile/>
        </div>
        <div className={(props.state ? 'mb-4 bg-transparent ' : 'bg-ctp-base ') + 'row-start-2 row-end-2 grid grid-cols-3'}>
          <div className={(props.state ? '-mb-1 ' : '') + 'col-start-1 col-end-1 mt-auto mb-auto pl-8'}>
            <HamburguerMenu
              funcState={props.funcState}
              state={props.state}
            />
          </div>
          <div className={(props.state ? '-mb-3 ' : '') + 'col-start-2 col-end-2 mt-auto mb-auto text-center'}>
            <h1 className='text-4xl'>{props.state ? 'Mirai' : props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileNavbar(props: HeaderClassProps) {
  return (
    <div
      className={
        vars.textSizesLG + mobileStyle + 'font-bebasNeue fixed z-10' // h-screen absolute inset-0 |  fixed z-10
      }>
      <MobileHeader
        funcState={props.funcState}
        state={props.state}
        title={props.title}
      />
      <MobileMenu
        state={props.state}
        funcState={props.funcState}
        caps={props.caps}
        sums={props.sums}
      />
    </div>
  )
}

export function Header(props: HeaderClassProps) {
  return (
    <div className='bg-ctp-base text-ctp-text'>
      <PCHeader themeFunc={props.themeFunc} themeState={props.themeState}/>
      <MobileNavbar
        state={props.state}
        funcState={props.funcState}
        title={props.title}
        caps={props.caps}
        sums={props.sums}
      />
    </div>
  )
}
