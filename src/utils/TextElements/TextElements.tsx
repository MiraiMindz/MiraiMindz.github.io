import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import sh from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import ptext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import nasm from 'react-syntax-highlighter/dist/esm/languages/hljs/x86asm';
import nord from 'react-syntax-highlighter/dist/esm/styles/hljs/nord';
import * as vars from '../variables';

SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('bash', sh);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('x86asm', nasm);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('plaintext', ptext);



export interface ParagraphProps {
  children: any,
  italic?: boolean,
  styleClasses?: string,
}

export interface CitationBlockProps {
  children: any,
}

export interface CodeBlockProps {
  children?: any,
  language?: string,
  theme?: { [key: string]: React.CSSProperties },
}

export function CitationBlock(props: CitationBlockProps) {
  return (
    <div className='p-2 bg-polarnight-1 rounded-lg italic mb-4'>
      {props.children}
    </div>
  )
}

export function Paragraph(props: ParagraphProps) {
  return (
    <p className={(props.italic ? "italic" : "not-italic") + " pb-4 " + props.styleClasses}>
      {props.children}
    </p>
  )
}

export function UList({children}: any) {
  return (
    <ul className="pl-4 md:pl-8 list-disc pb-4">
      {children}
    </ul>
  )
}

export function ListItem({children}: any) {
  return (
    <li className='mb-1'>
      {children}
    </li>
  )
}

export function CodeBlock(props: CodeBlockProps) {
  const st = {
    paddingRight: "1rem",
    color: "#4c566a"
  }
  return (
  <div className="mb-4">
    <div className={vars.textSizesXS + "border-2 rounded-lg p-1 font-firaCode border-frost-3 overflow-auto hidden md:block"}>
      <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : nord} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={st}>
        {props.children}
      </SyntaxHighlighter>
    </div>
    <div className={vars.textSizesSM + "border-2 rounded-lg p-1 font-firaCode border-frost-3 overflow-auto scroll-smooth block md:hidden"}>
      <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : nord} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={st}>
        {props.children}
      </SyntaxHighlighter>
    </div>
  </div>
  )
}

export function CodeCite({text}: any) {
  return (
    <span className={vars.textSizesXS + "bg-polarnight-1 px-1 rounded-md font-firaCode not-italic"}>
      {text}
    </span>
  )
}
