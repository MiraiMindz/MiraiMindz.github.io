import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FooterWrapper } from "../../components/Wrappers/FlowWrappers";
import { PageContentProps } from "../../utils/ComponentElements/ComponentElements";
import { GenericStateProps } from "../../utils/interfaces";
import { CodeBlock } from "../../utils/TextElements/TextElements";
import * as vars from '../../utils/variables';
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



function Content(props: PageContentProps) {
  return (
    <div>
      <CodeBlock language="go" darkLightSwitch={props.themeState}>
        {goCodeBlock01}
      </CodeBlock>
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

function PageContent(props: PageContentProps) {
  return (
    <div className={(props.state ? "blur-sm" : "") + " mt-0 md:mt-16 min-h-screen grow"}>
      <HR />
      <Content darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}


export function TestePage(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Aulas" themeFunc={props.themeFunc} />
      <PageContent state={props.state} darkLightSwitch={props.darkLightSwitch} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
