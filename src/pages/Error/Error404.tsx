import { NavLink } from 'react-router-dom'
import { PageNotFoundProps } from '../../utils/interfaces';
import * as vars from '../../utils/variables';

export function Page404(props: PageNotFoundProps) {
  return (
    <div className='bg-ctp-base text-ctp-text'>
      <div className={'bg-25% md:bg-auto bg-repeat-space ' + (props.darkLightSwitch ? 'bg-BG404Light' : 'bg-BG404')}>
        <div className='backdrop-blur-sm min-h-screen flex justify-center content-center self-center'>
          <div className={vars.textSizes2XL + 'font-leagueGothic filter-none self-center text-center'}>
            <h1>Página não encontrada</h1>
            <h1>Porque você não retorna para a página inicial <NavLink to="/" className={vars.linkStyle}>clicando aqui</NavLink>?</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
