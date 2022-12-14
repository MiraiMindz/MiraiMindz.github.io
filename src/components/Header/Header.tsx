import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GenericStateProps, HeaderClassProps, HeaderProps, MobileMenuProps, PCNavMenuProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'
import { TiltDivider1Mobile } from '../Dividers/TiltDividers'
import innerCircle from './innerCircle.svg'
import SunRays from './SunRays.svg'

const tabletPCStyle = 'hidden justify-between p-4 3xl:p-5 4xl:p-12 md:flex '
const mobileStyle = ' md:hidden '
const navMenuLinkStyle =
  ' w-fit rounded-lg mx-0.5 px-1.5 md:my-0 text-ctp-text hover:text-ctp-base bg-ctp-crust md:bg-ctp-base hover:bg-ctp-text'


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
    <div className='w-8 h-8 md:w-8 md:h-8 3xl:w-10 3xl:h-10 4xl:w-16 4xl:h-16 rounded-full p-0.5 border-1 fill-ctp-base border-ctp-base bg-ctp-text'>
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
      <button onClick={props.classCompState} className='pt-1.5 md:pt-1'>
        <NavLink
          to='/'
          className={navMenuLinkStyle}>
          In??cio
        </NavLink>
      </button>
      <button onClick={props.classCompState} className='pt-1.5 md:pt-1'>
        <NavLink
          to='/about'
          className={navMenuLinkStyle}>
          Sobre
        </NavLink>
      </button>
      <button onClick={props.classCompState} className='pt-1.5 md:pt-1'>
        <NavLink
          to='/classes'
          className={navMenuLinkStyle}>
          Aulas
        </NavLink>
      </button>
    </div>
  )
}

function PCHeader(props: PCNavMenuProps) {
  return (
    <div className='fixed top-0 w-screen bg-ctp-base z-20 md:h-16 3xl:h-20 4xl:h-40'>
      <div className={vars.textSizesLG2 + tabletPCStyle + 'font-bebasNeue'}>
      <PCLogo />
      <PCNavMenu themeFunc={props.themeFunc} themeState={props.themeState} classCompState={props.classCompState}/>
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
        vars.textSizes3XL2 +
        'w-screen h-screen flex-col justify-center items-center text-left overflow-auto bg-ctp-crust' +
        (props.state ? ' flex' : ' hidden')
      }>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-2 block absolute top-8'}>
        <button onClick={props.leftFunc}>
          {'Modo ' + (props.leftState ? 'Destro' : 'Canhoto')}
        </button>
      </div>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-8 block'}>
        <button onClick={props.classCompState}>
          <NavLink
            to='/'
            className={navMenuLinkStyle}
            onClick={props.funcState}>
            In??cio
          </NavLink>
        </button>
      </div>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-8 block'}>
        <button onClick={props.classCompState}>
          <NavLink
            to='/about'
            className={navMenuLinkStyle}
            onClick={props.funcState}>
            Sobre
          </NavLink>
        </button>
      </div>
      <div className={capState ? 'hidden' : sumState ? 'hidden' : 'my-8 block'}>
        <button onClick={props.classCompState}>
          <NavLink
            to='/classes'
            className={navMenuLinkStyle}
            onClick={props.funcState}>
            Aulas
          </NavLink>
        </button>
      </div>

      <div className={checkCaps ? "block" : "hidden"}>
      <button onClick={handleCapState} className={sumState ? 'hidden' : capState ? "block" : "mt-12 mb-4 block"}>
        {capState ? "Voltar" : "Capitulos"}
      </button>
      </div>

      <div className={checkSums ? "block" : "hidden"}>
        <button onClick={handleSumState} className={capState ? 'hidden' : sumState ? "block" : "my-4 block"}>
          {sumState ? "Voltar" : "Sum??rio"}
        </button>
      </div>

      <div className={sumState ? 'block' : 'hidden'}>
        <div className='h-[40rem] w-screen overscroll-contain overflow-auto scroll-smooth pt-4 mb-24 block px-2'>
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
        vars.textSizesLG2 + mobileStyle + 'font-bebasNeue fixed z-10'
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
        classCompState={props.classCompState}
      />
    </div>
  )
}

export function Header(props: HeaderClassProps) {
  return (
    <div className='bg-ctp-base text-ctp-text'>
      <PCHeader themeFunc={props.themeFunc} themeState={props.themeState} classCompState={props.classCompState} />
      <MobileNavbar
        state={props.state}
        funcState={props.funcState}
        title={props.title}
        caps={props.caps}
        sums={props.sums}
        themeFunc={props.themeFunc}
        themeState={props.themeState}
        classCompState={props.classCompState}
      />
    </div>
  )
}
