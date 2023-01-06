import { Footer } from "../../../../../components/Footer/Footer"
import { Header } from "../../../../../components/Header/Header"
import { FooterWrapper } from "../../../../../components/Wrappers/FlowWrappers"
import { CapsSumWrapper, CapLink, BackNextChapters, genRefs, ToCLink, ToCWrapper } from "../../../../../utils/ComponentElements/ComponentElements"
import { handleClassProg } from "../../../../../utils/handleClassProgress/handleClassProgress"
import { CapsSumPhoneProps, CapSummProps, ClassChapterProps, ClassContentProps, ClassesIndexStateProps, GenericStateProps, PageContentProps, ToCContentProps } from "../../../../../utils/interfaces"
import { CitationBlock, CodeBlock, CodeCite, Details, ListItem, MainTitle, NoteParagraph, OList, Paragraph, SubTitle, Table, TableBody, TableHead, TableRow, TdCell, ThCell, UList } from "../../../../../utils/TextElements/TextElements"
import * as vars from '../../../../../utils/variables'
import * as CBlocks from './CodeBlocks'
import andGif from '/assets/ClassesAssets/Pyless/Fund2/AND.gif';
import leftShiftGif from '/assets/ClassesAssets/Pyless/Fund2/LEFT_SHIFT.gif';
import rightShiftGif from '/assets/ClassesAssets/Pyless/Fund2/RIGHT_SHIFT.gif';
import notGif from '/assets/ClassesAssets/Pyless/Fund2/NOT.gif';
import orGif from '/assets/ClassesAssets/Pyless/Fund2/OR.gif';
import xorGif from '/assets/ClassesAssets/Pyless/Fund2/XOR.gif';
import bitMaskRShiftGif from '/assets/ClassesAssets/Pyless/Fund2/BITMASKED_RIGHT_SHIFT.gif';
import bitMaskLShiftGif from '/assets/ClassesAssets/Pyless/Fund2/BITMASKED_LEFT_SHIFT.gif';


function refLinks(stateFunc?: any) {
  const [link00, ref00] = genRefs(stateFunc);
  const [link01, ref01] = genRefs(stateFunc);
  const [link02, ref02] = genRefs(stateFunc);
  const [link03, ref03] = genRefs(stateFunc);
  const [link04, ref04] = genRefs(stateFunc);
  const [link05, ref05] = genRefs(stateFunc);
  const [link06, ref06] = genRefs(stateFunc);
  const [link07, ref07] = genRefs(stateFunc);
  const [link08, ref08] = genRefs(stateFunc);
  const [link09, ref09] = genRefs(stateFunc);
  const [link10, ref10] = genRefs(stateFunc);
  const [link11, ref11] = genRefs(stateFunc);
  const [link12, ref12] = genRefs(stateFunc);
  const [link13, ref13] = genRefs(stateFunc);
  const [link14, ref14] = genRefs(stateFunc);
  const [link15, ref15] = genRefs(stateFunc);
  const [link16, ref16] = genRefs(stateFunc);
  const [link17, ref17] = genRefs(stateFunc);
  const [link18, ref18] = genRefs(stateFunc);
  const [link19, ref19] = genRefs(stateFunc);
  const [link20, ref20] = genRefs(stateFunc);
  const [link21, ref21] = genRefs(stateFunc);
  const [link22, ref22] = genRefs(stateFunc);
  const [link23, ref23] = genRefs(stateFunc);
  const [link24, ref24] = genRefs(stateFunc);
  const [link25, ref25] = genRefs(stateFunc);
  const [link26, ref26] = genRefs(stateFunc);
  const [link27, ref27] = genRefs(stateFunc);
  const [link28, ref28] = genRefs(stateFunc);
  const [link29, ref29] = genRefs(stateFunc);
  const [link30, ref30] = genRefs(stateFunc);
  const [link31, ref31] = genRefs(stateFunc);
  const [link32, ref32] = genRefs(stateFunc);
  const [link33, ref33] = genRefs(stateFunc);
  const [link34, ref34] = genRefs(stateFunc);
  const [link35, ref35] = genRefs(stateFunc);
  const [link36, ref36] = genRefs(stateFunc);
  const [link37, ref37] = genRefs(stateFunc);
  const [link38, ref38] = genRefs(stateFunc);
  const [link39, ref39] = genRefs(stateFunc);
  const [link40, ref40] = genRefs(stateFunc);
  const [link41, ref41] = genRefs(stateFunc);
  const [link42, ref42] = genRefs(stateFunc);
  const [link43, ref43] = genRefs(stateFunc);
  const [link44, ref44] = genRefs(stateFunc);
  const [link45, ref45] = genRefs(stateFunc);
  const [link46, ref46] = genRefs(stateFunc);
  const [link47, ref47] = genRefs(stateFunc);
  const [link48, ref48] = genRefs(stateFunc);
  const [link49, ref49] = genRefs(stateFunc);
  const [link50, ref50] = genRefs(stateFunc);
  const [link51, ref51] = genRefs(stateFunc);
  const [link52, ref52] = genRefs(stateFunc);
  const [link53, ref53] = genRefs(stateFunc);
  const [link54, ref54] = genRefs(stateFunc);
  const [link55, ref55] = genRefs(stateFunc);
  const [link56, ref56] = genRefs(stateFunc);
  const [link57, ref57] = genRefs(stateFunc);
  const [link58, ref58] = genRefs(stateFunc);

  const linksList = [link00, link01, link02, link03, link04, link05, link06, link07, link08, link09, link10, link11, link12, link13, link14, link15, link16, link17, link18, link19, link20, link21, link22, link23, link24, link25, link26, link27, link28, link29, link30, link31, link32, link33, link34, link35, link36, link37, link38, link39, link40, link41, link42, link43, link44, link45, link46, link47, link48, link49, link50, link51, link52, link53, link54, link55, link56, link57, link58];
  const refsList =  [ref00, ref01, ref02, ref03, ref04, ref05, ref06, ref07, ref08, ref09, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref37, ref38, ref39, ref40, ref41, ref42, ref43, ref44, ref45, ref46, ref47, ref48, ref49, ref50, ref51, ref52, ref53, ref54, ref55, ref56, ref57, ref58];
  return [linksList, refsList]
}

function ClassChapter1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className={vars.textSizesBASE2}>
      <SubTitle chapterTitle="Tipos de Controle de Flow" refLink={refsLink[1]} titleId="01" />
      <ClassChapter1Subcap1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap4 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap5 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap6 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap7 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap8 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap9 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter1Subcap1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Controle de Fluxo (Control Flow) e Escopo" refLink={refsLink[2]} titleId="02" />
      <Paragraph>
      O controle de fluxo (control flow) de um programa determina a forma como o código será executado, existem 4 tipos essenciais, isto é, destes quatro surgem variações
      </Paragraph>
      <UList>
        <ListItem>Sequencial: o código é executado de forma sequencial, cima a baixo</ListItem>
        <ListItem>Decisivo: o código é executado baseado em uma decisão, <CodeCite text="if" /> statements</ListItem>
        <ListItem>Repetitivo: o código é executado em loop, <CodeCite text="while" /> e <CodeCite text="for" /> loops</ListItem>
        <ListItem>Funcional: o código é dividido e executado em forma de funções (veremos mais a frente)</ListItem>
      </UList>
      <ClassChapter1Subcap1S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap1S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap1S3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter1Subcap1S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Sequencial" refLink={refsLink[3]} titleId="03" />
      <Paragraph>
      É essencialmente a forma como viemos escrevendo código até agora, os comandos são providos e executados de forma sequencial
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock00} CodeBlockID="00">
      {CBlocks.CodeBlock00}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap1S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Decisivo" refLink={refsLink[4]} titleId="04" />
      <Paragraph>
      O decisivo é usado quando queremos executar um codigo quando algo for verdadeiro ou falso, ou seja, quando tomamos uma decisão
      </Paragraph>
      <Paragraph>
      em Python nós duas formas de tomar decisões, <CodeCite text="match-case" /> e cadeias de <CodeCite text="elif" />s
      </Paragraph>
      <Paragraph>
      começarei pelas cadeias de elifs pois elas constituem a lógica básica de um if statement
      </Paragraph>
      <Paragraph>
      a sintaxe de um if statement é a seguinte:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="01">
      {CBlocks.CodeBlock01}
      </CodeBlock>
      <Paragraph>
      irei desestruturar o código e explicar cada parte:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="if"/>: é a keyword, em uma tradução literal significa "se"</ListItem>
        <ListItem><CodeCite text="(condição)"/>: é onde você coloca a condição para a execução do codigo e nós usamos os operadores condicionais para isto, os parenteses são opcionais</ListItem>
        <ListItem><CodeCite text=":"/> (dois-pontos): eles são ESTRITAMENTE NECESSÁRIOS, pois dão inicio ao escopo do bloco, sem eles o código nunca será executado como esperado</ListItem>
        <ListItem><CodeCite text="&nbsp;&nbsp;"/> (indentação): seu tamanho pode variar dependendo das configurações da IDE, porém ela é o delimitador de escopo, ou seja, uma indentação mal feita torna o codigo impossivel de ser executado</ListItem>
        <ListItem><CodeCite text="{codigo}"/>: é o codigo que você deseja executar</ListItem>
      </UList>
      <Paragraph>
      vejamos alguns exemplos:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="02" answer={CBlocks.AnswerBlock02}>
      {CBlocks.CodeBlock02}
      </CodeBlock>
      <Paragraph>
      suponhamos que você queria executar um código caso algo seja verdade e outro caso não seja verdade, bom, para isto temos a keyword <CodeCite text="else" />, ela não recebe nenhuma condição, pois só serve para executar o código caso o <CodeCite text="if" /> não se concretize
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="03" answer={CBlocks.AnswerBlock03}>
      {CBlocks.CodeBlock03}
      </CodeBlock>
      <Paragraph>
      até agora nós conseguimos executar duas funções com base em uma variavel, mas e se quisermos tomar mais decisões?
      </Paragraph>
      <Paragraph>
      bom, se raciocinarmos um pouco podemos perceber que basta juntar <CodeCite text="if"/>s e <CodeCite text="else"/>s para termos mais de uma decisão, deste modo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="04" answer={CBlocks.AnswerBlock04}>
      {CBlocks.CodeBlock04}
      </CodeBlock>
      <Paragraph>
      os desenvolvedores de Python perceberam este padrão e criaram uma keyword especifica para a união de <CodeCite text="else"/>s e <CodeCite text="if"/>s, chamada de <CodeCite text="elif" />
      </Paragraph>
      <Paragraph>
      ela é usada entre o if e o else em uma especie de cadeia, veja o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="05" answer={CBlocks.AnswerBlock05}>
      {CBlocks.CodeBlock05}
      </CodeBlock>
      <Paragraph>
      em cadeias de <CodeCite text="elif" />s nós podemos ter quantos <CodeCite text="elif" /> forem necessários, porém, devemos ter APENAS um <CodeCite text="if" /> no inicio e um <CodeCite text="else" /> no fim para termos a cadeia.
      </Paragraph>
      <SubTitle chapterTitle="Match-Case" refLink={refsLink[5]} titleId="05" />
      <Paragraph>
      o <CodeCite text="match-case" /> foi introduzido no Python 3.10, essencialmente ele introduz a correspondencia de padrões, essencialmente, você compara um caso a um padrão desejavel de tokens.
      </Paragraph>
      <Paragraph>
      a sintaxe de um <CodeCite text="match-case" /> é a seguinte:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="06">
      {CBlocks.CodeBlock06}
      </CodeBlock>
      <Details summary='Observações sobre o match-case'typeState={2}>
        <Paragraph>
        devido ao fato do match-case ser relativamente recente e também ser interpretado como <span className="italic">soft-keywords</span>, o colorizador de código ultilizado aqui o classifica como variavel, por isso a falta de cor.
        </Paragraph>
        <Paragraph>
        <span className="italic">soft-keywords</span> são keywords contextuais, isto é, só tem funcionalidade em contextos especificos, caso contrário são interpretadas como variaveis.
        </Paragraph>
      </Details>
      <UList>
        <ListItem><CodeCite text="match"/>: soft-keyword</ListItem>
        <ListItem><CodeCite text="(variavel)"/>: variavel usada na cadeia, os parenteses são opcionais</ListItem>
        <ListItem><CodeCite text="case"/>: soft-keyword</ListItem>
        <ListItem><CodeCite text="(opção)"/>: valor esperado, podemos ter quantos <CodeCite text="case (opção)" /> quisermos, os parenteses são opcionais</ListItem>
        <ListItem><CodeCite text="case _"/>: valor universal, equivale ao <CodeCite text="else" /> nas cadeias de <CodeCite text="elif" />s, executado caso todos os outros sejam falso</ListItem>
      </UList>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="07" answer={CBlocks.AnswerBlock07}>
      {CBlocks.CodeBlock07}
      </CodeBlock>
      <NoteParagraph>
      Você pode tentar descomentar a linha 1 e comentar a linha 2 para testar outras combinações.
      </NoteParagraph>
      <Paragraph>
      então qual a diferença entre cadeias de <CodeCite text="elif"/> e <CodeCite text="match-case"/>?
      </Paragraph>
      <Paragraph>
      veja bem, o <CodeCite text="match-case"/> serve para padrões estruturados de código, enquanto as cadeias de <CodeCite text="elif"/> servem para tomar decisões, veja um exemplo:
      </Paragraph>
      <NoteParagraph>
      Você pode usar o match-case para tomar decisões baseadas em uma única variavel, mas se é recomendado o uso de cadeias de elif.
      </NoteParagraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="08" answer={CBlocks.AnswerBlock08}>
      {CBlocks.CodeBlock08}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap1S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Repetitivo (Recursivo)" refLink={refsLink[6]} titleId="06" />
      <Paragraph>
      Flows repetitivos, como o nome sugere servem para repetir linhas de código, em Python nós temos duas keywords para isto, <CodeCite text="while"/> e <CodeCite text="for"/>
      </Paragraph>
      <Paragraph>
      o <CodeCite text="while"/> serve para executar um codigo enquanto uma condição for verdadeira
      </Paragraph>
      <Paragraph>
      veja a sintaxe de um <CodeCite text="while loop"/>:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="09">
      {CBlocks.CodeBlock09}
      </CodeBlock>
      <Paragraph>
        a unica diferença entre a estrutura basica de um <CodeCite text="if"/>, é a keyword e o fato de termos apenas ela, não existem "cadeias de <CodeCite text="while"/>"
      </Paragraph>
      <NoteParagraph>
        Os parenteses na declaração são opcionais, tanto no while, quanto no for
      </NoteParagraph>
      <Paragraph>
      veja o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="10" answer={CBlocks.AnswerBlock10}>
        {CBlocks.CodeBlock10}
      </CodeBlock>
      <Paragraph>
      enquanto <CodeCite text="x"/> for menor que 10, exiba o valor de <CodeCite text="x"/>, e incremente <CodeCite text="x"/> por 1
      </Paragraph>
      <Paragraph>
        já o <CodeCite text="for"/> serve para repetir em um "raio", de <CodeCite text="x"/> a <CodeCite text="y"/>, veja a sintaxe de um <CodeCite text="for loop"/>:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="11">
        {CBlocks.CodeBlock11}
      </CodeBlock>
      <UList>
        <ListItem><CodeCite text="for"/>: keyword</ListItem>
        <ListItem><CodeCite text="{index}"/>: variavel usada para o loop</ListItem>
        <ListItem><CodeCite text="in"/>: operador membro, "em tal grupo"</ListItem>
        <ListItem><CodeCite text="(raio)"/>: item iteravel</ListItem>
      </UList>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="12" answer={CBlocks.AnswerBlock12}>
        {CBlocks.CodeBlock12}
      </CodeBlock>
      <Paragraph>
      para <CodeCite text="i"/> em um raio de 10 digitos, exiba <CodeCite text="i"/>
      </Paragraph>
      <Paragraph>
        essencialmente o <CodeCite text="for"/> loop é um <CodeCite text="while"/> delimitado, e ele é especialmente usado para iterar sob tipos compostos
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="13" answer={CBlocks.AnswerBlock13}>
        {CBlocks.CodeBlock13}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Performance em Loops" refLink={refsLink[7]} titleId="07" />
      <Paragraph>
      Suponhamos o seguinte, você quer exibir os numeros entre 1 e 100000000 usando um loop, mas quer fazer isso de forma eficiente, como você fará?
      </Paragraph>
      <Paragraph>
      Para demonstrar o ponto, irei temporizar o código e usar sintaxes avançadas, como funções, módulos e type-hinting.
      </Paragraph>
      <ClassChapter1Subcap2S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap2S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <Paragraph>
      Como você pode perceber o <CodeCite text="for"/> loop é consideravelmente mais rápido, isso se dá pelo fato das comparações serem executadas em C, a linguagem cujo a qual Python é baseado, enquanto no <CodeCite text="while"/> as comparações são executadas diretamente em Python, que é substancialmente mais lento que C.
      </Paragraph>
      <Paragraph>
      De todo modo, recomendo que priorize <CodeCite text="for"/> loops ao invés de <CodeCite text="while"/> loops sempre que possivel, e só ultilize <CodeCite text="while"/> quando estritamente necessário.
      </Paragraph>
    </div>
  )
}

function ClassChapter1Subcap2S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="While Loops" refLink={refsLink[8]} titleId="08" />
      <Paragraph>Usando <CodeCite text="while"/> loops:</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="14" answer={CBlocks.AnswerBlock14}>
        {CBlocks.CodeBlock14}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap2S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="For Loops" refLink={refsLink[9]} titleId="09" />
      <Paragraph>Usando <CodeCite text="for"/> loops:</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="15" answer={CBlocks.AnswerBlock15}>
        {CBlocks.CodeBlock15}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Escopo" refLink={refsLink[10]} titleId="10" />
      <Paragraph>
        Escopo é uma caracteristica de muitas linguagens de programação, ele exerce a função de separação do código em niveis, relativos entre si.
      </Paragraph>
      <Paragraph>
        Por exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="16">
        {CBlocks.CodeBlock16}
      </CodeBlock>
      <Paragraph>
      Aqui nós temos 4 escopos:
      </Paragraph>
      <OList>
        <ListItem>Global</ListItem>
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
        <ListItem>C</ListItem>
      </OList>
      <Paragraph>
      O escopo global é o escopo do arquivo, sem delimitações.
      </Paragraph>
      <Paragraph>
      Quando eu digo que eles são relativos entre si, eu quero dizer que escopos mais acima influenciam escopos abaixo, porém o oposto não ocorre.
      </Paragraph>
      <Paragraph>
      ou seja, seguindo nosso exemplo, qualquer codigo posto no escopo de A pode entrar nos escopos de B e C, mas os codigos postos em B ou C não conseguem sair para o escopo de A.
      </Paragraph>
      <Paragraph>
      Em Python nós usamos <CodeCite text=":" /> (dois-pontos) e a indentação (geralmente de 4 espaços, ou 1 tab) para limitar o escopo.
      </Paragraph>
    </div>
  )
}

function ClassChapter1Subcap4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Desestruturação (Packing & Unpacking)" refLink={refsLink[11]} titleId="11" />
      <Paragraph>
      A desestruturação em Python consiste em assimilar aos valores de um iterável a variaveis.
      </Paragraph>
      <Paragraph>
      por exemplo se voce lembra da aula sobre variaveis certamente lembrará que podemos associar multiplas variaveis a multiplos valores em uma unica linha
      </Paragraph>
      <Paragraph>
      O que eu não lhe contei naquele momento é que isto é um exemplo de <CodeCite text="unpacking" />, nós estamos associando os valores de uma tuple a variaveis correspondentes, pois se você lembra, parenteses são opcionais, então ao fazermos:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="17">
        {CBlocks.CodeBlock17}
      </CodeBlock>
      <Paragraph>
        estamos fazendo o mesmo que:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="18">
        {CBlocks.CodeBlock18}
      </CodeBlock>
      <Paragraph>
        ou até mesmo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="19">
        {CBlocks.CodeBlock19}
      </CodeBlock>
      <ClassChapter1Subcap4S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap4S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter1Subcap4S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Desestruturação em for loops" refLink={refsLink[12]} titleId="12" />
      <Paragraph>
        a desestruturação em <CodeCite text="for" /> loops consiste em uma variavel de index e uma variavel de valor
      </Paragraph>
      <Paragraph>
        para isso nós usamos a função <CodeCite text="enumerate()" />
      </Paragraph>
      <Paragraph>
      veja um exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="20" answer={CBlocks.AnswerBlock20}>
        {CBlocks.CodeBlock20}
      </CodeBlock>
      <NoteParagraph>
        a função enumerate() gera uma tuple de 2 valores para cada item do iteravel, um index e o valor propriamente dito
      </NoteParagraph>
    </div>
  )
}

function ClassChapter1Subcap4S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Iteração em dicionários" refLink={refsLink[13]} titleId="13" />
      <Paragraph>
      Nós também podemos Iterar sob dicionarios
      </Paragraph>
      <Paragraph>
      Para Iterar sob as chaves basta usar apenas o dicionário
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="21" answer={CBlocks.AnswerBlock21}>
        {CBlocks.CodeBlock21}
      </CodeBlock>
      <Paragraph>
      Para iterar sobre os valores basta usar <CodeCite text="dict.values()" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="22" answer={CBlocks.AnswerBlock22}>
        {CBlocks.CodeBlock22}
      </CodeBlock>
      <Paragraph>
      Para usar ambos, usamos <CodeCite text="dict.item()" /> e desestruturação
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="23" answer={CBlocks.AnswerBlock23}>
        {CBlocks.CodeBlock23}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="break, continue e else em for loops" refLink={refsLink[14]} titleId="14" />
      <Paragraph><CodeCite text="break" />, <CodeCite text="continue" /> e <CodeCite text="else" />, essas keywords tem como objetivo principal alterar o flow de loops</Paragraph>
      <Paragraph>o <CodeCite text="break" /> serve para interromper o loop, comumente ultilizamos ele juntamente com um <CodeCite text="if" /> statement</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="24" answer={CBlocks.AnswerBlock24}>
        {CBlocks.CodeBlock24}
      </CodeBlock>
      <Paragraph>o <CodeCite text="continue" /> já exerce o oposto, ele dá prosseguimento ao loop</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="25" answer={CBlocks.AnswerBlock25}>
        {CBlocks.CodeBlock25}
      </CodeBlock>
      <Paragraph>e o <CodeCite text="else" /> é executado ao final do loop apenas quando ele não é parado por um break</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="26" answer={CBlocks.AnswerBlock26}>
        {CBlocks.CodeBlock26}
      </CodeBlock>
      <Paragraph>você pode estar se perguntando, qual a ultilidade do <CodeCite text="else" /> então?</Paragraph>
      <Paragraph>vejamos um exemplo:</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="27" answer={CBlocks.AnswerBlock27}>
        {CBlocks.CodeBlock27}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap6(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Numeros Primos e FizzBuzz" refLink={refsLink[15]} titleId="15" />
      <Paragraph>
        Nós podemos usar <CodeCite text="for" /> loops para acharmos numeros primos
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="28" answer={CBlocks.AnswerBlock28}>
        {CBlocks.CodeBlock28}
      </CodeBlock>
      <Paragraph>
      Existe um jogo que se tornou desafio de programação, o nome é FizzBuzz
      </Paragraph>
      <Paragraph>
      ele consiste no seguinte:
      </Paragraph>
      <UList>
        <ListItem>Se um numero for divisivel por 3, diga Fizz</ListItem>
        <ListItem>Se um numero for divisivel por 5, diga Buzz</ListItem>
        <ListItem>Se um numero for divisivel por 3 e 5, diga FizzBuzz</ListItem>
      </UList>
      <Paragraph>
        podemos usar <CodeCite text="for" /> loops para isso
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="29" answer={CBlocks.AnswerBlock29}>
        {CBlocks.CodeBlock29}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap7(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Fatiamento de Listas" refLink={refsLink[16]} titleId="16" />
      <Paragraph>"Fatiar" uma lista consiste em exibir apenas uma parte dela, por exemplo:</Paragraph>
      <ClassChapter1Subcap7S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap7S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter1Subcap7S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Ordem Natural" refLink={refsLink[17]} titleId="17" />
      <Paragraph>
      Temos a lista <CodeCite text="A = [1, 5, 4, 2, 3, 7, 0, 8, 6, 9]" />, e se nós quisermos exibir apenas os numeros <CodeCite text="3, 7, 0" />?
      </Paragraph>
      <Paragraph>
      para isso basta colocarmos o <CodeCite text="A[{index inicial}:{index final+1}]" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="30" answer={CBlocks.AnswerBlock30}>
        {CBlocks.CodeBlock30}
      </CodeBlock>
      <Paragraph>
      porque <CodeCite text="{index final+1}" />? pois o valor será onde a lista acabará, e portanto, não se encontrará incluso, então para incluirmos ele, basta adicionar 1 ao index
      </Paragraph>
    </div>
  )
}

function ClassChapter1Subcap7S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Ordem Reversa" refLink={refsLink[18]} titleId="18" />
      <Paragraph>Suponhamos que você queira cortar a lista de trás a frente, para isso, basta usar os numeros negativos, exemplo:</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="31" answer={CBlocks.AnswerBlock31}>
        {CBlocks.CodeBlock31}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap8(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Compreensões (Comprehensions)" refLink={refsLink[19]} titleId="19" />
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <UList>
        <ListItem>
          <Paragraph>Listas</Paragraph>
          <UList>
            <ListItem>Base: <CodeCite text="lista_resultado = ['expr_saida' for 'var' in 'iteravel']" /></ListItem>
            <ListItem>Condicional: <CodeCite text="lista_resultado = ['expr_saida' for 'var' in 'iteravel' if (condição)]" /></ListItem>
          </UList>
        </ListItem>
        <ListItem>
          <Paragraph>Sets</Paragraph>
          <UList>
            <ListItem>Base: <CodeCite text="set_resultado = {'expr_saida' for 'var' in 'iteravel'}" /></ListItem>
            <ListItem>Condicional: <CodeCite text="set_resultado = {'expr_saida' for 'var' in 'iteravel' if (condição)}" /></ListItem>
          </UList>
        </ListItem>
        <ListItem>
          <Paragraph>Dicionários</Paragraph>
          <UList>
            <ListItem>Base: <CodeCite text="dict_resultado = {'chave':'valor' for '(chave, valor)' in 'iteravel'}" /></ListItem>
            <ListItem>Condicional: <CodeCite text="dict_resultado = {'chave':'valor' for '(chave, valor)' in 'iteravel' if ('chave' satisfaz condição)}" /></ListItem>
          </UList>
        </ListItem>
      </UList>
      <ClassChapter1Subcap8S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap8S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap8S3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter1Subcap8S4 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter1Subcap8S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Listas" refLink={refsLink[20]} titleId="20" />
      <Paragraph>
      Compreensões de listas consiste em gerar uma nova lista de forma dinamica.
      </Paragraph>
      <Paragraph>
      Por exemplo, se você quisesse gerar uma lista com numeros dobrados?
      </Paragraph>
      <Paragraph>
      poderiamos usar <CodeCite text="for" /> loops
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="32" answer={CBlocks.AnswerBlock32}>
        {CBlocks.CodeBlock32}
      </CodeBlock>
      <Paragraph>
      Porém podemos fazer o mesmo com compreensão de lista, mostrarei primeiro o exemplo e depois explicarei a sintaxe
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="33" answer={CBlocks.AnswerBlock33}>
        {CBlocks.CodeBlock33}
      </CodeBlock>
      <Paragraph>
        Basicamente a lógica esta "ao contrário", no exemplo com <CodeCite text="for" /> loops estamos dizendo o seguinte:
      </Paragraph>
      <Paragraph italic={true}>
      para cada item 'i' entre 1 e 11, multiplique por 2 e adicione a lista 'lista_dobrada'
      </Paragraph>
      <Paragraph>
      e no exemplo de compreensão de lista estamos dizendo:
      </Paragraph>
      <Paragraph italic={true}>
      multiplique 'i' por 2 e adicione a lista 'lista_dobrada' em um raio entre 1 e 11
      </Paragraph>
      <Paragraph>
      e tambem tornamos a lógica em uma unica linha, compactando ela, essa prática de tornar o codigo em uma linha se chama 'One Liner', além é claro de termos eliminado a necessidade de inicialização de uma lista vazia.
      </Paragraph>
    </div>
  )
}

function ClassChapter1Subcap8S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Listas Condicional" refLink={refsLink[21]} titleId="21" />
      <Paragraph>
      consiste no mesmo acima, porém com uma condição para a geração da lista
      </Paragraph>
      <Paragraph>
      Por exemplo, se você quisesse gerar uma lista apenas com numeros pares?
      </Paragraph>
      <Paragraph>
      poderiamos usar <CodeCite text="for" /> loops e <CodeCite text="if" />s
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="34" answer={CBlocks.AnswerBlock34}>
        {CBlocks.CodeBlock34}
      </CodeBlock>
      <Paragraph>
      Porém podemos fazer o mesmo com compreensão de lista, mostrarei primeiro o exemplo e depois explicarei a sintaxe
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="35" answer={CBlocks.AnswerBlock35}>
        {CBlocks.CodeBlock35}
      </CodeBlock>
      <Paragraph>
      Basicamente a lógica esta "ao contrário", no exemplo com <CodeCite text="for" /> loops e <CodeCite text="if" />s estamos dizendo o seguinte:
      </Paragraph>
      <Paragraph italic={true}>
      para cada item 'i' entre 1 e 11, se o resto da divisão(modulo) por 2 for igual a 0 adicione a lista 'lista_de_pares'
      </Paragraph>
      <Paragraph>
      e no exemplo de compreensão de lista estamos dizendo:
      </Paragraph>
      <Paragraph italic={true}>
      adicione 'i' para a lista 'lista_de_pares' caso o resto da divisão(modulo) por 2 for igual a 0 em um raio entre 1 e 11
      </Paragraph>
    </div>
  )
}

function ClassChapter1Subcap8S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Sets" refLink={refsLink[22]} titleId="22" />
      <Paragraph>
      Basicamente a mesma coisa que as compreensões de lista, a unica diferença é que as compreensões estão entre <CodeCite text="{}" /> e não <CodeCite text="[]" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="36" answer={CBlocks.AnswerBlock36}>
        {CBlocks.CodeBlock36}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap8S4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Dicionários" refLink={refsLink[23]} titleId="23" />
      <Paragraph>
      Extendendo a lógica podemos gerar uma compreensão de dicionários.
      </Paragraph>
      <Paragraph>
      Por exemplo, e se quisessemos gerar um dicionário de cubos impares? Com o numero impar e seu respectivo valor ao cubo.
      </Paragraph>
      <Paragraph>
      Poderiamos fazer assim
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="37" answer={CBlocks.AnswerBlock37}>
        {CBlocks.CodeBlock37}
      </CodeBlock>
      <Paragraph>
      Agora a versão One Liner:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="38" answer={CBlocks.AnswerBlock38}>
        {CBlocks.CodeBlock38}
      </CodeBlock>
    </div>
  )
}

function ClassChapter1Subcap9(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="A função zip()" refLink={refsLink[24]} titleId="24" />
      <Paragraph>
      A função <CodeCite text="zip()" /> junta elementos de multiplos iteráveis em tuples.
      </Paragraph>
      <Paragraph>
      então podemos usar ela para por exemplo, juntar duas listas em um dicionário
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="39" answer={CBlocks.AnswerBlock39}>
        {CBlocks.CodeBlock39}
      </CodeBlock>
      <Paragraph>
      A diferença entre a função <CodeCite text="zip()" /> e a função <CodeCite text="enumerate()" /> é que a função <CodeCite text="enumerate()" /> enumera um iterável, enquanto a função <CodeCite text="zip()" /> junta multiplos iteráveis
      </Paragraph>
    </div>
  )
}


function ClassChapter2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className={vars.textSizesBASE2}>
      <SubTitle chapterTitle="Funções" refLink={refsLink[25]} titleId="25" />
      <Paragraph>
      Funções são uma parte essencial da linguagem, nós viemos usando elas varias vezes até aqui, agora está na hora de aprender a definir (criar) suas próprias funções.
      </Paragraph>
      <Paragraph italic={true}>
      O que são funções?
      </Paragraph>
      <Paragraph>
      Funções são uma estrutura de código feita pra exercer uma determinada função complexa (vide o nome).
      </Paragraph>
      <Paragraph>
      A sintaxe de uma função em Python é a seguinte:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="40">
        {CBlocks.CodeBlock40}
      </CodeBlock>
      <UList>
        <ListItem><CodeCite text="def" />: é a keyword de definição de uma função em Python</ListItem>
        <ListItem><CodeCite text="{nome}" />: é o indentificador da função, usaremos ele para chama-la</ListItem>
        <ListItem><CodeCite text="()" />: os parenteses são EXTRITAMENTE necessários, pois eles exercem a função de chamada</ListItem>
        <ListItem><CodeCite text="{corpo da função}" />: aqui nós colocamos a lógica da função</ListItem>
      </UList>
      <Paragraph>
      eis aqui um exemplo de função:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="41" answer={CBlocks.AnswerBlock41}>
        {CBlocks.CodeBlock41}
      </CodeBlock>
      <ClassChapter2Subcap1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap4 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap5 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap6 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap7 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter2Subcap1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Argumentos e Parametros" refLink={refsLink[26]} titleId="26" />
      <Paragraph>
      Na função acima, nós apenas a chamamos, mas e se nós quisessemos que ela mostrasse algum nome?
      </Paragraph>
      <Paragraph>
      Bom, para isso nós usariamos argumentos e parametros, observe o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="42" answer={CBlocks.AnswerBlock42}>
        {CBlocks.CodeBlock42}
      </CodeBlock>
      <Paragraph>
      Nós definimos um argumento e passamos um parametro para esse argumento.
      </Paragraph>
      <Paragraph>
      Existe uma pequena confusão entre Argumentos e Parametros de uma função, iniciantes tendem a pensar que são a mesma coisa, mas estão enganados.
      </Paragraph>
      <Paragraph>
      Argumento é o espaço reservado na função (no nosso exemplo seria <CodeCite text="nome" />) e Parametros são os valores passados a esses argumentos (no nosso exemplo seria <CodeCite text='"Mirai"' />).
      </Paragraph>
      <Paragraph>
      nós tambem podemos colocar multiplos argumentos, basta separa-los por <CodeCite text="," /> (virgula) e colocar um numero correspondente de parametros (se nós colocamos 2 argumentos, devemos colocar 2 parametros, etc...).
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="43" answer={CBlocks.AnswerBlock43}>
        {CBlocks.CodeBlock43}
      </CodeBlock>
      <Paragraph>
        A ordem em que passamos os argumentos deve condizer com os parametros.
      </Paragraph>
      <ClassChapter2Subcap1S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap1S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap1S3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter2Subcap1S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Parametros Padrões (Valores Padrões)" refLink={refsLink[27]} titleId="27" />
      <Paragraph>
      Parametros padrões (ou valores padrões) são usados quando nenhum outro argumento é passado ao parametro.
      </Paragraph>
      <Paragraph>
      Eles são definidos ao colocar um <CodeCite text="=" /> (igual) e o valor desejado ao lado do parametro.
      </Paragraph>
      <Paragraph>
      Veja o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="44" answer={CBlocks.AnswerBlock44}>
        {CBlocks.CodeBlock44}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap1S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Argumentos Chave (Nomeados)" refLink={refsLink[28]} titleId="28" />
      <Paragraph>
      Argumentos Chave (ou nomeados) são usados ao chamar uma função, essencialmente, você especifica qual argumento irá usar qual parametro.
      </Paragraph>
      <Paragraph>
      veja o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="45" answer={CBlocks.AnswerBlock45}>
        {CBlocks.CodeBlock45}
      </CodeBlock>
      <Paragraph>
      essa forma de associação permite que não sigamos a ordem de argumentos na definição da função, e tambem nos permite "pular" parametros (esse parametros devem ter valores padrões), veja um outro exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="46" answer={CBlocks.AnswerBlock46}>
        {CBlocks.CodeBlock46}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap1S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="*args, **kwargs, * (Keyword Only Arguments) e / (Positional Only Arguments)" refLink={refsLink[29]} titleId="29" />
      <Paragraph>
      esses são parametros especiais, os <CodeCite text="*args" /> e <CodeCite text="**kwargs" /> nos permitem ter um numero indeterminado de argumentos.
      </Paragraph>
      <Paragraph>
      o <CodeCite text="*args" /> nos permite pegar indeterminados parametros passados de forma direta.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="47" answer={CBlocks.AnswerBlock47}>
        {CBlocks.CodeBlock47}
      </CodeBlock>
      <Paragraph>
      já o <CodeCite text="**kwargs" /> nos permite pegar indeterminados parametros-chave.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="48" answer={CBlocks.AnswerBlock48}>
        {CBlocks.CodeBlock48}
      </CodeBlock>
      <Paragraph>
      Nós também podemos usar os dois juntos, pois eles são independentes entre si, a unica convenção é que definimos <CodeCite text="*args" /> primeiro e depois <CodeCite text="**kwargs" />.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="49" answer={CBlocks.AnswerBlock49}>
        {CBlocks.CodeBlock49}
      </CodeBlock>
      <Paragraph>
      O <CodeCite text="/" /> (Positional Only Arguments) nos limita a ter apenas valores posicionais, isto é, aqueles que não são parametros-chave.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="50" answer={CBlocks.AnswerBlock50}>
        {CBlocks.CodeBlock50}
      </CodeBlock>
      <Paragraph>
      e nós tentarmos associar algum parametro antes do separador <CodeCite text="/" /> usando parametro-chave, teremos um erro, pois este separador especifica que todos os parametros antes dele devem ser posicionais.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="51" answer={CBlocks.AnswerBlock51}>
        {CBlocks.CodeBlock51}
      </CodeBlock>
      <Paragraph>
      O <CodeCite text="*" /> (Keyword Only Arguments) especifica que todos os argumentos após ele devem ser parametro-chave.
      </Paragraph>
      <Paragraph>
      ele não pode ser o primeiro parametro, então devemos ter um primeiro parametro obrigatório.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="52" answer={CBlocks.AnswerBlock52}>
        {CBlocks.CodeBlock52}
      </CodeBlock>
      <Paragraph>
      se tentarmos passar apenas argumentos posicionais, teremos um erro:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="53" answer={CBlocks.AnswerBlock53}>
        {CBlocks.CodeBlock53}
      </CodeBlock>
      <Paragraph>
      Se existe uma precedencia, argumentos posicionais devem sempre vir antes de argumentos parametro-chave, caso contrário resultará em um erro, por isso definimos <CodeCite text="*args" />, <CodeCite text="**kwargs" /> e não <CodeCite text="**kwargs" />, <CodeCite text="*args" />
      </Paragraph>
      <Paragraph>
      Com relação a performance, os argumentos posicionais são relativamente mais rapidos
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="54" answer={CBlocks.AnswerBlock54}>
        {CBlocks.CodeBlock54}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="DocStrings" refLink={refsLink[30]} titleId="30" />
      <Paragraph>
      Documentation Strings (Strings de Documentação), comumente abreviadas para DocStrings são strings especiais feitas para associar documentação ao codigo.
      </Paragraph>
      <Paragraph>
      ela é usada em diversos locais, desde funções, classes e até em projetos.
      </Paragraph>
      <Paragraph>
      sua declaração é simples, o local que ela é declarada é que a diferencia, para fazer uma DocString basta por uma multi-line string abaixo da declaração de funções ou classes.
      </Paragraph>
      <Paragraph>
      nós podemos acessa-la através do metodo especial <CodeCite text="__doc__" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="55" answer={CBlocks.AnswerBlock55}>
        {CBlocks.CodeBlock55}
      </CodeBlock>
      <Paragraph>
      Em projetos, se é recomendado uma DocString no topo do projeto (se for o caso, abaixo do SheBang) descrevendo o propósito daquele arquivo/programa.
      </Paragraph>
      <Paragraph>
      Eis aqui um exemplo que eu fiz quando estava aprendendo Python.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="56">
        {CBlocks.CodeBlock56}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="return" refLink={refsLink[31]} titleId="31" />
      <Paragraph>
      a keyword <CodeCite text="return" /> serve para retornar um valor de dentro da função e terminar a função.
      </Paragraph>
      <Paragraph>
      ao retornar um valor, nós podemos associa-lo a uma variavel.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="57" answer={CBlocks.AnswerBlock57}>
        {CBlocks.CodeBlock57}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Funções lambda" refLink={refsLink[32]} titleId="32" />
      <Paragraph>
      as funções lambda são funções em uma linha e também nos possibilitam fazer funções anonimas.
      </Paragraph>
      <Paragraph>
      de acordo com <a href="https://docs.python.org/3/faq/design.html#why-can-t-lambda-expressions-contain-statements">documentação do Python</a> (Tradução livre)
      </Paragraph>
      <CitationBlock>
      Ao contrário das formas de lambdas em outras linguagens, onde elas adicionam funcionalidade, as lambdas de Python são apenas uma notação simplificada se você for preguiçoso demais pra definir uma função.
      </CitationBlock>
      <Paragraph>
      sua sintaxe é:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="58">
        {CBlocks.CodeBlock58}
      </CodeBlock>
      <Paragraph>
      escreverei uma função usando def e a mesma função usando lambda para demonstrar.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="59" answer={CBlocks.AnswerBlock59}>
        {CBlocks.CodeBlock59}
      </CodeBlock>
      <Paragraph>
      Funções anonimas são funções que não tem um indentificado ou um nome, são comumente executadas em sua declaração.
      </Paragraph>
      <Paragraph>
      veja a função anterior, porém anonima
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="60" answer={CBlocks.AnswerBlock60}>
        {CBlocks.CodeBlock60}
      </CodeBlock>
      <Paragraph>
      Eu sei que os exemplos aqui são bobos, mas em situações mais complexas, elas se fazem necessárias, tendo em vista que elas podem ir além do que simples operadores aritméticos.
      </Paragraph>
    </div>
  )
}

function ClassChapter2Subcap5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Funções de Primeira Classe e Alta Ordem em Python" refLink={refsLink[33]} titleId="33" />
      <Paragraph>
      Esses conceitos são referentes a programação funcional, essencialmente ambos se referem a tratar funções como valores.
      </Paragraph>
      <ClassChapter2Subcap5S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap5S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter2Subcap5S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Funções de Primeira Classe" refLink={refsLink[34]} titleId="34" />
      <Paragraph>
      Toda função em Python é uma função de primeira classe. Isso significa que nós podemos tratar qualquer função como se fosse uma variavel, ou seja, podemos reassociar e passar como argumento.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="61" answer={CBlocks.AnswerBlock61}>
        {CBlocks.CodeBlock61}
      </CodeBlock>
      <Paragraph>
      No exemplo acima nós associamos a uma variavel e passamos como argumento para a função <CodeCite text="print()" />
      </Paragraph>
      <Paragraph>
      Nós também podemos escrever uma função que recebe um argumento e passa-lo através de outra função, veja o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="62" answer={CBlocks.AnswerBlock62}>
        {CBlocks.CodeBlock62}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap5S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Funções de Alta Ordem" refLink={refsLink[35]} titleId="35" />
      <Paragraph>
      As funções de alta ordem são bem parecidas com as de primeira classe, todavia, elas tem a especificidade de retornar uma função.
      </Paragraph>
      <Paragraph>
      veja o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="63" answer={CBlocks.AnswerBlock63}>
        {CBlocks.CodeBlock63}
      </CodeBlock>
      <Paragraph>
      nós podemos usar funções lambda para termos funções de alta ordem, veja o exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="64" answer={CBlocks.AnswerBlock64}>
        {CBlocks.CodeBlock64}
      </CodeBlock>
      <Paragraph>
      para facilitar o entendimento eu irie formatar essas duas linhas (substitiuindo valores) de uma forma a representar a logica.
      </Paragraph>
      <OList>
        <ListItem>
          <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="65">
            {CBlocks.CodeBlock65}
          </CodeBlock>
          <Paragraph>Na primeira linha declaramos uma função que pega um valor <CodeCite text="x" /> e uma função qualquer e retorna a soma de <CodeCite text="x" /> com o resultado dessa função</Paragraph>
        </ListItem>
        <ListItem>
          <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="66">
            {CBlocks.CodeBlock66}
          </CodeBlock>
          <Paragraph>quando passamos a função <CodeCite text="lambda y: y ** 2" />, basicamente estamos dizendo para ela retornar o quadrado de <CodeCite text="y" />, então ao passarmos para a <CodeCite text="func_alta_ord" />, estamos executando a função <CodeCite text="lambda y: y ** 2" /> usando a variavel <CodeCite text="x" /> como parametro e depois a somando com <CodeCite text="x" />, essa é a fase de substituição de variaveis</Paragraph>
        </ListItem>
        <ListItem>
          <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="67">
            {CBlocks.CodeBlock67}
          </CodeBlock>
          <Paragraph>Aqui simplifiquei a notação, e removi as redundancias de substituição de variaveis, deixando apenas a logica restante que é <span className="italic">"retorne <CodeCite text="x" /> + <CodeCite text="x ** 2" />"</span>.</Paragraph>
        </ListItem>
        <ListItem>
          <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="68">
            {CBlocks.CodeBlock68}
          </CodeBlock>
          <Paragraph>Aqui só substituimos o parametro passado para <CodeCite text="func_alta_ord" />, que no caso é <CodeCite text="2" />.</Paragraph>
        </ListItem>
      </OList>
    </div>
  )
}

function ClassChapter2Subcap6(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="global e nonlocal" refLink={refsLink[36]} titleId="36" />
      <Paragraph>
      Essas keywords são referentes ao escopo, a <CodeCite text="global" /> é usada quando queremos transformar uma variavel local em global, e a <CodeCite text="nonlocal" /> serve para usar variaveis de escopos superiores quando temos funções aglomeradas (nested functions)
      </Paragraph>
      <ClassChapter2Subcap6S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter2Subcap6S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter2Subcap6S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="global" refLink={refsLink[37]} titleId="37" />
      <Paragraph>
      Veja um exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="69" answer={CBlocks.AnswerBlock69}>
        {CBlocks.CodeBlock69}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap6S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="nonlocal" refLink={refsLink[38]} titleId="38" />
      <Paragraph>
      Veja um exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="70" answer={CBlocks.AnswerBlock70}>
        {CBlocks.CodeBlock70}
      </CodeBlock>
    </div>
  )
}

function ClassChapter2Subcap7(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Sombra de variaveis (Variable Shadowing)" refLink={refsLink[39]} titleId="39" />
      <Paragraph>
      Variable Shadowing ocorre quando uma variavel de um escopo interno tem o mesmo nome que uma variavel de um escopo externo, isso pode levar a erros e a comportamentos não esperados no código então deve ser evitado. O recomendado é declarar variaveis internas com outros nomes, ou melhor ainda, não usar variaveis globais.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="71" answer={CBlocks.AnswerBlock71}>
        {CBlocks.CodeBlock71}
      </CodeBlock>
      <Paragraph>
      perceba que mesmo não especificando a variavel <CodeCite text="x" /> ainda sim temos um resultado, pois a mesma usou a variavel de escopo externo
      </Paragraph>
    </div>
  )
}


function ClassChapter3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className={vars.textSizesBASE2}>
      <SubTitle chapterTitle="Operadores" refLink={refsLink[40]} titleId="40" />
      <Paragraph>
      Em Python, operadores são simbolos (ou "sintaxes") especiais que informam que uma operação deve ser feita.
      </Paragraph>
      <Paragraph>
      Nesse tópico eu irei dar uma visão mais detalhada dos operadores, já vimos alguns como os aritméticos e os lógicos (apenas as keywords), eis aqui uma lista com os grupos de operadores:
      </Paragraph>
      <UList>
        <ListItem>Aritméticos (irei mostrar o ultimo)</ListItem>
        <ListItem>Lógicos (irei mostrar o ultimo)</ListItem>
        <ListItem>Comparativos</ListItem>
        <ListItem>Bitwise</ListItem>
        <ListItem>Associativos</ListItem>
        <ListItem>Identidade</ListItem>
        <ListItem>Membros</ListItem>
      </UList>
      <ClassChapter3Subcap1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap4 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap5 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap6 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap7 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap8 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter3Subcap1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Aritméticos" refLink={refsLink[41]} titleId="41" />
      <Paragraph>
      Resta apenas vermos o multiplicador de matrizes (<CodeCite text="@" />), para esse operador devemos usar um módulo conhecido como NumPy, você verá mais sobre ele no futuro.
      </Paragraph>
      <Paragraph>
      Esse operador multiplica os indices de duas matrizes entre si.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="72" answer={CBlocks.AnswerBlock72}>
        {CBlocks.CodeBlock72}
      </CodeBlock>
      <Paragraph>
      ele é o equivalente ao seguinte codigo em Python:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="73" answer={CBlocks.AnswerBlock73}>
        {CBlocks.CodeBlock73}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Lógicos" refLink={refsLink[42]} titleId="42" />
      <Paragraph>
        Nós já vimos as funções de 3 dos 4 operadores lógicos (sim eu omiti um operador no momento pois eu ainda não havia explicado conceitos necessários para seu entendimento) eu estou falando do "Operador Ternário" (tambem chamado de operador condicional).
      </Paragraph>
      <Paragraph>
      ele é essencialmente um <CodeCite text="if" /> porém em uma linha, sua sintaxe é:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="74">
        {CBlocks.CodeBlock74}
      </CodeBlock>
      <Paragraph>
      ele é chamado de ternário pois tem 3 partes ao invés de 2 como a maioria dos outros operadores.
      </Paragraph>
      <Paragraph>
      veja um exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="75" answer={CBlocks.AnswerBlock75}>
        {CBlocks.CodeBlock75}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Comparativos" refLink={refsLink[43]} titleId="43" />
      <Paragraph>
      os comparativos são bastante usados nas estruturas de controle de flow, eles são os seguintes:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text=">" />: maior que</ListItem>
        <ListItem><CodeCite text="<" />: menor que</ListItem>
        <ListItem><CodeCite text="==" />: igualdade</ListItem>
        <ListItem><CodeCite text="!=" />: diferença</ListItem>
        <ListItem><CodeCite text=">=" />: maior ou igual a</ListItem>
        <ListItem><CodeCite text="<=" />: menor ou igual a</ListItem>
      </UList>
      <Paragraph>
      Seus nomes são auto-explicativos, então irei exemplificar apenas casos complexos.
      </Paragraph>
      <Paragraph>
      Por exemplo, podemos usar eles para definir um "raio" de ação junto com os operadores logicos.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="76" answer={CBlocks.AnswerBlock76}>
        {CBlocks.CodeBlock76}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Indentidade" refLink={refsLink[44]} titleId="44" />
      <Paragraph>
      eles são simples, eles trabalham comparando o id na memória, util quando iniciarmos multi-threading.
      </Paragraph>
      <Paragraph>
      são apenas 2:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="is" /></ListItem>
        <ListItem><CodeCite text="is not" /></ListItem>
      </UList>
      <Paragraph>
      veja a diferença entre eles e os operadores comparativos <CodeCite text="==" /> e <CodeCite text="!=" />:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="77" answer={CBlocks.AnswerBlock77}>
        {CBlocks.CodeBlock77}
      </CodeBlock>
      <Paragraph>
      A não é B, pois seu endereço na memoria é diferente, porém os seus conteudos são os mesmos então eles são iguais.
      </Paragraph>
      <Paragraph>
      para exemplificar, mostrarei o id dos objetos:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="78" answer={CBlocks.AnswerBlock78}>
        {CBlocks.CodeBlock78}
      </CodeBlock>
      <Paragraph>
      Se você observar, os endereço de A e B são diferentes, já os endereços de A e C são identicos.
      </Paragraph>
    </div>
  )
}

function ClassChapter3Subcap5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Membro" refLink={refsLink[45]} titleId="45" />
      <Paragraph>
      esses operadores são um pouco simples, eles apenas checam se <CodeCite text="x" /> está ou não presente em <CodeCite text="y" />
      </Paragraph>
      <Paragraph>
      são apenas 2:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="in" /></ListItem>
        <ListItem><CodeCite text="not in" /></ListItem>
      </UList>
      <Paragraph>
      eles funcionam em iteráveis, vejam alguns exemplos:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="79" answer={CBlocks.AnswerBlock79}>
        {CBlocks.CodeBlock79}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap6(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Bitwise" refLink={refsLink[46]} titleId="46" />
      <Paragraph>
      Esses operadores não são muito ultilizados mas suas aplicações são diversas.
      </Paragraph>
      <Paragraph>
      Você deve ter uma ideia de como computadores funcionam, certo?
      </Paragraph>
      <Paragraph>
      De forma muito simplificada, um computador funciona atráves de uma sequencia de 0 e 1 conhecida como código binário (ou codigo de maquina), esses numeros são chamados de 'bits', e são neles que esses operadores funcionam.
      </Paragraph>
      <Paragraph>
      eis aqui a lista:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="AND (&)" /></ListItem>
        <ListItem><CodeCite text="OR (|)" /></ListItem>
        <ListItem><CodeCite text="NOT (~)" /></ListItem>
        <ListItem><CodeCite text="XOR (^)" /> (exclusive or)</ListItem>
        <ListItem><CodeCite text="RightShift (>>)" /></ListItem>
        <ListItem><CodeCite text="LeftShift (<<)" /></ListItem>
      </UList>
      <Paragraph>
      antes de irmos aos exemplos eu irei explicar como binário funciona.
      </Paragraph>
      <Paragraph>
      Se você lembra das aulas de algebra na escola certamente sabe que nós usamos sistemas numéricos para performar nossos calculos, hoje em dia nós usamos a <a href="https://pt.wikipedia.org/wiki/Nota%C3%A7%C3%A3o_posicional">notação posicional</a>, onde cada algarismo depende da sua posição relativa na composição do numero e o valor do numero é a soma de cada algarismo que o compõe.
      </Paragraph>
      <Paragraph>
      Atualmente nós usamos um sistema de base 10, usamos 10 algarismos na composição de nossos numeros e ao avançarmos uma casa significa o mesmo que multiplicar por 10.
      </Paragraph>
      <Paragraph italic={true}>
      1 = 1 x 10⁰, 10 = 1 x 10¹, 100 = 1 x 10²... e por ai vai.
      </Paragraph>
      <Paragraph>
      Os computadores contudo, operam em base 2, ou seja, contém apenas dois algarismos, 0 e 1, ou seja, as casas representam potencias de 2.
      </Paragraph>
      <Paragraph italic={true}>
      1 = 1 x 2⁰, 2 = 1 x 2¹, 4 = 1 x 2²... e por ai vai.
      </Paragraph>
      <Paragraph>
      em notação binária, 1 significa que estamos usando o valor daquela 'casa' e 0 não (da mesma forma que se escrevermos 404, não estamos usando as dezenas)
      </Paragraph>
      <Paragraph>
      irei dispor de uma tabela com algumas casas e seus valores para facilitar o entendimento.
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Base 2</ThCell>
            <ThCell>2⁷</ThCell>
            <ThCell>2⁶</ThCell>
            <ThCell>2⁵</ThCell>
            <ThCell>2⁴</ThCell>
            <ThCell>2³</ThCell>
            <ThCell>2²</ThCell>
            <ThCell>2¹</ThCell>
            <ThCell>2⁰</ThCell>
            <ThCell rSpan={true}>Resultado</ThCell>
          </TableRow>
          <TableRow>
            <ThCell>Base 10</ThCell>
            <ThCell>128</ThCell>
            <ThCell>64</ThCell>
            <ThCell>32</ThCell>
            <ThCell>16</ThCell>
            <ThCell>8</ThCell>
            <ThCell>4</ThCell>
            <ThCell>2</ThCell>
            <ThCell>1</ThCell>
            <ThCell rSpan={true}></ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell rSpan={true}></TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>4</TdCell>
          </TableRow>
          <TableRow>
            <TdCell rSpan={true}></TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>40</TdCell>
          </TableRow>
          <TableRow>
            <TdCell rSpan={true}></TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>67</TdCell>
          </TableRow>
          <TableRow>
            <TdCell rSpan={true}></TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
          </TableRow>
          <TableRow>
            <TdCell rSpan={true}></TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>255</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      Os numeros binários são ordenados começando pelo <span className="font-bold">bit menos significante</span>.
      </Paragraph>
      <NoteParagraph>
        A forma de leitura se dá devido a notação, normalmente bits são escritos do menos significante até o mais significante, isso faz referencia ao valor representativo de cada bit, as notações que temos são <span className="font-bold">Big-Endian (BE)</span> e <span className="font-bold">Little-Endian (LE)</span>, o big-endian guarda o maior byte primeiro na stream (no menor endereço) enquanto no little-endian guardamos o menor byte no inicio (menor endereço), então faz mais sentido ler o big-endian da esquerda para direita e o little-endian da direita para esquerda.
      </NoteParagraph>
      <Paragraph>
      Espero que tenha ficado minimamente claro, e que agora você tenha uma noção básica de binário vamos aos operadores.
      </Paragraph>
      <ClassChapter3Subcap6S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap6S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap6S3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap6S4 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap6S5 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap6S6 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap6S7 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter3Subcap6S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="AND" refLink={refsLink[47]} titleId="47" />
      <Paragraph>O <CodeCite text="AND" /> performa a conjunção lógica, basicamente ele só retorna 1 se ambos os bits forem 1.</Paragraph>
      <img src={andGif} alt="and gif" width="80%" className="ml-auto mr-auto rounded-xl border-2 border-ctp-surface2" />
      <Table>
        <TableHead>
          <TableRow>
            <ThCell rSpan={true}>Variaveis</ThCell>
            <ThCell>2⁷</ThCell>
            <ThCell>2⁶</ThCell>
            <ThCell>2⁵</ThCell>
            <ThCell>2⁴</ThCell>
            <ThCell>2³</ThCell>
            <ThCell>2²</ThCell>
            <ThCell>2¹</ThCell>
            <ThCell>2⁰</ThCell>
            <ThCell rSpan={true}>Resultado</ThCell>
          </TableRow>
          <TableRow>
            <ThCell rSpan={true}></ThCell>
            <ThCell>128</ThCell>
            <ThCell>64</ThCell>
            <ThCell>32</ThCell>
            <ThCell>16</ThCell>
            <ThCell>8</ThCell>
            <ThCell>4</ThCell>
            <ThCell>2</ThCell>
            <ThCell>1</ThCell>
            <ThCell rSpan={true}></ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell>A</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>156</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>B</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>52</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A & B</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>20</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
        para exemplificar, veja este mesmo exemplo em Python:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="80" answer={CBlocks.AnswerBlock80}>
        {CBlocks.CodeBlock80}
      </CodeBlock>
      <NoteParagraph>
      O prefixo <span className="font-bold">0b</span>é uma conveção em representação de bases em programação, usamos <span className="font-bold">0b</span> para binário, <span className="font-bold">0x</span> para hexadecimal e <span className="font-bold">0o</span> para octal (octeto)
      </NoteParagraph>
    </div>
  )
}

function ClassChapter3Subcap6S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="OR" refLink={refsLink[48]} titleId="48" />
      <Paragraph>
      o <CodeCite text="OR" /> performa a disjunção lógica, basicamente ele retorna 1 caso um ou todos os bits sejam 1 (ou se preferir, só retorna 0 se ambos forem iguais, essencialmente o oposto do <CodeCite text="AND" />)
      </Paragraph>
      <img src={orGif} alt="or gif" width="80%" className="ml-auto mr-auto rounded-xl border-2 border-ctp-surface2" />
      <Table>
        <TableHead>
          <TableRow>
            <ThCell rSpan={true}>Variaveis</ThCell>
            <ThCell>2⁷</ThCell>
            <ThCell>2⁶</ThCell>
            <ThCell>2⁵</ThCell>
            <ThCell>2⁴</ThCell>
            <ThCell>2³</ThCell>
            <ThCell>2²</ThCell>
            <ThCell>2¹</ThCell>
            <ThCell>2⁰</ThCell>
            <ThCell rSpan={true}>Resultado</ThCell>
          </TableRow>
          <TableRow>
            <ThCell rSpan={true}></ThCell>
            <ThCell>128</ThCell>
            <ThCell>64</ThCell>
            <ThCell>32</ThCell>
            <ThCell>16</ThCell>
            <ThCell>8</ThCell>
            <ThCell>4</ThCell>
            <ThCell>2</ThCell>
            <ThCell>1</ThCell>
            <ThCell rSpan={true}></ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell>A</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>156</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>B</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>52</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A | B</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>188</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
        para exemplificar, veja este mesmo exemplo em Python:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="81" answer={CBlocks.AnswerBlock81}>
        {CBlocks.CodeBlock81}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap6S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="XOR" refLink={refsLink[49]} titleId="49" />
      <Paragraph>
      O <CodeCite text="XOR" /> performa a Disjunção Exclusiva, essencialmente, ele só retorna 1 se os bits forem opostos.
      </Paragraph>
      <img src={xorGif} alt="xor gif" width="80%" className="ml-auto mr-auto rounded-xl border-2 border-ctp-surface2" />
      <Table>
        <TableHead>
          <TableRow>
            <ThCell rSpan={true}>Variaveis</ThCell>
            <ThCell>2⁷</ThCell>
            <ThCell>2⁶</ThCell>
            <ThCell>2⁵</ThCell>
            <ThCell>2⁴</ThCell>
            <ThCell>2³</ThCell>
            <ThCell>2²</ThCell>
            <ThCell>2¹</ThCell>
            <ThCell>2⁰</ThCell>
            <ThCell rSpan={true}>Resultado</ThCell>
          </TableRow>
          <TableRow>
            <ThCell rSpan={true}></ThCell>
            <ThCell>128</ThCell>
            <ThCell>64</ThCell>
            <ThCell>32</ThCell>
            <ThCell>16</ThCell>
            <ThCell>8</ThCell>
            <ThCell>4</ThCell>
            <ThCell>2</ThCell>
            <ThCell>1</ThCell>
            <ThCell rSpan={true}></ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell>A</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>156</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>B</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>52</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A ^ B</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>168</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
        para exemplificar, veja este mesmo exemplo em Python:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="82" answer={CBlocks.AnswerBlock82}>
        {CBlocks.CodeBlock82}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap6S4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="NOT" refLink={refsLink[50]} titleId="50" />
      <Paragraph>
      O <CodeCite text="NOT" /> performa a Negação Lógica, basiamente, ele inverte os bits, ele recebe só um argumento, tornando ele o unico operador unário.
      </Paragraph>
      <img src={notGif} alt="not gif" width="80%" className="ml-auto mr-auto rounded-xl border-2 border-ctp-surface2" />
      <Table>
        <TableHead>
          <TableRow>
            <ThCell rSpan={true}>Variaveis</ThCell>
            <ThCell>2⁷</ThCell>
            <ThCell>2⁶</ThCell>
            <ThCell>2⁵</ThCell>
            <ThCell>2⁴</ThCell>
            <ThCell>2³</ThCell>
            <ThCell>2²</ThCell>
            <ThCell>2¹</ThCell>
            <ThCell>2⁰</ThCell>
            <ThCell rSpan={true}>Resultado</ThCell>
          </TableRow>
          <TableRow>
            <ThCell rSpan={true}></ThCell>
            <ThCell>128</ThCell>
            <ThCell>64</ThCell>
            <ThCell>32</ThCell>
            <ThCell>16</ThCell>
            <ThCell>8</ThCell>
            <ThCell>4</ThCell>
            <ThCell>2</ThCell>
            <ThCell>1</ThCell>
            <ThCell rSpan={true}></ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell>A</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>156</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>~A</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>99</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      Esses exemplos levam em conta que você está trabalhando com numeros sem bit de sinal, infelizmente o Python não suporta eles de forma nativa, ou seja, ~156 é o equivalente a -157 e não a 99 pois o ultimo (o mais a esquerda) bit é o bit de sinal.
      </Paragraph>
      <Paragraph>
      se quisermos ter 99 como resultado, devemos usar o <CodeCite text="AND" /> junto com o valor maximo das casas para remover esse bit.
      </Paragraph>
      <Paragraph>
      para exemplificar, veja este mesmo exemplo em Python:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="83" answer={CBlocks.AnswerBlock83}>
        {CBlocks.CodeBlock83}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap6S5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="LeftShift" refLink={refsLink[51]} titleId="51" />
      <Paragraph>o operador de <CodeCite text="LeftShift" /> move/desvia os bits para a esquerda preenchendo o espaço restante com 0.</Paragraph>
      <Paragraph>você especifica o numero de casas para desviar a esquerda do operador, e desviar por N casas é o mesmo que multiplicar por uma potencia de 2 equivalente ao numero de casas movidas.</Paragraph>
      <img src={leftShiftGif} alt="left-shift gif" width="80%" className="ml-auto mr-auto rounded-xl border-2 border-ctp-surface2" />
      <Table>
        <TableHead>
          <TableRow>
            <ThCell rSpan={true}>Variaveis</ThCell>
            <ThCell>2⁷</ThCell>
            <ThCell>2⁶</ThCell>
            <ThCell>2⁵</ThCell>
            <ThCell>2⁴</ThCell>
            <ThCell>2³</ThCell>
            <ThCell>2²</ThCell>
            <ThCell>2¹</ThCell>
            <ThCell>2⁰</ThCell>
            <ThCell rSpan={true}>Resultado</ThCell>
          </TableRow>
          <TableRow>
            <ThCell rSpan={true}></ThCell>
            <ThCell>128</ThCell>
            <ThCell>64</ThCell>
            <ThCell>32</ThCell>
            <ThCell>16</ThCell>
            <ThCell>8</ThCell>
            <ThCell>4</ThCell>
            <ThCell>2</ThCell>
            <ThCell>1</ThCell>
            <ThCell rSpan={true}></ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell>A</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>39</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A &lt;&lt; 1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>78</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A &lt;&lt; 2</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>156</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      para exemplificar, veja este mesmo exemplo em Python:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="84" answer={CBlocks.AnswerBlock84}>
        {CBlocks.CodeBlock84}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap6S6(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="RightShift" refLink={refsLink[52]} titleId="52" />
      <Paragraph>
        o operador de <CodeCite text="RightShift" /> move/desvia os bits para a direita preenchendo o espaço restante com 0.
      </Paragraph>
      <Paragraph>
        você especifica o numero de casas para desviar a esquerda do operador, e desviar por 1 casa é o equivalente a dividir por uma potencia de 2 equivalente ao numero de casas movidas.
      </Paragraph>
      <img src={rightShiftGif} alt="right-shift gif" width="80%" className="ml-auto mr-auto rounded-xl border-2 border-ctp-surface2" />
      <Table>
        <TableHead>
          <TableRow>
            <ThCell rSpan={true}>Variaveis</ThCell>
            <ThCell>2⁷</ThCell>
            <ThCell>2⁶</ThCell>
            <ThCell>2⁵</ThCell>
            <ThCell>2⁴</ThCell>
            <ThCell>2³</ThCell>
            <ThCell>2²</ThCell>
            <ThCell>2¹</ThCell>
            <ThCell>2⁰</ThCell>
            <ThCell rSpan={true}>Resultado</ThCell>
          </TableRow>
          <TableRow>
            <ThCell rSpan={true}></ThCell>
            <ThCell>128</ThCell>
            <ThCell>64</ThCell>
            <ThCell>32</ThCell>
            <ThCell>16</ThCell>
            <ThCell>8</ThCell>
            <ThCell>4</ThCell>
            <ThCell>2</ThCell>
            <ThCell>1</ThCell>
            <ThCell rSpan={true}></ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell>A</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>156</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A &gt;&gt; 1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>78</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A &gt;&gt; 2</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>39</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>A &gt;&gt; 3</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>0</TdCell>
            <TdCell>0</TdCell>
            <TdCell>1</TdCell>
            <TdCell>1</TdCell>
            <TdCell>19</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      para exemplificar, veja este mesmo exemplo em Python:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="85" answer={CBlocks.AnswerBlock85}>
        {CBlocks.CodeBlock85}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap6S7(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Bitwise Masking" refLink={refsLink[53]} titleId="53" />
      <Paragraph>
      Masking consiste em mascarar os bits, para fazer operações especificas nesses bits, um exemplo seriam os Shifts Limitados a uma janela de bits.
      </Paragraph>
      <div className="flex flex-row justify-between ml-auto mr-auto">
        <img src={bitMaskLShiftGif} alt="bitmasked-left-shift gif" width="80%" className="rounded-xl border-2 border-ctp-surface2 mr-2" />
        <img src={bitMaskRShiftGif} alt="bitmasked-right-shift gif" width="80%" className="rounded-xl border-2 border-ctp-surface2 ml-2" />
      </div>
      <Paragraph>
      você usa o <CodeCite text="AND" /> com o comprimento em bits da janela
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="86" answer={CBlocks.AnswerBlock86}>
        {CBlocks.CodeBlock86}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap7(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Associativos" refLink={refsLink[54]} titleId="54" />
      <Paragraph>
      Os associativos são bem simples, eles funcionam como abreviação dos outros operadores, eles servem para performar uma ação e reassocia a mesma variavel, pois sua ordem de operação é da direita pra esquerda.
      </Paragraph>
      <Paragraph>
      eles são os seguntes:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="=" />: Igual</ListItem>
        <ListItem><CodeCite text="+=" />: Mais-Igual (Incrementador)</ListItem>
        <ListItem><CodeCite text="-=" />: Menos-Igual (Decrementador)</ListItem>
        <ListItem><CodeCite text="*=" />: Multiplicação-Igual</ListItem>
        <ListItem><CodeCite text="/=" />: Divisão-Igual</ListItem>
        <ListItem><CodeCite text="%=" />: Módulo-Igual</ListItem>
        <ListItem><CodeCite text="**=" />: Potência-Igual</ListItem>
        <ListItem><CodeCite text="//=" />: TrueDiv-Igual</ListItem>
        <ListItem><CodeCite text="&=" />: AND-Igual (Bitwise)</ListItem>
        <ListItem><CodeCite text="|=" />: OR-Igual (Bitwise)</ListItem>
        <ListItem><CodeCite text="^=" />: XOR-Igual (Bitwise)</ListItem>
        <ListItem><CodeCite text=">>=" />: RightShift-Igual (Bitwise)</ListItem>
        <ListItem><CodeCite text="<<=" />: LeftShift-Igual (Bitwise)</ListItem>
        <ListItem><CodeCite text=":=" />: Associação de expressão (Walrus Operator)</ListItem>
      </UList>
      <Paragraph>
      eu vou explicar apenas 3 operadores, entendendo eles você entende o resto.
      </Paragraph>
      <ClassChapter3Subcap7S1 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap7S2 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
      <ClassChapter3Subcap7S3 refLinksList={refsLink} darkLightSwitch={props.darkLightSwitch} />
    </div>
  )
}

function ClassChapter3Subcap7S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Igual" refLink={refsLink[55]} titleId="55" />
      <Paragraph>
      O igual <CodeCite text="=" />, é o operador associativo em si, é ele quem diz o que é o que.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="87" answer={CBlocks.AnswerBlock87}>
        {CBlocks.CodeBlock87}
      </CodeBlock>
    </div>
  )
}

function ClassChapter3Subcap7S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Mais-Igual" refLink={refsLink[56]} titleId="56" />
      <Paragraph>
      A lógica usada aqui se aplica aos demais (menos ao Walrus Operator).
      </Paragraph>
      <Paragraph>
      asicamente o operador Mais-Igual <CodeCite text="+=" /> é a versão reduzida/equivalente a <CodeCite text="x = x + y" />, você adiciona o valor de forma reassociativa, veja um exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="88" answer={CBlocks.AnswerBlock88}>
        {CBlocks.CodeBlock88}
      </CodeBlock>
      <Paragraph>
      essencialmente, pegamos o valor inicial de <CodeCite text="x" /> somamos 33 e reassociamos o resultado a variavel novamente, exemplificando em etapas:
      </Paragraph>
      <OList>
        <ListItem><CodeCite text="x = 9" /></ListItem>
        <ListItem><CodeCite text="x = x + 33" /></ListItem>
        <ListItem><CodeCite text="x = 9 + 33" /></ListItem>
        <ListItem><CodeCite text="x = 42" /></ListItem>
      </OList>
    </div>
  )
}

function ClassChapter3Subcap7S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Associação de expressão (Walrus Operator)" refLink={refsLink[57]} titleId="57" />
      <Paragraph>
      O operador de associação de expressão <CodeCite text=":=" /> (Walrus Operator) foi introduzindo no Python 3.8, seu uso é bastante peculiar.
      </Paragraph>
      <Paragraph>
      ele permite executarmos e associarmos expressões em uma mesma linha.
      </Paragraph>
      <Paragraph>
      por exemplo, veja o seguinte codigo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="89" answer={CBlocks.AnswerBlock89}>
        {CBlocks.CodeBlock89}
      </CodeBlock>
      <Paragraph>
      ao executarmos o codigo recebemos o numero 6, pois, expressões são codigos que retornam um valor, associações não. Contudo, podemos associar o valor resultante de uma expressão a uma variavel.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="90">
        {CBlocks.CodeBlock90}
      </CodeBlock>
      <Paragraph>
      para vermos o valor, precisamos acessa-lo através de funções como a <CodeCite text="print()" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="91" answer={CBlocks.AnswerBlock91}>
        {CBlocks.CodeBlock91}
      </CodeBlock>
      <Paragraph>
      se nós tentarmos acessar o valor e executar a expressão ao mesmo erro teremos um erro.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="92" answer={CBlocks.AnswerBlock92}>
        {CBlocks.CodeBlock92}
      </CodeBlock>
      <Paragraph>
      O Walrus Operator nos permite fazer isso.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="93" answer={CBlocks.AnswerBlock93}>
        {CBlocks.CodeBlock93}
      </CodeBlock>
      <Paragraph>
      Ele nos permite acessar o valor enquanto ele esta sendo associado, e mais a frente podemos acessar a variavel contendo o valor.
      </Paragraph>
    </div>
  )
}

function ClassChapter3Subcap8(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Precedencia de Operadores Geral" refLink={refsLink[58]} titleId="58" />
      <Paragraph>
      O Python segue uma precedencia de operadores especifica, eis aqui a lista:
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Precedencia</ThCell>
            <ThCell>Operador</ThCell>
            <ThCell>Descrição</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TdCell>1</TdCell>
            <TdCell>(), [] ou {}</TdCell>
            <TdCell>Parenteses, Exibição de listas, dicionários e conjuntos</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>2</TdCell>
            <TdCell>x[index], x[index:index] x(arguments...), x.attribute</TdCell>
            <TdCell>atributos, fatiamentos e chamada de funções</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>3</TdCell>
            <TdCell>await</TdCell>
            <TdCell>espera asycrona</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>4</TdCell>
            <TdCell>**</TdCell>
            <TdCell>exponenciação</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>5</TdCell>
            <TdCell>+, -, ~</TdCell>
            <TdCell>Positivo, negativo e bitwise NOT</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>6</TdCell>
            <TdCell>*, @, /, //, %</TdCell>
            <TdCell>Multiplicação, multiplicação de matrizes, divisão, "divisão verdadeira", modulo</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>7</TdCell>
            <TdCell>+, -</TdCell>
            <TdCell>Soma e subtração</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>8</TdCell>
            <TdCell>&lt;&lt;, &gt;&gt;</TdCell>
            <TdCell>Bitwise Shifts</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>9</TdCell>
            <TdCell>&</TdCell>
            <TdCell>Bitwise AND</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>10</TdCell>
            <TdCell>^</TdCell>
            <TdCell>Bitwise XOR</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>11</TdCell>
            <TdCell>|</TdCell>
            <TdCell>Bitwise OR</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>12</TdCell>
            <TdCell>in, not in, is, is not, &lt;, &lt;=,&gt;, &gt;=, !=, ==</TdCell> {/*&lt;, &le;,&gt;, &ge; */}
            <TdCell>Comparadores</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>13</TdCell>
            <TdCell>not x</TdCell>
            <TdCell>NOT Booleano</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>14</TdCell>
            <TdCell>and</TdCell>
            <TdCell>AND Booleano</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>15</TdCell>
            <TdCell>or</TdCell>
            <TdCell>OR Booleano</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>16</TdCell>
            <TdCell>if - else</TdCell>
            <TdCell>Expressão Condicional</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>17</TdCell>
            <TdCell>lambda</TdCell>
            <TdCell>Funções/Expressões Lambda</TdCell>
          </TableRow>
          <TableRow>
            <TdCell>18</TdCell>
            <TdCell>:=</TdCell>
            <TdCell>Expressão de associação (Walrus Operator)</TdCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


function ToCContent(props: ToCContentProps) {
  let refsFuncList;
  if (props.refsLinkList != undefined) {
    refsFuncList = props.refsLinkList as any;
  } else {
    refsFuncList = []
  }

  return (
    <div>
      <ToCLink ToCID=""         linkHashID="00" linkRefFunc={refsFuncList[0]}   title="Fundamentos Python II" level={0}/>
      <ToCLink ToCID="1."       linkHashID="01" linkRefFunc={refsFuncList[1]}   title="Tipos de Controle de Flow" level={1}/>
      <ToCLink ToCID="1.1."     linkHashID="02" linkRefFunc={refsFuncList[2]}   title="Controle de Fluxo (Control Flow) e Escopo" level={2}/>
      <ToCLink ToCID="1.1.1."   linkHashID="03" linkRefFunc={refsFuncList[3]}   title="Sequencial" level={3}/>
      <ToCLink ToCID="1.1.2."   linkHashID="04" linkRefFunc={refsFuncList[4]}   title="Decisivo" level={3}/>
      <ToCLink ToCID="1.1.2.1." linkHashID="05" linkRefFunc={refsFuncList[5]}   title="Match-Case" level={4}/>
      <ToCLink ToCID="1.1.3."   linkHashID="06" linkRefFunc={refsFuncList[6]}   title="Repetitivo (Recursivo)" level={3}/>
      <ToCLink ToCID="1.2."     linkHashID="07" linkRefFunc={refsFuncList[7]}   title="Performance em Loops" level={2}/>
      <ToCLink ToCID="1.2.1."   linkHashID="08" linkRefFunc={refsFuncList[8]}   title="While Loops" level={3}/>
      <ToCLink ToCID="1.2.2."   linkHashID="09" linkRefFunc={refsFuncList[9]}   title="For Loops" level={3}/>
      <ToCLink ToCID="1.3."     linkHashID="10" linkRefFunc={refsFuncList[10]}  title="Escopo" level={2}/>
      <ToCLink ToCID="1.4."     linkHashID="11" linkRefFunc={refsFuncList[11]}  title="Desestruturação (Packing & Unpacking)" level={2}/>
      <ToCLink ToCID="1.4.1."   linkHashID="12" linkRefFunc={refsFuncList[12]}  title="Desestruturação em for loops" level={3}/>
      <ToCLink ToCID="1.4.2."   linkHashID="13" linkRefFunc={refsFuncList[13]}  title="Iteração em dicionários" level={3}/>
      <ToCLink ToCID="1.5."     linkHashID="14" linkRefFunc={refsFuncList[14]}  title="break, continue e else em for loops" level={2}/>
      <ToCLink ToCID="1.6."     linkHashID="15" linkRefFunc={refsFuncList[15]}  title="Numeros Primos e FizzBuzz" level={2}/>
      <ToCLink ToCID="1.7."     linkHashID="16" linkRefFunc={refsFuncList[16]}  title="Fatiamento de Listas" level={2}/>
      <ToCLink ToCID="1.7.1."   linkHashID="17" linkRefFunc={refsFuncList[17]}  title="Ordem Natural" level={3}/>
      <ToCLink ToCID="1.7.2."   linkHashID="18" linkRefFunc={refsFuncList[18]}  title="Ordem Reversa" level={3}/>
      <ToCLink ToCID="1.8."     linkHashID="19" linkRefFunc={refsFuncList[19]}  title="Compreensões (Comprehensions)" level={2}/>
      <ToCLink ToCID="1.8.1."   linkHashID="20" linkRefFunc={refsFuncList[20]}  title="Listas" level={3}/>
      <ToCLink ToCID="1.8.2."   linkHashID="21" linkRefFunc={refsFuncList[21]}  title="Listas Condicional" level={3}/>
      <ToCLink ToCID="1.8.3."   linkHashID="22" linkRefFunc={refsFuncList[22]}  title="Sets" level={3}/>
      <ToCLink ToCID="1.8.4."   linkHashID="23" linkRefFunc={refsFuncList[23]}  title="Dicionários" level={3}/>
      <ToCLink ToCID="1.9."     linkHashID="24" linkRefFunc={refsFuncList[24]}  title="A função zip()" level={2}/>
      <ToCLink ToCID="2."       linkHashID="25" linkRefFunc={refsFuncList[25]}  title="Funções" level={1}/>
      <ToCLink ToCID="2.1."     linkHashID="26" linkRefFunc={refsFuncList[26]}  title="Argumentos e Parametros" level={2}/>
      <ToCLink ToCID="2.1.1."   linkHashID="27" linkRefFunc={refsFuncList[27]}  title="Parametros Padrões (Valores Padrões)" level={3}/>
      <ToCLink ToCID="2.1.2."   linkHashID="28" linkRefFunc={refsFuncList[28]}  title="Argumentos Chave (Nomeados)" level={3}/>
      <ToCLink ToCID="2.1.3."   linkHashID="29" linkRefFunc={refsFuncList[29]}  title="*args, **kwargs, * (Keyword Only Arguments) e / (Positional Only Arguments)" level={3}/>
      <ToCLink ToCID="2.2."     linkHashID="30" linkRefFunc={refsFuncList[30]}  title="DocStrings" level={2}/>
      <ToCLink ToCID="2.3."     linkHashID="31" linkRefFunc={refsFuncList[31]}  title="return" level={2}/>
      <ToCLink ToCID="2.4."     linkHashID="32" linkRefFunc={refsFuncList[32]}  title="Funções lambda" level={2}/>
      <ToCLink ToCID="2.5."     linkHashID="33" linkRefFunc={refsFuncList[33]}  title="Funções de Primeira Classe e Alta Ordem em Python" level={2}/>
      <ToCLink ToCID="2.5.1."   linkHashID="34" linkRefFunc={refsFuncList[34]}  title="Funções de Primeira Classe" level={3}/>
      <ToCLink ToCID="2.5.2."   linkHashID="35" linkRefFunc={refsFuncList[35]}  title="Funções de Alta Ordem" level={3}/>
      <ToCLink ToCID="2.6."     linkHashID="36" linkRefFunc={refsFuncList[36]}  title="global e nonlocal" level={2}/>
      <ToCLink ToCID="2.6.2."   linkHashID="37" linkRefFunc={refsFuncList[37]}  title="global" level={3}/>
      <ToCLink ToCID="2.6.1."   linkHashID="38" linkRefFunc={refsFuncList[38]}  title="nonlocal" level={3}/>
      <ToCLink ToCID="2.7."     linkHashID="39" linkRefFunc={refsFuncList[39]}  title="Sombra de variaveis (Variable Shadowing)" level={2}/>
      <ToCLink ToCID="3."       linkHashID="40" linkRefFunc={refsFuncList[40]}  title="Operadores" level={1}/>
      <ToCLink ToCID="3.1."     linkHashID="41" linkRefFunc={refsFuncList[41]}  title="Aritméticos" level={2}/>
      <ToCLink ToCID="3.2."     linkHashID="42" linkRefFunc={refsFuncList[42]}  title="Lógicos" level={2}/>
      <ToCLink ToCID="3.3."     linkHashID="43" linkRefFunc={refsFuncList[43]}  title="Comparativos" level={2}/>
      <ToCLink ToCID="3.4."     linkHashID="44" linkRefFunc={refsFuncList[44]}  title="Indentidade" level={2}/>
      <ToCLink ToCID="3.5."     linkHashID="45" linkRefFunc={refsFuncList[45]}  title="Membro" level={2}/>
      <ToCLink ToCID="3.6."     linkHashID="46" linkRefFunc={refsFuncList[46]}  title="Bitwise" level={2}/>
      <ToCLink ToCID="3.6.1."   linkHashID="47" linkRefFunc={refsFuncList[47]}  title="AND" level={3}/>
      <ToCLink ToCID="3.6.2."   linkHashID="48" linkRefFunc={refsFuncList[48]}  title="OR" level={3}/>
      <ToCLink ToCID="3.6.3."   linkHashID="49" linkRefFunc={refsFuncList[49]}  title="XOR" level={3}/>
      <ToCLink ToCID="3.6.4."   linkHashID="50" linkRefFunc={refsFuncList[50]}  title="NOT" level={3}/>
      <ToCLink ToCID="3.6.5."   linkHashID="51" linkRefFunc={refsFuncList[51]}  title="LeftShift" level={3}/>
      <ToCLink ToCID="3.6.6."   linkHashID="52" linkRefFunc={refsFuncList[52]}  title="RightShift" level={3}/>
      <ToCLink ToCID="3.6.7."   linkHashID="53" linkRefFunc={refsFuncList[53]}  title="Bitwise Masking" level={3}/>
      <ToCLink ToCID="3.7."     linkHashID="54" linkRefFunc={refsFuncList[54]}  title="Associativos" level={2}/>
      <ToCLink ToCID="3.7.1."   linkHashID="55" linkRefFunc={refsFuncList[55]}  title="Igual" level={3}/>
      <ToCLink ToCID="3.7.2."   linkHashID="56" linkRefFunc={refsFuncList[56]}  title="Mais-Igual" level={3}/>
      <ToCLink ToCID="3.7.3."   linkHashID="57" linkRefFunc={refsFuncList[57]}  title="Associação de expressão (Walrus Operator)" level={3}/>
      <ToCLink ToCID="3.8."     linkHashID="58" linkRefFunc={refsFuncList[58]}  title="Precedencia de Operadores Geral" level={2}/>
    </div>
  )
}

function TableOfContent() {
  return (
    <ToCWrapper>
      <h1 className={vars.textSizesLG2 + "text-center"}>Tabela de Conteudos</h1>
      <ToCContent />
    </ToCWrapper>
  )
}


function CapsSumPhone(props: CapsSumPhoneProps) {
  const refsFuncList = props.refsFuncList as any
  return (
    <div className={vars.textSizes2XL2 + 'font-leagueGothic'}>
      <ToCContent refsLinkList={refsFuncList}/>
    </div>
  )
}

function CapSumm(props: CapSummProps) {
  return (
    <CapsSumWrapper>
      <CapsLinkPhone currCap={props.currCap} markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction}/>
    </CapsSumWrapper>
  )
}

function CapsLinkPhone(props: CapSummProps) {
  return (
    <div>
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={false} currentCap={props.currCap == 1}
      title="Cap 01" link="/classes/pyless/1" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={false} currentCap={props.currCap == 2}
      title="Cap 02" link="/classes/pyless/2" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={false} currentCap={props.currCap == 3}
      title="Cap 03" link="/classes/pyless/3" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={false} currentCap={props.currCap == 4}
      title="Cap 04" link="/classes/pyless/4" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={false} currentCap={props.currCap == 5}
      title="Cap 05" link="/classes/pyless/5" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 6}
      title="Cap 06" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 7}
      title="Cap 07" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 8}
      title="Cap 08" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 9}
      title="Cap 09" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 10}
      title="Cap 10" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 11}
      title="Cap 11" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 12}
      title="Cap 12" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 13}
      title="Cap 13" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 14}
      title="Cap 14" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 15}
      title="Cap 15" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 16}
      title="Cap 16" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 17}
      title="Cap 17" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 18}
      title="Cap 18" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 19}
      title="Cap 19" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 20}
      title="Cap 20" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 21}
      title="Cap 21" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 22}
      title="Cap 22" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 23}
      title="Cap 23" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 24}
      title="Cap 24" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 25}
      title="Cap 25" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 26}
      title="Cap 26" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 27}
      title="Cap 27" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 28}
      title="Cap 28" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 29}
      title="Cap 29" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 30}
      title="Cap 30" link="" />
      <CapLink
      markAsCompletedFunction={props.markAsCompletedFunction}
      updateStateFunction={props.updateStateFunction}
      blocked={true}  currentCap={props.currCap == 31}
      title="Cap 31" link="" />
    </div>
  )
}
function ClassContent(props: ClassContentProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className="font-antonio">
      <div className="mt-4 md:mt-0">
      <BackNextChapters nextChapLink="/classes/pyless/4" prevChapLink="/classes/pyless/2" markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction} />
      </div>
      <MainTitle chapterTitle={props.chapterTitle} titleId="00" refLink={refsLink[0]} />
      <ClassChapter1 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <ClassChapter2 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <ClassChapter3 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <BackNextChapters nextChapLink="/classes/pyless/4" prevChapLink="/classes/pyless/2" markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction}/>
    </div>
  )
}


function PageContent(props: PageContentProps) {
  return (
    <div className={(props.state ? "blur-sm" : '') + vars.pageContentBaseStyle}>
      <div className="px-8 relative hidden md:flex flex-row">
        <div className={vars.ToCWrapperPad}>
          <TableOfContent/>
        </div>
        <div className="w-0 grow px-6 text-justify">
          <ClassContent chapterTitle={props.capTitle} refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch} markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction} />
        </div>
        <div className={vars.CapsWrapperPad}>
          <CapSumm currCap={props.cCap} markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction}/>
        </div>
      </div>

      <div className='block md:hidden min-h-screen px-2'>
        <ClassContent chapterTitle={props.capTitle} refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch} markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction} />
      </div>

    </div>
  )

}

export function PyLess3(props: ClassesIndexStateProps) {
  const [ls, rfs] = refLinks(props.funcState)
  let cCap = 3

  function markThisComplete() {
    handleClassProg('PylessClasses', (cCap - 1), props.classProgressArray, props.setClassArrs)
    handleClassProg('PylessClasses', cCap, props.classProgressArray, props.setClassArrs)
  }
  function updateState() {
    handleClassProg('PylessClasses', null, props.classProgressArray, props.setClassArrs)
  }

  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Fund. II" sums={<CapsSumPhone refsFuncList={rfs}/>} caps={<CapsLinkPhone currCap={cCap}/>} themeFunc={props.themeFunc} themeState={props.darkLightSwitch} classCompState={updateState}/>
      <PageContent state={props.state} refLinksList={ls} darkLightSwitch={props.darkLightSwitch} markAsCompletedFunction={markThisComplete} updateStateFunction={updateState} cCap={cCap} capTitle="Fundamentos do Python II"/>
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} darkLightSwitch={props.darkLightSwitch} />
      </FooterWrapper>
    </div>
  )
}
