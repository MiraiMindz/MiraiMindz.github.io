import { MouseEventHandler } from "react";

export interface GenericStateProps {
  state?: boolean | any;
  funcState?: boolean | any;
  themeFunc?: Function | any;
  darkLightSwitch?: boolean | any,
}


export interface ArrowHeadProps {
  direction?: string | any;
}

export interface BackNextChaptersProps {
  prevChapLink?: string | any,
  nextChapLink?: string | any
}

export interface CapSummProps {
  currCap?: number | any;
}

export interface CapLinkProps {
  title?: string | any,
  blocked?: boolean | any,
  link?: string | any,
  currentCap?: boolean | any,
}

export interface ToCLinkProps {
  linkRefFunc?: string | any,
  linkHashID?: string | any,
  title: string | any,
  level?: number | any,
}

export interface ClassContentProps {
  chapterTitle?: string | any,
  refLinksList?: Array<any> | any,
  darkLightSwitch?: boolean | any,
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
}

export interface ParagraphProps {
  children: any | any,
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
}

export interface HeaderProps extends GenericStateProps {
  title: string | any
}

export interface HeaderClassProps extends HeaderProps {
  caps?: any | any,
  sums?: any | any,
  themeFunc?: Function | any,
}

export interface PCNavMenuProps {
  themeFunc?: MouseEventHandler | any,
}

export interface MobileMenuProps extends GenericStateProps {
  caps?: any,
  sums?: any,
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
}

export interface BaseCardProps {
  children: any,
  blocked: boolean | any
}
