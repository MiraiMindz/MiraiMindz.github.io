import { NavLink } from 'react-router-dom'
import * as vars from '../../utils/variables';

export function Page404() {
  return (
    <div className='bg-polarnight-0 text-snowstorm-0'>
      <div className='bg-BG404 bg-25% md:bg-auto bg-repeat-space'>
      <div className='backdrop-blur-sm min-h-screen flex justify-center content-center self-center'>
        <div className={vars.textSizes2XL + 'font-leagueGothic filter-none self-center text-center'}>
          <h1>Página não encontrada</h1>
          <h1>Porque você não retorna para a <NavLink to="/" className={vars.linkStyle}>Home</NavLink>?</h1>
        </div>
      </div>
    </div>
    </div>
  )
}
