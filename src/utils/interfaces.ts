import { MouseEventHandler } from "react";

export interface GenericStateProps {
  state?: boolean | any;
  funcState?: boolean | any;
  themeFunc?: Function | any;
  darkLightSwitch?: boolean | any,
}

export interface PageNotFoundProps {
  darkLightSwitch?: boolean | any,
}

export interface ClassesIndexStateProps extends GenericStateProps {
  classProgressArray?: Array<number> | any;
  setClassArrs?: any,
}

export interface ClassMenuProps {
  classesArray?: Array<number>;
}

export interface PageClassMenuProps extends ClassMenuProps {
  state?: boolean;
}

export interface ArrowHeadProps {
  direction?: string | any;
}

export interface BackNextChaptersProps {
  prevChapLink?: string | any,
  nextChapLink?: string | any,
  markAsCompletedFunction?: any,
  updateStateFunction?: any,
}

export interface CapSummProps {
  currCap?: number | any;
  markAsCompletedFunction?: any,
  updateStateFunction?: any,
}

export interface CapLinkProps {
  title?: string | any,
  blocked?: boolean | any,
  link?: string | any,
  currentCap?: boolean | any,
  markAsCompletedFunction?: Function,
  updateStateFunction?: Function,
}

export interface ToCLinkProps {
  linkRefFunc?: string | any,
  linkHashID?: string | any,
  title: string | any,
  level?: number | any,
  ToCID?: string | any,
}

export interface ClassContentProps {
  chapterTitle?: string | any,
  refLinksList?: Array<any> | any,
  darkLightSwitch?: boolean | any,
  markAsCompletedFunction?: any,
  updateStateFunction?: any,
}

export interface ClassChapterProps {
  refLinksList?: Array<any> | any,
  darkLightSwitch?: boolean | any,
}

export interface CapsSumPhoneProps {
  refsFuncList?: Array<any> | any,
}

export interface PageContentProps {
  state?: boolean | any,
  refLinksList?: Array<any> | any,
  darkLightSwitch?: boolean | any,
  markAsCompletedFunction?: any,
  updateStateFunction?: any,
  cCap?: number | any,
  capTitle?: string | any,
}

export interface ParagraphProps {
  children?: any | any,
  italic?: boolean | any,
  styleClasses?: string | any,
}

export interface CitationBlockProps {
  children: any | any,
}

export interface CodeBlockProps {
  children?: any | any,
  language?: string | any,
  theme?: { [key: string]: React.CSSProperties } | any,
  darkLightSwitch?: boolean | any,
  answer?: string | any,
}

export interface HeaderProps extends GenericStateProps {
  title: string | any,
}

export interface HeaderClassProps extends HeaderProps {
  caps?: any,
  sums?: any,
  themeFunc?: Function | any,
  themeState?: boolean |  any,
  leftState?: boolean | any,
  classCompState?: Function | any,
}

export interface PCNavMenuProps {
  themeFunc?: MouseEventHandler | any,
  themeState?: boolean |  any,
  classCompState?: Function | any,
}

export interface MobileMenuProps extends GenericStateProps {
  caps?: any,
  sums?: any,
  leftFunc?: any,
  leftState?: boolean,
  classCompState?: Function | any,
}

export interface WrappersProps {
  children?: any;
  state?: boolean | any;
}

export interface MainWrapperProps extends WrappersProps {
  theme?: boolean | any;
}

export interface ChapterCardProps {
  blocked: boolean | any,
  state: number | any,
  title: string | any,
  chapter: number | any,
  description: string | any,
  link: string | any,
  userCompletedArray?: Array<number> | any,
}

export interface BaseCardProps {
  children: any,
  blocked: boolean | any
}

export interface TableProps {
  children?: any,
  styleClasses?: string | any,
}


export interface CourseCardProps {
  blocked?: boolean | any,
  courseState?: number | any,
  imgSrc?: string | any,
  imgAlt?: string | any,
  title?: string | any,
  introResume?: string | any,
  resume?: string | any,
  link?: string | any,
}
