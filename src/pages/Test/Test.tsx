import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FooterWrapper } from "../../components/Wrappers/FlowWrappers";
import { GenericStateProps } from "../../utils/interfaces";
import { CodeBlock } from "../../utils/TextElements/TextElements";
import * as vars from '../../utils/variables';
import catpuccinMocha from "./catpuccinMocha";
import catpuccinLatte from "./catpuccinLatte";
// import { catpuccinMocha } from './catpuccinMocha';


const goCodeBlock01 = `package main

import "fmt"

// Aqui nós declaramos a primeira função
func funcao_print_1() {
    fmt.Println("Função 1")
}

// Aqui nós declaramos a segunda função
func funcao_print_2() {
    fmt.Println("Função 2")
}

func main() {
    funcao_print_2() // Aqui chamamos a segunda
    funcao_print_1()  // Aqui chamamos a primeira
}`

let basetxt = "The quick brown fox jumps over the lazy dog."

function Texts() {
  return (
    <div>
      <h1 className="text-polarnight-0">{basetxt}</h1>
      <h1 className="text-polarnight-1">{basetxt}</h1>
      <h1 className="text-polarnight-2">{basetxt}</h1>
      <h1 className="text-polarnight-3">{basetxt}</h1>
      <h1 className="text-frost-0">{basetxt}</h1>
      <h1 className="text-frost-1">{basetxt}</h1>
      <h1 className="text-frost-2">{basetxt}</h1>
      <h1 className="text-frost-3">{basetxt}</h1>
      <h1 className="text-aurora-0">{basetxt}</h1>
      <h1 className="text-aurora-1">{basetxt}</h1>
      <h1 className="text-aurora-2">{basetxt}</h1>
      <h1 className="text-aurora-3">{basetxt}</h1>
      <h1 className="text-aurora-4">{basetxt}</h1>
    </div>
  )
}

function Content() {
  return (
    // <div className="font-firaCode">
    //   <div className="bg-snowstorm-0">
    //     <Texts />
    //   </div>
    //   <div className="bg-snowstorm-1">
    //     <Texts />
    //   </div>
    //   <div className="bg-snowstorm-2">
    //     <Texts />
    //   </div>
    // </div>
    <div>
      <CodeBlock theme={catpuccinMocha}>
        {goCodeBlock01}
      </CodeBlock>
      {/* <CodeBlock theme={catpuccinLatte}>
        {goCodeBlock01}
      </CodeBlock>

      <CodeBlock>
        {goCodeBlock01}
      </CodeBlock> */}
    </div>
  )
}


function HR() {
  return (
    <div className={vars.textSizes3XL + "font-bebasNeue flex justify-center h-fit"}>
      <h1>Test Page</h1>
    </div>
  )
}

function PageContent({state}: any) {
  return (
    <div className={(state ? "blur-sm" : "") + " mt-0 md:mt-16 min-h-screen grow"}>
      <HR />
      <Content />
    </div>
  )
}

export function TestePage(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-polarnight-0 text-snowstorm-0'>
      <Header state={props.state} funcState={props.funcState} title="Aulas" />
      <PageContent state={props.state} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
