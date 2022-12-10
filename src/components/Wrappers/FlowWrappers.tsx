interface WrappersProps {
  children: any;
  state: any;
}

export function ContentWrapper(props: WrappersProps) {
  return <div className='min-h-screen'>{props.children}</div>
}

export function MainWrapper(props: WrappersProps) {
  return (
    <div className='min-h-screen flex flex-col'>
      {props.children}
    </div>
  )
}

export function FooterWrapper(props: WrappersProps) {
  return <div className={(props.state ? 'hidden ' : 'block ')}>{props.children}</div>
}
