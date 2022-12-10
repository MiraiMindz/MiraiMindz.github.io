import Typewritter from 'typewriter-effect'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { FooterWrapper } from '../../components/Wrappers/FlowWrappers'
import { GenericStateProps } from '../../utils/interfaces'
import * as vars from '../../utils/variables'

const age = (new Date().getFullYear()) - 2005

function LangsTypewritter() {
  const goString = `<span class="text-frost-3">fmt</span>.<span class="text-frost-1">Println</span>(<span class='text-aurora-3'>"Go"</span>)`;
  const pythonString = `<span class="text-frost-3">print</span>(<span class='text-aurora-3'>'Python'</span>)`;
  const jsString = `<span class="text-frost-3">console</span>.<span class="text-frost-1">log</span>(<span class='text-aurora-3'>'JavaScript'</span>);`;
  const reactString = `<<span class="text-frost-3">ReactTS</span>/>`;
  const asmString = `<span class="text-frost-3">mov</span> <span class="text-frost-1">ecx</span>, <span class='text-aurora-3'>"x86 ASM"</span>`;
  const shellString = `<span class="text-frost-3">printf</span> <span class='text-aurora-3'>"%s\\n"</span> <span class='text-aurora-3'>"Shell Script"</span>`;
  return (
    <div className={vars.textSizes3XL + 'font-firaCode font-black hidden md:block'}>
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
  const programmingRole = "<span class='text-frost-0'>Desenvolvedor Full-Stack</span>."
  const musicRole = "<span class='text-frost-1'>Produtor Musical</span>."
  const artRole = "<span class='text-frost-2'>Artista Gráfico</span>."
  const writterRole = "<span class='text-frost-3'>Escritor</span>."
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
        <p>Atualmente sou <span className='text-frost-0'>Desenvolvedor Full-Stack</span>, <span className='text-frost-1'>Produtor Musical</span> <br/>
        nas horas vagas <span className='text-frost-2'>Artista Gráfico</span> e <span className='text-frost-3'>Escritor</span>.</p>
        <p className=' mt-16'>Tenho {age} anos, sou <span className='text-aurora-3'>brasileiro</span> e diria que meus pontos fortes <br/> são a <span className='text-aurora-2'>criatividade</span> e a <span className='text-aurora-1'>racionalidade</span>.</p>
        <p className='mt-16'>Porquê você não aproveita e dá uma olhada nas outras <span  className='text-aurora-4'>seções</span>?</p>
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
        <p className='mt-24'>Tenho {age} anos, sou <span className='text-aurora-3'>brasileiro</span> e diria que meus pontos fortes <br/> são a <span className='text-aurora-2'>criatividade</span> e a <span className='text-aurora-1'>racionalidade</span>.</p>
        <p className='mt-24'>Porquê você não aproveita e dá uma olhada nas outras <span  className='text-aurora-4'>seções</span>?</p>

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
    <div className='flex flex-col bg-polarnight-0 text-snowstorm-0'>
      <Header state={props.state} funcState={props.funcState} title="Início" />
      <PageContent state={props.state} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
