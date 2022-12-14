import { NavLink } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { FooterWrapper } from '../../components/Wrappers/FlowWrappers'
import { BaseCardProps, GenericStateProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'


function BaseCard(props: BaseCardProps) {
  return (
    <div className={'hidden md:block hover:scale-110 transition-all border-2 border-ctp-text rounded-xl p-2 bg-ctp-mantle select-none min-h-[12.5rem] ' + (props.blocked ? 'blur-xs brightness-90' : '')}>
      {props.children}
    </div>
  )
}

function BaseCardMobile(props: BaseCardProps) {
  return (
    <div className={'block md:hidden hover:scale-110 transition-all border-2 border-ctp-text rounded-xl p-2 bg-ctp-mantle select-none mb-8 min-h-[11rem] ' + (props.blocked ? 'blur-xs brightness-90' : '')}>
      {props.children}
    </div>
  )
}

function PyLessCard() {
  return (
    <div>
      <BaseCard blocked={false}>
      <img className='w-20 h-20 float-right ml-4' src="Python8BitLogo.png" alt="Python8BitLogo" />
      <h1 className={vars.textSizesLG + 'font-bebasNeue text-center'}>Python Lessons</h1>
      <div className={vars.textSizesBASE + 'w-80 relative h-[9.5rem]'}>
        <p className='center-justified'>
          Um curso de programação usando a linguagem Python.
        </p>
        <p className='text-justify'>
        Recomendado para iniciantes em programação, aprenda desde o básico ao avançado construindo 11 projetos do zero.
        </p>
        <p className='font-bebasNeue mt-2 bottom-0 absolute'>
          Desenvolvimento: <span className='text-ctp-yellow'>em progresso...</span>
        </p>
      </div>
      </BaseCard>
      <BaseCardMobile blocked={false}>
        <img className='w-16 h-16 float-right ml-4' src="Python8BitLogo.png" alt="Python8BitLogo" />
        <h1 className={vars.textSizes2XL + 'font-bebasNeue text-center'}>Python Lessons</h1>
        <div className={vars.textSizesBASE + ''}>
          <p className='center-justified'>
            Um curso de programação usando a linguagem Python.
          </p>
          <p className='center-justified'>
          Recomendado para iniciantes em programação, aprenda desde o básico ao avançado construindo 11 projetos do zero.
          </p>
          <p className='font-bebasNeue mt-2'>
            Desenvolvimento: <span className='text-ctp-yellow'>em progresso...</span>
          </p>
        </div>
      </BaseCardMobile>
    </div>
  )
}

function GoLessCard() {
  return (
    <div>
      <BaseCard blocked={true}>
        <img className='w-20 h-20 float-right ml-4' src="" alt="Go Custom Logo" />
        <h1 className={vars.textSizesLG + 'font-bebasNeue text-center'}>Go Lessons</h1>
        <div className={vars.textSizesBASE + 'w-80 relative h-[9.5rem]'}>
          <p className='center-justified'>
            Um curso de programação usando a linguagem Go.
          </p>
          <p className='text-justify'>
          Descrição.
          </p>
          <p className='font-bebasNeue mt-2 bottom-0 absolute'>
            Desenvolvimento: <span className='text-ctp-red'>Não Iniciado.</span>
          </p>
        </div>
      </BaseCard>
      <BaseCardMobile blocked={true}>
        <img className='w-16 h-16 float-right ml-4' src="" alt="Go Custom Logo" />
        <h1 className={vars.textSizes2XL + 'font-bebasNeue text-center'}>Go Lessons</h1>
        <div className={vars.textSizesBASE + 'relative h-[7.5rem]'}>
          <p className='center-justified'>
            Um curso de programação usando a linguagem Go.
          </p>
          <p className='text-justify'>
          Descrição.
          </p>
          <p className='font-bebasNeue mt-2 bottom-0 absolute'>
            Desenvolvimento: <span className='text-ctp-red'>Não Iniciado.</span>
          </p>
        </div>
      </BaseCardMobile>
    </div>
  )
}

function NASMLessCard() {
  return (
    <div>
      <BaseCard blocked={true}>
        <img className='w-20 h-20 float-right ml-4' src="" alt="NASM Custom Logo" />
        <h1 className={vars.textSizesLG + 'font-bebasNeue text-center'}>Assembly Lessons</h1>
        <div className={vars.textSizesBASE + 'w-80 relative h-[9.5rem]'}>
          <p className='center-justified'>
            Um curso de programação usando a linguagem Assembly (NASM).
          </p>
          <p className='text-justify'>
            Descrição.
          </p>
          <p className='font-bebasNeue mt-2 bottom-0 absolute'>
            Desenvolvimento: <span className='text-ctp-red'>Não Iniciado.</span>
          </p>
        </div>
      </BaseCard>
      <BaseCardMobile blocked={true}>
        <img className='w-16 h-16 float-right ml-4' src="" alt="Go Custom Logo" />
        <h1 className={vars.textSizes2XL + 'font-bebasNeue text-center'}>Assembly Lessons</h1>
        <div className={vars.textSizesBASE + 'relative h-[7.5rem]'}>
          <p className='center-justified'>
            Um curso de programação usando a linguagem Assembly (NASM).
          </p>
          <p className='text-justify'>
          Descrição.
          </p>
          <p className='font-bebasNeue mt-2 bottom-0 absolute'>
            Desenvolvimento: <span className='text-ctp-red'>Não Iniciado.</span>
          </p>
        </div>
      </BaseCardMobile>
    </div>
  )
}

function MDContent() {
  return (
    <div className='hidden md:block'>
      <div className='mx-8 font-leagueGothic hidden md:block'>
      <p className={vars.textSizes3XL + 'text-justify'}>
      Cursos gratuitos sobre programação.
      </p>
      <div className='flex flex-col justify-between'>
      <div className={vars.textSizesXL}>
        <p>
          Aqui você encontrará todo meu conhecimento em programação na forma de cursos.
        </p>
      </div>
      <div className='flex flex-row self-center w-full justify-between px-16 mt-8'>
        <NavLink to='/classes/pyless'>
          <PyLessCard />
        </NavLink>
        <GoLessCard />
        <NASMLessCard />
      </div>
      </div>
      </div>
    </div>
  )
}

function PhoneContent() {
  return (
    <div className='block md:hidden'>
      <div className='block md:hidden font-leagueGothic pt-4 bg-ctp-base'>
      <p className={vars.textSizes3XL + 'text-center'}>
      Cursos gratuitos sobre programação.
      </p>
      <div className='flex flex-col justify-between'>
        <div className={vars.textSizesXL + "center-justified px-4"}>
          <p>
            Aqui você encontrará todo meu conhecimento em programação na forma de cursos.
            </p>
          </div>
          <div className='flex flex-col self-center h-full justify-between px-16 mt-8 bg-ctp-base'>
            <NavLink to='/classes/pyless'>
              <PyLessCard />
            </NavLink>
            <GoLessCard />
            <NASMLessCard />
          </div>
        </div>
      </div>
    </div>
  )
}


function PageContent({state}: any) {
  return (
    <div className={(state ? "blur-sm" : "") + " mt-0 md:mt-16 min-h-screen grow"}>
      <MDContent/>
      <PhoneContent/>
    </div>

  )
}

export function Classes(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Aulas" themeFunc={props.themeFunc} themeState={props.darkLightSwitch} />
      <PageContent state={props.state} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
