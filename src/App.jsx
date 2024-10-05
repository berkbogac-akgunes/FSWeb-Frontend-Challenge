import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkmode", false)
  console.log(isDarkMode)

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
    <div className = "px-32 dark:bg-dm-color dark:text-blue-100 h-screen">
     <header>
        <div className = "flex justify-end pb-8 pt-2">
        <Form className = "mx-2">
          <FormGroup switch>
          <Label check>{isDarkMode ? "LIGHT": "DARK"} MODE
            <Input type="switch" 
            role="switch"
            onClick = {toggleDarkMode}
            checked={isDarkMode}/>
            </Label>
          </FormGroup>
        </Form>
        <p className = "mx-2">|</p>
        <p className = "mx-2">Dil Seçeneği (Placeholder)</p>
        </div>
      </header>
      {/*Aşağısı Dark Mode Testi için, işi bittikten sonra silebilirsin*/}
  <div className = "my-12 flex flex-row">
    <div className = "mr-48">
        <h1 className="font-bold underline my-12 text-7xl ml-12">
          WELCOME TO MY PROJECT
        </h1>
        <p className="font-bold underline my-12 text-3xl ml-12">Project has been building...</p>
      </div>

      <div className = "ml-24 my-4">
        <p className = "mb-2">What a magnificent image</p>
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
