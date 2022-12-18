import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { FooterWrapper } from '../../components/Wrappers/FlowWrappers'
import { CourseCard } from '../../utils/ComponentElements/ComponentElements'
import { GenericStateProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'
import pyLogo from '/assets/ClassesLogos/Python8BitLogo.png';


function CoursesList() {
  return (
    <div className={`flex flex-col self-center h-full justify-between px-16 mt-8 bg-ctp-base
    md:flex-row md:w-full`}>

      <CourseCard title='Python Lessons'
        link='/classes/pyless'
        blocked={false} courseState={1}
        imgSrc={pyLogo} imgAlt='Python8BitLogo'
        introResume='Um curso de programação usando a linguagem Python.'
        resume='Recomendado para iniciantes em programação, aprenda desde o básico ao avançado construindo 11 projetos do zero.'
      />
      <CourseCard title='Go Lessons'
        link=''
        blocked={true} courseState={0}
        imgSrc={null} imgAlt='Go Custom Logo'
        introResume='Um curso de programação usando a linguagem Go.'
        resume='Descrição.'
      />
      <CourseCard title='Assembly Lessons'
        link=''
        blocked={true} courseState={0}
        imgSrc={null} imgAlt='NASM Custom Logo'
        introResume='Um curso de programação usando a linguagem Assembly (NASM).'
        resume='Descrição.'
      />
    </div>
  )
}

function Headers() {
  return (
    <div>
      <h1 className={vars.textSizes3XL2 + 'text-justify hidden md:block'}>
      Cursos gratuitos sobre programação.
      </h1>
      <h1 className={vars.textSizes3XL + 'text-center block md:hidden'}>
      Cursos gratuitos sobre programação.
      </h1>
      <div>
        <p className={vars.textSizesXL2 + 'hidden md:block mt-2'}>
          Aqui você encontrará todo meu conhecimento em programação na forma de cursos.
        </p>
        <p className={vars.textSizesXL + "center-justified px-4 block md:hidden"}>
          Aqui você encontrará todo meu conhecimento em programação na forma de cursos.
        </p>
      </div>
    </div>
  )
}


function PageContent({state}: any) {
  return (
    <div className={(state ? "blur-sm" : "") + vars.pageContentBaseStyle}>
      <div className='mx-0 md:mx-8 font-leagueGothic'>
        <Headers />
        <div className='flex flex-col justify-between'>
          <CoursesList />
        </div>
      </div>
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
