import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FooterWrapper } from "../../components/Wrappers/FlowWrappers";
import { GenericStateProps, PageContentProps } from "../../utils/interfaces";
import { CodeBlock, ListItem, OList, Table, TableBody, TableHead, TableRow, TdCell, ThCell } from "../../utils/TextElements/TextElements";
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

const goAnswer = `Função 2
Função 1 ....................................................................................`


function Content(props: PageContentProps) {
  return (
    <div className="flex justify-center items-center pt-16">
      <div className="border-2 rounded-lg overflow-hidden border-ctp-overlay0">
        <table>
          <thead className="bg-ctp-mantle border-b border-ctp-overlay0">
            <tr>
              <th className="pt-1 px-4">Song</th>
              <th className="pt-1 px-4">Artist</th>
              <th className="pt-1 px-4">Year</th>
            </tr>
          </thead>
          <tbody className="bg-ctp-crust">
            <tr>
              <td className="px-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="px-4">Malcolm Lockyer</td>
              <td className="px-4">1961</td>
            </tr>
            <tr>
              <td className="px-4">Witchy Woman</td>
              <td className="px-4">The Eagles</td>
              <td className="px-4">1972</td>
            </tr>
            <tr>
              <td className="px-4">Shining Star</td>
              <td className="px-4">Earth, Wind, and Fire</td>
              <td className="px-4">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>a</ThCell>
            <ThCell>b</ThCell>
            <ThCell>c</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell>d</TdCell>
            <TdCell>e</TdCell>
            <TdCell>f</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>g</TdCell>
            <TdCell>h</TdCell>
            <TdCell>i</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>j</TdCell>
            <TdCell>k</TdCell>
            <TdCell>l</TdCell>
          </TableRow>
        </TableBody>
      </Table>
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
      <Header state={props.state} funcState={props.funcState} title="Aulas" themeFunc={props.themeFunc} themeState={props.darkLightSwitch} />
      <PageContent state={props.state} darkLightSwitch={props.darkLightSwitch} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
