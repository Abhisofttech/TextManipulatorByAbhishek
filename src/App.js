
import './App.css';
import React, { useState } from 'react'
import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {

      setAlert(null);

    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={
            <TextForm title="Convert your text to UPPER Case" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
          } />
        </Routes>
        <Routes>
          <Route path="/about" element={ <About mode={mode} /> } />
        </Routes>

      </Router>


    </>
  );
}

export default App;
