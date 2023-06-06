import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState('')
 
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
              <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode} key={new Date()} />
              <Alert alert={alert}/>
              <div className="container my-3">
                    <Routes>
                          <Route path="/about" element = {<About mode={mode} />}>
                            
                          </Route>
                          <Route path="/" element = {
                            <TextForm showAlert={showAlert} heading="Try Text Analyzer" mode={mode} />} >
                          </Route>
                    </Routes>
              </div>
    </Router>
    </> 
  );
}

export default App;
