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
import { CitationBlockProps, ParagraphProps, CodeBlockProps, TableProps } from '../interfaces';
import catpuccinLatteOutput from '../SyntaxHighlighterColors/catpuccinLatteOutput';
import catpuccinMochaOutput from '../SyntaxHighlighterColors/catpuccinMochaOutput';

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
    text-center border-x-1 border-ctp-overlay0
    px-4      3xl:px-8  4xl:px-16
    py-0.5    3xl:py-2  4xl:py-6
    ` + props.styleClasses}>
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
    ` + props.styleClasses}>
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
  const stLight = {
    paddingRight: "1rem",
    color: "#9ca0b0"
  }
  const stDark = {
    paddingRight: "1rem",
    color: "#6c7086",
  }
  return (
  <div className="my-4 font-semibold 3xl:my-8">
    <div className={vars.textSizesXS3 + "border-2 3xl:border-5 rounded-lg font-firaCode border-ctp-blue overflow-auto hidden md:block bg-ctp-mantle"}>
      <div className='p-1'>
        <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatte : catpuccinMocha} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
          {props.children}
        </SyntaxHighlighter>
      </div>
      <div className={props.answer != null ? 'block ' : 'hidden '}>
        <div className={(props.darkLightSwitch ? 'bg-ctp-surface0' : 'bg-ctp-crust') + ' rounded-lg p-1 hidden md:block'}>
          <h1 className='text-center'>Saida</h1>
          <SyntaxHighlighter language='plaintext' style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatteOutput : catpuccinMochaOutput} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
            {props.answer}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
    <div className={vars.textSizesSM + "border-2 rounded-lg font-firaCode border-ctp-blue overflow-auto scroll-smooth block md:hidden bg-ctp-mantle"}>
      <div className='p-1'>
        <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatte : catpuccinMocha} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
          {props.children}
        </SyntaxHighlighter>
      </div>
      <div className={props.answer != null ? 'block ' : 'hidden '}>
        <div className={(props.darkLightSwitch ? 'bg-ctp-surface0' : 'bg-ctp-crust') + ' rounded-lg p-1  block md:hidden'}>
          <h1 className='text-center'>Saida</h1>
          <SyntaxHighlighter language='plaintext' style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatteOutput : catpuccinMochaOutput} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
            {props.answer}
          </SyntaxHighlighter>
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
