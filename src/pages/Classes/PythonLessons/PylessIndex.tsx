
import { NavLink } from 'react-router-dom';
import { Footer } from '../../../components/Footer/Footer';
import { Header } from '../../../components/Header/Header';
import { FooterWrapper } from '../../../components/Wrappers/FlowWrappers';
import { ChapterCardProps, GenericStateProps } from '../../../utils/interfaces';
import * as vars from '../../../utils/variables';



function ChapterCard(props: ChapterCardProps) {
  let status;
  if (props.state == 2) {
    status = <span className="text-ctp-green font-bebasNeue">Completo</span>
  } else if (props.state == 1) {
    status = <span className="text-ctp-yellow font-bebasNeue">Em progresso...</span>
  } else {
    status = <span className="text-ctp-red font-bebasNeue">Não iniciado</span>
  }
  return (
    <NavLink to={props.link}>
      <div className={'hover:scale-110 transition-all border-2 border-ctp-text rounded-xl p-2 bg-ctp-mantle font-leagueGothic flex flex-col justify-between h-32 select-none ' + (props.blocked ? 'blur-xs brightness-90' : '')}>
        <div className="flex flex-row justify-between">
          <h1 className={vars.textSizesBASE + "font-bebasNeue"}>{props.title}</h1>
          <div className="rounded-full bg-ctp-text w-6 h-6 font-bebasNeue">
            <h1 className="text-ctp-mantle text-center">{props.chapter}</h1>
          </div>
        </div>
        <div>
          <p className={vars.textSizesSM}>
            {props.description}
          </p>
        </div>
        <div className={vars.textSizesSM + "font-bebasNeue"}>
          <p>Status: {status}</p>
        </div>
      </div>
    </NavLink>

  )
}

function ChapterCardMobile(props: ChapterCardProps) {
  let status;
  if (props.state == 2) {
    status = <span className="text-ctp-green font-bebasNeue">Completo</span>
  } else if (props.state == 1) {
    status = <span className="text-ctp-yellow font-bebasNeue">Em progresso...</span>
  } else {
    status = <span className="text-ctp-red font-bebasNeue">Não iniciado</span>
  }
  return (
    <NavLink to={props.link}>
      <div className={'transition-all border-2  border-ctp-text rounded-xl p-2 bg-ctp-mantle font-leagueGothic flex flex-col justify-between h-32 select-none ' + (props.blocked ? 'blur-xs brightness-90' : '')}>
        <div className="flex flex-row justify-between">
          <h1 className={vars.textSizesBASE + "font-bebasNeue w-36"}>{props.title}</h1>
          <div className="rounded-full bg-ctp-text w-6 h-6 font-bebasNeue">
            <h1 className="text-ctp-mantle text-center">{props.chapter}</h1>
          </div>
        </div>
        <div>
          <p className={vars.textSizesSM}>
            {props.description}
          </p>
        </div>
        <div className={vars.textSizesSM + "font-bebasNeue"}>
          <p>Status: {status}</p>
        </div>
      </div>
    </NavLink>
  )
}

function MDContent() {
  return (
    <div className="hidden md:block">
      <h1 className={vars.textSizes3XL + 'font-bebasNeue text-center'}>Python Lessons</h1>
      <div className={'font-leagueGothic px-16 flex flex-col justify-between'}>
        <div className={vars.textSizesLG}>
          <p>
          Esse curso foi feito para ajudar uns amigos a entrarem nesse mundo de tecnologia e também como uma forma de armazenar meu conhecimento na area.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-8">
            <ChapterCard
              chapter={1}
              title={"Introdução a Programação"}
              description="Introdução a conceitos fundamentais de programação"
              link="/classes/pyless/1"
              state={2}
              blocked={false}
            />
            <ChapterCard
              chapter={2}
              title="Fundamentos do Python - I"
              description=""
              link="/classes/pyless/2"
              state={2}
              blocked={false}
            />
            <ChapterCard
              chapter={3}
              title="Fundamentos do Python - II"
              description=""
              link="/classes/pyless/3"
              state={2}
              blocked={false}
            />
            <ChapterCard
              chapter={4}
              title="Programação Orientada a Objetos Básica"
              description=""
              link="/classes/pyless/4"
              state={2}
              blocked={false}
            />
            <ChapterCard
              chapter={5}
              title="Erros"
              description=""
              link="/classes/pyless/5"
              state={1}
              blocked={false}
            />
            <ChapterCard
              chapter={6}
              title="Arquivos"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={7}
              title="Databases"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={8}
              title="Type-Hint"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={9}
              title="Funções nativas avançadas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={10}
              title="Desenvolvimento avançado"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={11}
              title="Web Scraping"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={12}
              title="Automação de navegador com Selenium"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={13}
              title="Async Dev"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={14}
              title="Virtualização"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={15}
              title="Webdev Flask"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={16}
              title="APIs"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={17}
              title="Decoradores"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={18}
              title="Programação Orientada a Objetos Avançada"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={19}
              title="Desenvolvimento de GUI com Tkinter"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={20}
              title="Desenvolvimento de Interfaces Graficas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={21}
              title="Desenvolvimento Mobile"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={22}
              title="Unit Tests"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={23}
              title="Ciencia de Dados"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={24}
              title="Algoritmos, Estrutura de Dados e Machine Learning"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={25}
              title="Bibliotecas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={26}
              title="Documentação e Boas Praticas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={27}
              title="Redes e Soquetes"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={28}
              title="Criptografia"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={29}
              title="Cyber Segurança e Hacking Ético"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={30}
              title="Noções Avançadas de Programação"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCard
              chapter={31}
              title="Game Dev"
              description=""
              link=""
              state={0}
              blocked={true}
            />
        </div>
      </div>
    </div>
  )
}

function PhoneContent() {
  return (
    <div className="block md:hidden pt-4">
      <h1 className={vars.textSizes3XL + 'font-bebasNeue text-center'}>Python Lessons</h1>
      <div className={'font-leagueGothic flex flex-col justify-between px-2'}>
        <div className={vars.textSizesLG + 'center-justified'}>
          <p>
          Esse curso foi feito para ajudar uns amigos a entrarem nesse mundo de tecnologia e também como uma forma de armazenar meu conhecimento na area.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
        <ChapterCardMobile
              chapter={1}
              title={"Introdução a Programação"}
              description="Introdução a conceitos fundamentais de programação"
              link="/classes/pyless/1"
              state={2}
              blocked={false}
            />
            <ChapterCardMobile
              chapter={2}
              title="Fundamentos do Python - I"
              description=""
              link="/classes/pyless/2"
              state={2}
              blocked={false}
            />
            <ChapterCardMobile
              chapter={3}
              title="Fundamentos do Python - II"
              description=""
              link="/classes/pyless/3"
              state={2}
              blocked={false}
            />
            <ChapterCardMobile
              chapter={4}
              title="Programação Orientada a Objetos Básica"
              description=""
              link="/classes/pyless/4"
              state={2}
              blocked={false}
            />
            <ChapterCardMobile
              chapter={5}
              title="Erros"
              description=""
              link="/classes/pyless/5"
              state={1}
              blocked={false}
            />
            <ChapterCardMobile
              chapter={6}
              title="Arquivos"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={7}
              title="Databases"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={8}
              title="Type-Hint"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={9}
              title="Funções nativas avançadas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={10}
              title="Desenvolvimento avançado"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={11}
              title="Web Scraping"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={12}
              title="Automação de navegador com Selenium"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={13}
              title="Async Dev"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={14}
              title="Virtualização"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={15}
              title="Webdev Flask"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={16}
              title="APIs"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={17}
              title="Decoradores"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={18}
              title="Programação Orientada a Objetos Avançada"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={19}
              title="Desenvolvimento de GUI com Tkinter"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={20}
              title="Desenvolvimento de Interfaces Graficas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={21}
              title="Desenvolvimento Mobile"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={22}
              title="Unit Tests"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={23}
              title="Ciencia de Dados"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={24}
              title="Algoritmos, Estrutura de Dados e Machine Learning"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={25}
              title="Bibliotecas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={26}
              title="Documentação e Boas Praticas"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={27}
              title="Redes e Soquetes"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={28}
              title="Criptografia"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={29}
              title="Cyber Segurança e Hacking Ético"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={30}
              title="Noções Avançadas de Programação"
              description=""
              link=""
              state={0}
              blocked={true}
            />
            <ChapterCardMobile
              chapter={31}
              title="Game Dev"
              description=""
              link=""
              state={0}
              blocked={true}
            />
        </div>
      </div>
    </div>
  )
}

function PageContent({state}: any) {
  return (
    <div className={(state ? "blur-sm" : "pt-0 md:pt-16 min-h-screen grow")}>
      <MDContent />
      <PhoneContent />
    </div>
  )
}

export function PylessIndex(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Python" themeFunc={props.themeFunc} />
      <PageContent state={props.state} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
