import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import sh from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import ptext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import nasm from 'react-syntax-highlighter/dist/esm/languages/hljs/x86asm';
import nord from 'react-syntax-highlighter/dist/esm/styles/hljs/nord';
import catpuccinLatte from '../SyntaxHighlighterColors/catpuccinLatte';
import catpuccinMocha from '../SyntaxHighlighterColors/catpuccinMocha';
import * as vars from '../variables';
import { CitationBlockProps, ParagraphProps, CodeBlockProps } from '../interfaces';

SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('bash', sh);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('x86asm', nasm);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('plaintext', ptext);


export function CitationBlock(props: CitationBlockProps) {
  return (
    <div className='p-2 bg-ctp-surface0 rounded-lg italic mb-4'>
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
  const stLight = {
    paddingRight: "1rem",
    color: "#9ca0b0"
  }
  const stDark = {
    paddingRight: "1rem",
    color: "#6c7086",
  }
  return (
  <div className="mb-4">
    <div className={vars.textSizesXS + "border-2 rounded-lg p-1 font-firaCode border-ctp-blue overflow-auto hidden md:block bg-ctp-mantle"}>
      <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : props.darkLightSwitch ? catpuccinLatte : catpuccinMocha} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
        {props.children}
      </SyntaxHighlighter>
    </div>
    <div className={vars.textSizesSM + "border-2 rounded-lg p-1 font-firaCode border-ctp-blue overflow-auto scroll-smooth block md:hidden bg-ctp-mantle"}>
      <SyntaxHighlighter language={props.language} style={props.theme ? props.theme : nord} showLineNumbers={true} wrapLongLines={false} lineNumberStyle={props.darkLightSwitch ? stLight : stDark}>
        {props.children}
      </SyntaxHighlighter>
    </div>
  </div>
  )
}

export function CodeCite({text}: any) {
  return (
    <span className={vars.textSizesXS + "bg-ctp-surface0 px-1 rounded-md font-firaCode not-italic"}>
      {text}
    </span>
  )
}
