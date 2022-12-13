import selfie from '/selfie.png'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { FooterWrapper } from '../../components/Wrappers/FlowWrappers'
import { GenericStateProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'

const age = (new Date().getFullYear()) - 2005



function Presentation() {
  return (
    <div className='block'>
      <div className='flex pt-16 justify-center content-center'>
      <img src={selfie} alt="selfie" className='rounded-full h-32 w-32 border-4 border-ctp-blue mr-8' />
      <h1 className={vars.textSizes2XL + 'font-leagueGothic h-fit mt-6 center-justified'}>
        Meu nome é Bruno, mas as pessoas costumam me chamar de Mirai, <br/> tenho {age} e sou morador da baixada fluminense.
      </h1>
      </div>
    </div>
  )
}

function MDSection1() {
  return (
    <div className='bg-ctp-base'>
      <div className='md:bg-25% bg-repeat-x '> {/* bg-bgAbout */}
      <Presentation/>
      <div className={vars.textSizesXL + 'mt-8 font-leagueGothic px-64 center-justified'}>
        <p>Nascido na cidade do Rio de Janeiro, sempre tive o sonho de mudar o mundo e anseio por aprendizado, por conta disso dediquei minha vida a adiquirir conhecimento, enquanto desenvolvia novas habilidades. Com uma vida marcada por desventuras hoje me encontro terminando o ensino-médio.</p>
      </div>
    </div>
    </div>
  )
}

function MDSec2Splitter() { // bg-[length:100px_150px]
  return (
    <div className='md:bg-32 bg-repeat-x bg-bottom md:pt-32 bg-24 pt-14'>  {/* bg-bgMirai */}
      <div className="custom-shape-divider-bottom-1667492912">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill fill-ctp-mantle"></path>
        </svg>
      </div>
    </div>
  )
}

function MDSection2() {
  return (
    <div className={vars.textSizesXL}>
      <MDSec2Splitter/>
      <div className='bg-ctp-mantle'>
        <h1 className='relative -top-16 left-8 w-fit font-bebasNeue'>Porque voce se chama mirai?</h1>
        <div className='center-justified px-64 relative -top-12 font-leagueGothic'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cumque mollitia esse quia quibusdam, quas suscipit vel ad at? Sequi non molestiae hic corporis dolore autem ab earum asperiores culpa.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore iure saepe earum necessitatibus facere reprehenderit soluta nam in commodi fugiat, quia veniam eveniet, ut optio impedit, odio velit mollitia.</p>
        </div>
      </div>
    </div>
  )
}

function PhoneContentSec1() {
  return (
    <div>
      <div className='mx-4'>
      <div className='flex justify-center align-middle content-center items-end py-4'>
      <img src={selfie} alt="selfie" className='rounded-full h-32 w-32 border-4 border-frost-2' />
      </div>
      <div className='text-justify'>
      <p>Nascido na cidade do Rio de Janeiro, sempre tive o sonho de mudar o mundo e anseio por aprendizado, por conta disso dediquei minha vida a adiquirir conhecimento, enquanto desenvolvia novas habilidades. Com uma vida marcada por desventuras hoje me encontro terminando o ensino-médio.</p>
      </div>
      </div>
      <div>
      <MDSec2Splitter/>
      </div>
      <div className={vars.textSizes2XL + 'bg-ctp-mantle px-4'}>
      <h1 className='relative -top-8 w-fit font-bebasNeue'>Porque voce se chama mirai?</h1>
        <div className='center-justified relative -top-8 font-leagueGothic'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cumque mollitia esse quia quibusdam, quas suscipit vel ad at? Sequi non molestiae hic corporis dolore autem ab earum asperiores culpa.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore iure saepe earum necessitatibus facere reprehenderit soluta nam in commodi fugiat, quia veniam eveniet, ut optio impedit, odio velit mollitia.</p>
        </div>
      </div>
    </div>
  )
}

function MDContent() {
  return (
    <div className='hidden md:block bg-ctp-base'>
      <MDSection1/>
      <MDSection2/>
    </div>
  )
}

function MobileContent() {
  return (
    <div className='bg-ctp-base block md:hidden font-leagueGothic'>
      <PhoneContentSec1 />
    </div>
  )
}

function PageContent({state}: any) {
  return (
    <div className={(state ? "blur-sm" : "pt-0 md:pt-16 z-10  min-h-screen grow")}>
      <MDContent/>
      <MobileContent/>
    </div>
  )
}

export function About(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-ctp-mantle md:bg-ctp-mantle min-h-screen text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Sobre" themeFunc={props.themeFunc} themeState={props.darkLightSwitch} />
      <PageContent state={props.state} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
