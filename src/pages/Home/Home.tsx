import Typewritter from 'typewriter-effect'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { FooterWrapper } from '../../components/Wrappers/FlowWrappers'
import { GenericStateProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'

const age = (new Date().getFullYear()) - 2005

function LangsTypewritter() {
  const goString = `<span class="text-ctp-peach">fmt</span>.<span class="text-ctp-blue">Println</span>(<span class='text-ctp-green'>"Go"</span>)`;
  const pythonString = `<span class="text-ctp-blue">print</span>(<span class='text-ctp-green'>'Python'</span>)`;
  const jsString = `<span class="text-ctp-peach">console</span>.<span class="text-ctp-blue">log</span>(<span class='text-ctp-green'>'JavaScript'</span>);`;
  const reactString = `<<span class="text-ctp-peach">ReactTS</span>/>`;
  const asmString = `<span class="text-ctp-blue">mov</span> <span class="text-ctp-mauve">ecx</span>, <span class='text-ctp-green'>"x86 ASM"</span>`;
  const shellString = `<span class="text-ctp-blue">printf</span> <span class='text-ctp-green'>"%s\\n"</span> <span class='text-ctp-green'>"Shell Script"</span>`;
  return (
    <div className={vars.textSizes3XL + 'font-firaCode font-black hidden md:block text-ctp-text'}>
        <Typewritter
        onInit={(typewriter) => {
          typewriter.typeString(goString)
            .pauseFor(500)
            .deleteAll()
            .typeString(pythonString)
            .pauseFor(500)
            .deleteAll()
            .typeString(jsString)
            .pauseFor(500)
            .deleteAll()
            .typeString(reactString)
            .pauseFor(500)
            .deleteAll()
            .typeString(asmString)
            .pauseFor(500)
            .deleteAll()
            .typeString(pythonString)
            .pauseFor(500)
            .deleteAll()
            .typeString(shellString)
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

function RolesTypewritter() {
  const programmingRole = "<span class='text-ctp-teal'>Desenvolvedor Full-Stack</span>."
  const musicRole = "<span class='text-ctp-sky'>Produtor Musical</span>."
  const artRole = "<span class='text-ctp-sapphire'>Artista Gráfico</span>."
  const writterRole = "<span class='text-ctp-blue'>Escritor</span>."
  return (
    <div className={vars.textSizes5XL + 'font-leagueGothic flex justify-center'}>
      <Typewritter
        onInit={(typewriter) => {
          typewriter.typeString(programmingRole)
            .pauseFor(500)
            .deleteAll()
            .typeString(musicRole)
            .pauseFor(500)
            .deleteAll()
            .typeString(artRole)
            .pauseFor(500)
            .deleteAll()
            .typeString(writterRole)
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

function MDContent() {
  return (
    <div className='hidden md:block px-8'>
      <div className='flex justify-center'>
      <LangsTypewritter/>
      </div>
      <div className={vars.textSizes2XL + 'font-leagueGothic text-center mt-32'}>
        <p>Atualmente sou <span className='text-ctp-teal'>Desenvolvedor Full-Stack</span>, <span className='text-ctp-sky'>Produtor Musical</span> <br/>
        nas horas vagas <span className='text-ctp-sapphire'>Artista Gráfico</span> e <span className='text-ctp-blue'>Escritor</span>.</p>
        <p className=' mt-16'>Tenho {age} anos, sou <span className='text-ctp-green'>brasileiro</span> e diria que meus pontos fortes <br/> são a <span className='text-ctp-yellow'>criatividade</span> e a <span className='text-ctp-red'>racionalidade</span>.</p>
        <p className='mt-16'>Porquê você não aproveita e dá uma olhada nas outras <span  className='text-ctp-mauve'>seções</span>?</p>
      </div>
    </div>
  )
}

function PhoneContent() {
  return (
    <div className='mx-4 mt-4 block md:hidden'>
      <div className='mt-12'>
        <RolesTypewritter/>
      </div>
      <div className={vars.textSizes3XL + 'font-leagueGothic text-center'}>
        <p className='mt-24'>Tenho {age} anos, sou <span className='text-ctp-green'>brasileiro</span> e diria que meus pontos fortes <br/> são a <span className='text-ctp-yellow'>criatividade</span> e a <span className='text-ctp-red'>racionalidade</span>.</p>
        <p className='mt-24'>Porquê você não aproveita e dá uma olhada nas outras <span  className='text-ctp-mauve'>seções</span>?</p>

        <p className='mt-24'>Para navegar basta usar o menu no botão ao canto <br/> inferior-esquerdo da tela.</p>
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

export function Home(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Início" themeFunc={props.themeFunc}/>
      <PageContent state={props.state} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}