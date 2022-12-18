import { Footer } from "../../../../../components/Footer/Footer"
import { Header } from "../../../../../components/Header/Header"
import { FooterWrapper } from "../../../../../components/Wrappers/FlowWrappers"
import { CapsSumWrapper, CapLink, BackNextChapters, genRefs, ToCLink } from "../../../../../utils/ComponentElements/ComponentElements"
import { handleClassProg } from "../../../../../utils/handleClassProgress/handleClassProgress"
import { CapsSumPhoneProps, CapSummProps, ClassChapterProps, ClassContentProps, ClassesIndexStateProps, GenericStateProps, PageContentProps } from "../../../../../utils/interfaces"
import { MainTitle } from "../../../../../utils/TextElements/TextElements"
import * as vars from '../../../../../utils/variables'


function refLinks(stateFunc?: any) {
  const [link1, ref1] = genRefs(stateFunc);
  const [link2, ref2] = genRefs(stateFunc);
  const [link3, ref3] = genRefs(stateFunc);

  const linksList = [link1, link2, link3];
  const refsList =  [ref1, ref2, ref3];
  return [linksList, refsList]
}


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
    <div className="w-80 max-w-sm font-bebasNeue border-2 border-ctp-text rounded-xl px-2 py-1 mr-2 fixed top-20 left-8 overscroll-contain overflow-auto scroll-smooth max-h-[80%] bg-ctp-base text-ctp-text">
      <h1 className={vars.textSizesLG2 + "text-center"}>Tabela de Conteudos</h1>
      <div>
        <ToCLink ToCID="1."   linkHashID="1" title="Introdução a Programação" level={0}/>
        <ToCLink ToCID="1.1." linkHashID="2" title="O que é programação?" level={1}/>
        <ToCLink ToCID="1.2." linkHashID="3" title="Linguagens de programação e suas classificações" level={1}/>
      </div>
    </div>
  )
}


function CapsSumPhone(props: CapsSumPhoneProps) {
  const refsFuncList = props.refsFuncList as any
  return (
    <div className={vars.textSizes2XL2 + 'font-leagueGothic'}>
      <ToCLink ToCID="1."   linkRefFunc={refsFuncList[0]} title="Introdução a Programação" level={0}/>
      <ToCLink ToCID="1.1." linkRefFunc={refsFuncList[1]} title="O que é programação?" level={1}/>
      <ToCLink ToCID="1.2." linkRefFunc={refsFuncList[2]} title="Linguagens de programação e suas classificações" level={1}/>
    </div>
  )
}

function CapSumm(props: CapSummProps) {
  return (
    <CapsSumWrapper>
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
      <MainTitle chapterTitle={props.chapterTitle} titleId="1" refLink={refsLink[0]} />
      <ClassChapter1 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <ClassChapter2 refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch}/>
      <BackNextChapters nextChapLink="/classes/pyless/4" prevChapLink="/classes/pyless/2" markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction}/>
    </div>
  )
}


function PageContent(props: PageContentProps) {
  return (
    <div className={(props.state ? "blur-sm" : '') + vars.pageContentBaseStyle}>
      <div className="px-8 relative hidden md:flex flex-row">
        <div className="w-80 max-w-sm">
          <TableOfContent/>
        </div>
        <div className="w-0 grow px-6 text-justify">
          <ClassContent chapterTitle={props.capTitle} refLinksList={props.refLinksList} darkLightSwitch={props.darkLightSwitch} markAsCompletedFunction={props.markAsCompletedFunction} updateStateFunction={props.updateStateFunction} />
        </div>
        <div className="w-20 max-w-[6rem]">
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
        <Footer state={props.state} funcState={undefined} />
      </FooterWrapper>
    </div>
  )
}
