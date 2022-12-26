import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FooterWrapper } from "../../components/Wrappers/FlowWrappers";
import { GenericStateProps, PageContentProps } from "../../utils/interfaces";
import { CodeBlock, CodeCite, Details, ListItem, NoteParagraph, OList, Paragraph, Table, TableBody, TableHead, TableRow, TdCell, ThCell } from "../../utils/TextElements/TextElements";
import * as vars from '../../utils/variables';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { YouTubeVideoPlayer } from "../../utils/ComponentElements/ComponentElements";



function PlayButton() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>
  )
}

// function PauseButton() {
//   return (

//   )
// }

// function RepeatButton() {
//   return (

//   )
// }

// function FowardButton() {
//   return (

//   )
// }

// function BackwardButton() {
//   return (

//   )
// }

// function VolumeButton() {
//   return (

//   )
// }

// function CurrTimeButton() {
//   return (

//   )
// }



/* <AudioPlayer layout="horizontal"
  src="/sample.mp3"
/> */

function Content(props: PageContentProps) {
  return (
    <div className={vars.textSizesBASE2 + "pt-16 overflow-auto font-antonio flex flex-row justify-center items-center"}>
      <YouTubeVideoPlayer url="https://www.youtube-nocookie.com/embed/ZZuVtWcyOIg"/>

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
