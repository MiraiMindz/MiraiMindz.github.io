import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FooterWrapper } from "../../components/Wrappers/FlowWrappers";
import { GenericStateProps, PageContentProps } from "../../utils/interfaces";
import { CodeBlock, ListItem, OList, Table, TableBody, TableHead, TableRow, TdCell, ThCell } from "../../utils/TextElements/TextElements";
import * as vars from '../../utils/variables';


function Content(props: PageContentProps) {
  return (
    <div className="pt-16 overflow-auto">

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
    <div className={(props.state ? "blur-sm" : "") + vars.pageContentBaseStyle}>
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
