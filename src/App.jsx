import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useLocalStorage } from './hooks/useLocalStorage';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkmode", false)
  const { pageLanguage, translation, languageClickHandler } = useContext(LanguageContext)

  function toggleDarkMode() {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('darkmode', false);
    } else {
      setIsDarkMode(true);
      localStorage.setItem('darkmode', true);
    }
  }

  return (
    <>
    <div className = {(isDarkMode ? "dark": "")}>
    <div className = "px-64 dark:bg-dm-color dark:text-blue-100 h-max">
     <header>
        <div className = "flex justify-end pb-8 pt-4 text-lg">
        <Form className = "mx-2">
          <FormGroup switch >
          <Label check>{isDarkMode ? translation.light: translation.dark} {translation.mode}
            <Input type="switch" 
            role="switch"
            onClick = {toggleDarkMode}
            checked={isDarkMode}/>
            </Label>
          </FormGroup>
        </Form>
        <p className = "mx-2">|</p>
        <a onClick = {languageClickHandler} className = "mx-2">{pageLanguage === "en" ? "TÜRKÇE'YE GEÇ": "SWITCH TO ENGLISH" }</a>
        </div>
        <div className = " text-xl flex justify-start">
          <p className = "dark:text-blue-100 dark:bg-indigo-600 text-2xl text-indigo-600 font-medium bg-blue-100 px-6 py-3 border-solid rounded-full rotate-12">B</p>
          <div className = "flex grow justify-end">
            <nav>
              <a className = "pr-12" href="">{translation.skills}</a>
              <a className = "pr-20 pl-12" href="">{translation.projects}</a>
              <a className = "dark:bg-blue-100 dark:border-blue-100 font-medium text-indigo-800 py-2 px-4 border-solid border-2 border-indigo-600 rounded-lg" href="">{translation.hireMe}</a>
            </nav>
          </div>
        </div>
      </header>
      <section className = "hero-section">
        <Hero/>
      </section>
      <section className = "skills-section">
        <Skills/>
      </section>
      <section className = "profile-section">
        <Profile/>
      </section>
      <section className = "projects-section">
        <Projects/>
      </section>
    </div>
    </div>
    </>
  )
}

export default App
