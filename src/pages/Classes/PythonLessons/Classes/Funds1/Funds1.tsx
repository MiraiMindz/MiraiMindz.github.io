import { Footer } from "../../../../../components/Footer/Footer"
import { Header } from "../../../../../components/Header/Header"
import { FooterWrapper } from "../../../../../components/Wrappers/FlowWrappers"
import { CapsSumWrapper, CapLink, BackNextChapters, genRefs, ToCLink, ToCWrapper } from "../../../../../utils/ComponentElements/ComponentElements"
import { handleClassProg } from "../../../../../utils/handleClassProgress/handleClassProgress"
import { CapsSumPhoneProps, CapSummProps, ClassChapterProps, ClassContentProps, ClassesIndexStateProps, PageContentProps, ToCContentProps } from "../../../../../utils/interfaces"
import { CodeBlock, CodeCite, ListItem, MainTitle, OList, Paragraph, SubTitle, Table, TableBody, TableHead, TableRow, TdCell, ThCell, UList } from "../../../../../utils/TextElements/TextElements"
import * as vars from '../../../../../utils/variables'
import * as CBlocks from './CodeBlocks'

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

  const linksList = [link00, link01, link02, link03, link04, link05, link06, link07, link08, link09, link10, link11, link12, link13, link14, link15, link16, link17, link18, link19, link20, link21, link22, link23, link24, link25, link26, link27, link28, link29, link30, link31, link32, link33, link34, link35, link36, link37, link38, link39, link40, link41, link42, link43, link44, link45, link46, link47, link48 ]

  const refsList =  [ref00, ref01, ref02, ref03, ref04, ref05, ref06, ref07, ref08, ref09, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref37, ref38, ref39, ref40, ref41, ref42, ref43, ref44, ref45, ref46, ref47, ref48];

  return [linksList, refsList]
}

function ClassChap1Subcap1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Variaveis" refLink={refsLink[2]} titleId="02" />
      <div>
        <Paragraph>
          A declara????o de variaveis em Python ?? bem simples, basta associar o nome da variavel ao valor desejado, seguindo este modelo:
        </Paragraph>
        <CodeBlock darkLightSwitch={props.darkLightSwitch} language='plaintext' CodeBlockID="00">
          {CBlocks.CodeBlock01}
        </CodeBlock>
        <Paragraph>
        o nome de uma variavel n??o deve conter espa??os, virgulas ou pontos
        </Paragraph>
        <Paragraph>
        veja alguns exemplos no bloco de codigo a seguir:
        </Paragraph>
        <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="01">
          {CBlocks.CodeBlock02}
        </CodeBlock>
        <Paragraph>
        Tamb??m se ?? possivel associar varios valores a varias variaveis em uma mesma linha, assim como tambem se ?? possivel associar variaveis a outras variaveis
        </Paragraph>
        <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="02">
          {CBlocks.CodeBlock03}
        </CodeBlock>
      </div>
      <SubTitle chapterTitle="Constantes" refLink={refsLink[3]} titleId="03" />
      <Paragraph>
      Em programa????o, constantes s??o variaveis que n??o devem ser alteradas durante o programa, vide o nome, elas s??o CONSTANTES
      </Paragraph>
      <Paragraph>
      uma constante em Python ?? bem parecida com uma variavel em sua declara????o, a unica diferen??a ?? que uma constante ser?? sempre toda em MAIUSCULO
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="03">
          {CBlocks.CodeBlock04}
        </CodeBlock>
    </div>
  )
}

function ClassChap1Subcap2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Coment??rios" refLink={refsLink[4]} titleId="04" />
      <Paragraph>
      Os coment??rios s??o uma funcionalidade das linguagens de programa????o, eles s??o linhas que ser??o ignoradas na execu????o do c??digo
      </Paragraph>
      <Paragraph>
      em Python, os coment??rios come??am com `#`, ap??s isso, tudo ser?? ignorado
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="04">
      {CBlocks.CodeBlock05}
      </CodeBlock>
      <Paragraph>
      Uma das ultilidades dos coment??rios ??, al??m de comentar e adicionar informa????es ao codigo, a de "salvar" um codigo, frequentemente voc?? ir?? se deparar com a seguinte situa????o:
      </Paragraph>
      <Paragraph italic={true}>
      "Preciso que este peda??o de codigo n??o execute, mas n??o posso apaga-lo pois certamente irei perde-lo, o que devo fazer?"
      </Paragraph>
      <Paragraph>
      A resposta ?? simples, comente o codigo, isso mesmo, adicione `#` no inicio das linhas, assim o codigo n??o ir?? ser executado e voc?? ainda o ter??
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' CodeBlockID="05">
      {CBlocks.CodeBlock06}
      </CodeBlock>
      <SubTitle chapterTitle="SheBang (Sistemas UNIX)" refLink={refsLink[5]} titleId="05" />
      <Paragraph>
      Esta parte n??o tem muito a ver com a linguagem, mas voc?? ver?? este coment??rio especial na primeira linha de meus scripts ent??o irei explica-lo
      </Paragraph>
      <Paragraph>
      os SheBangs s??o coment??rios especiais que come??am com <CodeCite text="#!" /> adicionados na primeira linha de um script em sistemas baseados em UNIX (Linux e MacOS)
      </Paragraph>
      <Paragraph>
      eles apontam para o executavel a ser usado pelo script, um exemplo seria:
      </Paragraph>
      <Paragraph>
      <CodeCite text="#!/usr/bin/env python3.10" /> neste SheBang n??s usamos o programa <CodeCite text="env" /> para localizar um executavel para o <CodeCite text="python3.10" />, dessa forma asseguramos compatibilidade dentre as plataformas UNIX
      </Paragraph>
    </div>
  )
}

function ClassChap1Subcap3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="print()" refLink={refsLink[6]} titleId="06" />
      <Paragraph>
      As fun????es em s??o reconhecidas pela adi????o de <CodeCite text="()" /> ao seu final, essas fun????es, como o nome sugere, performam fun????es, funcionalidades, a????es
      </Paragraph>
      <Paragraph>
      a fun????o <CodeCite text="print()" /> ?? usada quando queremos mostrar algo ao usu??rio, um exemplo seria:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock01} CodeBlockID="06">
      {CBlocks.CodeBlock07}
      </CodeBlock>
    </div>
  )
}

function ClassChap1Subcap4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="input()" refLink={refsLink[7]} titleId="07" />
      <Paragraph>
      A fun????o <CodeCite text="input()" />, de certa forma ?? "oposta" a fun????o <CodeCite text="print()" />, o <CodeCite text="input()" /> serve para pegar uma informa????o do usu??rio, enquanto a <CodeCite text="print()" /> serve para exibir
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock02} CodeBlockID="07">
      {CBlocks.CodeBlock08}
      </CodeBlock>
      <Paragraph>
      caso n??s queiramos guardar as informa????es providas pelo <CodeCite text="input()" />, n??s devemos associa-lo a uma variavel
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock03} CodeBlockID="08">
      {CBlocks.CodeBlock09}
      </CodeBlock>
      <SubTitle chapterTitle="Pequena curiosidade" refLink={refsLink[8]} titleId="08" />
      <Paragraph>
      n??s podemos associar fun????es a variaveis, e usar as variaveis ao inv??s da fun????o (mas isso n??o ?? recomendado por ser extremamente desnecessario)
      </Paragraph>
      <Paragraph>
      exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock04} CodeBlockID="09">
      {CBlocks.CodeBlock10}
      </CodeBlock>
    </div>
  )
}




function ClassChap2Subcap1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="O que ?? um Dado?" refLink={refsLink[10]} titleId="10" />
      <Paragraph>
      Dado ?? tudo aquilo que guarda informa????o, ou seja, um numero, um texto, Verdadeiro ou Falso, uma letra, qualquer coisa que seja informa????o
      </Paragraph>
      <Paragraph>
      Eles s??o divididos entre Primitivos (ou Simples, ou B??sicos) e Compostos (ou Agrupados, ou Complexos)
      </Paragraph>
    </div>
  )
}


function ClassChap2Subcap2S1S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Declara????o" refLink={refsLink[13]} titleId="13" />
      <Paragraph>
      As Strings representam os textos, sua declara????o ?? feita atrav??s de aspas duplas ("") ou unicas ('')
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock05} CodeBlockID="10">
      {CBlocks.CodeBlock11}
      </CodeBlock>
      <Paragraph>
      N??s n??o podemos misturar as aspas, isto ??, come??ar uma declara????o com aspas duplas ("") e terminar com aspas unicas ('')
      </Paragraph>
      <Paragraph>
      n??s podemos dentro da string usar a aspa que n??o foi usada durante a declara????o, isto se torna util em texto em ingles
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock06} CodeBlockID="11">
      {CBlocks.CodeBlock12}
      </CodeBlock>
      <Paragraph>
      por??m, nos podemos sim usar o mesmo tipo de aspas dentro e fora da string, basta ultilizarmos o caractere de escapagem (\)
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock07} CodeBlockID="12">
      {CBlocks.CodeBlock13}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S1S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Multi-Line" refLink={refsLink[14]} titleId="14" />
      <Paragraph>
      Tambem temos as "Multi-line Strings", elas s??o declaradas atrav??s de 3 aspas, sejam elas unicas ou duplas, elas s??o textos que se espalham por multiplas linhas, preservando espa??os
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock08} CodeBlockID="13">
      {CBlocks.CodeBlock14}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S1S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="fStrings (Formatted Strings)" refLink={refsLink[15]} titleId="15" />
      <Paragraph>
      as fStrings, s??o strings formatadas, isto ??, strings que cont??m codigo, sua declara????o ?? feita adicionando um <CodeCite text="f"/> a frente das aspas, e envolvendo os codigos em chaves <CodeCite text="{}"/>
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock09} CodeBlockID="14">
      {CBlocks.CodeBlock15}
      </CodeBlock>
      <Paragraph>
      eu disse codigo, pois podemos adicionar coisas al??m de variaveis, como fun????es, opera????es aritmeticas, metodos, etc...
      </Paragraph>
      <Paragraph>
      Eis aqui um exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock10} CodeBlockID="15">
      {CBlocks.CodeBlock16}
      </CodeBlock>
      <Paragraph>
      As fStrings, podem ser misturadas com as Multi-Line strings, basta adicionar um <CodeCite text="f"/> a frente
      </Paragraph>
      <Paragraph>
      elas tambem podem ser feitas atrav??s do <CodeCite text="string.format()"/>, este metodo pega os argumentos providos e substutui nos espa??os reservados em chaves <CodeCite text="{}"/>
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock11} CodeBlockID="16">
      {CBlocks.CodeBlock17}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S1S4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Concatena????o" refLink={refsLink[16]} titleId="16" />
      <Paragraph>
      Concatena????o ?? o ato de juntar duas Strings, veja o mesmo exemplo anterior por??m concatenado
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock12} CodeBlockID="17">
      {CBlocks.CodeBlock18}
      </CodeBlock>
      <Paragraph>
      Note que n??s devemos fazer a devida convers??o para o tipo string (str), e devemos manejar os espa??os manualmente, o que pode ser deveras entediante
      </Paragraph>
    </div>
  )
}

function ClassChap2Subcap2S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="String (Textos)" refLink={refsLink[12]} titleId="12" />
      <ClassChap2Subcap2S1S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S1S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S1S3 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S1S4 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChap2Subcap2S2S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Ints" refLink={refsLink[18]} titleId="18" />
      <Paragraph>
      INTs, Integers ou Integros, s??o quaisquer numeros inteiros, eles s??o passiveis de opera????es aritmeticas
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock13} CodeBlockID="18">
      {CBlocks.CodeBlock19}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S2S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Floats" refLink={refsLink[19]} titleId="19" />
      <Paragraph>
      FLOATs, Floating Point Numbers ou Numeros de Pontos Flutuantes, s??o quaisquer numeros com casas decimais, ou um ponto (<CodeCite text='.'/>) em sua declara????o
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock14} CodeBlockID="19">
      {CBlocks.CodeBlock20}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S2S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Opera????es Aritm??ticas" refLink={refsLink[20]} titleId="20" />
      <Paragraph>
      Em Python se ?? possivel exercer opera????es aritm??ticas, eis aqui uma lista das possiveis opera????es
      </Paragraph>
      <UList>
        <ListItem>soma: <CodeCite text="+" /> </ListItem>
        <ListItem>subtra????o: <CodeCite text="-" /> </ListItem>
        <ListItem>potencia: <CodeCite text="**"/> </ListItem>
        <ListItem>mutiplica????o: <CodeCite text="*" /> </ListItem>
        <ListItem>divis??o: <CodeCite text="/" /> </ListItem>
        <ListItem>"divis??o verdadeira": <CodeCite text="//"/> </ListItem>
        <ListItem>m??dulo: <CodeCite text="%" /> </ListItem>
      </UList>
      <Paragraph>
      Python segue sua pr??pria ordem de precedencia baseada nos metodos BODMAS e PEMDAS, eis aqui sua ordem:
      </Paragraph>
      <OList>
        <ListItem>Parenteses <CodeCite text="()" /> em sequencia, ou seja, externos primeiro</ListItem>
        <ListItem>Exponencia????o: <CodeCite text="**" /></ListItem>
        <ListItem>Mutilicativos: <CodeCite text="*" />, <CodeCite text="@" /></ListItem>
        <ListItem>Divisivos: <CodeCite text="/" />, <CodeCite text="//" />, <CodeCite text="%" /></ListItem>
        <ListItem>Adi????o: <CodeCite text="+" /></ListItem>
        <ListItem>Subtra????o: <CodeCite text="-" /></ListItem>
      </OList>
      <Paragraph>
      As opera????es aritm??ticas s??o as mesmas aprendidas na escola, por??m irei ressaltar 3, divis??o, "divis??o verdadeira" e modulo
      </Paragraph>
    </div>
  )
}

function ClassChap2Subcap2S2S4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Divis??o" refLink={refsLink[21]} titleId="21" />
      <Paragraph>
      Em Python uma Divis??o sempre resultar?? em um float, mesmo que o resultado seja inteiro:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock15} CodeBlockID="20">
      {CBlocks.CodeBlock21}
      </CodeBlock>
      <Paragraph>
      Isso pode te levar a problemas caso necessite de um numero de tipo <CodeCite text="int" /> , para isso se existe a "Divis??o Verdadeira"
      </Paragraph>
    </div>
  )
}

function ClassChap2Subcap2S2S5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle='"Divis??o Verdadeira"' refLink={refsLink[22]} titleId="22" />
      <Paragraph>
      A "divis??o verdadeira" tamb??m ?? conhecida como "divis??o arredondada" ou "divis??o exclusiva", ?? uma opera????o de divis??o que converte o resultado para Int
      </Paragraph>
      <Paragraph>
      o que ela essencialmente faz ?? cortar os numeros ap??s o ponto, "arredondando" assim o numero
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock16} CodeBlockID="21">
      {CBlocks.CodeBlock22}
      </CodeBlock>
    </div>
  )
}


function ClassChap2Subcap2S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Numeros (Ints & Floats) e Opera????es Aritm??ticas" refLink={refsLink[17]} titleId="17" />
      <ClassChap2Subcap2S2S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S2S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S2S3 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S2S4 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S2S5 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}


function ClassChap2Subcap2S3S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Bit Overflow" refLink={refsLink[24]} titleId="24" />
      <Paragraph>
      Qual o resultado da soma <CodeCite text="0.1 + 0.2" />?
      </Paragraph>
      <Paragraph>
      Caso voc?? performe a soma em uma calculadora o resultado ser?? <CodeCite text="0.3" />, mas observe esta mesma opera????o em Python
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock17} CodeBlockID="22">
      {CBlocks.CodeBlock23}
      </CodeBlock>
      <Paragraph>
      observe que o resultado ?? <CodeCite text="0.30000000000000004" /> ao inv??s de apenas <CodeCite text="0.3" />, isto ocorre devido a forma como os numeros de ponto flutuante s??o convertidos para bin??rio, e devido ao espa??o alocado na memoria, n??s temos um overflow de bits
      </Paragraph>
      <Paragraph>
      esse problema ocorre pois a parte fracionaria de um Float tem um tamanho pr??-definido
      </Paragraph>
      <Paragraph>
      quando chegamos ao fim desse tamanho e a opera????o n??o for solucionada, se existir?? uma sobrecarga de bits, que por ventura culminar?? no numero 4 ao final da cadeia
      </Paragraph>
    </div>
  )
}

function ClassChap2Subcap2S3S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Performance" refLink={refsLink[25]} titleId="25" />
      <Paragraph>
      os numeros de pontos flutuantes s??o "menos eficientes" que os numeros integros devido a forma que eles s??o guardados na mem??ria
      </Paragraph>
      <Paragraph>
      a parte inteira se localiza em um endere??o, e a parte fracion??ria (decimal) se localiza em outra, ou seja, para performar opera????es o sistema deve navegar a varios endere??os o que culmina num aumento do tempo de resposta, por??m, vale ressaltar que este tempo s?? se torna perceptivel caso voc?? tenha opera????es na casa das milhares, (3 milhoes de calculos, 19 milhoes de calculos, etc...) pois essa diferen??a de performance ?? na ordem dos nanosegundos
      </Paragraph>
    </div>
  )
}


function ClassChap2Subcap2S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Problemas com Numeros de Ponto Flutuante" refLink={refsLink[23]} titleId="23" />
      <ClassChap2Subcap2S3S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S3S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChap2Subcap2S4S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Operadores L??gicos" refLink={refsLink[27]} titleId="27" />
      <Paragraph>
      esses operadores s??o usados em conjunto dos booleanos, s??o 3: <CodeCite text="and" />, <CodeCite text="or" />, <CodeCite text="not" />.
      </Paragraph>
      <Paragraph>
      o <CodeCite text="and" />, retorna <CodeCite text="True" /> caso todos os valores sejam verdadeiros
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock18} CodeBlockID="23">
      {CBlocks.CodeBlock24}
      </CodeBlock>
      <Paragraph>
      o <CodeCite text="or" /> retorna <CodeCite text="True" /> caso um dos valores seja Verdadeiro, ou seja, s?? retorna Falso caso ambos os valores sejam falsos, informalmente dizendo, podemos presumir que ele exerce o oposto do <CodeCite text="and" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock19} CodeBlockID="24">
      {CBlocks.CodeBlock25}
      </CodeBlock>
      <Paragraph>
      o <CodeCite text="not" /> ?? o mais simples de todos, ele inverte o valor
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock20} CodeBlockID="25">
      {CBlocks.CodeBlock26}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S4S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Curto Circuito" refLink={refsLink[28]} titleId="28" />
      <Paragraph>
      o curto circuito em operadores l??gicos ?? uma pratica onde voc?? ordena os valores para que a decis??o seja tomada mais rapida
      </Paragraph>
      <Paragraph>
      por exemplo, com o <CodeCite text="and" />, se voc?? tem algum valor que provavelmente retornar?? <CodeCite text="False" />, o colocar na frente o dar?? performance, pois o Python ir?? ignorar o resto da express??o pois o <CodeCite text="and" /> s?? retorna <CodeCite text="True" /> caso TODOS os valores sejam verdadeiros
      </Paragraph>
      <Paragraph>
      com o <CodeCite text="or" />, se ?? exatamente o oposto, colocamos um valor que provavelmente retornar?? <CodeCite text="True" /> na frente, pois assim a express??o j?? ?? validada, retornando <CodeCite text="True" />, e o Python por sua vez ir?? ignorar o resto da express??o, pois o <CodeCite text="or" /> retorna <CodeCite text="True" /> caso um dos valores seja verdadeiro
      </Paragraph>
    </div>
  )
}

function ClassChap2Subcap2S4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Boolean" refLink={refsLink[26]} titleId="26" />
      <Paragraph>
      O Boolano ?? o tipo de dado Bin??rio, s?? pode ter 2 valores, Verdadeiro (<CodeCite text="True" />) ou Falso (<CodeCite text="False" />)
      </Paragraph>
      <Paragraph>
      ele ?? bastante usado para controlar o Flow do programa atrav??s de <CodeCite text="if" />s e <CodeCite text="while" />s
      </Paragraph>
      <Paragraph>
      os valores boleanos s??o dividos em 2 categorias, Verdadeiros e Falsos
      </Paragraph>
      <Paragraph>
      Verdadeiros:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="True" /></ListItem>
        <ListItem>Qualquer string que n??o esteja vazia</ListItem>
        <ListItem>Qualquer numero diferente de 0</ListItem>
        <ListItem>Qualquer outro tipo de dado que n??o esteja vazio</ListItem>
      </UList>
      <Paragraph>
      Falsos:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="False" /></ListItem>
        <ListItem>Strings vazias ("" ou '')</ListItem>
        <ListItem>0</ListItem>
        <ListItem>Qualquer outro tipo de dado vazio</ListItem>
      </UList>
      <ClassChap2Subcap2S4S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S4S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChap2Subcap2S5S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Floats" refLink={refsLink[30]} titleId="30" />
      <Paragraph>
      nos floats n??s podemos converter as string <CodeCite text="inf" /> e <CodeCite text="NaN" /> (Not a Number), para n??meros, sendo <CodeCite text="inf" /> a representa????o de um numero infinito e <CodeCite text="NaN" /> a representa????o de algo que n??o ?? um numero.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock21} CodeBlockID="26">
      {CBlocks.CodeBlock27}
      </CodeBlock>

    </div>
  )
}

function ClassChap2Subcap2S5S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Strings" refLink={refsLink[31]} titleId="31" />
      <Paragraph>
      As string s??o muito mais que apenas simples textos, elas contem uma serie de operadores especiais, s??o divididos em 6 grupos:
      </Paragraph>
      <UList>
        <ListItem>Prefixos</ListItem>
        <ListItem>Sequencias de escapagem</ListItem>
        <ListItem>Templates</ListItem>
        <ListItem>Conversores</ListItem>
        <ListItem>Especifica????es da Mini-linguagem de formata????o</ListItem>
        <ListItem>Depura????o e padr??o printf</ListItem>
      </UList>
    </div>
  )
}

function ClassChap2Subcap2S5S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Prefixos" refLink={refsLink[32]} titleId="32" />
      <Paragraph>
      os prefixos s??o os seguintes:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="r" /> ou <CodeCite text="R" />: raw strings (rString)</ListItem>
        <ListItem><CodeCite text="u" /> ou <CodeCite text="U" />: unicode strings (uString)</ListItem>
        <ListItem><CodeCite text="f" /> ou <CodeCite text="F" />: format strings (fString)</ListItem>
        <ListItem><CodeCite text="fr" /> ou <CodeCite text="Fr" /> ou <CodeCite text="fR" /> ou <CodeCite text="FR" /> ou <CodeCite text="rf" /> ou <CodeCite text="rF" /> ou <CodeCite text="Rf" /> ou <CodeCite text="RF" />: raw-format strings  (frString ou rfString)</ListItem>
      </UList>
      <Paragraph>
      raw strings: n??o escapam nenhum caractere
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock22} CodeBlockID="27">
      {CBlocks.CodeBlock28}
      </CodeBlock>
      <Paragraph>
      unicode strings: aceitam escapagens de caracteres unicode
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock23} CodeBlockID="28">
      {CBlocks.CodeBlock29}
      </CodeBlock>
      <Paragraph>
      format strings: aceitam formata????o de c??digo
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock24} CodeBlockID="29">
      {CBlocks.CodeBlock30}
      </CodeBlock>
      <Paragraph>
      raw-format strings: a uni??o entre format strings e raw strings
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock25} CodeBlockID="30">
      {CBlocks.CodeBlock31}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S5S4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Sequencias de escapagem" refLink={refsLink[33]} titleId="33" />
      <Paragraph>
      caso n??o seja uma rString, esses s??o os caracteres de escape permitidos:
      </Paragraph>
      <Table styleClasses='text-justify'>
      <TableHead>
          <TableRow>
            <ThCell>Sequencia de Escapagem</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell styleClasses='center-justified'>\</TdCell>
            <TdCell styleClasses='center-justified'>Backslash</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\'</TdCell>
            <TdCell styleClasses='center-justified'>Aspas simples</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\"</TdCell>
            <TdCell styleClasses='center-justified'>Aspas duplas</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\a</TdCell>
            <TdCell styleClasses='center-justified'>Sino ASCII</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\b</TdCell>
            <TdCell styleClasses='center-justified'>Backspace ASCII</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\f</TdCell>
            <TdCell styleClasses='center-justified'>Formfeed ASCII</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\n</TdCell>
            <TdCell styleClasses='center-justified'>Linefeed ASCII</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\r</TdCell>
            <TdCell styleClasses='center-justified'>Carriage Return ASCII</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\t</TdCell>
            <TdCell styleClasses='center-justified'>Tab Horizontal ASCII</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\v</TdCell>
            <TdCell styleClasses='center-justified'>Tab Vertical ASCII</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\ooo</TdCell>
            <TdCell styleClasses='center-justified'>Caractere com o valor octal OOO</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\xhh</TdCell>
            <TdCell styleClasses='center-justified'>Caractere com o valor hexadecimal HH</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>\uXXXX</TdCell>
            <TdCell styleClasses='center-justified'>Caractere Unicode com o valor XXXX</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph italic={true}>
      NOTA: o \uXXXX s?? funciona caso seja uma uString
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock26} CodeBlockID="31">
      {CBlocks.CodeBlock32}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S5S5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Templates" refLink={refsLink[34]} titleId="34" />
      <Paragraph>
      Template strings s??o strings que usam <CodeCite text="$" /> para definir locais de substitui????o, para usa-las voc?? deve importar a classe <CodeCite text="Template" /> do modulo string, voc?? ver?? mais sobre modulos e classes no futuro.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock27} CodeBlockID="33">
      {CBlocks.CodeBlock33}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S5S6(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Conversores" refLink={refsLink[35]} titleId="35" />
      <Paragraph>
      os conversores s??o mais usados em processos de depura????o, eles come??am com <CodeCite text="!" />, s??o 3 conversores:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="!a" />: Representa????o ASCII</ListItem>
        <ListItem><CodeCite text="!r" />: o equivalente a <CodeCite text="repr()" /></ListItem>
        <ListItem><CodeCite text="!s" />:o equivalente a <CodeCite text="str()" /></ListItem>
      </UList>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock28} CodeBlockID="34">
      {CBlocks.CodeBlock34}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S5S7(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Especifica????es da Mini-linguagem de formata????o" refLink={refsLink[36]} titleId="36" />
      <Paragraph>
      O Python cont??m uma mini-linguagem de formata????o de strings, ela nos permite converter, alinhar, definir a precis??o e separar.
      </Paragraph>
      <Paragraph>
      o padr??o de formata????o geral ?? o seguinte:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='plaintext' CodeBlockID="35">
      {CBlocks.CodeBlock35}
      </CodeBlock>
      <Paragraph>
      eles come??am com <CodeCite text=":" />, eis aqui uma lista:
      </Paragraph>
      <Paragraph>
      Op????es de Alinhamento:
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Sinal</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell styleClasses='center-justified'>&gt;</TdCell>
            <TdCell styleClasses='center-justified'>define que o campo deve estar alinhado a esquerda do espa??o provido</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>&lt;</TdCell>
            <TdCell styleClasses='center-justified'>define que o campo deve estar alinhado a direita do espa??o provido</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>=</TdCell>
            <TdCell styleClasses='center-justified'>define que o alinhamento deve estar entre o sinal (se houver) e o digito, essa op????o de alinhamento s?? ?? valida para tipos numericos</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>^</TdCell>
            <TdCell styleClasses='center-justified'>define que o campo deve estar alinhado ao centro do espa??o provido</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      Op????es de Sinaliza????o:
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Sinal</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell styleClasses='center-justified'>+</TdCell>
            <TdCell styleClasses='center-justified'>indica que o sinal deve ser usado tanto para numeros positivos quanto negativos</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>-</TdCell>
            <TdCell styleClasses='center-justified'>indica que o sinal s?? deve ser usado para numeros negativos (padr??o)</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="&nbsp;" /> (espa??o)</TdCell>
            <TdCell styleClasses='center-justified'>indica que espa??os no inicio devem ser usados para numeros positivos e o sinal de menos deve ser usado para negativos</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      Alternadores e Separadores:
      </Paragraph>
      <Paragraph>
      O <CodeCite text="#" /> (alternador) especifica que a forma alternativa deve ser usada na convers??o, a forma alternativa ?? especificada de acordo com o tipo. Ela s?? ?? valida para numeros inteiros (ints), decimais (floats) e complexos (complex).
      </Paragraph>
      <Paragraph>
      para ints que usam as formata????es hexadecimal, bin??ria ou octal os prefixos <CodeCite text="Ox" /> ou <CodeCite text="0X" />, <CodeCite text="0b" /> e <CodeCite text="0o" /> s??o usadas.
      </Paragraph>
      <Paragraph>
      para floats e numeros complexos, o alternador especifica que a convers??o sempre deve conter as casas decimais, em adi????o ao <CodeCite text="g" /> e <CodeCite text="G" />, zeros insignificantes n??o s??o removidos.
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Separador</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell styleClasses='center-justified'>,</TdCell>
            <TdCell styleClasses='center-justified'>separador para casa dos milhares</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'>_</TdCell>
            <TdCell styleClasses='center-justified'>separador para a casa dos milhares, para as representa????es 'b', 'o', 'x' e 'X' esse separador ser?? inserido a cada 4 espa??os.</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      Representa????es de Strings:
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Tipo</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="s" /></TdCell>
            <TdCell styleClasses='center-justified'>Converte para String, pode ser omitido</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="None" /> (Nenhum)</TdCell>
            <TdCell styleClasses='center-justified'>O mesmo que <CodeCite text="s" /></TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      Representa????es de Ints:
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Tipo</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="b" /></TdCell>
            <TdCell styleClasses='center-justified'>Converte para binario, base 2</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="c" /></TdCell>
            <TdCell styleClasses='center-justified'>Converte um numero inteiro para o caractere unicode correspondente</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="d" /></TdCell>
            <TdCell styleClasses='center-justified'>Numero decimal, base 10</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="o" /></TdCell>
            <TdCell styleClasses='center-justified'>Numero Octal, base 8</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="x" /></TdCell>
            <TdCell styleClasses='center-justified'>Numero hexadecimal, base 16, usa letras minusculas</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="X" /></TdCell>
            <TdCell styleClasses='center-justified'>Numero hexadecimal, base 16, usa letras maiusculas</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="n" /></TdCell>
            <TdCell styleClasses='center-justified'>o mesmo que <CodeCite text="d" />, exceto que usa a configura????o atual de localidade para definir o separador de numeros correto.</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="None" /> (Nenhum)</TdCell>
            <TdCell styleClasses='center-justified'>O mesmo que <CodeCite text="d" /></TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>
      Representa????es de Floats:
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Tipo</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="e" /></TdCell>
            <TdCell styleClasses='text-justify'>Nota????o Cientifica para uma dada precis??o <CodeCite text="p" />, formata o numero em nota????o cientifica com a letra <CodeCite text="e" />, separando o coeficiente do expoente, o coeficiente tem 1 digito antes e <CodeCite text="p" /> digitos decimais ap??s o <CodeCite text="e" />, para um total de <CodeCite text="p + 1" /> digitos significativos. Sem nenhuma precis??o dada, se ?? usado uma precis??o de 6 digitos para numeros decimais (floats) e usa uma precis??o grande o bastante para mostrar todos os digitos do coeficiente para numeros inteiros. Se n??o existir nenhuma casa decimal, as casas decimais s??o removidas a menos que a op????o <CodeCite text="#" /> seja usada.</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="E" /></TdCell>
            <TdCell styleClasses='center-justified'>O mesmo que <CodeCite text="e" />, por??m com o delimitador <CodeCite text="E" /></TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="f" /></TdCell>
            <TdCell styleClasses='text-justify'>Nota????o de pontos fixos. para uma dada precis??o <CodeCite text="p" />, formata o numero como um decimal com exatos <CodeCite text="p" /> digitos ap??s o ponto. Se nenhuma precis??o for especificada, usa uma precis??o de 6 digitos para as casas decimais (floats), e uma precis??o grande o bastante para mostrar todos os numeros inteiros (ints). Se n??o existir nenhuma casa decimal, as casas decimais s??o removidas a menos que a op????o <CodeCite text="#" /> seja usada</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="F" /></TdCell>
            <TdCell styleClasses='center-justified'>O mesmo que <CodeCite text="f" /> porem converte <CodeCite text="inf" /> em <CodeCite text="INF" /> e <CodeCite text="nan" /> em <CodeCite text="NAN" /></TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="g" /></TdCell>
            <TdCell styleClasses='text-justify'>
            Formata????o Geral. Para uma dada precis??o <CodeCite text="p &ge; 1" />, essa formata????o arredonda o numero para <CodeCite text="p" /> digitos significantes, e ent??o formata o resultado para nota????o cientifica ou nota????o de pontos fixos dependendo de sua magnitude. Uma precis??o de 0 ?? tratada como uma precis??o de 1. As regras de precis??o s??o as seguintes:
              <UList flat={true}>
                <ListItem>
                  Suponha um resultado formatado com nota????o cientifica e precis??o <CodeCite text="p - 1" />, teria um expoente <CodeCite text="exp" />. Ent??o se <CodeCite text="m &le; exp &lt; p" />, onde <CodeCite text="m" /> ?? <CodeCite text="-4" /> para numeros decimais (float) e <CodeCite text="-6" /> para inteiros (int), o numero ?? formatado usando a nota????o de pontos flutuantes com uma precis??o <CodeCite text="p - 1 - exp" />.
                </ListItem>
                <ListItem>
                  Caso contr??rio o numero ?? formatado usando nota????o cientifica e uma precis??o <CodeCite text="p - 1" />.
                </ListItem>
                <ListItem>
                  Em ambos os casos zeros insignificantes s??o removidos da parte inteira e o ponto decimal tamb??m ?? removido caso n??o haja nenhum ponto decimal, a menos que a op????o <CodeCite text="#" /> seja usada.
                </ListItem>
                <ListItem>
                  Se nenhuma precis??o for dada, usa-se uma precis??o de 6 digitos significantes para numeros decimais (float). Para inteiros (int), o coeficiente do resultado ?? formado atrav??s dos digitos coeficientes do valor.
                </ListItem>
                <ListItem>
                  Nota????o cientifica ?? usada para valores menores que <CodeCite text="1e-6" /> em valores absolutos e para valores que a posi????o do ultimo digito significante ?? maior que 1, caso contr??rio a nota????o de pontos fixos ?? usada.
                </ListItem>
                <ListItem>
                  Infinito positivo e negativo, zero positivo e negativo, e nans, s??o formatados como <CodeCite text="inf" />, <CodeCite text="-inf" />, <CodeCite text="0" />, <CodeCite text="-0" /> e <CodeCite text="nan" /> respectivamente, independentemente da precis??o.
                </ListItem>
              </UList>
            </TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="G" /></TdCell>
            <TdCell styleClasses='center-justified'>O mesmo <CodeCite text="g" />, por??m usa <CodeCite text="E" /> se o numero ficar muito grante, <CodeCite text="INF" /> e <CodeCite text="NAN" /></TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="n" /></TdCell>
            <TdCell styleClasses='center-justified'>Numero. O mesmo <CodeCite text="g" /> exceto que usa a configura????o de localiza????o local para definir os separadores de numero.</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="%" /></TdCell>
            <TdCell styleClasses='center-justified'>Porcentagem. Multiplica um numero por 100 e exibe ele com formato fixo <CodeCite text="f" /> seguido pelo sinal de porcentagem.</TdCell>
          </TableRow>
          <TableRow>
            <TdCell styleClasses='center-justified'><CodeCite text="None" /> (Nenhum)</TdCell>
            <TdCell styleClasses='text-justify'>Para decimais (floats) ?? o mesmo que <CodeCite text="g" />, exceto que quando a nota????o de pontos fixos ?? usada para formatar o resultado, sempre inclui ao menos um digito as casas decimais. A precis??o usada ?? t??o larga quanto necess??ria para representar o numero de forma fidedigna. Para Inteiros (Ints) ?? mesmo que <CodeCite text="g" /> ou <CodeCite text="G" /> dependendo do contexto de maiusculas usado. O efeito geral ?? tentar representar a saida de <CodeCite text="str()" /> como se alterado por outros modificadores de formato.</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock29}>
      {CBlocks.CodeBlock36}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S5S8(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Depura????o e padr??o printf" refLink={refsLink[37]} titleId="37" />
      <Paragraph>
      em uma <CodeCite text="fString" />, se n??s colocarmos um <CodeCite text="=" /> a direita da variavel, exibimos o nome da variavel junto ao valor, isso ?? util para depura????es, se nos colocarmos espa??os, a saida ficar?? espa??ada tamb??m.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock30} CodeBlockID="36">
      {CBlocks.CodeBlock37}
      </CodeBlock>
      <Paragraph>
      o padr??o printf de formata????o nos permite fazer <CodeCite text="fString" /> como em C, os tipos devem ser precedidos de <CodeCite text="%" />, e n??s devemos modular por uma tuple contendo as variaveis, voc?? ver?? mais sobre tuples a frente, aqui vai a lista:
      </Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Tipos</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell><CodeCite text="%d" /> e <CodeCite text="%i" /></TdCell>
            <TdCell>Numero inteiro com sinal</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%o" /></TdCell>
            <TdCell>Numero octal com sinal</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%u" /></TdCell>
            <TdCell>OBSOLETO, equivalente a %d</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%x" /> e <CodeCite text="%X" /></TdCell>
            <TdCell>Numero hexadecimal com sinal</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%e" /> e <CodeCite text="%E" /></TdCell>
            <TdCell>expoente</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%f" /> e <CodeCite text="%F" /></TdCell>
            <TdCell>precis??o de ponto flutuante</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%g" /> e <CodeCite text="%G" /></TdCell>
            <TdCell>precis??o de ponto flutuante. Usa nota????o exponecial caso o expoente ?? menor que -4, caso contrario usa o formato decimal.</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%c" /></TdCell>
            <TdCell>converte para um caractere</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%r" /></TdCell>
            <TdCell>converte para o equivalente ao <CodeCite text="repr()" /></TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%s" /></TdCell>
            <TdCell>converte para o equivalente ao <CodeCite text="str()" /></TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%a" /></TdCell>
            <TdCell>converte para o equivalente ao <CodeCite text="ascii()" /></TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="%%" /></TdCell>
            <TdCell>uma <CodeCite text="%" /> (porcentagem)</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph>modificadores:</Paragraph>
      <Table>
        <TableHead>
          <TableRow>
            <ThCell>Modificador</ThCell>
            <ThCell>Significado</ThCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TdCell><CodeCite text="#" /></TdCell>
            <TdCell>define a forma alternativa</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="0" /></TdCell>
            <TdCell>a convers??o sera alinhada usando zeros (0) at?? um determinado tamanho</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="-" /></TdCell>
            <TdCell>a convers??o ser?? alinhada a esquerda</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="&nbsp;" /> (espa??o)</TdCell>
            <TdCell>um espa??o a frente de numeros positivos, e o sinal de menos para numeros negativos</TdCell>
          </TableRow>
          <TableRow>
            <TdCell><CodeCite text="+" /></TdCell>
            <TdCell>exibe um sinal para positivos e negativos</TdCell>
          </TableRow>
        </TableBody>
      </Table>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock31}>
      {CBlocks.CodeBlock38}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap2S5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Curiosidades" refLink={refsLink[29]} titleId="29" />
      <Paragraph>
      pequenas curiosidades sobre alguns tipos b??sicos
      </Paragraph>
      <ClassChap2Subcap2S5S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5S3 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5S4 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5S5 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5S6 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5S7 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5S8 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChap2Subcap2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Dados Primitivos" refLink={refsLink[11]} titleId="11" />
      <Paragraph>
      Dados Primitivos guardam apenas uma informa????o, ou seja, um numero, um texto, um Verdadeiro
      </Paragraph>
      <Paragraph>
      Eles s??o divididos em 3 tipos:
      </Paragraph>
      <UList>
        <ListItem>Strings (str)</ListItem>
        <ListItem>Integers e Floats (int & float)</ListItem>
        <ListItem>Booleans (bool)</ListItem>
      </UList>
      <ClassChap2Subcap2S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S3 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S4 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2S5 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChap2Subcap3S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Mutabilidade" refLink={refsLink[39]} titleId="39" />
      <Paragraph>A Mutabilidade define a capacidade de um tipo ser alterado sem que se seja criado um novo, exemplo:</Paragraph>
      <UList>
        <ListItem>Listas s??o mutaveis, pois n??s podemos adicionar ou remover elementos sem criar uma lista nova</ListItem>
        <ListItem>Tuples s??o imutaveis pois para podermos adicionar um novo elemento n??s devemos criar uma nova</ListItem>
      </UList>
    </div>
  )
}

function ClassChap2Subcap3S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Tuples" refLink={refsLink[40]} titleId="40" />
      <Paragraph>
      As Tuples s??o imutaveis, elas s??o comumente usadas na declara????o de multiplas variaveis, para declara uma tuple n??s podemos fazer de duas formas:
      </Paragraph>
      <UList>
        <ListItem>
          forma 1: usamos parenteses <CodeCite text="()" />
          <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock32} CodeBlockID="37">
          {CBlocks.CodeBlock39}
          </CodeBlock>
        </ListItem>
        <ListItem>
          forma 2: nas tuples n??s podemos omitir o parenteses, apenas separando os argumentos por virgula <CodeCite text="," />
          <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock33} CodeBlockID="38">
          {CBlocks.CodeBlock40}
          </CodeBlock>
        </ListItem>
      </UList>
      <Paragraph>
      Para adicionarmos ou removermos elementos de uma tuple n??s devemos criar uma nova
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock34} CodeBlockID="39">
      {CBlocks.CodeBlock41}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap3S3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Listas" refLink={refsLink[41]} titleId="41" />
      <Paragraph>
      Diferente das Tuples, as listas j?? podem ser alteradas, para declararmos uma lista n??s usamos <CodeCite text="[]" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock35} CodeBlockID="40">
      {CBlocks.CodeBlock42}
      </CodeBlock>
      <Paragraph>
        para obtermos um item especifico n??s usamos um index iniciado em <CodeCite text="0" />
      </Paragraph>
      <Paragraph>
      ?? simples, basta fazer <CodeCite text="nome_da_lista[index]" />, e as listas come??am pelo <CodeCite text="0" />, ou seja, o primeiro valor ?? <CodeCite text="0" />, o segundo ?? <CodeCite text="1" />, o terceiro ?? <CodeCite text="2" /> e assim por diante
      </Paragraph>
      <Paragraph>
      caso n??s coloquemos um sinal negativo a frente do index, a lista ser?? invertida, <CodeCite text="-1" /> se torna o ultimo, <CodeCite text="-2" /> o penultimo, <CodeCite text="-3" /> o antepenultimo e assim por diante
      </Paragraph>
      <Paragraph>
      eis aqui um exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock36} CodeBlockID="41">
      {CBlocks.CodeBlock43}
      </CodeBlock>
      <Paragraph>
        para adicionarmos um item a uma lista n??s usamos o metodo append, sua sintaxe ??: <CodeCite text="lista.append(item)" />
      </Paragraph>
      <Paragraph>
      este metodo sempre adicionar?? o item ao final da lista
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock37} CodeBlockID="42">
      {CBlocks.CodeBlock44}
      </CodeBlock>
      <Paragraph>
      para adicionarmos um item em uma posi????o especifica n??s usamos: <CodeCite text="lista.insert(index, item)" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock38} CodeBlockID="43">
      {CBlocks.CodeBlock45}
      </CodeBlock>
      <Paragraph>
      para removermos um item, n??s temos <CodeCite text="lista.pop()" /> e <CodeCite text="lista.remove(item)" />
      </Paragraph>
      <Paragraph>
      o metodo <CodeCite text="lista.pop()" /> remove o ultimo item, ou em um index especificado <CodeCite text="lista.pop(index)" />
      </Paragraph>
      <Paragraph>
      o metodo <CodeCite text="lista.remove(item)" /> remove o item especificado
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock39} CodeBlockID="44">
      {CBlocks.CodeBlock46}
      </CodeBlock>
      <SubTitle chapterTitle="Matrizes (Lista Multi-Dimensional)" refLink={refsLink[42]} titleId="42" />
      <Paragraph>
      Caso voc?? se depare na situa????o de ter que criar uma matiz, em python isso pode ser feito atrav??s de listas multi-dimensionais
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock40} CodeBlockID="45">
      {CBlocks.CodeBlock47}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap3S4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Sets (Conjuntos)" refLink={refsLink[43]} titleId="43" />
      <Paragraph>
        Sets s??o essencialmente conjuntos, s??o declarados atrav??s das chaves <CodeCite text="{}" />.
      </Paragraph>
      <Paragraph>
      Eles tem 2 caracteristicas peculiares:
      </Paragraph>
      <UList>
        <ListItem>n??o tem ordem</ListItem>
        <ListItem>n??o possuem valores repetidos</ListItem>
      </UList>
      <Paragraph>
      irei come??ar pela ordem, tomaremos como exemplo um set com 3 nomes.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock41} CodeBlockID="46">
      {CBlocks.CodeBlock48}
      </CodeBlock>
      <Paragraph>
      perceba que quando eu executei o c??digo em minha m??quina, o resultado foi <CodeCite text="{'Mirai', 'Maria', 'Joaquim'}"/>, mesmo com a declara????o sendo <CodeCite text="{'Joaquim', 'Mirai', 'Maria'}" />, isso ocorre porque os sets n??o tem ordem nenhuma, ou seja, se rodarmos denovo, teremos outra ordem
      </Paragraph>
      <Paragraph>
      agora vamos aos valores, suponha novamente um set de nomes, por??m agora com mais pessoas.
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock42} CodeBlockID="47">
      {CBlocks.CodeBlock49}
      </CodeBlock>
      <Paragraph>
      perceba que mesmo com n??s especificando duas <CodeCite text="Maria" />s no codigo, s?? exibimos uma, isso ocorre pois os sets excluem todos os valores repetidos.
      </Paragraph>
      <Paragraph>
      agora vamos as opera????es elas s??o:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="set.add()" />: adiciona elementos ao set</ListItem>
        <ListItem><CodeCite text="set.remove()" />: remove elementos do set</ListItem>
        <ListItem><CodeCite text="set.difference()" />: retorna a diferen??a entre sets</ListItem>
        <ListItem><CodeCite text="set.symmetric_difference()" />: retorna todos os itens que n??o est??o na interse????o</ListItem>
        <ListItem><CodeCite text="set.intersection()" />: retorna a intersce????o dos sets</ListItem>
        <ListItem><CodeCite text="set.union()" />: retorna a uni??o dos sets</ListItem>
      </UList>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock43} CodeBlockID="48">
      {CBlocks.CodeBlock50}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap3S5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Dicion??rios" refLink={refsLink[44]} titleId="44" />
      <Paragraph>Dicion??rios s??o listas com <CodeCite text="chave:valor" />, onde o valor pode ter um indentificador nomeado chamado chave</Paragraph>
      <Paragraph>a declara????o de um dicion??rio ?? feita da seguinte forma:</Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock44} CodeBlockID="49">
      {CBlocks.CodeBlock51}
      </CodeBlock>
      <Paragraph>
      para fins de conveniencia e legibilidade, n??s dividimos o dicionario entre linhas, ficando desta forma
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock45} CodeBlockID="50">
      {CBlocks.CodeBlock52}
      </CodeBlock>
      <Paragraph>
        para acessarmos um valor especifico n??s usamos sua chave, desta forma <CodeCite text="dicionario[chave]" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock46} CodeBlockID="51">
      {CBlocks.CodeBlock53}
      </CodeBlock>
      <Paragraph>
      para adicionarmos um valor, ou reassociarmos um valor, basta por <CodeCite text="dicionario[chave]=novo_valor" />
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock47} CodeBlockID="52">
      {CBlocks.CodeBlock54}
      </CodeBlock>
    </div>
  )
}

function ClassChap2Subcap3(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Tipos Compostos" refLink={refsLink[38]} titleId="38" />
      <Paragraph>
        Os tipos compostos s??o aqueles que contem mais de um dado
      </Paragraph>
      <Paragraph>
      eles s??o os seguintes:
      </Paragraph>
      <UList>
        <ListItem>Tuples</ListItem>
        <ListItem>Listas</ListItem>
        <ListItem>Sets</ListItem>
        <ListItem>Dicionarios</ListItem>
      </UList>
      <ClassChap2Subcap3S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap3S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap3S3 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap3S4 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap3S5 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChap2Subcap4S1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Convers??o" refLink={refsLink[46]} titleId="46" />
      <Paragraph>
      Convers??o ?? quando essa altera????o ?? explicita no codigo, por exemplo:
      </Paragraph>
      <CodeBlock darkLightSwitch={props.darkLightSwitch} language='python' answer={CBlocks.AnswerBlock48} CodeBlockID="53">
      {CBlocks.CodeBlock55}
      </CodeBlock>
      <Paragraph>
      existem fun????es especificas para isso, eis a lista:
      </Paragraph>
      <UList>
        <ListItem><CodeCite text="str()" />: converte para <CodeCite text="string" /></ListItem>
        <ListItem><CodeCite text="int()" />: converte para <CodeCite text="int" /></ListItem>
        <ListItem><CodeCite text="float()" />: converte para <CodeCite text="float" /></ListItem>
        <ListItem><CodeCite text="bool()" />: converte para <CodeCite text="booleano" /></ListItem>
        <ListItem><CodeCite text="tuple()" />: converte para <CodeCite text="tuple" /></ListItem>
        <ListItem><CodeCite text="list()" />: converte para <CodeCite text="lista" /></ListItem>
        <ListItem><CodeCite text="set()" />: converte para <CodeCite text="set" /></ListItem>
        <ListItem><CodeCite text="dict()" />: converte para <CodeCite text="dicionario" /></ListItem>
      </UList>
    </div>
  )
}

function ClassChap2Subcap4S2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Coer????o" refLink={refsLink[47]} titleId="47" />
      <Paragraph>
      ocorre quando a convers??o ?? implicita, ou seja, voc?? n??o define expecificamente.
      </Paragraph>
      <Paragraph>
        ela ocorrem em outros tipos de flow (<CodeCite text="if" />s, <CodeCite text="while" />s, etc..., veremos mais a frente)
      </Paragraph>
    </div>
  )
}


function ClassChap2Subcap4(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="Convers??o e Coer????o" refLink={refsLink[45]} titleId="45" />
      <Paragraph>
      Um topico relativamente simples, ele consiste em alterar o tipo de um dado, por exemplo:
      </Paragraph>
      <Paragraph>
        <CodeCite text="string" /> -&gt; <CodeCite text="int" />
      </Paragraph>
      <ClassChap2Subcap4S1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap4S2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChap2Subcap5(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <SubTitle chapterTitle="sum() & len()" refLink={refsLink[48]} titleId="48" />
      <Paragraph>
      <CodeCite text="sum()" /> ?? uma fun????o nativa do python que retorna a soma de todos os valores de um objeto iteravel, ou seja, listas, dicionarios, sets e tuples
      </Paragraph>
      <Paragraph>
      <CodeCite text="len()" /> ?? uma fun????o nativa do python que retorna o comprimento de um objeto iteravel, ou seja, listas, dicionarios, sets e tuples
      </Paragraph>
      <Paragraph>
        seu uso principal seria para calcular m??dias, pois uma m??dia ?? dada atrav??s da soma de todos os valores dividos pela quantidade de valores
      </Paragraph>
    </div>
  )
}

function ClassChapter1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className={vars.textSizesBASE2}>
      <SubTitle chapterTitle="Variaveis, Coment??rios, print() e input()" refLink={refsLink[1]} titleId="01" />
      <ClassChap1Subcap1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap1Subcap2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap1Subcap3 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap1Subcap4 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
    </div>
  )
}

function ClassChapter2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className={vars.textSizesBASE2}>
      <SubTitle chapterTitle="Tipos de Dado" refLink={refsLink[9]} titleId="09" />
      <ClassChap2Subcap1 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap2 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap3 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap4 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
      <ClassChap2Subcap5 darkLightSwitch={props.darkLightSwitch} refLinksList={refsLink} />
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
      <ToCLink ToCID=""         linkHashID="00" linkRefFunc={refsFuncList[0]}  title="Fundamentos do Python I" level={0}/>
      <ToCLink ToCID="1."       linkHashID="01" linkRefFunc={refsFuncList[1]}  title="Variaveis, Coment??rios, print() e input()" level={0}/>
      <ToCLink ToCID="1.1."     linkHashID="02" linkRefFunc={refsFuncList[2]}  title="Variaveis" level={1}/>
      <ToCLink ToCID="1.1.1."   linkHashID="03" linkRefFunc={refsFuncList[3]}  title="Constantes" level={2}/>
      <ToCLink ToCID="1.2."     linkHashID="04" linkRefFunc={refsFuncList[4]}  title="Coment??rios" level={1}/>
      <ToCLink ToCID="1.2.1."   linkHashID="05" linkRefFunc={refsFuncList[5]}  title="SheBang (Sistemas UNIX)" level={2}/>
      <ToCLink ToCID="1.3."     linkHashID="06" linkRefFunc={refsFuncList[6]}  title="print()" level={1}/>
      <ToCLink ToCID="1.4."     linkHashID="07" linkRefFunc={refsFuncList[7]}  title="input()" level={1}/>
      <ToCLink ToCID="1.4.1."   linkHashID="08" linkRefFunc={refsFuncList[8]}  title="Pequena curiosidade" level={2}/>
      <ToCLink ToCID="2."       linkHashID="09" linkRefFunc={refsFuncList[9]}  title="Tipos de Dado" level={0}/>
      <ToCLink ToCID="2.1."     linkHashID="10" linkRefFunc={refsFuncList[10]} title="O que ?? um Dado?" level={1}/>
      <ToCLink ToCID="2.2."     linkHashID="11" linkRefFunc={refsFuncList[11]} title="Dados Primitivos" level={1}/>
      <ToCLink ToCID="2.2.1."   linkHashID="12" linkRefFunc={refsFuncList[12]} title="String (Textos)" level={2}/>
      <ToCLink ToCID="2.2.1.1." linkHashID="13" linkRefFunc={refsFuncList[13]} title="Declara????o" level={3}/>
      <ToCLink ToCID="2.2.1.2." linkHashID="14" linkRefFunc={refsFuncList[14]} title="Multi-Line" level={3}/>
      <ToCLink ToCID="2.2.1.3." linkHashID="15" linkRefFunc={refsFuncList[15]} title="fStrings (Formatted Strings)" level={3}/>
      <ToCLink ToCID="2.2.1.4." linkHashID="16" linkRefFunc={refsFuncList[16]} title="Concatena????o" level={3}/>
      <ToCLink ToCID="2.2.2"    linkHashID="17" linkRefFunc={refsFuncList[17]} title="Numeros (Ints & Floats) e Opera????es Aritm??ticas" level={2}/>
      <ToCLink ToCID="2.2.2.1"  linkHashID="18" linkRefFunc={refsFuncList[18]} title="Ints" level={3}/>
      <ToCLink ToCID="2.2.2.2"  linkHashID="19" linkRefFunc={refsFuncList[19]} title="Floats" level={3}/>
      <ToCLink ToCID="2.2.2.3"  linkHashID="20" linkRefFunc={refsFuncList[20]} title="Opera????es Aritm??ticas" level={3}/>
      <ToCLink ToCID="2.2.2.4"  linkHashID="21" linkRefFunc={refsFuncList[21]} title="Divis??o" level={3}/>
      <ToCLink ToCID="2.2.2.5"  linkHashID="22" linkRefFunc={refsFuncList[22]} title='"Divis??o Verdadeira"' level={3}/>
      <ToCLink ToCID="2.2.3"    linkHashID="23" linkRefFunc={refsFuncList[23]} title="Problemas com Numeros de Ponto Flutuante" level={2}/>
      <ToCLink ToCID="2.2.3.1"  linkHashID="24" linkRefFunc={refsFuncList[24]} title="Bit Overflow" level={3}/>
      <ToCLink ToCID="2.2.3.2"  linkHashID="25" linkRefFunc={refsFuncList[25]} title="Performance" level={3}/>
      <ToCLink ToCID="2.2.4"    linkHashID="26" linkRefFunc={refsFuncList[26]} title="Boolean" level={2}/>
      <ToCLink ToCID="2.2.4.1"  linkHashID="27" linkRefFunc={refsFuncList[27]} title="Operadores L??gicos" level={3}/>
      <ToCLink ToCID="2.2.4.2"  linkHashID="28" linkRefFunc={refsFuncList[28]} title="Curto Circuito" level={3}/>
      <ToCLink ToCID="2.2.3"    linkHashID="29" linkRefFunc={refsFuncList[29]} title="Curiosidades" level={2}/>
      <ToCLink ToCID="2.2.3.1"  linkHashID="30" linkRefFunc={refsFuncList[30]} title="Floats" level={3}/>
      <ToCLink ToCID="2.2.3.2"  linkHashID="31" linkRefFunc={refsFuncList[31]} title="Strings" level={3}/>
      <ToCLink ToCID="2.2.3.3"  linkHashID="32" linkRefFunc={refsFuncList[32]} title="Prefixos" level={3}/>
      <ToCLink ToCID="2.2.3.4"  linkHashID="33" linkRefFunc={refsFuncList[33]} title="Sequencias de escapagem" level={3}/>
      <ToCLink ToCID="2.2.3.5"  linkHashID="34" linkRefFunc={refsFuncList[34]} title="Templates" level={3}/>
      <ToCLink ToCID="2.2.3.6"  linkHashID="35" linkRefFunc={refsFuncList[35]} title="Conversores" level={3}/>
      <ToCLink ToCID="2.2.3.7"  linkHashID="36" linkRefFunc={refsFuncList[36]} title="Especifica????es da Mini-linguagem de formata????o" level={3}/>
      <ToCLink ToCID="2.2.3.8"  linkHashID="37" linkRefFunc={refsFuncList[37]} title="Depura????o e padr??o printf" level={3}/>
      <ToCLink ToCID="2.3."     linkHashID="38" linkRefFunc={refsFuncList[38]} title="Tipos Compostos" level={1}/>
      <ToCLink ToCID="2.3.1."   linkHashID="39" linkRefFunc={refsFuncList[39]} title="Mutabilidade" level={2}/>
      <ToCLink ToCID="2.3.2."   linkHashID="40" linkRefFunc={refsFuncList[40]} title="Tuples" level={2}/>
      <ToCLink ToCID="2.3.3."   linkHashID="41" linkRefFunc={refsFuncList[41]} title="Listas" level={2}/>
      <ToCLink ToCID="2.3.3.1"  linkHashID="42" linkRefFunc={refsFuncList[42]} title="Matrizes (Lista Multi-Dimensional)" level={3}/>
      <ToCLink ToCID="2.3.4."   linkHashID="43" linkRefFunc={refsFuncList[43]} title="Sets (Conjuntos)" level={2}/>
      <ToCLink ToCID="2.3.5."   linkHashID="44" linkRefFunc={refsFuncList[44]} title="Dicion??rios" level={2}/>
      <ToCLink ToCID="2.4."     linkHashID="45" linkRefFunc={refsFuncList[45]} title="Convers??o e Coer????o" level={1}/>
      <ToCLink ToCID="2.4.1."   linkHashID="46" linkRefFunc={refsFuncList[46]} title="Convers??o" level={2}/>
      <ToCLink ToCID="2.4.2."   linkHashID="47" linkRefFunc={refsFuncList[47]} title="Coer????o" level={2}/>
      <ToCLink ToCID="2.5."     linkHashID="48" linkRefFunc={refsFuncList[48]} title="sum() & len()" level={1}/>
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
    <div className="font-antonio text-justify">
      <div className="mt-4 md:mt-0">
      <BackNextChapters nextChapLink="/classes/pyless/3" prevChapLink="/classes/pyless/1" markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction} />
      </div>
      <MainTitle chapterTitle={props.chapterTitle} titleId="00" refLink={refsLink[0]} />
      <ClassChapter1 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <ClassChapter2 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <BackNextChapters nextChapLink="/classes/pyless/3" prevChapLink="/classes/pyless/1" markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction}/>
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

export function PyLess2(props: ClassesIndexStateProps) {
  const [ls, rfs] = refLinks(props.funcState)
  let cCap = 2

  function markThisComplete() {
    handleClassProg('PylessClasses', (cCap - 1), props.classProgressArray, props.setClassArrs)
    handleClassProg('PylessClasses', cCap, props.classProgressArray, props.setClassArrs)
  }
  function updateState() {
    handleClassProg('PylessClasses', null, props.classProgressArray, props.setClassArrs)
  }

  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Fund. I" sums={<CapsSumPhone refsFuncList={rfs}/>} caps={<CapsLinkPhone currCap={cCap}/>} themeFunc={props.themeFunc} themeState={props.darkLightSwitch} classCompState={updateState}/>
      <PageContent state={props.state} refLinksList={ls} darkLightSwitch={props.darkLightSwitch} markAsCompletedFunction={markThisComplete} updateStateFunction={updateState} cCap={cCap} capTitle="Fundamentos do Python I"/>
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} darkLightSwitch={props.darkLightSwitch}/>
      </FooterWrapper>
    </div>
  )
}
