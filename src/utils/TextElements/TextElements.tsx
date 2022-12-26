import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import sh from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import ptext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import nasm from 'react-syntax-highlighter/dist/esm/languages/hljs/x86asm';
import catpuccinLatte from '../SyntaxHighlighterColors/catpuccinLatte';
import catpuccinMocha from '../SyntaxHighlighterColors/catpuccinMocha';
import * as vars from '../variables';
import { CitationBlockProps, ParagraphProps, CodeBlockProps, TableProps, DetailsProps } from '../interfaces';
import catpuccinLatteOutput from '../SyntaxHighlighterColors/catpuccinLatteOutput';
import catpuccinMochaOutput from '../SyntaxHighlighterColors/catpuccinMochaOutput';
import { CSSProperties } from 'react';

SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('bash', sh);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('x86asm', nasm);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('plaintext', ptext);


export function Table(props: TableProps) {
  return (
    <div className={`
    border-2 rounded-lg overflow-hidden border-ctp-overlay0 w-fit
    my-4  3xl:my-8 4xl:my-12
    3xl:ml-auto
    3xl:mr-auto `
    + props.styleClasses}>
      <table>
        {props.children}
      </table>
    </div>
  )
}

export function TableHead(props: TableProps) {
  return (
    <thead className={`
    bg-ctp-mantle border-b-2 border-ctp-overlay0
    ` + props.styleClasses}>
      {props.children}
    </thead>
  )
}

export function TableBody(props: TableProps) {
  return (
    <tbody className={"bg-ctp-crust " + props.styleClasses}>
      {props.children}
    </tbody>
  )
}

export function TableRow(props: TableProps) {
  return (
    <tr className={props.styleClasses}>
      {props.children}
    </tr>
  )
}


export function ThCell(props: TableProps) {
  return (
    <th className={`
    text-center border-ctp-overlay0
    px-4      3xl:px-8  4xl:px-16
    py-0.5    3xl:py-2  4xl:py-6
    ` + (props.cSpan ? ' border-x-0 ' : ' border-x-1 ')
    + (props.rSpan ? ' border-y-0 ' : ' border-y-1 ')
    + props.styleClasses}>
      {props.children}
    </th>
  )
}

export function TdCell(props: TableProps) {
  return (
    <td className={`
    text-center border-1 border-ctp-overlay0
    pb-0.5 3xl:pb-2 4xl:pb-6
    px-4   3xl:px-8 4xl:px-16
    ` + (props.cSpan ? ' border-x-0 ' : ' border-x-1 ')
    + (props.rSpan ? ' border-y-0 ' : ' border-y-1 ')
    + props.styleClasses}>
      {props.children}
    </td>
  )
}

export function CitationBlock(props: CitationBlockProps) {
  return (
    <div className='bg-ctp-surface0 rounded-lg italic mb-4 p-2 3xl:p-4 3xl:rounded-2xl 3xl:mb-8'>
      {props.children}
    </div>
  )
}

export function Paragraph(props: ParagraphProps) {
  return (
    <p className={(props.italic ? "italic" : "not-italic") + " pb-4 3xl:pb-8 font-semibold " + props.styleClasses}>
      {props.children}
    </p>
  )
}

interface ListProps {
  children?: any,
  flat?: boolean | any,
}

export function UList(props: ListProps) {
  return (
    <ul className={(props.flat ? 'pl-1 md:pl-2' : 'pl-4 md:pl-8') + " list-disc pb-4 3xl:pb-8"}>
      {props.children}
    </ul>
  )
}

export function OList(props: ListProps) {
  return (
    <ul className={(props.flat ? 'pl-1 md:pl-2' : 'pl-4 md:pl-8') + " list-decimal pb-4 3xl:pb-8"}>
      {props.children}
    </ul>
  )
}

export function ListItem({children}: any) {
  return (
    <li className='mb-1 font-semibold 3xl:mb-4'>
      {children}
    </li>
  )
}

export function CodeBlock(props: CodeBlockProps) {
  const stLight: CSSProperties = {
    paddingRight: "1rem",
    width: "2.5rem",
    color: "#9ca0b0",
    textAlign: "right"
  }
  const stDark: CSSProperties = {
    paddingRight: "1rem",
    width: "2.5rem",
    color: "#6c7086",
    textAlign: "right"
  }
  return (
  <div className="my-4 font-semibold 3xl:my-8">
    <div className={vars.textSizesXS3 + "border-2 3xl:border-5 rounded-lg font-firaCode border-ctp-blue overflow-auto hidden md:block bg-ctp-mantle"}>
      <div className='text-ctp-mantle bg-ctp-mantle relative'>
        <div className={props.CodeBlockID != undefined ? "block" : "hidden" + ' h-6'}>
          <h1 className='text-center text-ctp-text pt-1'>Código</h1>
          <h1 className='bg-ctp-blue absolute right-0 top-0 p-1 rounded-bl-lg'>#{props.CodeBlockID}</h1>
        </div>
        <div className='rounded-t-lg overflow-hidden bg-ctp-mantle'>
          <div>
            <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatte : catpuccinMocha} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
              {props.children}
            </SyntaxHighlighter>
          </div>
          <div className={props.answer != null ? 'block ' : 'hidden '}>
            <div className={(props.darkLightSwitch ? 'bg-ctp-surface0' : 'bg-ctp-crust') + ' rounded-lg p-1 hidden md:block text-ctp-text'}>
              <h1 className='text-center text-ctp-text'>Saida</h1>
              <SyntaxHighlighter language='plaintext' style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatteOutput : catpuccinMochaOutput} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
                {props.answer}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={vars.textSizesSM + "border-2 rounded-lg font-firaCode border-ctp-blue overflow-auto scroll-smooth block md:hidden bg-ctp-mantle relative"}>
      <div className='text-ctp-mantle bg-ctp-mantle relative'>
        <div className={props.CodeBlockID != undefined ? "block" : "hidden" + ' h-6'}>
          <h1 className='text-center text-ctp-text pt-1'>Código</h1>
          <h1 className='bg-ctp-blue absolute right-0 top-0 p-1 rounded-bl-lg'>#{props.CodeBlockID}</h1>
        </div>
        <div className='p-1'>
          <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatte : catpuccinMocha} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
            {props.children}
          </SyntaxHighlighter>
        </div>
        <div className={props.answer != null ? 'block ' : 'hidden '}>
          <div className={(props.darkLightSwitch ? 'bg-ctp-surface0' : 'bg-ctp-crust') + ' rounded-lg p-1  block md:hidden'}>
            <h1 className='text-center text-ctp-text'>Saida</h1>
            <SyntaxHighlighter language='plaintext' style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatteOutput : catpuccinMochaOutput} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
              {props.answer}
            </SyntaxHighlighter>
          </div>
        </div>
        </div>
    </div>
  </div>
  )
}

export function CodeCite({text}: any) {
  return (
    <span className={vars.textSizesSM2 + "bg-ctp-surface0 px-1 3xl:px-2 rounded-md font-firaCode not-italic font-semibold"}>
      {text}
    </span>
  )
}

interface MainTitleProps {
  chapterTitle: string;
  titleId: string;
  refLink: any;
}

export function MainTitle(props: MainTitleProps) {
  return (
    <div>
      <h1 id={props.titleId} ref={props.refLink} className={vars.textSizes3XL2
        + `font-bebasNeue text-center hidden md:block
        md:mt-2 3xl:mt-6 4xl:mt-12
        md:mb-4 3xl:mb-8 4xl:mb-16
        `}>{props.chapterTitle}</h1>
      <h1 id={props.titleId} ref={props.refLink} className={vars.textSizes4XL + 'font-bebasNeue text-center mb-4 mt-2 block md:hidden'}>{props.chapterTitle}</h1>
    </div>
  )
}

export function SubTitle(props: MainTitleProps) {
  return (
    <h1 id={props.titleId} ref={props.refLink} className={vars.textSizes2XL2 + 'font-leagueGothic mb-4 border-b-2 3xl:border-b-5 3xl:mb-8 w-fit 3xl:pb-4 pb-1 3xl:pr-8 pr-2 border-ctp-text'}>
        {props.chapterTitle}
    </h1>
  )
}

export function Details(props: DetailsProps) {
  let borderColor;
  switch (props.typeState) {
    case 0:
      borderColor = "border-ctp-blue ";
      break;
    case 1:
      borderColor = "border-ctp-green ";
      break;
    case 2:
      borderColor = "border-ctp-mauve ";
      break;
    case 3:
      borderColor = "border-ctp-yellow ";
      break;
    case 4:
      borderColor = "border-ctp-peach ";
      break;
    case 5:
      borderColor = "border-ctp-red ";
      break;
    default:
      borderColor = 'border-ctp-overlay0 '
      break;
  }
  return (
    <details className={borderColor + "border-2 rounded-lg p-2 transition-all bg-ctp-mantle w-fit my-4"}>
      <summary className="transition-all mr-4">{props.summary}</summary>
      <div className="text-justify mt-4 transition-all">
      {props.children}
      </div>
    </details>
  )
}

//

export function NoteParagraph({children}: any) {
  return (
    <div className="flex flex-row text-ctp-subtext0 bg-ctp-surface0 rounded-r-lg rounded-l-mb w-fit my-4">
      <div className='bg-ctp-blue rounded-lg'>&nbsp;</div>
      <div className="mx-2 fill-ctp-blue flex flex-col justify-center items-center">
        <div className='h-6 w-6'>
          <InfoIcon />
        </div>
      </div>
      <p className="italic mb-2 mt-1 mr-3">
        {children}
      </p>
    </div>
  )
}

export function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336zM256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192z"/></svg>
  )
}
