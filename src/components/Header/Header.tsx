import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GenericStateProps, HeaderClassProps, HeaderProps, MobileMenuProps, PCNavMenuProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'
import { TiltDivider1Mobile } from '../Dividers/TiltDividers'
import innerCircle from './innerCircle.svg'
import SunRays from './SunRays.svg'

const tabletPCStyle = 'hidden justify-between p-4 md:flex '
const mobileStyle = ' md:hidden '
const navMenuLinkStyle =
  ' w-fit rounded-lg mx-0.5 pt-1.5 px-1.5 md:my-0 md:pt-1 text-ctp-text hover:text-ctp-base bg-ctp-crust md:bg-ctp-base hover:bg-ctp-text'


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
      <button onClick={props.themeFunc} className={(props.themeState ? "light-theme" : "dark-theme") + ' mr-1.5'}>
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

  return (
    <div
      className={
        vars.textSizes4XL +
        'w-screen h-screen flex-col justify-center items-center overflow-auto bg-ctp-crust' +
        (props.state ? ' flex' : ' hidden')
      }>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-2 block absolute top-8'}>
        <button onClick={props.leftFunc}>
          {'Modo ' + (props.leftState ? 'Destro' : 'Canhoto')}
        </button>
      </div>
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
      <button onClick={handleCapState} className={sumState ? 'hidden' : capState ? "block" : "mt-12 mb-4 block"}>
        {capState ? "Voltar" : "Capitulos"}
      </button>
      </div>

      <div className={checkSums ? "block" : "hidden"}>
        <button onClick={handleSumState} className={capState ? 'hidden' : sumState ? "block" : "my-4 block"}>
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

function MobileHeader(props: HeaderClassProps) {
  let leftComponent;
  let rightComponent;
  if (props.leftState) {
    leftComponent = <div className='h-8 w-8 flex flex-row justify-center mb-2'><HamburguerMenu funcState={props.funcState} state={props.state}/></div>
    rightComponent = <button onClick={props.themeFunc} className={props.themeState ? "light-theme" : "dark-theme"}><Ticon/></button>
  } else {
    rightComponent = <div className='h-8 w-8 flex flex-row justify-center mb-2'><HamburguerMenu funcState={props.funcState} state={props.state}/></div>
    leftComponent = <button onClick={props.themeFunc} className={props.themeState ? "light-theme" : "dark-theme"}><Ticon/></button>
  }
  return (
    <div
      className={
        (props.state ? 'bg-transparent' : '') +
        ' bottom-0 fixed w-full'
      }>
      <div className={props.state ? 'mb-1.5' : 'grid grid-rows-2'}>
        <div className={(props.state ? 'hidden ' : 'block ') + 'row-start-1 row-end-1'}>
          <TiltDivider1Mobile/>
        </div>
        <div className={(props.state ? 'bg-transparent bottom-0 ' : 'bg-ctp-crust ') + 'flex flex-row justify-between items-center px-6'}>
          <div>
            {leftComponent}
          </div>
          <div className='text-center h-fit'>
            <h1 className='text-4xl'>{props.state ? 'Mirai' : props.title}</h1>
          </div>
          <div>
            {rightComponent}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileNavbar(props: HeaderClassProps) {
  const [leftHanded, setLeftHanded] = useState<boolean>(false);

  function handleLeftHanded() {
    setLeftHanded(!leftHanded)
    !leftHanded ? localStorage.setItem('leftHanded', 'on') : localStorage.setItem('leftHanded', 'off')
  }

  useEffect(() => {
    if (localStorage.getItem('leftHanded') == 'on') {
      setLeftHanded(true)
    }
  }, [])

  return (
    <div
      className={
        vars.textSizesLG + mobileStyle + 'font-bebasNeue fixed z-10' // h-screen absolute inset-0 |  fixed z-10
      }>
      <MobileHeader
        funcState={props.funcState}
        state={props.state}
        title={props.title}
        themeState={props.themeState}
        themeFunc={props.themeFunc}
        leftState={leftHanded}
      />
      <MobileMenu
        state={props.state}
        funcState={props.funcState}
        caps={props.caps}
        sums={props.sums}
        leftFunc={handleLeftHanded}
        leftState={leftHanded}
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
        themeFunc={props.themeFunc}
        themeState={props.themeState}
      />
    </div>
  )
}
