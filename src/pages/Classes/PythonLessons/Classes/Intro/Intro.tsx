import { Footer } from "../../../../../components/Footer/Footer"
import { Header } from "../../../../../components/Header/Header"
import { FooterWrapper } from "../../../../../components/Wrappers/FlowWrappers"
import { genRefs, ToCLink, CapsSumWrapper, CapLink, BackNextChapters } from "../../../../../utils/ComponentElements/ComponentElements"
import { CapsSumPhoneProps, CapSummProps, ClassChapterProps, ClassContentProps, GenericStateProps, PageContentProps } from "../../../../../utils/interfaces"
import { CitationBlock, CodeBlock, CodeCite, ListItem, Paragraph, UList } from "../../../../../utils/TextElements/TextElements"
import * as vars from '../../../../../utils/variables'
import * as CBlocks from './CodeBlocks'

function refLinks(stateFunc?: any) {
  const [link1, ref1] = genRefs(stateFunc);
  const [link2, ref2] = genRefs(stateFunc);
  const [link3, ref3] = genRefs(stateFunc);

  const linksList = [link1, link2, link3];
  const refsList =  [ref1, ref2, ref3];
  return [linksList, refsList]
}

function ClassChapter1(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className={vars.textSizesLG}>
      <h1 id="2" ref={refsLink[1]} className={vars.textSizes2XL + 'font-bebasNeue mb-4'}>
        O que é programação?
      </h1>
      <div className="text-justify">
        <Paragraph>
        Programação é a área da ciência e tecnologia especializada na instrução de computadores e sistemas, há também aqueles que defendem que a programação está também associada a arte, vide programação de jogos.
        </Paragraph>
        <Paragraph>
          ela é divida em inúmeras áreas, apenas para citar algumas temos:
        </Paragraph>
        <UList>
          <ListItem>Desenvolvimento de Sites</ListItem>
          <ListItem>Desenvolvimento de Jogos</ListItem>
          <ListItem>Desenvolvimento de Aplicativos</ListItem>
          <ListItem>Sistemas e Bancos de dados</ListItem>
          <ListItem>Inteligencias Artificiais</ListItem>
          <ListItem>Algoritmos</ListItem>
        </UList>
        <Paragraph>
          De acordo com a Wikipédia:
        </Paragraph>
        <CitationBlock>
          <Paragraph italic={true}>
            "Programação é o processo de escrita, teste e manutenção de um programa de computador. O programa é escrito em uma linguagem de programação, embora seja possível, com alguma dificuldade, o escrever diretamente em linguagem de máquina. Diferentes partes de um programa podem ser escritas em diferentes linguagens.
          </Paragraph>
          <Paragraph italic={true}>
            Diferentes linguagens de programação funcionam de diferentes modos. Por esse motivo, os programadores podem criar programas muito diferentes para diferentes linguagens; muito embora, teoricamente, a maioria das linguagens possa ser usada para criar qualquer programa.
          </Paragraph>
          <Paragraph italic={true}>
            Há várias décadas se debate se a programação é mais semelhante a uma arte (Donald Knuth), a uma ciência, à matemática (Edsger Dijkstra), à engenharia (David Parnas), ou se é um campo completamente novo."
          </Paragraph>
        </CitationBlock>
        <Paragraph>
          Os profissionais da área são conhecidos como programadores ou engenheiros de software, a principal habilidade de um programador é a de resolução de problemas, essencialmente falando, um bom programador é medido não apenas pelo seu conhecimento técnico, mas majoritariamente pela sua habilidade de compreensão e resolução de um problema.
        </Paragraph>
        <Paragraph>
          Para atingir tais objetivos, nós os programadores usamos ferramentas como as linguagens de programação, os editores de código, frameworks, entre outros
        </Paragraph>
      </div>
    </div>
  )
}

function ClassChapter2(props: ClassChapterProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div className={vars.textSizesLG}>
      <h1 id="3" ref={refsLink[2]} className={vars.textSizes2XL + 'font-bebasNeue mb-4'}>
        Linguagens de programação e suas classificações
      </h1>
      <div className="text-justify mb-8">
        <Paragraph>
          Linguagens de programação são uma serie de instruções dadas em à maquina em um arquivo comumente conhecido como "Código Fonte", elas possibilitam que o programador/engenheiro de software, transcreva suas ideias para a linguagem de maquina, criando assim o que chamamos de "software" ou "programa computacional".
        </Paragraph>
        <Paragraph>
          De acordo com a Wikipédia:
        </Paragraph>
        <CitationBlock>
          <Paragraph italic={true}>
          "A linguagem de programação é um método padronizado, formado por um conjunto de regras sintáticas e semânticas, de implementação de um código fonte - que pode ser compilado e transformado em um programa de computador, ou usado como script interpretado - que informará instruções de processamento ao computador. Permite que um programador especifique precisamente quais os dados que o computador irá atuar, como estes dados serão armazenados ou transmitidos e, quais ações devem ser tomadas de acordo com as circunstâncias. Linguagens de programação podem ser usadas para expressar algoritmos com precisão."
          </Paragraph>
          <Paragraph italic={true}>
          (...)
          </Paragraph>
          <Paragraph italic={true}>
          "Uma das principais metas das linguagens de programação é que programadores tenham uma maior produtividade, permitindo expressar suas intenções mais facilmente do que quando comparado com a linguagem que um computador entende nativamente (código de máquina). Assim, linguagens de programação são projetadas para adotar uma sintaxe de nível mais alto, que pode ser mais facilmente entendida por programadores humanos. Linguagens de programação são ferramentas importantes para que programadores e engenheiros de software possam escrever programas mais organizados e com maior rapidez."
          </Paragraph>
        </CitationBlock>
        <Paragraph>
          As linguagens podem ser classificadas de acordo com seus paradigmas, método de tradução, tipagem, nível, geração, entre outros, vale também ressaltar que uma linguagem pode ter mais de um tipo de classificação dentro de um mesmo campo.
        </Paragraph>
        <Paragraph>
        Uma pequena introdução aos conceitos mais comuns:
        </Paragraph>
        <UList>
          <ListItem>
            <Paragraph>Linguagem de Computação (Matriz): A matriz de uma linguagem define sua utilidade principal, são 3 tipos, Programação (Logica), Marcação (Documentação), Estilo (Design).</Paragraph>
            <UList>
              <ListItem>Programação (Logica): As linguagens de Programação são marcadas por funções e comandos, elas trabalham a logica de maquina, alguns exemplos são, Python e BASH.</ListItem>
              <ListItem>Marcação (Documentação): As Linguagens de Marcação são marcada pelo uso de marcadores de texto (ex: itálico, negrito, cabeçalhos, etc...), elas são mais usadas na criação de documentos, exemplos seriam MarkDown e HTML (HyperTextMarkupLanguage).</ListItem>
              <ListItem>Estilo (Design): As Linguagens de Estilo são marcadas pelo o uso de propriedades de aparência (ex: background-color, shadow, etc...), elas são usadas na estilização de sites e aplicativos, exemplos seriam CSS e SASS.</ListItem>
            </UList>
          </ListItem>
          <ListItem>
            <Paragraph>
              Paradigma: O paradigma de uma linguagem de programação define sua funcionalidade, especificidade, ou orientação, informalmente dizendo, o paradigma de uma linguagem é o equivalente a "uma serie de métodos, dogmas, regras e conceitos que guiam o código fonte"
            </Paragraph>
            <Paragraph>
              os 3 paradigmas mais comuns são:
            </Paragraph>
            <UList>
              <ListItem>Imperativa: as etapas são sequenciadas, normalmente de cima abaixo, e os comandos são imperativos, informalmente falando, são ordens que devem ser estritamente seguidas. Linguagens de scripting são os melhores exemplos para se descrever Imperatividade, um exemplo com a linguagem BASH:</ListItem>
              <CodeBlock darkLightSwitch={props.darkLightSwitch} language="bash">
                {CBlocks.bashCodeBlock01}
              </CodeBlock>
              <ListItem>Funcional: as etapas são divididas em blocos de código chamados funções e são executados de acordo com a sua chamada, ou seja, se a função X foi declarada na linha 38 de um programa e a função Y foi declarada na linha 85, sua execução independe da sequencia de declaração (é claro que, as funções não devem ser chamadas antes de suas devidas declarações), resultando em nós podendo chamar a função Y na linha 102 e função X na linha 103, um exemplo seria a linguagem de programação Go:</ListItem>
              <CodeBlock darkLightSwitch={props.darkLightSwitch} language="go">
                {CBlocks.goCodeBlock01}
              </CodeBlock>
              <Paragraph>
              Note a ordem de declaração e de chamada, declaramos a <CodeCite text="funcao_print_1"/> primeiro, e depois a <CodeCite text="funcao_print_2"/>, porém chamamos a <CodeCite text="funcao_print_2"/> antes da <CodeCite text="funcao_print_1"/>
              </Paragraph>
              <ListItem>Orientada a Objetos: este paradigma segue a interpretação de que os códigos devem ser divididos em objetos (classes), objetos são pequenos contêineres independentes entre si, a orientação a objetos é um campo de estudo deverás complexo, alguns dos seus conceitos como a Abstração e a Ação nos objetos costumam sempre confundir, você se percebem falando coisas como "o que é um cachorro?", "uma mensagem deveria se auto-mandar, ou ela deveria ser mandada por outra coisa?" e por ai vai. Alguns dos conceitos tratados pela orientação a objeto foram incorporados em outros paradigmas, como as classes. Uma das linguagens orientadas a objetos mais famosas é a Java, aqui um exemplo de código:</ListItem>
              <CodeBlock darkLightSwitch={props.darkLightSwitch} language="java">
                {CBlocks.javaCodeBlock01}
              </CodeBlock>
            </UList>
          </ListItem>
          <ListItem>
          <Paragraph>
          Tipagem: ela define a estrutura de tipos, ela essencialmente define a "praticidade" e o "controle" que o programador tem com a linguagem de programação
          </Paragraph>
          <UList>
            <ListItem>Força: Define a volatilidade da variável na memória, pode ser divida em Fraca ou Forte:</ListItem>
            <UList>
              <ListItem>Fraca: Linguagens Fracamente Tipadas tem o tipo de suas variáveis mudadas na memória de acordo com a situação</ListItem>
              <ListItem>Forte: Linguagens Fortemente Tipadas tem seu tipo mantido na memória, uma vez que o mesmo já foi atribuído</ListItem>
            </UList>
            <ListItem>Estilo: Define a imperatividade da variável, pode ser divido em Estático e Dinâmico:</ListItem>
            <UList>
              <ListItem>Estático: Linguagens Estaticamente Tipadas, tem o tipo de suas variáveis definido em tempo de compilação, uma diferença nítida é o tipo da variável sendo especificado no código fonte (vide Java)</ListItem>
              <ListItem>Dinâmico: Linguagens Dinamicamente Tipadas, tem o tipo de suas variáveis definido em tempo de execução, uma diferença seria o tipo da variável sendo omitida no código fonte (vide Python)</ListItem>
              <Paragraph>
              Exemplo de Estilo:
              </Paragraph>
              <CodeBlock darkLightSwitch={props.darkLightSwitch} language="plaintext">
                {CBlocks.plainTextCodeBlock01}
              </CodeBlock>
            </UList>
            <ListItem>Execução: a execução define a forma como o programa é executado, basicamente ela define se podemos executar diretamente o código ou se devemos converter para um executavel, ela é dividida em Interpretadas e Compiladas</ListItem>
            <UList>
              <ListItem>Linguagens Interpretadas: As linguagens interpretadas tem seu codigo executado em tempo real através do interpretador, essencialmente, basta apenas escrever o codigo e executar, Um exemplo seria a linguagem Python</ListItem>
              <ListItem>Linguagens Compiladas: As linguagens compiladas tem seu codigo executado após a conversão para um executavel através do compilador, essencialmente após escrevermos o codigo devemos compilar (converter) para um executável (tambem chamado de binário) e enfim executar o programa, um exemplo seria a linguagem C</ListItem>
            </UList>
            <ListItem>Nível: o nível de uma linguagem de programação define sua "humanidade" e "completude", basicamente, quanto mais alto o nível, mais perto da linguagem humana o código fonte é, e mais funções e coisas a linguagem faz de forma "automática", elas podem ser dividas em Baixo e Alto nível</ListItem>
            <UList>
              <ListItem>Linguagens de Baixo Nível: As linguagens de baixo nível são extremamente próximas do código de maquina (também conhecido como binário), uma das linguagens de mais baixo nível ainda em uso seria a linguagem Assembly, ela trabalha movendo bits para registradores e locais diretos na memoria, um código executado direto no processador, eis aqui um programa que exibe a mensagem "Olá Mundo":</ListItem>
              <CodeBlock darkLightSwitch={props.darkLightSwitch} language="x86asm">
                {CBlocks.nasmCodeBlock01}
              </CodeBlock>
              <ListItem>Linguagens de Alto Nível: As linguagens de Alto Nível são bem próximas da linguagem humana, e as linguagens acabam por fazer muitas tarefas simples por nós em segundo plano, coisas como limpar a memória em uso, mover os bits para os registradores, entre outras coisas, Linguagens de Alto Nível são amplamente usadas devido a sua praticidade e facilidade de aprendizado e uso, eis aqui um exemplo de programa em Python que exibe a mensagem "Olá Mundo!":</ListItem>
              <CodeBlock darkLightSwitch={props.darkLightSwitch} language="python">
                {CBlocks.pythonCodeBlock01}
              </CodeBlock>
            </UList>
          </UList>
          </ListItem>
        </UList>
        <Paragraph>
          Essas classificações simplificam nossa compreensão das linguagens.
        </Paragraph>
      </div>
    </div>
  )
}

function TableOfContent() {
  return (
    <div className="w-80 font-bebasNeue border-2 border-ctp-text rounded-xl px-2 py-1 mr-2 fixed top-20 left-8 overscroll-contain overflow-auto scroll-smooth max-h-[81%] bg-ctp-base text-ctp-text">
      <h1 className={vars.textSizesLG + "text-center"}>Tabela de Conteudos</h1>
      <div>
        <ToCLink linkHashID="1" title="Introdução a Programação" level={0}/>
        <ToCLink linkHashID="2" title="O que é programação?" level={1}/>
        <ToCLink linkHashID="3" title="Linguagens de programação e suas classificações" level={1}/>
      </div>
    </div>
  )
}

function CapSumm(props: CapSummProps) {
  return (
    <CapsSumWrapper>
      <CapLink blocked={false} currentCap={props.currCap == 1}  title="Cap 01" link="/classes/pyless/1" />
      <CapLink blocked={false} currentCap={props.currCap == 2}  title="Cap 02" link="/classes/pyless/2" />
      <CapLink blocked={false} currentCap={props.currCap == 3}  title="Cap 03" link="/classes/pyless/3" />
      <CapLink blocked={false} currentCap={props.currCap == 4}  title="Cap 04" link="/classes/pyless/4" />
      <CapLink blocked={false} currentCap={props.currCap == 5}  title="Cap 05" link="/classes/pyless/5" />
      <CapLink blocked={true}  currentCap={props.currCap == 6}  title="Cap 06" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 7}  title="Cap 07" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 8}  title="Cap 08" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 9}  title="Cap 09" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 10} title="Cap 10" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 11} title="Cap 11" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 12} title="Cap 12" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 13} title="Cap 13" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 14} title="Cap 14" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 15} title="Cap 15" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 16} title="Cap 16" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 17} title="Cap 17" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 18} title="Cap 18" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 19} title="Cap 19" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 20} title="Cap 20" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 21} title="Cap 21" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 22} title="Cap 22" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 23} title="Cap 23" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 24} title="Cap 24" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 25} title="Cap 25" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 26} title="Cap 26" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 27} title="Cap 27" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 28} title="Cap 28" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 29} title="Cap 29" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 30} title="Cap 30" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 31} title="Cap 31" link="" />
    </CapsSumWrapper>
  )
}

function CapsSumPhone(props: CapsSumPhoneProps) {
  const refsFuncList = props.refsFuncList as any
  return (
    <div className={vars.textSizes3XL + ''}>
      <ToCLink  linkRefFunc={refsFuncList[0]} title="Introdução a Programação" level={0}/>
      <ToCLink  linkRefFunc={refsFuncList[1]} title="O que é programação?" level={1}/>
      <ToCLink  linkRefFunc={refsFuncList[2]} title="Linguagens de programação e suas classificações" level={1}/>
    </div>
  )
}

function CapsLinkPhone(props: CapSummProps) {
  return (
    <div>
      <CapLink blocked={false} currentCap={props.currCap == 1}  title="Cap 01" link="/classes/pyless/1" />
      <CapLink blocked={false} currentCap={props.currCap == 2}  title="Cap 02" link="/classes/pyless/2" />
      <CapLink blocked={false} currentCap={props.currCap == 3}  title="Cap 03" link="/classes/pyless/3" />
      <CapLink blocked={false} currentCap={props.currCap == 4}  title="Cap 04" link="/classes/pyless/4" />
      <CapLink blocked={false} currentCap={props.currCap == 5}  title="Cap 05" link="/classes/pyless/5" />
      <CapLink blocked={true}  currentCap={props.currCap == 6}  title="Cap 06" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 7}  title="Cap 07" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 8}  title="Cap 08" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 9}  title="Cap 09" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 10} title="Cap 10" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 11} title="Cap 11" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 12} title="Cap 12" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 13} title="Cap 13" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 14} title="Cap 14" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 15} title="Cap 15" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 16} title="Cap 16" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 17} title="Cap 17" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 18} title="Cap 18" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 19} title="Cap 19" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 20} title="Cap 20" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 21} title="Cap 21" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 22} title="Cap 22" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 23} title="Cap 23" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 24} title="Cap 24" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 25} title="Cap 25" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 26} title="Cap 26" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 27} title="Cap 27" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 28} title="Cap 28" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 29} title="Cap 29" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 30} title="Cap 30" link="" />
      <CapLink blocked={true}  currentCap={props.currCap == 31} title="Cap 31" link="" />
    </div>
  )
}


function ClassContent(props: ClassContentProps) {
  const refsLink = props.refLinksList as any;
  return (
    <div>
      <BackNextChapters nextChapLink="/classes/pyless/2" prevChapLink="/classes/pyless" />
      <h1 id="1" ref={refsLink[0]} className={vars.textSizes3XL + "font-bebasNeue mt-2 text-center mb-4 hidden md:block"}>{props.chapterTitle}</h1>
      <h1 id="1" ref={refsLink[0]} className={vars.textSizes4XL + 'font-bebasNeue text-center mb-4 mt-2 block md:hidden'}>{props.chapterTitle}</h1>
      <ClassChapter1 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <ClassChapter2 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <BackNextChapters nextChapLink="/classes/pyless/2" prevChapLink="/classes/pyless" />
    </div>
  )
}



function PageContent(props: PageContentProps) {
  return (
    <div className={(props.state ? "blur-sm" : "pt-0 md:pt-20 min-h-screen grow font-leagueGothic")}>

      <div className="px-8 relative hidden md:flex flex-row">
        <div className="w-80">
          <TableOfContent/>
        </div>
        <div className="w-0 grow px-6 text-justify">
          <ClassContent chapterTitle="Introdução a Programação" refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
        </div>
        <div className="w-20">
          <CapSumm currCap={1} />
        </div>
      </div>

      <div className='block md:hidden min-h-screen px-2'>
        <ClassContent chapterTitle="Introdução a Programação" refLinksList={props.refLinksList} />
      </div>

    </div>
  )

}


export function PyLess1(props: GenericStateProps) {
  const [ls, rfs] = refLinks(props.funcState)
  return (
    <div className='flex flex-col bg-ctp-base text-ctp-text'>
      <Header state={props.state} funcState={props.funcState} title="Intro" sums={<CapsSumPhone refsFuncList={rfs}/>} caps={<CapsLinkPhone currCap={1}/>} themeFunc={props.themeFunc} themeState={props.darkLightSwitch} />
      <PageContent state={props.state} refLinksList={ls} darkLightSwitch={props.darkLightSwitch}/>
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
