import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  ContentWrapper,
  MainWrapper
} from './components/Wrappers/FlowWrappers'
import { About } from './pages/About/About'
import { Classes } from './pages/Classes/Classes'
import { PyLess4 } from './pages/Classes/PythonLessons/Classes/BaseOOP/BaseOOP'
import { PyLess5 } from './pages/Classes/PythonLessons/Classes/Errs/Errs'
import { PyLess2 } from './pages/Classes/PythonLessons/Classes/Funds1/Funds1'
import { PyLess3 } from './pages/Classes/PythonLessons/Classes/Funds2/Funds2'
import { PyLess1 } from './pages/Classes/PythonLessons/Classes/Intro/Intro'
import { PylessIndex } from './pages/Classes/PythonLessons/PylessIndex'
import { Page404 } from './pages/Error/Error404'
import { Home } from './pages/Home/Home'
import { TestePage } from './pages/Test/Test'
import './styles/main.css'
import './styles/user.css'

function App() {
  const [active, setActive] = useState<boolean>(false)
  function handleState() {
    setActive(!active)
    console.info('Hamburguer Button State: ' + active)
  }


  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  let themeState: boolean;

  const useThemeDetector = () => {
    const mqListener = ((e: { matches: boolean | ((prevState: boolean) => boolean) }) => {
        setIsDarkTheme(e.matches);
        e.matches ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
    });

    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return !isDarkTheme;
  }

  function handleTheme() {
    setIsDarkTheme(!isDarkTheme)
    !isDarkTheme ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  }

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeState = false
  } else {
    themeState = true
  }

  if (localStorage.theme == null) {
    useThemeDetector() ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark')
  } else {
    themeState = localStorage.theme == 'dark' ? false : true
  }

  
  return (
    <MainWrapper theme={themeState} state={active}>
      <ContentWrapper state={active}>
        <Routes>
          <Route
            index
            element={<Home themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
          />
          <Route
            path='about'
            element={<About themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
          />
          <Route
            path='classes'
            element={<Classes themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
          />
          <Route
              path='classes/pyless/'
              element={<PylessIndex themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState}/>} />
          <Route
                  path='classes/pyless/1'
                  element={<PyLess1 themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
                />
          <Route
              path='classes/pyless/2'
              element={<PyLess2 themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState}/>} />
          <Route
                  path='classes/pyless/3'
                  element={<PyLess3 themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
                />
          <Route
                  path='classes/pyless/4'
                  element={<PyLess4 themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
                />
          <Route
                  path='classes/pyless/5'
                  element={<PyLess5 themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
                />
          <Route
            path='teste'
            element={<TestePage themeFunc={handleTheme} state={active} funcState={handleState} darkLightSwitch={themeState} />}
          />
          <Route
            path='*'
            element={<Page404 />}
          />
        </Routes>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default App
