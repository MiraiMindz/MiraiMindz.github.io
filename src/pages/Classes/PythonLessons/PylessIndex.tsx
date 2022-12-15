import { Footer } from '../../../components/Footer/Footer';
import { Header } from '../../../components/Header/Header';
import { FooterWrapper } from '../../../components/Wrappers/FlowWrappers';
import { ChapterCard } from '../../../utils/ComponentElements/ComponentElements';
import { ClassesIndexStateProps, ClassMenuProps, PageClassMenuProps } from '../../../utils/interfaces';
import * as vars from '../../../utils/variables';



function Chapters(props: ClassMenuProps) {
  return (
    <div className='mt-8 grid md:grid-cols-4 md:gap-8 grid-cols-2 gap-4'>
      <ChapterCard
              chapter={1}
              title={"Introdução a Programação"}
              description="Introdução a conceitos fundamentais de programação"
              link="/classes/pyless/1"
              state={2}
              blocked={false}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={2}
              title="Fundamentos do Python - I"
              description=""
              link="/classes/pyless/2"
              state={2}
              blocked={false}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={3}
              title="Fundamentos do Python - II"
              description=""
              link="/classes/pyless/3"
              state={2}
              blocked={false}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={4}
              title="Programação Orientada a Objetos Básica"
              description=""
              link="/classes/pyless/4"
              state={2}
              blocked={false}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={5}
              title="Erros"
              description=""
              link="/classes/pyless/5"
              state={1}
              blocked={false}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={6}
              title="Arquivos"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={7}
              title="Databases"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={8}
              title="Type-Hint"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={9}
              title="Funções nativas avançadas"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={10}
              title="Desenvolvimento avançado"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={11}
              title="Web Scraping"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={12}
              title="Automação de navegador com Selenium"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={13}
              title="Async Dev"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={14}
              title="Virtualização"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={15}
              title="Webdev Flask"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={16}
              title="APIs"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={17}
              title="Decoradores"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={18}
              title="Programação Orientada a Objetos Avançada"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={19}
              title="Desenvolvimento de GUI com Tkinter"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={20}
              title="Desenvolvimento de Interfaces Graficas"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={21}
              title="Desenvolvimento Mobile"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={22}
              title="Unit Tests"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={23}
              title="Ciencia de Dados"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={24}
              title="Algoritmos, Estrutura de Dados e Machine Learning"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={25}
              title="Bibliotecas"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={26}
              title="Documentação e Boas Praticas"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={27}
              title="Redes e Soquetes"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={28}
              title="Criptografia"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={29}
              title="Cyber Segurança e Hacking Ético"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={30}
              title="Noções Avançadas de Programação"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
            <ChapterCard
              chapter={31}
              title="Game Dev"
              description=""
              link=""
              state={0}
              blocked={true}
              userCompletedArray={props.classesArray}
            />
    </div>
  )
}

function PageContent(props: PageClassMenuProps) {
  return (
    <div className={(props.state ? "blur-sm" : "pt-0 md:pt-20 min-h-screen grow")}>
      <div className='pt-4 md:pt-0'>
        <h1 className={vars.textSizes3XL + 'font-bebasNeue text-center'}>Python Lessons</h1>
        <div className={'font-leagueGothic flex flex-col justify-between px-2 md:px-16'}>
          <div className={vars.textSizesLG + 'center-justified'}>
            <p>
            Esse curso foi feito para ajudar uns amigos a entrarem nesse mundo de tecnologia e também como uma forma de armazenar meu conhecimento na area.
            </p>
          </div>
          <Chapters classesArray={props.classesArray}/>
        </div>
      </div>
    </div>
  )
}

export function PylessIndex(props: ClassesIndexStateProps) {
  let locStg:Array<number> = [];
  if (localStorage.PylessClasses == null) {
    localStorage.setItem('PylessClasses', props.classProgressArray.toString())
  } else {
    locStg = localStorage.getItem('PylessClasses')?.split(",").map(Number) as unknown as Array<number>;
  }

  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Python" themeFunc={props.themeFunc} themeState={props.darkLightSwitch} />
      <PageContent state={props.state} classesArray={locStg}/>
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
