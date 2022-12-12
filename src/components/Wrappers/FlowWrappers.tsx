interface WrappersProps {
  children: any;
  state: any;
}

interface MainWrapperProps extends WrappersProps {
  theme?: boolean;
}

export function ContentWrapper(props: WrappersProps) {
  return <div className='min-h-screen transition-all'>{props.children}</div>
}

export function MainWrapper(props: MainWrapperProps) {
  return (
    <div className={props.theme ? 'ctp-latte' : 'ctp-mocha' + ' min-h-screen flex flex-col transition-all'}>
      {props.children}
    </div>
  )
}

export function FooterWrapper(props: WrappersProps) {
  return <div className={(props.state ? 'hidden ' : 'block ')}>{props.children}</div>
}
