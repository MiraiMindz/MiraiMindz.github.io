import selfie from '/assets/selfie.png'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { FooterWrapper } from '../../components/Wrappers/FlowWrappers'
import { GenericStateProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'

const age = (new Date().getFullYear()) - 2005



function Presentation() {
  return (
    <div className='block m-1'>
      <div className='flex pt-16 justify-center content-center items-center'>
      <img src={selfie} alt="selfie" className='rounded-full h-32 w-32 2xl:h-48 2xl:w-48 3xl:h-96 3xl:w-96 border-2 2xl:border-4 3xl:border-6 border-ctp-base mr-8' />
      <h1 className={vars.textSizes2XL2 + 'font-leagueGothic h-fit center-justified'}>
        Meu nome é Bruno, mas as pessoas costumam me chamar de Mirai, <br/> tenho {age} e sou morador da baixada fluminense.
      </h1>
      </div>
    </div>
  )
}

interface SecProps {
  lightDark?: boolean
}

function MDSection1(props: SecProps) {
  return (
    <div className='bg-ctp-base'>
      <div className={'md:bg-56 bg-48 3xl:bg-72 bg-repeat-x ' + (props.lightDark ? 'bg-bgAboutLight' : 'bg-bgAbout')}> {/* bg-bgAbout */}
      <Presentation/>
      <div className={vars.textSizesXL2 + 'mt-8 font-leagueGothic px-64 center-justified 3xl:px-96'}>
        <p>Nascido na cidade do Rio de Janeiro, sempre tive o sonho de mudar o mundo e anseio por aprendizado, por conta disso dediquei minha vida a adiquirir conhecimento, enquanto desenvolvia novas habilidades. Com uma vida marcada por desventuras hoje me encontro terminando o ensino-médio.</p>
      </div>
    </div>
    </div>
  )
}

function MDSec2Splitter(props: SecProps) { // bg-[length:100px_150px]
  return (
    <div className={'md:bg-32 bg-24 3xl:bg-48 bg-repeat-x bg-bottom md:pt-32 pt-14 ' + (props.lightDark ? 'bg-bgMiraiLight' : 'bg-bgMirai')}>
      <div className="custom-shape-divider-bottom-1667492912">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill fill-ctp-surface0"></path>
        </svg>
      </div>
    </div>
  )
}

function MDSection2(props: SecProps) {
  return (
    <div className={vars.textSizesXL2}>
      <MDSec2Splitter lightDark={props.lightDark}/>
      <div className='bg-ctp-surface0'>
        <h1 className='relative -top-16 left-8 w-fit font-bebasNeue'>Porque voce se chama mirai?</h1>
        <div className='center-justified px-64 relative -top-12 font-leagueGothic'>
        <p>Mirai é o alter-ego criado por mim aos 16 anos para retornar com produção musical, inspirado no fato de amigos dizerem que "sou o futuro", foi durante a produção de uma música com temática japonêsa e significa "Futuro".</p>
        </div>
      </div>
    </div>
  )
}

function PhoneContentSec1(props: SecProps) {
  return (
    <div>
      <div className='mx-4'>
      <div className='flex justify-center align-middle content-center items-end py-4'>
      <img src={selfie} alt="selfie" className='rounded-full h-32 w-32 border-4 border-ctp-blue' />
      </div>
      <div className={vars.textSizes2XL2 + 'text-justify'}>
      <p>Nascido na cidade do Rio de Janeiro, sempre tive o sonho de mudar o mundo e anseio por aprendizado, por conta disso dediquei minha vida a adiquirir conhecimento, enquanto desenvolvia novas habilidades. Com uma vida marcada por desventuras hoje me encontro terminando o ensino-médio.</p>
      </div>
      </div>
      <div>
      <MDSec2Splitter lightDark={props.lightDark}/>
      </div>
      <div className={vars.textSizes2XL2 + 'bg-ctp-surface0 px-4'}>
      <h1 className='relative -top-8 w-fit font-bebasNeue'>Porque voce se chama mirai?</h1>
        <div className='center-justified relative -top-8 font-leagueGothic'>
        <p>Mirai é o alter-ego criado por mim aos 16 anos para retornar com produção musical, inspirado no fato de amigos dizerem que "sou o futuro", foi durante a produção de uma música com temática japonêsa e significa "Futuro".</p>
        </div>
      </div>
    </div>
  )
}

function MDContent(props: SecProps) {
  return (
    <div className='hidden md:block bg-ctp-base'>
      <MDSection1 lightDark={props.lightDark}/>
      <MDSection2 lightDark={props.lightDark}/>
    </div>
  )
}

function MobileContent(props: SecProps) {
  return (
    <div className='bg-ctp-base block md:hidden font-leagueGothic'>
      <PhoneContentSec1 lightDark={props.lightDark} />
    </div>
  )
}

interface TestProps extends SecProps{
  state: boolean
}

function PageContent(props: TestProps) {
  return (
    <div className={(props.state ? "blur-sm" : '') + vars.pageContentBaseStyle}>
      <MDContent lightDark={props.lightDark}/>
      <MobileContent lightDark={props.lightDark}/>
    </div>
  )
}

export function About(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-ctp-surface0 text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Sobre" themeFunc={props.themeFunc} themeState={props.darkLightSwitch} />
      <PageContent state={props.state} lightDark={props.darkLightSwitch} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
