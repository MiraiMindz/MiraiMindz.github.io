import { Footer } from "../../../../../components/Footer/Footer"
import { Header } from "../../../../../components/Header/Header"
import { FooterWrapper } from "../../../../../components/Wrappers/FlowWrappers"
import { CapsSumWrapper, CapLink, BackNextChapters } from "../../../../../utils/ComponentElements/ComponentElements"
import { CapsSumPhoneProps, CapSummProps, ClassChapterProps, ClassContentProps, GenericStateProps, PageContentProps } from "../../../../../utils/interfaces"
import * as vars from '../../../../../utils/variables'


function ClassChapter1(props: ClassChapterProps) {
  return (
    <div>

    </div>
  )
}

function ClassChapter2(props: ClassChapterProps) {
  return (
    <div>

    </div>
  )
}

function TableOfContent() {
  return (
    <div className="w-[20.25rem] font-bebasNeue border-2 rounded-xl px-2 py-1 mr-2 fixed top-16 left-8 overscroll-contain overflow-auto scroll-smooth max-h-[81%] bg-polarnight-0">
      <h1 className={vars.textSizesLG + "text-center"}>Tabela de Conteudos</h1>
      <div>

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
  return (
    <div className={vars.textSizes3XL + ''}>

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

  return (
    <div>
      <h1 id="1" className={vars.textSizes3XL + "font-bebasNeue mt-2 text-center mb-4 hidden md:block"}>{props.chapterTitle}</h1>
      <h1 id="1" className={vars.textSizes4XL + 'font-bebasNeue text-center mb-4 mt-2 block md:hidden'}>{props.chapterTitle}</h1>
      <ClassChapter1/>
      <ClassChapter2 />
      <BackNextChapters nextChapLink="" prevChapLink="/classes/pyless/4" />
    </div>
  )
}


function PageContent(props: PageContentProps) {
  return (
    <div className={(props.state ? "blur-sm" : "pt-0 md:pt-16 min-h-screen grow font-leagueGothic")}>

      <div className="px-8 relative hidden md:flex flex-row">
        <div className="w-[20.25rem]">
          <TableOfContent/>
        </div>
        <div className="w-0 grow px-2 text-justify">
          <ClassContent chapterTitle="Erros" refLinksList={props.refLinksList} />
        </div>
        <div className="w-20">
          <CapSumm currCap={5} />
        </div>
      </div>

      <div className='block md:hidden min-h-screen px-2'>
        <ClassContent chapterTitle="Erros" refLinksList={props.refLinksList} />
      </div>

    </div>
  )

}

export function PyLess5(props: GenericStateProps) {
  return (
    <div className='flex flex-col bg-polarnight-0 text-snowstorm-0'>
      <Header state={props.state} funcState={props.funcState} title="Erros" sums={<CapsSumPhone />} caps={<CapsLinkPhone currCap={5}/>} />
      <PageContent state={props.state} />
      <FooterWrapper state={props.state}>
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
